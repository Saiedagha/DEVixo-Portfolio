import React from 'react';
import { Lang } from './lib/i18n';
import { Home } from './pages/Home';
import { ServicesIndex, ServiceDetail } from './pages/Services';
import { Work, CaseStudy } from './pages/Work';
import { About, Technologies, FaqPage, Blog, BlogPost, Legal, NotFound } from './pages/Company';
import { Contact, ThankYou } from './pages/Contact';
import { Admin } from './pages/Admin';
import { services } from './data/services';
import { projects } from './data/projects';
import { posts } from './data/blog';

type R = { path: string; el: React.ReactElement; noSitemap?: boolean };

export const routes = (lang: Lang): R[] => [
  { path: '', el: <Home lang={lang} /> },
  { path: 'services', el: <ServicesIndex lang={lang} /> },
  ...services.map((s) => ({ path: `services/${s.slug}`, el: <ServiceDetail lang={lang} slug={s.slug} /> })),
  { path: 'work', el: <Work lang={lang} /> },
  ...projects.filter((p) => p.status === 'published').map((p) => ({ path: `work/${p.slug}`, el: <CaseStudy lang={lang} slug={p.slug} /> })),
  { path: 'about', el: <About lang={lang} /> },
  { path: 'technologies', el: <Technologies lang={lang} /> },
  { path: 'contact', el: <Contact lang={lang} /> },
  { path: 'contact/thank-you', el: <ThankYou lang={lang} />, noSitemap: true },
  { path: 'faq', el: <FaqPage lang={lang} /> },
  { path: 'blog', el: <Blog lang={lang} /> },
  ...posts.map((p) => ({ path: `blog/${p.slug}`, el: <BlogPost lang={lang} slug={p.slug} /> })),
  { path: 'privacy', el: <Legal lang={lang} kind="privacy" /> },
  { path: 'terms', el: <Legal lang={lang} kind="terms" /> },
];

export const extraPages = (): { file: string; el: React.ReactElement }[] => [
  { file: '404.html', el: <NotFound lang="en" /> },
  { file: 'ar/404.html', el: <NotFound lang="ar" /> },
  { file: 'admin/index.html', el: <Admin /> },
];

export const sitemapPaths = () => routes('en').filter((r) => !r.noSitemap).map((r) => r.path);
