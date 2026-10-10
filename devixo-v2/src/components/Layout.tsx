import React from 'react';
import { Lang, t, href, asset, dir, ui, L } from '../lib/i18n';
import { site, waLink } from '../data/site';
import { services } from '../data/services';
import { Icon } from './Icon';

export type PageMeta = {
  lang: Lang;
  path: string; // language-neutral, e.g. "services/ui-ux-design"
  title: L | string;
  description: L | string;
  noindex?: boolean;
  bodyClass?: string;
  ogImage?: string;
  rawTitle?: boolean; // use title exactly (no ' | DEVixo' suffix)
  jsonLd?: object[];
};

const Logo = ({ lang, variant = 'light' }: { lang: Lang; variant?: 'light' | 'dark' }) => (
  <a className="logo" href={href(lang)} aria-label={lang === 'ar' ? 'ديفيكسو — الرئيسية' : 'DEVixo — home'}>
    <img src={asset(`img/brand/logo-${variant}.png`)} alt="DEVixo" width={158} height={28} />
  </a>
);

const navItems = (lang: Lang) => [
  { key: 'work', label: ui.nav.work, path: 'work' },
  { key: 'about', label: ui.nav.about, path: 'about' },
  { key: 'technologies', label: ui.nav.technologies, path: 'technologies' },
  { key: 'contact', label: ui.nav.contact, path: 'contact' },
];

const isActive = (current: string, path: string) => current === path || current.startsWith(path + '/');

function LangSwitch({ lang, path, className = '' }: { lang: Lang; path: string; className?: string }) {
  const other: Lang = lang === 'en' ? 'ar' : 'en';
  return (
    <a className={`lang-switch ${className}`} href={href(other, path)} hrefLang={other} lang={other} aria-label={t(ui.nav.langSwitchLabel, lang)} data-lang-switch>
      <Icon name="languages" size={18} />
      <span>{t(ui.nav.langName, lang)}</span>
    </a>
  );
}

function Header({ lang, path }: { lang: Lang; path: string }) {
  return (
    <>
    <header className="site-header" data-header>
      <div className="container header-inner">
        <Logo lang={lang} />
        <nav className="main-nav" aria-label={lang === 'ar' ? 'القائمة الرئيسية' : 'Main'}>
          <ul>
            <li>
              <a href={href(lang)} aria-current={path === '' ? 'page' : undefined}>{t(ui.nav.home, lang)}</a>
            </li>
            <li className="has-menu" data-dropdown>
              <button type="button" className="nav-trigger" aria-expanded="false" aria-controls="services-menu" data-active={isActive(path, 'services') || undefined}>
                {t(ui.nav.services, lang)} <Icon name="chevronDown" size={16} />
              </button>
              <div className="mega" id="services-menu" hidden>
                <div className="mega-grid">
                  {services.map((s) => (
                    <a key={s.slug} className="mega-item" href={href(lang, `services/${s.slug}`)}>
                      <span className="mega-icon"><Icon name={s.icon} /></span>
                      <span>
                        <strong>{t(s.title, lang)}</strong>
                        <small>{t(s.capabilities[0], lang)}</small>
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mega-foot">
                  <a href={href(lang, 'services')} className="link-arrow">{t(ui.nav.allServices, lang)} <Icon name="arrow" size={16} /></a>
                  <a href={waLink()} className="mega-wa" target="_blank" rel="noopener"><Icon name="whatsapp" size={16} /> {site.phone}</a>
                </div>
              </div>
            </li>
            {navItems(lang).map((n) => (
              <li key={n.key}>
                <a href={href(lang, n.path)} aria-current={isActive(path, n.path) ? 'page' : undefined}>{t(n.label, lang)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <LangSwitch lang={lang} path={path} className="hide-sm" />
          <a className="btn btn-primary btn-sm header-cta" href={href(lang, 'contact')}>{t(ui.cta.start, lang)}</a>
          <button type="button" className="menu-btn" aria-expanded="false" aria-controls="mobile-drawer" data-menu-open>
            <Icon name="menu" size={22} />
            <span className="sr-only">{t(ui.nav.openMenu, lang)}</span>
          </button>
        </div>
      </div>
    </header>
      <div className="drawer-backdrop" data-drawer-backdrop hidden></div>
      <div className="drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label={t(ui.nav.menu, lang)} hidden data-drawer>
        <div className="drawer-head">
          <Logo lang={lang} />
          <button type="button" className="menu-btn" data-menu-close>
            <Icon name="x" size={22} />
            <span className="sr-only">{t(ui.nav.close, lang)}</span>
          </button>
        </div>
        <nav className="drawer-nav" aria-label={t(ui.nav.menu, lang)}>
          <a href={href(lang)}>{t(ui.nav.home, lang)}</a>
          <details>
            <summary>{t(ui.nav.services, lang)} <Icon name="chevronDown" size={18} /></summary>
            <div className="drawer-sub">
              <a href={href(lang, 'services')}>{t(ui.nav.allServices, lang)}</a>
              {services.map((s) => (
                <a key={s.slug} href={href(lang, `services/${s.slug}`)}><Icon name={s.icon} size={18} /> {t(s.title, lang)}</a>
              ))}
            </div>
          </details>
          {navItems(lang).map((n) => (
            <a key={n.key} href={href(lang, n.path)}>{t(n.label, lang)}</a>
          ))}
          <a href={href(lang, 'faq')}>{t(ui.nav.faq, lang)}</a>
          <a href={href(lang, 'blog')}>{t(ui.nav.blog, lang)}</a>
        </nav>
        <div className="drawer-foot">
          <LangSwitch lang={lang} path={path} className="lang-block" />
          <a className="btn btn-primary btn-block" href={href(lang, 'contact')}>{t(ui.cta.start, lang)}</a>
          <a className="btn btn-ghost btn-block" href={waLink()} target="_blank" rel="noopener"><Icon name="whatsapp" size={18} /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}

function Footer({ lang, path }: { lang: Lang; path: string }) {
  const links = [
    [ui.nav.services, 'services'], [ui.nav.work, 'work'], [ui.nav.about, 'about'], [ui.nav.technologies, 'technologies'],
    [ui.nav.blog, 'blog'], [ui.nav.faq, 'faq'], [ui.nav.contact, 'contact'],
  ] as const;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo lang={lang} variant="dark" />
            <p>{t(site.tagline, lang)}</p>
          </div>
          <nav className="footer-nav" aria-label={lang === 'ar' ? 'روابط الموقع' : 'Footer'}>
            {links.map(([label, p]) => <a key={p} href={href(lang, p)}>{t(label, lang)}</a>)}
          </nav>
          <div className="footer-contact">
            <a href={waLink()} target="_blank" rel="noopener" className="footer-wa"><Icon name="whatsapp" size={18} /> <span dir="ltr">{site.phone}</span></a>
            {site.email && <a href={`mailto:${site.email}`}><Icon name="mail" size={18} /> {site.email}</a>}
            <div className="footer-social">
              {site.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name}>
                  <Icon name={s.name.toLowerCase()} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DEVixo. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          <div className="footer-legal">
            <a href={href(lang, 'privacy')}>{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href={href(lang, 'terms')}>{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
            <LangSwitch lang={lang} path={path} className="lang-footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

const ORG_ID = `${site.domain}/#organization`;
export const orgSchema = (lang: Lang) => ({
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: 'DEVixo',
  alternateName: ['Devixo', 'ديفيكسو'],
  url: `${site.domain}/${lang}/`,
  logo: `${site.domain}/img/brand/logo-light.png`,
  image: `${site.domain}/img/brand/og.png`,
  description: t(site.homeDescription, lang),
  telephone: site.phoneHref.replace('tel:', ''),
  ...(site.email ? { email: site.email } : {}),
  address: { '@type': 'PostalAddress', addressCountry: 'EG' },
  areaServed: site.areaServed.map((n) => ({ '@type': 'Country', name: n })),
  founder: { '@type': 'Person', name: 'Saied Agha', url: 'https://github.com/Saiedagha' },
  sameAs: site.socials.map((x) => x.url),
  knowsAbout: ['Website design', 'Web development', 'Shopify development', 'E-commerce development', 'Custom software development', 'ERP and CRM systems', 'UI/UX design', 'Mobile app development'],
  contactPoint: { '@type': 'ContactPoint', telephone: site.phoneHref.replace('tel:', ''), contactType: 'sales', availableLanguage: ['Arabic', 'English'] },
});
export const orgId = ORG_ID;

export function Layout({ meta, children }: { meta: PageMeta; children: React.ReactNode }) {
  const { lang, path } = meta;
  const title = t(meta.title as any, lang);
  const fullTitle = meta.rawTitle ? title : `${title} | DEVixo`;
  const desc = t(meta.description as any, lang);
  const url = (l: Lang) => `${site.domain}/${l}/${path ? path + '/' : ''}`;
  const orgRef = path === '' ? orgSchema(lang) : { '@type': 'Organization', '@id': ORG_ID, name: 'DEVixo', url: `${site.domain}/${lang}/` };
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        {meta.noindex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={url(lang)} />
        <link rel="alternate" hrefLang="en" href={url('en')} />
        <link rel="alternate" hrefLang="ar" href={url('ar')} />
        <link rel="alternate" hrefLang="x-default" href={url('en')} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DEVixo" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url(lang)} />
        <meta property="og:locale" content={lang === 'ar' ? 'ar_EG' : 'en_US'} />
        <meta property="og:image" content={site.domain + asset(meta.ogImage || 'img/brand/og.png')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={fullTitle} />
        <meta property="og:locale:alternate" content={lang === 'ar' ? 'en_US' : 'ar_EG'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={desc} />
        {site.verification.google && <meta name="google-site-verification" content={site.verification.google} />}
        {site.verification.bing && <meta name="msvalidate.01" content={site.verification.bing} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [orgRef, ...(meta.jsonLd || [])] }) }} />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" href={asset('img/brand/icon.png')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
        <link rel="stylesheet" href={asset('css/styles.css')} />
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
      </head>
      <body className={meta.bodyClass}>
        <a className="skip-link" href="#main">{t(ui.nav.skip, lang)}</a>
        <Header lang={lang} path={path} />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer lang={lang} path={path} />
        <a className="wa-float" href={waLink()} target="_blank" rel="noopener" aria-label={t(ui.cta.whatsapp, lang)}>
          <Icon name="whatsapp" size={24} />
        </a>
        <script src={asset('js/main.js')} defer></script>
      </body>
    </html>
  );
}
