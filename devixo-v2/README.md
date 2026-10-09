# DEVixo — website v2

Bilingual (English / Arabic RTL), responsive, CMS-ready website for DEVixo.
Built from React components and rendered to **static HTML** — no server needed.

## Run it

```bash
npm install
npm run build        # → dist/  (shows dashed "add from CMS" placeholders)
npm run build:prod   # → dist/  (hides empty case-study sections)
npm run preview      # serve dist/ locally
```

`dist/` is already built. On Vercel, the `vercel.json` at the repository root builds this folder automatically — keep the project's Root Directory empty.
To serve from a sub-folder, build with `BASE_PATH=/sub-folder npm run build`.

## Structure

```
src/
  data/          ← all content, EN + AR side by side (the future CMS collections)
    site.ts          contact details, socials, form endpoint, placeholder flag
    services.ts      8 services + website types, platforms, 16 business systems
    projects.ts      12 real portfolio projects (only verified facts filled in)
    technologies.ts  stack, grouped by category, with core/supported level
    faqs.ts, blog.ts
  lib/i18n.ts    ← UI strings, href()/t() helpers, /en/ + /ar/ routing
  components/    ← Layout (header, mega menu, drawer, footer), ui, visuals, Icon
  pages/         ← Home, Services, ServiceDetail, Work, CaseStudy, About,
                   Technologies, Contact, FAQ, Blog, Post, Legal, 404, Admin
  routes.tsx     ← every page and its URL
public/          ← css/styles.css (design system), js/main.js, images
```

## Routes

`/en/…` and `/ar/…` mirror each other: home, services (+8 detail pages), work (+12 case studies),
about, technologies, contact (+thank-you), faq, blog (+3 articles), privacy, terms. Plus `/404.html`,
`/ar/404.html`, `/admin/` (CMS dashboard concept, noindex), `sitemap.xml`, `robots.txt`.

## Before going live — please review

- **Founder name/bio** (`src/pages/Company.tsx`, About): uses "Saied Agha" — confirm spelling and add a portrait.
- **Technology levels** (`src/data/technologies.ts`): `core` vs `supported` is a starting point; adjust to real experience.
- **Platform levels** (`src/data/services.ts` → `platforms`): only Shopify is marked primary.
- **Business email**: `site.email` is `null`, so email is hidden everywhere until you add one.
- **Screenshots**: 7 projects have no screenshot yet (placeholder frames). Add WebP files to `public/img/projects/` and set `image`.
- **Case studies**: context/requirements/solution/results are empty on purpose — only fill with confirmed facts.
- **Testimonials**: none are shown; slots are clearly marked until a client approves a review.
- **Privacy & Terms** are drafts — have them reviewed.

## Contact form

No backend yet. The form validates, then hands the request to WhatsApp as a pre-filled message.
Set `site.formEndpoint` (Formspree, a Next.js route handler, a Supabase edge function…) and it will
POST the form there and redirect to `/contact/thank-you/` instead.

## Moving to Next.js + a CMS later

Components are plain React and content is plain typed data, so they move directly into a Next.js
App Router project (`app/[lang]/…`). Replace the files in `src/data/` with CMS queries using the same
shapes (`Project`, `Service`, `Tech`, `Faq`, `Post` — each field has `{ en, ar }`). The `/admin/`
page shows the intended editing workflows for that CMS.
