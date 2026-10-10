import React from 'react';
import { Lang, t, href, ui } from '../lib/i18n';
import { Layout } from '../components/Layout';
import { Icon } from '../components/Icon';
import { Section, SectionHead, Btn, ServiceCard, ProjectCard, FaqList, CtaBand, ProcessSteps, PageHero, TechChips } from '../components/ui';
import { ServiceVisual, DataFlow } from '../components/visuals';
import {
  services, getService, Service, websiteTypes, websiteDeliverables, platforms, platformCriteria, saasVsCustom, systems,
} from '../data/services';
import { getProject } from '../data/projects';
import { faqsById } from '../data/faqs';
import { waLink } from '../data/site';

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export const serviceToType: Record<string, string> = {
  'ecommerce-development': 'ecommerce',
  'website-development': 'website',
  'custom-software-development': 'custom',
  'business-management-systems': 'business',
  'mobile-app-development': 'mobile',
  'ui-ux-design': 'uiux',
  'integrations-automation': 'custom',
  'maintenance-support': 'maintenance',
};
const startHref = (lang: Lang, slug: string) => `${href(lang, 'contact')}?type=${serviceToType[slug] || 'other'}`;

/* ------------------------------------------------------------------ */
export function ServicesIndex({ lang }: { lang: Lang }) {
  const build = services.slice(0, 5);
  const support = services.slice(5);
  const guide = [
    ['store', tr(lang, 'I want to sell products online', 'أريد أن أبيع منتجاتي أونلاين'), 'ecommerce-development'],
    ['globe', tr(lang, 'I need a website for my company or services', 'أحتاج موقعًا لشركتي أو خدماتي'), 'website-development'],
    ['layers', tr(lang, 'My team needs a system to manage stock, clients, or staff', 'فريقي يحتاج نظامًا لإدارة المخزون أو العملاء أو الموظفين'), 'business-management-systems'],
    ['code', tr(lang, 'I have an idea for a web platform or SaaS', 'عندي فكرة منصة ويب أو SaaS'), 'custom-software-development'],
    ['smartphone', tr(lang, 'My customers need a mobile app', 'عملائي يحتاجون تطبيق موبايل'), 'mobile-app-development'],
    ['wrench', tr(lang, 'My existing site needs fixes or improvements', 'موقعي الحالي يحتاج إصلاحات أو تحسينات'), 'maintenance-support'],
  ];
  return (
    <Layout meta={{ lang, path: 'services', title: ui.nav.services, description: tr(lang, 'E-commerce, website, custom software, business systems, mobile apps, UI/UX, integrations and support by Devixo.', 'تطوير المتاجر والمواقع والبرمجيات المخصصة وأنظمة الأعمال وتطبيقات الموبايل والتصميم والتكاملات والدعم من ديفيكسو.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.services, lang) }]}
        eyebrow={tr(lang, 'Services', 'الخدمات')}
        title={tr(lang, 'Digital products for businesses that want to grow online', 'منتجات رقمية للأنشطة التي تريد النمو أونلاين')}
        lead={tr(lang, 'Stores, websites, custom software, and business systems — planned around your goals, built properly, and supported after launch.', 'متاجر ومواقع وبرمجيات مخصصة وأنظمة أعمال — مخططة حول أهدافك، ومبنية بشكل صحيح، ومدعومة بعد الإطلاق.')}
        actions={<><Btn href={href(lang, 'contact')} icon="arrow">{t(ui.cta.start, lang)}</Btn><Btn href={waLink()} variant="secondary" icon="whatsapp" external>WhatsApp</Btn></>}
      />
      <Section labelledBy="build-title">
        <SectionHead id="build-title" num="01" eyebrow={tr(lang, 'Build', 'البناء')} title={tr(lang, 'What we build', 'ما نبنيه')} />
        <div className="grid grid-3">
          {build.map((s, i) => <ServiceCard key={s.slug} lang={lang} s={s} num={String(i + 1).padStart(2, '0')} />)}
        </div>
      </Section>
      <Section tone="soft" labelledBy="support-title">
        <SectionHead id="support-title" num="02" eyebrow={tr(lang, 'Design · Connect · Support', 'التصميم · الربط · الدعم')} title={tr(lang, 'Around every project', 'حول كل مشروع')} />
        <div className="grid grid-3">
          {support.map((s, i) => <ServiceCard key={s.slug} lang={lang} s={s} num={String(i + 6).padStart(2, '0')} />)}
        </div>
      </Section>
      <Section labelledBy="guide-title">
        <div className="split">
          <div className="split-text">
            <SectionHead id="guide-title" num="03" eyebrow={tr(lang, 'Not sure where to start?', 'لست متأكدًا من أين تبدأ؟')} title={tr(lang, 'Start from what you need to do', 'ابدأ مما تحتاج إليه')} lead={tr(lang, 'Pick the sentence closest to your situation. If none fit, just tell us about the problem — we’ll suggest the approach.', 'اختر الجملة الأقرب لوضعك. وإن لم تجد ما يناسبك، احكِ لنا عن المشكلة وسنقترح الحل.')} />
          </div>
          <ul className="guide-list">
            {guide.map(([ic, text, slug]) => (
              <li key={slug}>
                <a href={href(lang, `services/${slug}`)}>
                  <span className="icon-tile"><Icon name={ic} size={20} /></span>
                  <span className="guide-text">{text}<small>{t(getService(slug).title, lang)}</small></span>
                  <Icon name="arrow" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section tone="soft" labelledBy="process-title">
        <SectionHead id="process-title" num="04" eyebrow={tr(lang, 'How we work', 'طريقة عملنا')} title={tr(lang, 'The same clear process for every service', 'نفس الخطوات الواضحة لكل خدمة')} center />
        <ProcessSteps lang={lang} />
      </Section>
      <CtaBand lang={lang} />
    </Layout>
  );
}

/* ------------------------------------------------------------------ */
function Offerings({ lang, s }: { lang: Lang; s: Service }) {
  if (!s.offerings.length) return null;
  return (
    <Section labelledBy="offer-title">
      <SectionHead id="offer-title" num="01" eyebrow={tr(lang, 'What we deliver', 'ما نقدمه')} title={tr(lang, 'What’s included', 'ماذا يشمل')} />
      <div className={`offer-grid ${s.offerings.length % 3 !== 0 && s.offerings.length % 4 === 0 ? 'cols-4' : ''}`}>
        {s.offerings.map((o, i) => (
          <div key={i} className="offer reveal">
            <h3 className="h4"><Icon name="check" size={18} /> {t(o.title, lang)}</h3>
            <p>{t(o.text, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function EcommerceExtra({ lang }: { lang: Lang }) {
  const primary = platforms.filter((p) => p.level === 'primary');
  const rest = platforms.filter((p) => p.level !== 'primary');
  return (
    <>
      <Section tone="soft" labelledBy="platforms-title">
        <SectionHead
          id="platforms-title" num="02" eyebrow={tr(lang, 'Platforms', 'المنصات')}
          title={tr(lang, 'Shopify first — and the platform that fits you', 'شوبيفاي أولًا — والمنصة التي تناسبك')}
          lead={tr(lang, 'Shopify is where most of our store work happens. We also support other hosted and self-hosted platforms; the scope for those is confirmed per project.', 'معظم عملنا في المتاجر على شوبيفاي. وندعم أيضًا منصات أخرى جاهزة ومستضافة ذاتيًا، ويتم تأكيد نطاق العمل عليها لكل مشروع.')}
        />
        <p className="legend">
          <span><i style={{ background: 'var(--ink)' }}></i>{t(ui.labels.primary, lang)}</span>
          <span><i style={{ background: '#fff', border: '1px solid var(--line-strong)' }}></i>{t(ui.labels.supported, lang)}</span>
        </p>
        <div className="platforms">
          {primary.map((p) => (
            <div key={p.name} className="platform is-primary reveal">
              <span className="platform-badge"><Icon name="check" size={14} /> {t(ui.labels.primary, lang)}</span>
              <div>
                <div className="platform-name">{p.name}</div>
                <p>{t(p.note, lang)}</p>
              </div>
              <ul className="chips chips-dark">
                {[tr(lang, 'Theme customization', 'تخصيص الثيم'), 'Liquid', tr(lang, 'Custom sections', 'أقسام مخصصة'), tr(lang, 'Markets & languages', 'الأسواق واللغات')].map((x) => <li key={x} className="chip">{x}</li>)}
              </ul>
            </div>
          ))}
          {rest.map((p) => (
            <div key={p.name} className="platform reveal">
              <div className="platform-name">{p.name}{p.region && <span className="platform-region">{t(p.region, lang)}</span>}</div>
              <p>{t(p.note, lang)}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section labelledBy="choose-title">
        <SectionHead id="choose-title" num="03" eyebrow={tr(lang, 'Choosing a platform', 'اختيار المنصة')} title={tr(lang, 'How we help you choose', 'كيف نساعدك على الاختيار')} lead={tr(lang, 'There’s no single best platform. We look at four things before recommending one.', 'لا توجد منصة واحدة هي الأفضل للجميع. ننظر إلى أربعة أمور قبل أن نرشح واحدة.')} />
        <div className="criteria">
          {platformCriteria.map((c, i) => (
            <div key={i} className="criterion reveal">
              <Icon name={c.icon} size={24} />
              <h3 className="h4">{t(c.title, lang)}</h3>
              <p>{t(c.text, lang)}</p>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: 40 }}>
          <Icon name="help" size={20} />
          <p>{tr(lang, 'Already on a platform that isn’t working for you? We can review your store and tell you whether to improve it or migrate.', 'هل متجرك على منصة لا تناسبك؟ نراجع متجرك ونخبرك هل الأفضل تحسينه أم نقله.')}</p>
        </div>
      </Section>
    </>
  );
}

function WebsiteExtra({ lang }: { lang: Lang }) {
  return (
    <>
      <Section tone="soft" labelledBy="types-title">
        <SectionHead id="types-title" num="02" eyebrow={tr(lang, 'Website types', 'أنواع المواقع')} title={tr(lang, 'Websites for every kind of business', 'مواقع لكل نوع من الأنشطة')} />
        <div className="type-grid">
          {websiteTypes.map((w, i) => (
            <div key={i} className="type-item reveal">
              <Icon name={w.icon} size={20} />
              <div><strong>{t(w.title, lang)}</strong><span>{t(w.text, lang)}</span></div>
            </div>
          ))}
        </div>
      </Section>
      <Section labelledBy="deliv-title">
        <div className="split">
          <div className="split-text">
            <SectionHead id="deliv-title" num="03" eyebrow={tr(lang, 'Deliverables', 'المخرجات')} title={tr(lang, 'What you receive', 'ما الذي تستلمه')} lead={tr(lang, 'A typical website project includes the following. The exact list is confirmed in your written scope.', 'مشروع الموقع المعتاد يشمل ما يلي، ويتم تأكيد القائمة النهائية في نطاق العمل المكتوب.')} />
            <ul className="bullet-list">
              {websiteDeliverables.map((d, i) => <li key={i}><Icon name="check" size={16} /> {t(d, lang)}</li>)}
            </ul>
          </div>
          <div className="aside-card static">
            <h3 className="h3">{tr(lang, 'Does my website need a custom backend?', 'هل يحتاج موقعي برمجة خلفية خاصة؟')}</h3>
            <p>{tr(lang, 'Usually not. Most company websites only need well-built pages, a contact form, and an easy way to update content. A custom backend makes sense when visitors log in, book, pay, or manage data — and we’ll tell you which case you’re in.', 'غالبًا لا. معظم مواقع الشركات تحتاج صفحات مبنية جيدًا ونموذج تواصل وطريقة سهلة لتحديث المحتوى. البرمجة الخلفية الخاصة منطقية عندما يسجل الزوار دخولهم أو يحجزون أو يدفعون أو يديرون بيانات — وسنخبرك أي حالة تنطبق عليك.')}</p>
            <Btn href={href(lang, 'contact')} icon="arrow">{t(ui.cta.discuss, lang)}</Btn>
          </div>
        </div>
      </Section>
    </>
  );
}

function CustomExtra({ lang }: { lang: Lang }) {
  return (
    <>
      <Section tone="soft" labelledBy="flow-title">
        <SectionHead id="flow-title" num="02" eyebrow={tr(lang, 'How it fits together', 'كيف تترابط الأجزاء')} title={tr(lang, 'How information moves through your application', 'كيف تنتقل المعلومات داخل تطبيقك')} lead={tr(lang, 'Every custom application we build follows the same clear structure, which keeps it secure, testable, and easy to extend.', 'كل تطبيق مخصص نبنيه يتبع نفس الهيكل الواضح، مما يجعله آمنًا وقابلًا للاختبار وسهل التطوير.')} />
        <DataFlow lang={lang} />
      </Section>
      <Section labelledBy="compare-title">
        <SectionHead id="compare-title" num="03" eyebrow={tr(lang, 'Custom vs SaaS', 'مخصص أم جاهز')} title={tr(lang, 'Build custom, or configure an existing product?', 'تبني نظامًا خاصًا أم تضبط منتجًا جاهزًا؟')} lead={tr(lang, 'Both are valid. Here’s how they differ in practice.', 'الاثنان خياران صحيحان. وهذا الفرق بينهما عمليًا.')} />
        <div className="table-scroll">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">{tr(lang, 'Aspect', 'الجانب')}</span></th>
                <th scope="col">{tr(lang, 'Existing SaaS product', 'منتج SaaS جاهز')}</th>
                <th scope="col">{tr(lang, 'Custom application', 'تطبيق مخصص')}</th>
              </tr>
            </thead>
            <tbody>
              {saasVsCustom.map((r, i) => (
                <tr key={i}><th scope="row">{t(r.label, lang)}</th><td>{t(r.saas, lang)}</td><td>{t(r.custom, lang)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section tone="soft" labelledBy="wf-title">
        <SectionHead id="wf-title" num="04" eyebrow={tr(lang, 'Indicative workflow', 'مسار العمل التقريبي')} title={tr(lang, 'From requirements to a working product', 'من المتطلبات إلى منتج يعمل')} lead={tr(lang, 'Timelines depend on scope and are agreed in writing after discovery.', 'المدة تعتمد على نطاق العمل ويتم الاتفاق عليها كتابيًا بعد مرحلة الاستكشاف.')} />
        <ProcessSteps lang={lang} />
      </Section>
    </>
  );
}

function BusinessExtra({ lang }: { lang: Lang }) {
  return (
    <Section labelledBy="systems-title">
      <SectionHead id="systems-title" num="01" eyebrow={tr(lang, 'Systems we build', 'الأنظمة التي نبنيها')} title={tr(lang, 'Pick the problem you want to solve', 'اختر المشكلة التي تريد حلها')} lead={tr(lang, 'Each system is scoped to your real workflow. The modules and roles below are typical starting points, not fixed packages.', 'كل نظام يُصمم حسب سير عملك الفعلي. الوحدات والأدوار أدناه نقاط بداية معتادة وليست باقات ثابتة.')} />
      <div className="systems">
        {systems.map((sy, idx) => (
          <details key={sy.slug} className="system reveal" id={sy.slug} name="systems" open={idx === 0}>
            <summary>
              <span className="icon-tile"><Icon name={sy.icon} size={20} /></span>
              <span>{t(sy.title, lang)}</span>
              <span className="faq-icon" aria-hidden="true"><Icon name="plus" size={16} /></span>
            </summary>
            <div className="system-body">
              <p><strong>{t(ui.labels.problem, lang)}: </strong>{t(sy.problem, lang)}</p>
              <div className="sys-preview" aria-hidden="true">
                <div className="sys-side">
                  <span className="dash-logo"></span>
                  {sy.modules.map((m, i) => <span key={i} className={`dash-nav ${i === 0 ? 'on' : ''}`}>{t(m, lang)}</span>)}
                </div>
                <div className="sys-main">
                  <div className="dash-top"><span className="dash-title">{t(sy.modules[0], lang)}</span><span className="sys-role">{t(sy.roles[0], lang)}</span></div>
                  <div className="dash-kpis">{[0, 1, 2].map((i) => <div key={i} className="dash-kpi"><span className="sk w40"></span><span className={`spark s${i}`}></span></div>)}</div>
                  {[0, 1, 2].map((i) => <div key={i} className="sys-row"><span className="sk w60"></span><span className="sk w30"></span><span className={`pill ${i === 1 ? 'pill-wait' : 'pill-ok'}`}>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>)}
                </div>
              </div>
              <div className="system-cols">
                <div><h3 className="sys-h">{t(ui.labels.modules, lang)}</h3><ul>{sy.modules.map((m, i) => <li key={i}>{t(m, lang)}</li>)}</ul></div>
                <div><h3 className="sys-h">{t(ui.labels.roles, lang)}</h3><ul>{sy.roles.map((m, i) => <li key={i}>{t(m, lang)}</li>)}</ul></div>
                <div><h3 className="sys-h">{t(ui.labels.integrations, lang)}</h3><ul>{sy.integrations.map((m, i) => <li key={i}>{t(m, lang)}</li>)}</ul></div>
              </div>
              <a className="link-arrow" href={`${href(lang, 'contact')}?type=business`}>{t(ui.cta.inquire, lang)} <Icon name="arrow" size={16} /></a>
            </div>
          </details>
        ))}
      </div>
      <div className="note" style={{ marginTop: 40 }}>
        <Icon name="clipboard" size={20} />
        <p>{tr(lang, 'Scope depends on your requirements. We start with the process that causes the most friction, launch it, and expand from there. Specialized regulatory or compliance features are assessed case by case.', 'نطاق العمل يعتمد على متطلباتك. نبدأ بالعملية الأكثر إزعاجًا، نطلقها، ثم نتوسع منها. والمتطلبات التنظيمية أو المتخصصة تُدرس لكل حالة على حدة.')}</p>
      </div>
    </Section>
  );
}

function MobileExtra({ lang }: { lang: Lang }) {
  return (
    <Section tone="soft" labelledBy="m-title">
      <div className="split">
        <div className="split-text">
          <SectionHead id="m-title" num="02" eyebrow={tr(lang, 'Choosing the approach', 'اختيار الطريقة')} title={tr(lang, 'Native app, cross-platform, or web app?', 'تطبيق أصلي أم متعدد المنصات أم تطبيق ويب؟')} lead={tr(lang, 'The right answer depends on your users and budget. We’ll explain the trade-offs before you commit.', 'الإجابة تعتمد على مستخدميك وميزانيتك، وسنشرح لك المزايا والعيوب قبل أن تقرر.')} />
          <ul className="bullet-list">
            <li><Icon name="check" size={16} /> {tr(lang, 'Cross-platform frameworks such as React Native, when they suit the project', 'أطر عمل متعددة المنصات مثل React Native عندما تناسب المشروع')}</li>
            <li><Icon name="check" size={16} /> {tr(lang, 'Installable web apps for a faster, lower-cost first version', 'تطبيقات ويب قابلة للتثبيت لإصدار أول أسرع وأقل تكلفة')}</li>
            <li><Icon name="check" size={16} /> {tr(lang, 'One backend shared by your website, dashboard, and app', 'خادم واحد مشترك بين موقعك ولوحة التحكم والتطبيق')}</li>
          </ul>
        </div>
        <div className="aside-card static">
          <h3 className="h3">{tr(lang, 'Have an app idea?', 'عندك فكرة تطبيق؟')}</h3>
          <p>{tr(lang, 'Describe the main thing users should be able to do. We’ll help you define a realistic first version.', 'صف أهم شيء يجب أن يفعله المستخدم، وسنساعدك على تحديد إصدار أول واقعي.')}</p>
          <Btn href={`${href(lang, 'contact')}?type=mobile`} icon="arrow">{t(ui.cta.discuss, lang)}</Btn>
        </div>
      </div>
    </Section>
  );
}

function IntegrationsExtra({ lang }: { lang: Lang }) {
  const ex = [
    [tr(lang, 'New order', 'طلب جديد'), tr(lang, 'Notify the team on WhatsApp and create a shipment', 'تنبيه الفريق على واتساب وإنشاء شحنة')],
    [tr(lang, 'Form submitted', 'نموذج مُرسل'), tr(lang, 'Add the lead to your CRM and send a confirmation email', 'إضافة العميل لنظام CRM وإرسال بريد تأكيد')],
    [tr(lang, 'Stock below limit', 'المخزون أقل من الحد'), tr(lang, 'Alert purchasing and draft a supplier order', 'تنبيه المشتريات وتجهيز طلب للمورد')],
    [tr(lang, 'End of day', 'نهاية اليوم'), tr(lang, 'Export sales to a spreadsheet or accounting tool', 'تصدير المبيعات إلى شيت أو برنامج محاسبة')],
  ];
  return (
    <Section tone="soft" labelledBy="auto-title">
      <SectionHead id="auto-title" num="02" eyebrow={tr(lang, 'Examples', 'أمثلة')} title={tr(lang, 'Typical automations', 'أتمتة معتادة')} lead={tr(lang, 'When something happens, the next step happens on its own.', 'عندما يحدث شيء، تتم الخطوة التالية تلقائيًا.')} />
      <div className="grid grid-2">
        {ex.map(([when, then], i) => (
          <div key={i} className="auto-rule reveal">
            <span className="auto-when"><span className="mono">{tr(lang, 'WHEN', 'عندما')}</span> {when}</span>
            <Icon name="arrow" size={18} />
            <span className="auto-then"><span className="mono">{tr(lang, 'THEN', 'إذن')}</span> {then}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SupportExtra({ lang }: { lang: Lang }) {
  const steps = [
    ['send', tr(lang, 'You report', 'تبلّغنا'), tr(lang, 'Send the issue or request on WhatsApp or email, with a screenshot if possible.', 'أرسل المشكلة أو الطلب على واتساب أو البريد، مع لقطة شاشة إن أمكن.')],
    ['search', tr(lang, 'We assess', 'نقيّم'), tr(lang, 'We confirm the cause and what it takes to fix, before starting paid work.', 'نحدد السبب وما يلزم لإصلاحه قبل بدء أي عمل مدفوع.')],
    ['wrench', tr(lang, 'We fix & test', 'نصلح ونختبر'), tr(lang, 'Changes are tested before going live, on desktop and mobile.', 'نختبر التعديلات قبل نشرها على الكمبيوتر والموبايل.')],
    ['circleCheck', tr(lang, 'You confirm', 'تؤكد'), tr(lang, 'We share what changed so you always know the state of your site.', 'نشاركك ما تغيّر لتعرف دائمًا حالة موقعك.')],
  ];
  return (
    <Section tone="soft" labelledBy="sup-title">
      <SectionHead id="sup-title" num="02" eyebrow={tr(lang, 'How support works', 'كيف يعمل الدعم')} title={tr(lang, 'Simple, predictable support', 'دعم بسيط ويمكن توقعه')} />
      <div className="grid grid-4">
        {steps.map(([ic, title, text], i) => (
          <div key={i} className="principle reveal">
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="h4" style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name={ic} size={18} /> {title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function UiuxExtra({ lang }: { lang: Lang }) {
  return (
    <Section tone="soft" labelledBy="ux-title">
      <div className="split">
        <div className="split-text">
          <SectionHead id="ux-title" num="02" eyebrow={tr(lang, 'Handoff', 'التسليم')} title={tr(lang, 'Designs your developers can actually build', 'تصميمات يقدر المطوّر ينفذها فعلًا')} lead={tr(lang, 'Because we also develop, our designs come with the details implementation needs.', 'لأننا نطوّر أيضًا، تأتي تصميماتنا بكل التفاصيل التي يحتاجها التنفيذ.')} />
          <ul className="bullet-list">
            <li><Icon name="check" size={16} /> {tr(lang, 'Reusable components and variants', 'مكونات قابلة لإعادة الاستخدام بحالاتها المختلفة')}</li>
            <li><Icon name="check" size={16} /> {tr(lang, 'Color, type, and spacing tokens', 'متغيرات الألوان والخطوط والمسافات')}</li>
            <li><Icon name="check" size={16} /> {tr(lang, 'Empty, loading, error, and success states', 'حالات الفراغ والتحميل والخطأ والنجاح')}</li>
            <li><Icon name="check" size={16} /> {tr(lang, 'Arabic RTL and English layouts', 'تخطيطات عربية RTL وإنجليزية')}</li>
          </ul>
        </div>
        <div className="aside-card static">
          <h3 className="h3">{tr(lang, 'Design only, or design and build', 'تصميم فقط، أو تصميم وتنفيذ')}</h3>
          <p>{tr(lang, 'Hire us for design alone, or carry the same design straight into development with no gap between the two.', 'اطلب التصميم فقط، أو انقل نفس التصميم مباشرة إلى التطوير بدون فجوة بين الاثنين.')}</p>
          <Btn href={`${href(lang, 'contact')}?type=uiux`} icon="arrow">{t(ui.cta.discuss, lang)}</Btn>
        </div>
      </div>
    </Section>
  );
}

const extras: Record<string, (p: { lang: Lang }) => React.ReactElement> = {
  'ecommerce-development': EcommerceExtra,
  'website-development': WebsiteExtra,
  'custom-software-development': CustomExtra,
  'business-management-systems': BusinessExtra,
  'mobile-app-development': MobileExtra,
  'ui-ux-design': UiuxExtra,
  'integrations-automation': IntegrationsExtra,
  'maintenance-support': SupportExtra,
};

export function ServiceDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const s = getService(slug);
  const Extra = extras[slug];
  const related = s.relatedProjects.map(getProject).filter(Boolean) as any[];
  const faqs = faqsById(s.faqIds);
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <Layout meta={{ lang, path: `services/${slug}`, title: s.seo.title, description: s.seo.description }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.services, lang), path: 'services' }, { label: t(s.title, lang) }]}
        eyebrow={t(s.title, lang)}
        title={t(s.title, lang)}
        lead={t(s.lead, lang)}
        actions={<><Btn href={startHref(lang, slug)} icon="arrow">{t(ui.cta.start, lang)}</Btn><Btn href={waLink()} variant="secondary" icon="whatsapp" external>WhatsApp</Btn></>}
        visual={<ServiceVisual k={s.visual} lang={lang} />}
        className="service-hero"
      />
      <Offerings lang={lang} s={s} />
      <Extra lang={lang} />
      <Section labelledBy="tech-title">
        <div className="tech-inline">
          <h2 id="tech-title" className="h4">{t(ui.labels.technologies, lang)}</h2>
          <TechChips lang={lang} ids={s.relatedTech} />
          <a className="link-arrow" href={href(lang, 'technologies')}>{tr(lang, 'Full tech stack', 'كل التقنيات')} <Icon name="arrow" size={16} /></a>
        </div>
        {related.length > 0 && (
          <div style={{ marginTop: 64 }}>
            <SectionHead title={t(ui.labels.relatedProjects, lang)} action={<a className="link-arrow" href={href(lang, 'work')}>{t(ui.cta.allProjects, lang)} <Icon name="arrow" size={16} /></a>} />
            <div className="grid grid-3">
              {related.slice(0, 3).map((p) => <ProjectCard key={p.slug} lang={lang} p={p} />)}
            </div>
          </div>
        )}
      </Section>
      <CtaBand lang={lang} />
      <Section labelledBy="sfaq-title">
        <div className="faq-layout">
          <div className="faq-intro">
            <h2 id="sfaq-title" className="h2">{t(ui.nav.faq, lang)}</h2>
            <p className="lead">{tr(lang, 'Common questions about this service.', 'أسئلة شائعة حول هذه الخدمة.')}</p>
            <a className="link-arrow" href={href(lang, 'faq')}>{tr(lang, 'All questions', 'كل الأسئلة')} <Icon name="arrow" size={16} /></a>
          </div>
          <FaqList lang={lang} items={faqs} />
        </div>
      </Section>
      <Section tone="soft" labelledBy="more-title">
        <SectionHead id="more-title" title={tr(lang, 'Other services', 'خدمات أخرى')} action={<a className="link-arrow" href={href(lang, 'services')}>{t(ui.cta.allServices, lang)} <Icon name="arrow" size={16} /></a>} />
        <div className="grid grid-3">
          {others.map((o) => <ServiceCard key={o.slug} lang={lang} s={o} />)}
        </div>
      </Section>
    </Layout>
  );
}
