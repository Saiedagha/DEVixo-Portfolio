import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { LANGS, Lang, BASE } from './lib/i18n';
import { routes, extraPages, sitemapPaths } from './routes';

const OUT = path.resolve(process.env.OUT_DIR || 'dist');
const PUBLIC = path.resolve('public');

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(PUBLIC, OUT, { recursive: true });

const write = (rel: string, el: React.ReactElement) => {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, '<!doctype html>' + renderToStaticMarkup(el));
};

let count = 0;
for (const lang of LANGS) {
  for (const r of routes(lang as Lang)) {
    write(path.join(lang, r.path, 'index.html'), r.el);
    count++;
  }
}

// Extra non-localized files
for (const r of extraPages()) {
  write(r.file, r.el);
  count++;
}

// Root: always open the English site
fs.writeFileSync(
  path.join(OUT, 'index.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>DEVixo</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://www.devixo-eg.site/en/">
<link rel="alternate" hreflang="en" href="https://www.devixo-eg.site/en/">
<link rel="alternate" hreflang="ar" href="https://www.devixo-eg.site/ar/">
<script>location.replace('${BASE}/en/');</script>
<meta http-equiv="refresh" content="0; url=${BASE}/en/"></head><body><a href="${BASE}/en/">English</a> · <a href="${BASE}/ar/">العربية</a></body></html>`,
);

// Sitemap + robots
// ---------------------------------------------------------------------------
// Plain sitemaps.org protocol (no extra namespaces). Each page is read back from
// the build output so the sitemap only lists what is actually served:
//  - <loc> comes from the page's own <link rel="canonical">
//  - pages with a robots "noindex" meta are skipped
//  - <lastmod> is the date the page's rendered HTML last changed, tracked in
//    sitemap-lastmod.json by content hash (not the build date)
const SITE = 'https://www.devixo-eg.site';
const MANIFEST = path.resolve('sitemap-lastmod.json');
const manifest: Record<string, { hash: string; lastmod: string }> = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
const today = new Date().toISOString().slice(0, 10);
const xmlEscape = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const priorityFor = (p: string) => (p === '' ? '1.0' : p === 'services' || p.startsWith('services/') ? '0.9' : p === 'work' || p === 'contact' ? '0.8' : p.startsWith('work/') ? '0.7' : p === 'privacy' || p === 'terms' ? '0.3' : '0.6');
const entries: { loc: string; lastmod: string; priority: string }[] = [];
const seen = new Set<string>();
for (const p of sitemapPaths()) {
  for (const l of LANGS) {
    const file = path.join(OUT, l, p, 'index.html');
    if (!fs.existsSync(file)) throw new Error(`Sitemap: missing page ${file}`);
    const html = fs.readFileSync(file, 'utf8');
    if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const expected = `${SITE}/${l}/${p ? p + '/' : ''}`;
    if (!canonical || canonical !== expected) throw new Error(`Sitemap: canonical mismatch for ${expected} (${canonical})`);
    if (seen.has(canonical)) throw new Error(`Sitemap: duplicate ${canonical}`);
    seen.add(canonical);
    const hash = crypto.createHash('sha256').update(html).digest('hex');
    const prev = manifest[canonical];
    const lastmod = prev && prev.hash === hash ? prev.lastmod : today;
    manifest[canonical] = { hash, lastmod };
    entries.push({ loc: canonical, lastmod, priority: priorityFor(p) });
  }
}
for (const k of Object.keys(manifest)) if (!seen.has(k)) delete manifest[k];
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.map((e) => `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${e.priority}</priority>\n  </url>\n`).join('') +
  '</urlset>\n';
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);
console.log(`Sitemap: ${entries.length} URLs`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nDisallow: /admin/\nSitemap: https://www.devixo-eg.site/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`Built ${count} pages → ${OUT}`);
