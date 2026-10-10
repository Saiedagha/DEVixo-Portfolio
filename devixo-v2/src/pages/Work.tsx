import React from 'react';
import { Lang, t, href, ui } from '../lib/i18n';
import { Layout } from '../components/Layout';
import { Icon } from '../components/Icon';
import { Section, SectionHead, Btn, ProjectCard, ProjectShot, CtaBand, PageHero, Placeholder, TechChips } from '../components/ui';
import { projects, getProject, domainOf, Project } from '../data/projects';
import { getService } from '../data/services';
import { site } from '../data/site';
import { ProjectFilters } from './Home';
import { Browser, Phone } from '../components/visuals';
import { testimonialsFor } from '../data/testimonials';
import { TestimonialCard } from '../components/ui';
import { asset } from '../lib/i18n';

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export function Work({ lang }: { lang: Lang }) {
  const list = projects.filter((p) => p.status === 'published');
  const ordered = [...list.filter((p) => p.featured), ...list.filter((p) => !p.featured)];
  return (
    <Layout meta={{ lang, path: 'work', title: { en: 'Our Work — Shopify Stores & Website Portfolio', ar: 'أعمالنا — نماذج متاجر ومواقع من تنفيذ ديفيكسو' }, description: tr(lang, 'E-commerce stores, company websites and custom builds delivered by Devixo — with links to the live sites.', 'متاجر إلكترونية ومواقع شركات ومشاريع مبرمجة من تنفيذ ديفيكسو — مع روابط المواقع الحية.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.work, lang) }]}
        eyebrow={tr(lang, 'Portfolio', 'معرض الأعمال')}
        title={tr(lang, 'Stores, websites, and systems we’ve built', 'متاجر ومواقع وأنظمة قمنا ببنائها')}
        lead={tr(lang, 'Every project below is real and linked to its live site. Open a project to see what we did and how.', 'كل مشروع هنا حقيقي ومرتبط بموقعه الحي. افتح أي مشروع لترى ما قمنا به وكيف.')}
      />
      <Section labelledBy="all-title">
        <h2 id="all-title" className="sr-only">{tr(lang, 'All projects', 'كل المشاريع')}</h2>
        <div className="toolbar">
          <ProjectFilters lang={lang} target="all-projects" />
          <div className="toolbar-end">
            <label className="search">
              <Icon name="search" size={18} />
              <span className="sr-only">{t(ui.labels.search, lang)}</span>
              <input type="search" className="input" placeholder={t(ui.labels.search, lang)} data-search-for="all-projects" />
            </label>
            <p className="count" aria-live="polite"><strong data-count-for="all-projects">{ordered.length}</strong> {tr(lang, 'projects', 'مشروع')}</p>
          </div>
        </div>
        <div className="project-grid" id="all-projects">
          {ordered.map((p, i) => <ProjectCard key={p.slug} lang={lang} p={p} size={i < 2 ? 'lg' : 'md'} />)}
          <div className="filter-empty" hidden>
            <p>{t(ui.labels.noResults, lang)}</p>
            <button type="button" className="btn btn-secondary btn-sm" data-clear-filters>{t(ui.labels.clearFilters, lang)}</button>
          </div>
        </div>
      </Section>
      <CtaBand lang={lang} title={tr(lang, 'Want a project like these?', 'تريد مشروعًا مثل هذه؟')} />
    </Layout>
  );
}

export function CaseStudy({ lang, slug }: { lang: Lang; slug: string }) {
  const p = getProject(slug)!;
  const ph = site.showCmsPlaceholders;
  const sections: { id: string; title: string; body: React.ReactNode | null }[] = [
    { id: 'overview', title: tr(lang, 'Project overview', 'نظرة عامة'), body: <p>{t(p.summary, lang)}</p> },
    { id: 'context', title: tr(lang, 'Business context', 'سياق النشاط'), body: p.context ? <p>{t(p.context, lang)}</p> : null },
    { id: 'requirements', title: tr(lang, 'Client requirements', 'متطلبات العميل'), body: p.requirements ? <p>{t(p.requirements, lang)}</p> : null },
    { id: 'solution', title: tr(lang, 'Proposed solution', 'الحل المقترح'), body: p.solution ? <p>{t(p.solution, lang)}</p> : null },
    { id: 'scope', title: tr(lang, 'Scope of work', 'نطاق العمل'), body: p.scope ? <ul className="chips">{p.scope.map((s, i) => <li key={i} className="chip chip-strong">{t(s, lang)}</li>)}</ul> : null },
    { id: 'tech', title: tr(lang, 'Technologies & platform', 'التقنيات والمنصة'), body: p.platform || p.technologies.length ? <TechChips lang={lang} ids={p.technologies} /> : null },
    { id: 'screens', title: tr(lang, 'Selected screens', 'لقطات مختارة'), body: p.gallery.length ? (
      <div className="case-gallery">
        {p.gallery.map((g) => (
          <figure key={g.src} className={`case-shot-item is-${g.kind}`}>
            {g.kind === 'mobile' ? (
              <a href={asset(`img/projects/${g.src}`)} data-lightbox={`gallery-${p.slug}`} data-caption={`${p.title} — ${t(g.caption, lang)}`} className="lb-link"><Phone><img src={asset(`img/projects/${g.src}`)} alt={`${p.title} — ${t(g.caption, lang)}`} loading="lazy" className="phone-shot" /></Phone></a>
            ) : (
              <a href={asset(`img/projects/${g.src}`)} data-lightbox={`gallery-${p.slug}`} data-caption={`${p.title} — ${t(g.caption, lang)}`} className="lb-link"><Browser url={domainOf(p.url)}><img src={asset(`img/projects/${g.src}`)} alt={`${p.title} — ${t(g.caption, lang)}`} loading="lazy" /></Browser></a>
            )}
            <figcaption>{t(g.caption, lang)}</figcaption>
          </figure>
        ))}
      </div>
    ) : null },
    { id: 'implementation', title: tr(lang, 'Key implementation details', 'أبرز تفاصيل التنفيذ'), body: p.implementation ? <p>{t(p.implementation, lang)}</p> : null },
    { id: 'results', title: tr(lang, 'Results', 'النتائج'), body: p.results ? <p>{t(p.results, lang)}</p> : null },
    ...(testimonialsFor(p.slug).length ? [{ id: 'feedback', title: tr(lang, 'Client feedback', 'رأي العميل'), body: <div className="case-reviews">{testimonialsFor(p.slug).map((r) => <TestimonialCard key={r.name} lang={lang} item={r} />)}</div> }] : []),
  ];
  const visible = sections.filter((s) => s.body || ph);
  const related = projects.filter((x) => x.slug !== slug && x.categories.some((c) => p.categories.includes(c))).slice(0, 3);
  const similarHref = `${href(lang, 'contact')}?type=${p.categories.includes('ecommerce') ? 'ecommerce' : p.categories.includes('custom') ? 'custom' : 'website'}&project=${encodeURIComponent(p.title)}`;
  return (
    <Layout meta={{ lang, path: `work/${slug}`, title: `${p.title} — ${t(p.subtitle, lang)}`, description: t(p.summary, lang).slice(0, 300), ogImage: p.image ? `img/projects/${p.image}` : undefined, jsonLd: [{ '@type': 'CreativeWork', name: p.title, headline: `${p.title} — ${t(p.subtitle, 'en')}`, description: t(p.summary, lang), url: `https://www.devixo-eg.site/${lang}/work/${slug}/`, image: p.image ? `https://www.devixo-eg.site/img/projects/${p.image}` : undefined, creator: { '@id': 'https://www.devixo-eg.site/#organization' }, inLanguage: lang, about: t(p.industry, 'en') }] }}>
      <section className="page-hero case-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label={t(ui.nav.breadcrumb, lang)}>
            <ol>
              <li><a href={href(lang)}>{t(ui.nav.home, lang)}</a><Icon name="chevron" size={14} /></li>
              <li><a href={href(lang, 'work')}>{t(ui.nav.work, lang)}</a><Icon name="chevron" size={14} /></li>
              <li><span aria-current="page">{p.title}</span></li>
            </ol>
          </nav>
          <div className="page-hero-grid">
            <div className="page-hero-text">
              <div className="tags" style={{ marginBottom: 16 }}>
                <span className="tag">{t(p.industry, lang)}</span>
                {p.platform && <span className="tag tag-accent">{p.platform}</span>}
              </div>
              <h1 className="h1">{p.title}</h1>
              <p className="lead lead-lg">{t(p.subtitle, lang)}</p>
              <div className="actions" style={{ marginTop: 32 }}>
                <Btn href={p.url} icon="external" external>{t(ui.cta.visitSite, lang)}</Btn>
                <Btn href={similarHref} variant="secondary" icon="arrow">{t(ui.cta.similar, lang)}</Btn>
              </div>
            </div>
          </div>
          <dl className="case-meta">
            <div><dt>{t(ui.labels.industry, lang)}</dt><dd>{t(p.industry, lang)}{p.market ? ` · ${t(p.market, lang)}` : ''}</dd></div>
            <div><dt>{t(ui.labels.services, lang)}</dt><dd>{p.services.map((s) => t(getService(s).title, lang)).join(' · ')}</dd></div>
            <div><dt>{t(ui.labels.platform, lang)}</dt><dd>{p.platform || (p.technologies.includes('react') ? tr(lang, 'Custom build (React)', 'برمجة خاصة (React)') : p.technologies.includes('html') ? 'HTML · CSS · JavaScript' : '—')}</dd></div>
            <div><dt>{t(ui.labels.liveUrl, lang)}</dt><dd><a href={p.url} target="_blank" rel="noopener" dir="ltr">{domainOf(p.url)}</a></dd></div>
          </dl>
        </div>
      </section>
      <div className="container case-shot-wrap">
        <div className="case-shot">{p.image ? <a href={asset(`img/projects/${p.image}`)} data-lightbox={`gallery-${p.slug}`} data-caption={`${p.title} — ${lang === 'ar' ? 'الصفحة الرئيسية' : 'Homepage'}`} className="lb-link"><ProjectShot p={p} lang={lang} eager /></a> : <ProjectShot p={p} lang={lang} eager />}</div>
      </div>
      <Section labelledBy="cs-title">
        <h2 id="cs-title" className="sr-only">{tr(lang, 'Case study', 'دراسة الحالة')}</h2>
        <div className="case-layout">
          <nav className="toc" aria-label={t(ui.labels.onThisPage, lang)} data-toc>
            <p>{t(ui.labels.onThisPage, lang)}</p>
            <ol>{visible.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
          </nav>
          <div>
            {visible.map((s) => (
              <section key={s.id} id={s.id} className="case-section">
                <h2 className="h3">{s.title}</h2>
                {s.body || <Placeholder lang={lang} />}
              </section>
            ))}
            <section className="case-section" id="live">
              <h2 className="h3">{tr(lang, 'See it live', 'شاهد الموقع')}</h2>
              <a className="live-link" href={p.url} target="_blank" rel="noopener">
                <span dir="ltr">{domainOf(p.url)}</span>
                <Icon name="external" size={18} />
              </a>
            </section>
          </div>
        </div>
      </Section>
      {related.length > 0 && (
        <Section tone="soft" labelledBy="rel-title">
          <SectionHead id="rel-title" title={t(ui.labels.relatedProjects, lang)} action={<a className="link-arrow" href={href(lang, 'work')}>{t(ui.cta.allProjects, lang)} <Icon name="arrow" size={16} /></a>} />
          <div className="grid grid-3">{related.map((r) => <ProjectCard key={r.slug} lang={lang} p={r} />)}</div>
        </Section>
      )}
      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-mark" aria-hidden="true">{'</>'}</div>
            <div className="cta-text">
              <h2 id="cta-title" className="h2">{tr(lang, 'Want something similar?', 'تريد شيئًا مشابهًا؟')}</h2>
              <p>{tr(lang, `Tell us about your business and we’ll suggest how to approach a project like ${p.title}.`, `احكِ لنا عن نشاطك وسنقترح عليك طريقة تنفيذ مشروع مثل ${p.title}.`)}</p>
            </div>
            <div className="actions">
              <Btn href={similarHref} size="lg" icon="arrow">{t(ui.cta.similar, lang)}</Btn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
