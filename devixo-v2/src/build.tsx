import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
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

// Root: send visitors to their language
fs.writeFileSync(
  path.join(OUT, 'index.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>DEVixo</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://www.devixo-eg.site/en/">
<link rel="alternate" hreflang="en" href="https://www.devixo-eg.site/en/">
<link rel="alternate" hreflang="ar" href="https://www.devixo-eg.site/ar/">
<script>var l=(navigator.languages||[navigator.language||'en']).join(',').toLowerCase();location.replace('${BASE}/'+(/^ar|,ar/.test(l)?'ar':'en')+'/');</script>
<meta http-equiv="refresh" content="0; url=${BASE}/en/"></head><body><a href="${BASE}/en/">English</a> · <a href="${BASE}/ar/">العربية</a></body></html>`,
);

// Sitemap + robots
const urls = sitemapPaths()
  .flatMap((p) => LANGS.map((l) => `https://www.devixo-eg.site/${l}/${p ? p + '/' : ''}`))
  .map((u) => `<url><loc>${u}</loc></url>`)
  .join('');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nDisallow: /admin/\nSitemap: https://www.devixo-eg.site/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`Built ${count} pages → ${OUT}`);
