import React from 'react';
import { Lang, L, t, href, asset, ui } from '../lib/i18n';
import { Icon } from './Icon';
import { Service } from '../data/services';
import { Project, domainOf, projectCategories } from '../data/projects';
import { Faq } from '../data/faqs';
import { waLink, site } from '../data/site';
import { getTech } from '../data/technologies';
import { Testimonial } from '../data/testimonials';
import { getProject } from '../data/projects';

type C = { children?: React.ReactNode };

export function Section({ id, tone = 'white', className = '', children, labelledBy }: C & { id?: string; tone?: 'white' | 'soft' | 'dark'; className?: string; labelledBy?: string }) {
  return (
    <section id={id} className={`section tone-${tone} ${className}`} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, num }: C & { num?: string }) {
  return (
    <p className="eyebrow">
      {num && <span className="eyebrow-num">{num}</span>}
      {children}
    </p>
  );
}

export function SectionHead({ id, eyebrow, num, title, lead, action, center }: { id?: string; eyebrow?: string; num?: string; title: string; lead?: string; action?: React.ReactNode; center?: boolean }) {
  return (
    <div className={`section-head ${center ? 'is-center' : ''}`}>
      <div className="section-head-text">
        {eyebrow && <Eyebrow num={num}>{eyebrow}</Eyebrow>}
        <h2 id={id} className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {action && <div className="section-head-action">{action}</div>}
    </div>
  );
}

export function Btn({ href: url, children, variant = 'primary', size, icon, external, className = '' }: C & { href: string; variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'; size?: 'sm' | 'lg'; icon?: string; external?: boolean; className?: string }) {
  return (
    <a className={`btn btn-${variant} ${size ? 'btn-' + size : ''} ${className}`} href={url} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {icon && icon !== 'arrow' && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon === 'arrow' && <Icon name="arrow" size={18} />}
    </a>
  );
}

export function Breadcrumbs({ lang, items }: { lang: Lang; items: { label: string; path?: string }[] }) {
  const all = [{ label: t(ui.nav.home, lang), path: '' }, ...items];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.path !== undefined ? { item: site.domain + `/${lang}/${c.path ? c.path + '/' : ''}` } : {}) })),
  };
  return (
    <nav className="breadcrumbs" aria-label={t(ui.nav.breadcrumb, lang)}>
      <ol>
        {all.map((c, i) => (
          <li key={i}>
            {c.path !== undefined && i < all.length - 1 ? <a href={href(lang, c.path)}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
            {i < all.length - 1 && <Icon name="chevron" size={14} />}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}

export function PageHero({ lang, crumbs, eyebrow, title, lead, actions, visual, className = '' }: { lang: Lang; crumbs?: { label: string; path?: string }[]; eyebrow?: string; title: string; lead?: string; actions?: React.ReactNode; visual?: React.ReactNode; className?: string }) {
  return (
    <section className={`page-hero ${visual ? 'has-visual' : ''} ${className}`}>
      <div className="container">
        {crumbs && <Breadcrumbs lang={lang} items={crumbs} />}
        <div className="page-hero-grid">
          <div className="page-hero-text">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="h1">{title}</h1>
            {lead && <p className="lead lead-lg">{lead}</p>}
            {actions && <div className="actions">{actions}</div>}
          </div>
          {visual && <div className="page-hero-visual">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ lang, s, num }: { lang: Lang; s: Service; num?: string }) {
  return (
    <article className="card service-card reveal">
      <div className="service-card-top">
        <span className="icon-tile"><Icon name={s.icon} size={22} /></span>
        {num && <span className="mono muted">{num}</span>}
      </div>
      <h3 className="h3">
        <a className="stretched" href={href(lang, `services/${s.slug}`)}>{t(s.title, lang)}</a>
      </h3>
      <p>{t(s.short, lang)}</p>
      <ul className="check-list">
        {s.capabilities.map((c, i) => (
          <li key={i}><Icon name="check" size={16} /> {t(c, lang)}</li>
        ))}
      </ul>
      <span className="link-arrow" aria-hidden="true">{t(ui.cta.learnMore, lang)} <Icon name="arrow" size={16} /></span>
    </article>
  );
}

/** Project screenshot in a browser frame, or a clearly-labelled placeholder. */
export function ProjectShot({ p, lang, eager }: { p: Project; lang: Lang; eager?: boolean }) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <span className="dots"><i></i><i></i><i></i></span>
        <span className="browser-url" dir="ltr">{domainOf(p.url)}</span>
      </div>
      <div className="browser-view">
        {p.image ? (
          <img src={asset(`img/projects/${p.image}`)} alt={lang === 'ar' ? `الصفحة الرئيسية لموقع ${p.title} — ${p.subtitle.ar}` : `${p.title} homepage — ${p.subtitle.en}`} width={1200} height={750} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        ) : (
          <div className="shot-placeholder" style={{ ['--ph' as any]: p.accent }}>
            <span className="shot-name">{p.title}</span>
            <span className="shot-note"><Icon name="image" size={14} /> {t(ui.labels.screenshotSoon, lang)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({ lang, p, size = 'md' }: { lang: Lang; p: Project; size?: 'lg' | 'md' }) {
  const cats = p.categories.map((c) => t(projectCategories.find((x) => x.id === c)!.label, lang));
  return (
    <article className={`card project-card size-${size} reveal`} data-cats={p.categories.join(' ')} data-search={`${p.title} ${t(p.subtitle, 'en')} ${t(p.subtitle, 'ar')} ${t(p.industry, 'en')} ${t(p.industry, 'ar')} ${p.platform || ''}`.toLowerCase()}>
      <ProjectShot p={p} lang={lang} />
      <div className="project-body">
        <div className="tags">
          <span className="tag">{t(p.industry, lang)}</span>
          {p.platform && <span className="tag tag-accent">{p.platform}</span>}
          {!p.platform && cats.slice(0, 1).map((c) => <span key={c} className="tag tag-soft">{c}</span>)}
        </div>
        <h3 className="h3">
          <a className="stretched" href={href(lang, `work/${p.slug}`)}>{p.title}</a>
        </h3>
        <p className="muted">{t(p.subtitle, lang)}</p>
        {size === 'lg' && <p className="project-summary">{t(p.summary, lang)}</p>}
        <span className="link-arrow" aria-hidden="true">{t(ui.cta.viewProject, lang)} <Icon name="arrow" size={16} /></span>
      </div>
    </article>
  );
}

export function FaqList({ lang, items, name = 'faq' }: { lang: Lang; items: Faq[]; name?: string }) {
  return (
    <div className="faq-list">
      {items.map((f) => (
        <details key={f.id} className="faq-item" name={name} id={`q-${f.id}`}>
          <summary>
            <span>{t(f.q, lang)}</span>
            <span className="faq-icon" aria-hidden="true"><Icon name="plus" size={18} /></span>
          </summary>
          <div className="faq-answer"><p>{t(f.a, lang)}</p></div>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((f) => ({ '@type': 'Question', name: t(f.q, lang), acceptedAnswer: { '@type': 'Answer', text: t(f.a, lang) } })),
          }),
        }}
      />
    </div>
  );
}

export function CtaBand({ lang, title, text }: { lang: Lang; title?: string; text?: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-mark" aria-hidden="true">{'</>'}</div>
          <div className="cta-text">
            <h2 id="cta-title" className="h2">{title || (lang === 'ar' ? 'عندك مشروع في بالك؟' : 'Have a Project in Mind?')}</h2>
            <p>
              {text ||
                (lang === 'ar'
                  ? 'احكِ لنا ما تريد بناءه، وسنساعدك في تحديد الطريقة المناسبة والخطوات التالية.'
                  : "Tell us what you want to build. We'll help you identify the right approach and define the next steps.")}
            </p>
          </div>
          <div className="actions">
            <Btn href={href(lang, 'contact')} size="lg" icon="arrow">{t(ui.cta.start, lang)}</Btn>
            <Btn href={waLink()} variant="light" size="lg" icon="whatsapp" external>{t(ui.cta.whatsapp, lang)}</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export const processSteps: { title: L; text: L; icon: string }[] = [
  { icon: 'compass', title: { en: 'Discover', ar: 'الاستكشاف' }, text: { en: 'We learn about your business, your users, and what the project needs to achieve.', ar: 'نفهم نشاطك وعملاءك وما يجب أن يحققه المشروع.' } },
  { icon: 'clipboard', title: { en: 'Plan', ar: 'التخطيط' }, text: { en: 'We define the scope, features, platform, and technical approach in writing.', ar: 'نحدد نطاق العمل والمميزات والمنصة والطريقة التقنية كتابيًا.' } },
  { icon: 'penLine', title: { en: 'Design', ar: 'التصميم' }, text: { en: 'We design the interface and user flows, and review them with you before building.', ar: 'نصمم الواجهات ومسارات الاستخدام ونراجعها معك قبل البناء.' } },
  { icon: 'code', title: { en: 'Develop & Test', ar: 'التطوير والاختبار' }, text: { en: 'We build, integrate, and test on real devices, sharing progress as we go.', ar: 'نبني ونربط ونختبر على أجهزة حقيقية، ونشاركك التقدم أولًا بأول.' } },
  { icon: 'rocket', title: { en: 'Launch & Support', ar: 'الإطلاق والدعم' }, text: { en: 'We deploy, hand over access, and provide the agreed support after launch.', ar: 'ننشر المشروع ونسلّم الصلاحيات ونقدم الدعم المتفق عليه بعد الإطلاق.' } },
];

export function ProcessSteps({ lang }: { lang: Lang }) {
  return (
    <ol className="process">
      {processSteps.map((s, i) => (
        <li key={i} className="process-step reveal">
          <div className="process-marker">
            <span className="process-num mono">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="process-body">
            <span className="process-icon"><Icon name={s.icon} size={20} /></span>
            <h3 className="h4">{t(s.title, lang)}</h3>
            <p>{t(s.text, lang)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Dashed block marking content that must come from the CMS. */
export function Placeholder({ lang, label, children }: C & { lang: Lang; label?: string }) {
  if (!site.showCmsPlaceholders) return null;
  return (
    <div className="cms-placeholder" role="note">
      <Icon name="pencil" size={16} />
      <span>{label || t(ui.labels.cmsPlaceholder, lang)}</span>
      {children}
    </div>
  );
}

export function TechChips({ lang, ids }: { lang: Lang; ids: string[] }) {
  return (
    <ul className="chips">
      {ids.map((id) => getTech(id)).filter(Boolean).map((tch) => (
        <li key={tch!.id} className="chip">{tch!.name}</li>
      ))}
    </ul>
  );
}

const initials = (n: string) => n.replace(/[^\p{L}\s]/gu, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export function TestimonialCard({ lang, item }: { lang: Lang; item: Testimonial }) {
  const proj = item.project ? getProject(item.project) : undefined;
  return (
    <figure className="review-shot reveal">
      <a href={asset(`img/reviews/${item.image.src}`)} data-lightbox="reviews" data-caption={item.name + (item.company ? ` · ${item.company}` : '')} aria-label={lang === 'ar' ? `عرض توصية ${item.name} بالحجم الكامل` : `View ${item.name}’s recommendation full size`}>
      <img
        src={asset(`img/reviews/${item.image.src}`)}
        width={item.image.w}
        height={item.image.h}
        loading="lazy"
        decoding="async"
        alt={`${lang === 'ar' ? 'توصية' : 'Recommendation from'} ${item.name}: ${item.textEn && lang === 'en' ? item.textEn : item.text}`}
      />
      </a>
      <figcaption>
        <span><Icon name="facebook" size={14} /> <strong>{item.name}</strong>{item.company ? ` · ${item.company}` : ''}</span>
        {proj && <a href={href(lang, `work/${proj.slug}`)}>{proj.title} <Icon name="arrow" size={14} /></a>}
      </figcaption>
    </figure>
  );
}
