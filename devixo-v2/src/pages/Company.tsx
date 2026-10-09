import React from 'react';
import { Lang, t, href, ui, asset } from '../lib/i18n';
import { Layout } from '../components/Layout';
import { Icon } from '../components/Icon';
import { Section, SectionHead, Btn, CtaBand, PageHero, ProcessSteps, FaqList, Eyebrow, ServiceCard } from '../components/ui';
import { Cover } from '../components/visuals';
import { services, getService } from '../data/services';
import { technologies, techCategories } from '../data/technologies';
import { faqs, faqCategories } from '../data/faqs';
import { posts, getPost } from '../data/blog';
import { site, waLink } from '../data/site';

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

/* ------------------------------ About ------------------------------ */
export function About({ lang }: { lang: Lang }) {
  const principles = [
    [tr(lang, 'Understand before building', 'نفهم قبل أن نبني'), tr(lang, 'We ask about your customers, your team, and your numbers first. The technology comes after.', 'نسأل عن عملائك وفريقك وأرقامك أولًا، ثم تأتي التقنية.')],
    [tr(lang, 'The simplest thing that works', 'أبسط حل يؤدي المطلوب'), tr(lang, 'A hosted platform, a small custom piece, or a full system — whichever solves the problem with the least complexity.', 'منصة جاهزة أو جزء مخصص صغير أو نظام كامل — أيهم يحل المشكلة بأقل تعقيد.')],
    [tr(lang, 'Built to be maintained', 'مبني ليسهل صيانته'), tr(lang, 'Readable code, sensible structure, and documentation, so the project can grow without starting over.', 'كود مقروء وهيكل منطقي وتوثيق، لينمو المشروع بدون البدء من جديد.')],
    [tr(lang, 'Plain communication', 'تواصل واضح'), tr(lang, 'Clear scope, honest estimates, and updates you can understand — in Arabic or English.', 'نطاق واضح وتقديرات صادقة وتحديثات مفهومة — بالعربية أو الإنجليزية.')],
    [tr(lang, 'Mobile and RTL by default', 'الموبايل والعربية افتراضيًا'), tr(lang, 'Most of your visitors are on phones, and many read Arabic. We design for both from day one.', 'أغلب زوارك على الموبايل وكثير منهم يقرأ بالعربية، لذلك نصمم للاثنين من أول يوم.')],
    [tr(lang, 'Here after launch', 'موجودون بعد الإطلاق'), tr(lang, 'Agreed support after delivery, and ongoing improvements when you need them.', 'دعم متفق عليه بعد التسليم، وتحسينات مستمرة عند الحاجة.')],
  ];
  return (
    <Layout meta={{ lang, path: 'about', title: ui.nav.about, description: tr(lang, 'Devixo is a software development company led hands-on by its developer, building websites, stores and custom systems.', 'ديفيكسو شركة تطوير برمجيات يقودها مطوّرها بشكل مباشر، وتبني المواقع والمتاجر والأنظمة المخصصة.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.about, lang) }]}
        eyebrow={tr(lang, 'About Devixo', 'عن ديفيكسو')}
        title={tr(lang, 'A software company with a developer at the keyboard', 'شركة برمجيات يقودها مطوّر بنفسه')}
        lead={tr(lang, 'Devixo designs and develops websites, e-commerce stores, and custom software for businesses, entrepreneurs, and growing companies — with hands-on technical leadership on every project.', 'تصمم ديفيكسو وتطوّر المواقع والمتاجر الإلكترونية والبرمجيات المخصصة للشركات ورواد الأعمال والأنشطة النامية — بقيادة تقنية مباشرة في كل مشروع.')}
        actions={<Btn href={href(lang, 'contact')} icon="arrow">{t(ui.cta.discuss, lang)}</Btn>}
      />
      <Section labelledBy="what-title">
        <div className="split">
          <div className="split-text">
            <Eyebrow num="01">{tr(lang, 'What we do', 'ما نقوم به')}</Eyebrow>
            <h2 id="what-title" className="h2">{tr(lang, 'From a single landing page to a full business system', 'من صفحة هبوط واحدة إلى نظام أعمال متكامل')}</h2>
            <p className="lead">{tr(lang, 'We work across the full journey of a digital product: deciding what to build, designing it, developing it, connecting it to the tools you use, and keeping it running.', 'نعمل على رحلة المنتج الرقمي كاملة: تحديد ما يجب بناؤه، وتصميمه، وتطويره، وربطه بأدواتك، والحفاظ على تشغيله.')}</p>
          </div>
          <ul className="guide-list">
            {['ecommerce-development', 'website-development', 'custom-software-development', 'business-management-systems'].map((slug) => {
              const s = getService(slug);
              return (
                <li key={slug}>
                  <a href={href(lang, `services/${slug}`)}>
                    <span className="icon-tile"><Icon name={s.icon} size={20} /></span>
                    <span className="guide-text">{t(s.title, lang)}<small>{t(s.capabilities[0], lang)}</small></span>
                    <Icon name="arrow" size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
      <Section tone="soft" labelledBy="ph-title">
        <SectionHead id="ph-title" num="02" eyebrow={tr(lang, 'Our approach', 'منهجنا')} title={tr(lang, 'How we approach every project', 'كيف نتعامل مع كل مشروع')} />
        <div className="principles">
          {principles.map(([title, text], i) => (
            <div key={i} className="principle reveal">
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h4">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section labelledBy="founder-title">
        <div className="founder">
          <div className="portrait">
            <div className="portrait-inner">
              <Icon name="users" size={28} />
              <span>{tr(lang, 'Founder portrait', 'صورة المؤسس')}</span>
              <small>{tr(lang, 'Add a professional photo (4:5)', 'أضف صورة احترافية (4:5)')}</small>
            </div>
            <span className="portrait-tag">{'<founder />'}</span>
          </div>
          <div>
            <Eyebrow num="03">{tr(lang, 'Who you’ll work with', 'مع من ستعمل')}</Eyebrow>
            <h2 id="founder-title" className="h2">{tr(lang, 'Meet the founder', 'تعرّف على المؤسس')}</h2>
            <p className="lead" style={{ marginTop: 16 }}><strong>Saied Agha</strong> — {tr(lang, 'Founder & lead developer', 'المؤسس والمطوّر الرئيسي')}</p>
            <p style={{ color: 'var(--ink-2)' }}>{tr(lang,
              'Saied started Devixo to give businesses direct access to the developer building their product. He works across front-end and full-stack development — from Shopify stores and Arabic-first storefronts to custom admin dashboards — and stays involved from the first call to post-launch support.',
              'أسس سعيد ديفيكسو ليمنح الأنشطة تواصلًا مباشرًا مع المطوّر الذي يبني منتجها. يعمل في تطوير الواجهات والتطوير المتكامل — من متاجر شوبيفاي والمتاجر العربية إلى لوحات التحكم المخصصة — ويظل مشاركًا من أول مكالمة حتى الدعم بعد الإطلاق.')}</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Btn href={href(lang, 'work/developer-portfolio')} variant="secondary" icon="arrow">{tr(lang, 'Developer portfolio', 'موقع الأعمال الشخصي')}</Btn>
              <Btn href="https://github.com/Saiedagha" variant="ghost" icon="github" external>GitHub</Btn>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="soft" labelledBy="wf-title">
        <SectionHead id="wf-title" num="04" eyebrow={tr(lang, 'Workflow', 'طريقة العمل')} title={tr(lang, 'A typical project, step by step', 'خطوات المشروع المعتادة')} center />
        <ProcessSteps lang={lang} />
      </Section>
      <Section labelledBy="exp-title">
        <SectionHead id="exp-title" num="05" eyebrow={tr(lang, 'Expertise', 'مجالات الخبرة')} title={tr(lang, 'Where we’re strongest', 'أين نتميّز')} action={<a className="link-arrow" href={href(lang, 'technologies')}>{t(ui.nav.technologies, lang)} <Icon name="arrow" size={16} /></a>} />
        <ul className="chips chips-lg">
          {[tr(lang, 'Shopify stores & Liquid', 'متاجر شوبيفاي وLiquid'), tr(lang, 'Arabic RTL interfaces', 'واجهات عربية RTL'), tr(lang, 'Responsive front-end', 'واجهات متجاوبة'), 'React & Next.js', tr(lang, 'Admin dashboards', 'لوحات التحكم'), 'Supabase', tr(lang, 'Payment & shipping integrations', 'ربط الدفع والشحن'), tr(lang, 'Website maintenance', 'صيانة المواقع')].map((x) => <li key={x} className="chip chip-strong">{x}</li>)}
        </ul>
      </Section>
      <CtaBand lang={lang} />
    </Layout>
  );
}

/* --------------------------- Technologies -------------------------- */
export function Technologies({ lang }: { lang: Lang }) {
  return (
    <Layout meta={{ lang, path: 'technologies', title: ui.nav.technologies, description: tr(lang, 'The platforms, languages, frameworks, databases and tools Devixo uses — organized by what they do.', 'المنصات واللغات وأطر العمل وقواعد البيانات والأدوات التي تستخدمها ديفيكسو — مصنفة حسب وظيفتها.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.technologies, lang) }]}
        eyebrow={tr(lang, 'Tech stack', 'التقنيات')}
        title={tr(lang, 'Technology chosen for the job, not the trend', 'تقنيات مختارة حسب المهمة، لا حسب الموضة')}
        lead={tr(lang, 'Platforms, languages, frameworks, and services do different jobs. Here’s what we use, grouped by the role it plays in a project.', 'المنصات واللغات وأطر العمل والخدمات تؤدي وظائف مختلفة. هذه هي التقنيات التي نستخدمها، مصنفة حسب دورها في المشروع.')}
      />
      <Section labelledBy="stack-h">
        <h2 id="stack-h" className="sr-only">{tr(lang, 'Technologies by category', 'التقنيات حسب الفئة')}</h2>
        <p className="legend">
          <span><i style={{ background: 'var(--accent)', borderRadius: '50%' }}></i>{tr(lang, 'Used regularly in delivered projects', 'نستخدمها بانتظام في مشاريعنا')}</span>
          <span><i style={{ border: '1px solid var(--line-strong)', borderRadius: '50%' }}></i>{tr(lang, 'Available when the project calls for it', 'متاحة حسب احتياج المشروع')}</span>
        </p>
        {techCategories.map((c) => {
          const list = technologies.filter((x) => x.category === c.id);
          return (
            <div key={c.id} className="tech-section reveal" id={c.id}>
              <div>
                <h3 className="h3">{t(c.title, lang)}</h3>
                <p>{t(c.text, lang)}</p>
              </div>
              <ul className="tech-grid" role="list">
                {list.map((x) => (
                  <li key={x.id} className={`tech-card ${x.level === 'core' ? 'is-core' : ''}`}>
                    <strong>{x.name}</strong>
                    <small>{t(x.kind, lang)}</small>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Section>
      <Section tone="soft" labelledBy="how-h">
        <div className="split">
          <div className="split-text">
            <SectionHead id="how-h" eyebrow={tr(lang, 'How we choose', 'كيف نختار')} title={tr(lang, 'What decides the stack', 'ما الذي يحدد التقنيات')} />
            <ul className="bullet-list">
              <li><Icon name="check" size={16} /> {tr(lang, 'What the project must do, and how it will grow', 'ما يجب أن يؤديه المشروع وكيف سينمو')}</li>
              <li><Icon name="check" size={16} /> {tr(lang, 'Who will manage it day to day', 'من سيديره يوميًا')}</li>
              <li><Icon name="check" size={16} /> {tr(lang, 'Hosting and running costs', 'تكاليف الاستضافة والتشغيل')}</li>
              <li><Icon name="check" size={16} /> {tr(lang, 'The tools and services it must connect to', 'الأدوات والخدمات التي يجب أن يرتبط بها')}</li>
            </ul>
          </div>
          <div className="aside-card static">
            <h3 className="h3">{tr(lang, 'Already have a stack?', 'لديك تقنيات بالفعل؟')}</h3>
            <p>{tr(lang, 'We can work with your existing platform or codebase. Tell us what you use and we’ll confirm what we can take on.', 'نستطيع العمل على منصتك أو الكود الحالي. أخبرنا بما تستخدمه وسنؤكد ما يمكننا تنفيذه.')}</p>
            <Btn href={href(lang, 'contact')} icon="arrow">{t(ui.cta.discuss, lang)}</Btn>
          </div>
        </div>
      </Section>
      <CtaBand lang={lang} />
    </Layout>
  );
}

/* -------------------------------- FAQ ------------------------------ */
export function FaqPage({ lang }: { lang: Lang }) {
  return (
    <Layout meta={{ lang, path: 'faq', title: ui.nav.faq, description: tr(lang, 'Answers about Devixo projects, Shopify, timelines, ownership, hosting and support.', 'إجابات عن مشاريع ديفيكسو وشوبيفاي والمدد والملكية والاستضافة والدعم.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.faq, lang) }]}
        eyebrow={t(ui.nav.faq, lang)}
        title={tr(lang, 'Frequently asked questions', 'الأسئلة الشائعة')}
        lead={tr(lang, 'Straight answers about how we work. Still have a question? Message us on WhatsApp.', 'إجابات مباشرة عن طريقة عملنا. ما زال لديك سؤال؟ راسلنا على واتساب.')}
        actions={<Btn href={waLink()} variant="secondary" icon="whatsapp" external>{t(ui.cta.whatsapp, lang)}</Btn>}
      />
      <Section labelledBy="faq-h">
        <h2 id="faq-h" className="sr-only">{t(ui.nav.faq, lang)}</h2>
        <div className="faq-layout">
          <nav className="faq-nav" aria-label={tr(lang, 'Question categories', 'فئات الأسئلة')}>
            {faqCategories.map((c) => <a key={c.id} href={`#cat-${c.id}`}>{t(c.label, lang)}</a>)}
          </nav>
          <div>
            {faqCategories.map((c) => (
              <div key={c.id} className="faq-group" id={`cat-${c.id}`}>
                <h2 className="h3">{t(c.label, lang)}</h2>
                <FaqList lang={lang} name={`faq-${c.id}`} items={faqs.filter((f) => f.category === c.id).sort((a, b) => a.order - b.order)} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand lang={lang} />
    </Layout>
  );
}

/* -------------------------------- Blog ----------------------------- */
const fmtDate = (d: string, lang: Lang) => new Date(d).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function Blog({ lang }: { lang: Lang }) {
  return (
    <Layout meta={{ lang, path: 'blog', title: ui.nav.blog, description: tr(lang, 'Practical articles on e-commerce, websites and business systems.', 'مقالات عملية عن التجارة الإلكترونية والمواقع وأنظمة الأعمال.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.blog, lang) }]}
        eyebrow={t(ui.nav.blog, lang)}
        title={tr(lang, 'Notes on building for the web', 'ملاحظات عن البناء للويب')}
        lead={tr(lang, 'Practical guidance on stores, websites, and business software — written for business owners, not just developers.', 'إرشادات عملية عن المتاجر والمواقع وبرمجيات الأعمال — مكتوبة لأصحاب الأنشطة، لا للمطورين فقط.')}
      />
      <Section labelledBy="posts-h">
        <h2 id="posts-h" className="sr-only">{tr(lang, 'Articles', 'المقالات')}</h2>
        <div className="grid grid-3">
          {posts.map((p) => (
            <article key={p.slug} className="card post-card reveal">
              <Cover k={p.cover} />
              <div className="post-body">
                <div className="post-meta"><span className="tag tag-accent">{t(p.category, lang)}</span><span>{p.readMin} {t(ui.labels.minRead, lang)}</span></div>
                <h3 className="h3"><a className="stretched" href={href(lang, `blog/${p.slug}`)}>{t(p.title, lang)}</a></h3>
                <p className="muted">{t(p.excerpt, lang)}</p>
                <span className="link-arrow" aria-hidden="true">{t(ui.cta.readArticle, lang)} <Icon name="arrow" size={16} /></span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export function BlogPost({ lang, slug }: { lang: Lang; slug: string }) {
  const p = getPost(slug)!;
  const more = posts.filter((x) => x.slug !== slug);
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: t(p.title, lang), datePublished: p.date, author: { '@type': 'Organization', name: 'DEVixo' }, inLanguage: lang };
  return (
    <Layout meta={{ lang, path: `blog/${slug}`, title: p.title, description: p.excerpt }}>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label={t(ui.nav.breadcrumb, lang)}>
            <ol>
              <li><a href={href(lang)}>{t(ui.nav.home, lang)}</a><Icon name="chevron" size={14} /></li>
              <li><a href={href(lang, 'blog')}>{t(ui.nav.blog, lang)}</a><Icon name="chevron" size={14} /></li>
              <li><span aria-current="page">{t(p.title, lang)}</span></li>
            </ol>
          </nav>
          <div className="article-head" style={{ marginTop: 40 }}>
            <span className="tag tag-accent">{t(p.category, lang)}</span>
            <h1 className="h1" style={{ marginTop: 16 }}>{t(p.title, lang)}</h1>
            <p className="lead lead-lg" style={{ marginTop: 16 }}>{t(p.excerpt, lang)}</p>
            <div className="article-meta">
              <span>{t(ui.labels.by, lang)} {p.author}</span>
              <time dateTime={p.date}>{fmtDate(p.date, lang)}</time>
              <span>{p.readMin} {t(ui.labels.minRead, lang)}</span>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <div className="article-layout">
          <article className="prose">
            {p.body.map((b, i) =>
              b.type === 'p' ? <p key={i}>{t(b.text, lang)}</p> : b.type === 'h2' ? <h2 key={i}>{t(b.text, lang)}</h2> : <ul key={i}>{b.items.map((it, j) => <li key={j}>{t(it, lang)}</li>)}</ul>,
            )}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
          </article>
          <aside className="aside-card">
            <h2>{tr(lang, 'Planning a project?', 'تخطط لمشروع؟')}</h2>
            <p>{tr(lang, 'Tell us what you have in mind and we’ll suggest a sensible first step.', 'أخبرنا بما في ذهنك وسنقترح خطوة أولى منطقية.')}</p>
            <Btn href={href(lang, 'contact')} icon="arrow" className="btn-block">{t(ui.cta.start, lang)}</Btn>
          </aside>
        </div>
      </Section>
      <Section tone="soft" labelledBy="more-h">
        <SectionHead id="more-h" title={tr(lang, 'More articles', 'مقالات أخرى')} />
        <div className="grid grid-2">
          {more.map((m) => (
            <article key={m.slug} className="card post-card reveal">
              <div className="post-body">
                <div className="post-meta"><span className="tag tag-accent">{t(m.category, lang)}</span><span>{m.readMin} {t(ui.labels.minRead, lang)}</span></div>
                <h3 className="h3"><a className="stretched" href={href(lang, `blog/${m.slug}`)}>{t(m.title, lang)}</a></h3>
                <p className="muted">{t(m.excerpt, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

/* ------------------------------- Legal ----------------------------- */
type LegalDoc = { title: string; sections: [string, string][] };
const legal = (lang: Lang, kind: 'privacy' | 'terms'): LegalDoc => {
  const en = lang === 'en';
  if (kind === 'privacy')
    return {
      title: en ? 'Privacy Policy' : 'سياسة الخصوصية',
      sections: en
        ? [
            ['Who we are', 'This policy explains how DEVixo ("we") handles personal information collected through devixo-eg.site.'],
            ['What we collect', 'Information you send us through the project request form, WhatsApp, or email — such as your name, email address, phone number, business name, and project details.'],
            ['How we use it', 'Only to reply to your request, prepare proposals, and deliver agreed work. We do not sell or rent your information.'],
            ['Third-party services', 'Messages sent through WhatsApp are processed by WhatsApp under its own privacy policy. If analytics or a form service is added, this page will name it.'],
            ['Retention', 'We keep project correspondence for as long as needed to provide the service and meet legal obligations, then delete it.'],
            ['Your rights', 'You can ask us to access, correct, or delete your information at any time by contacting us on WhatsApp.'],
            ['Changes', 'We will update this page if our practices change and show the date of the latest update.'],
          ]
        : [
            ['من نحن', 'توضح هذه السياسة كيف تتعامل ديفيكسو ("نحن") مع البيانات الشخصية التي نجمعها عبر موقع devixo-eg.site.'],
            ['ما الذي نجمعه', 'البيانات التي ترسلها لنا عبر نموذج طلب المشروع أو واتساب أو البريد — مثل الاسم والبريد الإلكتروني ورقم الهاتف واسم النشاط وتفاصيل المشروع.'],
            ['كيف نستخدمها', 'فقط للرد على طلبك وإعداد العروض وتنفيذ العمل المتفق عليه. ولا نبيع بياناتك أو نؤجرها.'],
            ['خدمات الطرف الثالث', 'الرسائل المرسلة عبر واتساب تتم معالجتها بواسطة واتساب وفق سياسة الخصوصية الخاصة به. وإذا أضفنا أدوات تحليل أو خدمة نماذج فسنذكرها هنا.'],
            ['مدة الاحتفاظ', 'نحتفظ بمراسلات المشروع طوال المدة اللازمة لتقديم الخدمة والوفاء بالالتزامات القانونية، ثم نحذفها.'],
            ['حقوقك', 'يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها في أي وقت بالتواصل معنا عبر واتساب.'],
            ['التعديلات', 'سنحدّث هذه الصفحة إذا تغيرت ممارساتنا مع ذكر تاريخ آخر تحديث.'],
          ],
    };
  return {
    title: en ? 'Terms & Conditions' : 'الشروط والأحكام',
    sections: en
      ? [
          ['Scope', 'These terms cover use of devixo-eg.site. Each client project is governed by its own written scope and agreement, which takes priority over this page.'],
          ['Proposals and scope', 'Estimates and timelines are based on the agreed scope. Changes to scope are agreed in writing before work begins.'],
          ['Payments', 'Payment terms, milestones, and methods are set out in each project agreement.'],
          ['Ownership', 'On full payment, the client owns the delivered work and custom source code. Third-party themes, apps, plugins, and services remain subject to their own licenses.'],
          ['Client responsibilities', 'Clients provide content, approvals, and access to accounts needed to deliver the project, and are responsible for the legality of content they supply.'],
          ['Support', 'Post-launch support is provided for the period agreed in the project. Ongoing maintenance is offered separately.'],
          ['Liability', 'We deliver work with reasonable skill and care. We are not liable for outages or changes caused by third-party platforms or services.'],
          ['Contact', 'Questions about these terms can be sent to us on WhatsApp.'],
        ]
      : [
          ['النطاق', 'تنظم هذه الشروط استخدام موقع devixo-eg.site. ويخضع كل مشروع لنطاق عمل واتفاق مكتوب خاص به، وتكون له الأولوية على هذه الصفحة.'],
          ['العروض ونطاق العمل', 'التقديرات والمدد مبنية على نطاق العمل المتفق عليه، وأي تغيير فيه يتم الاتفاق عليه كتابيًا قبل التنفيذ.'],
          ['المدفوعات', 'شروط الدفع ومراحله وطرقه محددة في اتفاق كل مشروع.'],
          ['الملكية', 'عند سداد كامل المستحقات، يمتلك العميل العمل المسلَّم والكود المصدري المخصص. وتظل الثيمات والتطبيقات والإضافات والخدمات الخارجية خاضعة لتراخيصها.'],
          ['مسؤوليات العميل', 'يوفر العميل المحتوى والموافقات وصلاحيات الحسابات اللازمة لتنفيذ المشروع، ويكون مسؤولًا عن قانونية المحتوى الذي يقدمه.'],
          ['الدعم', 'يُقدَّم الدعم بعد الإطلاق للمدة المتفق عليها في المشروع، والصيانة المستمرة تُقدَّم بشكل منفصل.'],
          ['المسؤولية', 'نقدم العمل بمهارة وعناية معقولة، ولسنا مسؤولين عن الأعطال أو التغييرات الناتجة عن المنصات أو الخدمات الخارجية.'],
          ['التواصل', 'يمكن إرسال أي استفسار عن هذه الشروط عبر واتساب.'],
        ],
  };
};

export function Legal({ lang, kind }: { lang: Lang; kind: 'privacy' | 'terms' }) {
  const doc = legal(lang, kind);
  return (
    <Layout meta={{ lang, path: kind, title: doc.title, description: doc.title + ' — DEVixo' }}>
      <PageHero lang={lang} crumbs={[{ label: doc.title }]} title={doc.title} lead={`${t(ui.labels.lastUpdated, lang)}: ${fmtDate('2026-10-09', lang)}`} />
      <Section>
        <div className="prose">
          <div className="note" role="note" style={{ marginBottom: 32 }}><Icon name="alert" size={20} /><p>{t(ui.labels.draft, lang)}</p></div>
          {doc.sections.map(([h, p], i) => (
            <React.Fragment key={i}>
              <h2>{h}</h2>
              <p>{p}</p>
            </React.Fragment>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

/* -------------------------------- 404 ------------------------------ */
export function NotFound({ lang }: { lang: Lang }) {
  return (
    <Layout meta={{ lang, path: '', title: tr(lang, 'Page not found', 'الصفحة غير موجودة'), description: '', noindex: true }}>
      <section className="notfound">
        <div className="container">
          <p className="notfound-code" aria-hidden="true">404</p>
          <h1 className="h1">{tr(lang, 'This page doesn’t exist', 'هذه الصفحة غير موجودة')}</h1>
          <p className="lead">{tr(lang, 'The link may be old or mistyped. Here are some places to continue.', 'ربما الرابط قديم أو مكتوب بشكل خاطئ. هذه بعض الصفحات التي يمكنك المتابعة منها.')}</p>
          <div className="actions">
            <Btn href={href(lang)} icon="arrow">{t(ui.cta.backHome, lang)}</Btn>
            <Btn href={href(lang, 'contact')} variant="secondary">{t(ui.cta.start, lang)}</Btn>
          </div>
          <div className="notfound-links">
            {[['services', ui.nav.services], ['work', ui.nav.work], ['about', ui.nav.about], ['faq', ui.nav.faq]].map(([p, l]: any) => (
              <a key={p} className="chip" href={href(lang, p)}>{t(l, lang)}</a>
            ))}
            <a className="chip" href={href(lang === 'en' ? 'ar' : 'en')} lang={lang === 'en' ? 'ar' : 'en'}>{t(ui.nav.langName, lang)}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
