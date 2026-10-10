import React from 'react';
import { Lang, t, href, ui } from '../lib/i18n';
import { Layout } from '../components/Layout';
import { Icon } from '../components/Icon';
import { Section, SectionHead, Btn, ServiceCard, ProjectCard, FaqList, CtaBand, ProcessSteps, TestimonialSlot, Eyebrow } from '../components/ui';
import { HeroComposition } from '../components/visuals';
import { services, getService, homeServiceCards, combinedCard } from '../data/services';
import { projects, projectCategories, getProject } from '../data/projects';
import { technologies, techCategories } from '../data/technologies';
import { faqsById, homeFaqIds } from '../data/faqs';
import { site } from '../data/site';

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export function ProjectFilters({ lang, target }: { lang: Lang; target: string }) {
  return (
    <div className="filters" role="group" aria-label={tr(lang, 'Filter projects by category', 'تصفية المشاريع حسب الفئة')} data-filter-group={target}>
      <button type="button" className="filter is-active" aria-pressed="true" data-filter="all">{t(ui.labels.all, lang)}</button>
      {projectCategories.map((c) => (
        <button key={c.id} type="button" className="filter" aria-pressed="false" data-filter={c.id}>{t(c.label, lang)}</button>
      ))}
    </div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const featured = ['zegimart', 'blue-tech-kuwait', 'towntech', 'glow-by-rose', 'eva-fashion'].map((s) => getProject(s)!);
  const why = [
    [tr(lang, 'Business first', 'العمل أولًا'), tr(lang, 'We start from what the project must achieve for your business — sales, leads, time saved — and choose the technology after.', 'نبدأ مما يجب أن يحققه المشروع لنشاطك — مبيعات أو عملاء أو وقت موفَّر — ثم نختار التقنية.')],
    [tr(lang, 'Custom when it’s needed', 'برمجة خاصة عند الحاجة'), tr(lang, 'When off-the-shelf tools force workarounds, we build exactly what your workflow needs.', 'عندما تجبرك الأدوات الجاهزة على التحايل، نبني ما يحتاجه سير عملك بالضبط.')],
    [tr(lang, 'Honest platform advice', 'نصيحة صادقة في اختيار المنصة'), tr(lang, 'If Shopify or another platform is the better fit, we’ll say so — even if it means a smaller project.', 'لو شوبيفاي أو منصة أخرى هي الأنسب، سنقول ذلك — حتى لو كان المشروع أصغر.')],
    [tr(lang, 'Responsive & maintainable', 'متجاوب وسهل الصيانة'), tr(lang, 'Clean, documented work that performs on every screen and is easy to extend later.', 'عمل نظيف وموثّق يعمل على كل الشاشات ويسهل تطويره لاحقًا.')],
    [tr(lang, 'Clear scope & communication', 'نطاق واضح وتواصل مباشر'), tr(lang, 'A written scope before we start, regular updates, and one direct line to the people doing the work.', 'نطاق عمل مكتوب قبل البدء، وتحديثات منتظمة، وتواصل مباشر مع من ينفّذ العمل.')],
    [tr(lang, 'Support after launch', 'دعم بعد الإطلاق'), tr(lang, 'Agreed post-launch support, then ongoing maintenance whenever you need it.', 'دعم متفق عليه بعد الإطلاق، ثم صيانة مستمرة وقت ما تحتاج.')],
  ];
  const stackCats = techCategories.filter((c) => ['ecommerce', 'frontend', 'backend', 'data', 'tooling'].includes(c.id));
  return (
    <Layout meta={{ lang, path: '', title: site.tagline, description: site.description, bodyClass: 'page-home' }}>
      {/* B — Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <Eyebrow>{tr(lang, 'Software development company', 'شركة تطوير برمجيات')}</Eyebrow>
            <h1 className="display">
              {lang === 'ar' ? (
                <>مواقع ومتاجر وبرمجيات مبنية <span className="hl">حول نشاطك.</span></>
              ) : (
                <>Websites, E‑commerce &amp; Software Built Around <span className="hl">Your Business.</span></>
              )}
            </h1>
            <p className="lead lead-lg">
              {tr(lang,
                'From high-performing online stores to custom web applications and business management systems, Devixo turns your ideas into practical digital solutions.',
                'من متاجر أونلاين عالية الأداء إلى تطبيقات ويب مخصصة وأنظمة إدارة أعمال، تحوّل ديفيكسو أفكارك إلى حلول رقمية عملية.')}
            </p>
            <div className="actions">
              <Btn href={href(lang, 'contact')} size="lg" icon="arrow">{t(ui.cta.start, lang)}</Btn>
              <Btn href={href(lang, 'work')} variant="secondary" size="lg">{t(ui.cta.explore, lang)}</Btn>
            </div>
            <p className="hero-note"><Icon name="whatsapp" size={16} /> {tr(lang, 'Talk directly with the developer building your project.', 'تواصل مباشرة مع المطوّر المسؤول عن مشروعك.')}</p>
          </div>
          <HeroComposition lang={lang} />
        </div>
      </section>

      {/* C — Capabilities strip */}
      <section className="cap-strip" aria-label={tr(lang, 'What we do', 'ما نقدمه')}>
        {(() => {
          const caps = [
            ['store', tr(lang, 'E-commerce Development', 'تطوير المتاجر الإلكترونية')],
            ['code', tr(lang, 'Custom Web Development', 'تطوير ويب مخصص')],
            ['layers', tr(lang, 'Business Systems', 'أنظمة الأعمال')],
            ['pen', tr(lang, 'UI/UX Design', 'تصميم الواجهات')],
            ['wrench', tr(lang, 'Ongoing Support', 'دعم مستمر')],
          ];
          const list = (hidden: boolean) => (
            <ul aria-hidden={hidden || undefined} className={hidden ? 'cap-dup' : undefined}>
              {caps.map(([ic, label]) => <li key={ic}><Icon name={ic} size={20} /> {label}</li>)}
            </ul>
          );
          return (
            <div className="container cap-marquee">
              <div className="cap-track">{list(false)}{list(true)}</div>
            </div>
          );
        })()}
      </section>

      {/* D — Services */}
      <Section id="services" labelledBy="services-title">
        <SectionHead
          id="services-title"
          num="01"
          eyebrow={tr(lang, 'Services', 'الخدمات')}
          title={tr(lang, 'Everything you need to build and run online', 'كل ما تحتاجه لتبني وتدير نشاطك أونلاين')}
          lead={tr(lang, 'Ready-made platforms when they fit, custom development when they don’t — planned, built, and supported by one team.', 'منصات جاهزة عندما تناسبك، وبرمجة خاصة عندما لا تناسبك — تخطيط وتنفيذ ودعم من فريق واحد.')}
          action={<a className="link-arrow" href={href(lang, 'services')}>{t(ui.cta.allServices, lang)} <Icon name="arrow" size={16} /></a>}
        />
        <div className="grid grid-3">
          {homeServiceCards.map((slug, i) => (
            <ServiceCard key={slug} lang={lang} s={getService(slug)} num={String(i + 1).padStart(2, '0')} />
          ))}
          <article className="card service-card service-card-combined reveal">
            <div className="service-card-top">
              <span className="icon-tile"><Icon name={combinedCard.icon} size={22} /></span>
              <span className="mono muted">06</span>
            </div>
            <h3 className="h3">{t(combinedCard.title, lang)}</h3>
            <p>{t(combinedCard.short, lang)}</p>
            <ul className="link-list">
              {combinedCard.links.map((slug) => {
                const s = getService(slug);
                return (
                  <li key={slug}>
                    <a href={href(lang, `services/${slug}`)}><Icon name={s.icon} size={16} /> {t(s.title, lang)} <Icon name="arrow" size={14} /></a>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </Section>

      {/* E — Featured projects */}
      <Section id="work" tone="soft" labelledBy="work-title">
        <SectionHead
          id="work-title"
          num="02"
          eyebrow={tr(lang, 'Our work', 'أعمالنا')}
          title={tr(lang, 'Real stores and websites, live today', 'متاجر ومواقع حقيقية تعمل الآن')}
          action={<ProjectFilters lang={lang} target="home-projects" />}
        />
        <div className="project-grid" id="home-projects" data-filter-target>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} lang={lang} p={p} size={i < 2 ? 'lg' : 'md'} />
          ))}
          <p className="filter-empty" hidden>{t(ui.labels.noResults, lang)}</p>
        </div>
        <div className="center-row">
          <Btn href={href(lang, 'work')} variant="secondary" icon="arrow">{t(ui.cta.allProjects, lang)}</Btn>
        </div>
      </Section>

      {/* F — Why Devixo */}
      <Section id="why" labelledBy="why-title" className="why">
        <div className="why-grid">
          <div className="why-intro">
            <Eyebrow num="03">{tr(lang, 'Why Devixo', 'لماذا ديفيكسو')}</Eyebrow>
            <h2 id="why-title" className="h2">{tr(lang, 'You talk to the people who build your project.', 'تتحدث مباشرة مع من يبني مشروعك.')}</h2>
            <p className="lead">{tr(lang, 'No account managers in between. Devixo is led hands-on by its developer, so decisions are made with the code in mind and nothing gets lost in translation.', 'لا وسطاء بينك وبين التنفيذ. ديفيكسو يقودها مطوّرها بشكل مباشر، فتُتخذ القرارات بفهم تقني ولا يضيع شيء في النقل.')}</p>
            <Btn href={href(lang, 'about')} variant="secondary" icon="arrow">{tr(lang, 'About Devixo', 'عن ديفيكسو')}</Btn>
          </div>
          <ol className="why-list">
            {why.map(([title, text], i) => (
              <li key={i} className="reveal">
                <span className="why-num mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="h4">{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* G — Technology stack */}
      <Section id="stack" tone="soft" labelledBy="stack-title">
        <SectionHead
          id="stack-title"
          num="04"
          eyebrow={tr(lang, 'Technology', 'التقنيات')}
          title={tr(lang, 'The right tool for each layer', 'الأداة المناسبة لكل طبقة')}
          lead={tr(lang, 'Platforms, languages, frameworks, and services — kept in their proper categories.', 'منصات ولغات وأطر عمل وخدمات — كلٌّ في فئته الصحيحة.')}
          action={<a className="link-arrow" href={href(lang, 'technologies')}>{tr(lang, 'Full tech stack', 'كل التقنيات')} <Icon name="arrow" size={16} /></a>}
        />
        <div className="stack-table">
          {stackCats.map((c) => (
            <div key={c.id} className="stack-row reveal">
              <div className="stack-label">
                <h3 className="h4">{t(c.title, lang)}</h3>
              </div>
              <ul className="chips">
                {technologies.filter((x) => x.category === c.id && x.level === 'core').concat(technologies.filter((x) => x.category === c.id && x.level !== 'core')).slice(0, 7).map((x) => (
                  <li key={x.id} className={`chip ${x.level === 'core' ? 'chip-strong' : ''}`}>{x.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="legend stack-legend"><span><i style={{ background: 'var(--accent)', borderRadius: '50%', width: 8, height: 8 }}></i>{tr(lang, 'Used regularly in delivered projects', 'نستخدمها بانتظام في مشاريعنا')}</span><span><i style={{ border: '1px solid var(--line-strong)', borderRadius: '50%', width: 8, height: 8 }}></i>{tr(lang, 'Available when the project calls for it', 'متاحة حسب احتياج المشروع')}</span></p>
      </Section>

      {/* H — Process */}
      <Section id="process" labelledBy="process-title">
        <SectionHead
          id="process-title"
          num="05"
          eyebrow={tr(lang, 'How we work', 'طريقة عملنا')}
          title={tr(lang, 'Five clear steps, from idea to launch', 'خمس خطوات واضحة من الفكرة إلى الإطلاق')}
          center
        />
        <ProcessSteps lang={lang} />
      </Section>

      {/* I — Testimonials */}
      <Section id="testimonials" tone="soft" labelledBy="testimonials-title">
        <SectionHead
          id="testimonials-title"
          num="06"
          eyebrow={tr(lang, 'Client feedback', 'آراء العملاء')}
          title={tr(lang, 'What clients say', 'ماذا يقول عملاؤنا')}
          lead={tr(lang, 'We only publish reviews that clients have approved. Verified reviews will appear here.', 'ننشر فقط الآراء التي يوافق عليها العملاء. ستظهر الآراء الموثّقة هنا.')}
        />
        <div className="grid grid-2">
          <TestimonialSlot lang={lang} />
          <TestimonialSlot lang={lang} />
        </div>
      </Section>

      {/* J — CTA */}
      <CtaBand lang={lang} />

      {/* K — FAQ */}
      <Section id="faq" labelledBy="faq-title">
        <div className="faq-layout">
          <div className="faq-intro">
            <Eyebrow num="07">{t(ui.nav.faq, lang)}</Eyebrow>
            <h2 id="faq-title" className="h2">{tr(lang, 'Questions we’re often asked', 'أسئلة تصلنا كثيرًا')}</h2>
            <p className="lead">{tr(lang, 'Can’t find your answer? Send us a message — we reply in Arabic or English.', 'لم تجد إجابتك؟ راسلنا — نرد بالعربية أو الإنجليزية.')}</p>
            <a className="link-arrow" href={href(lang, 'faq')}>{tr(lang, 'All questions', 'كل الأسئلة')} <Icon name="arrow" size={16} /></a>
          </div>
          <FaqList lang={lang} items={faqsById(homeFaqIds)} />
        </div>
      </Section>
    </Layout>
  );
}
