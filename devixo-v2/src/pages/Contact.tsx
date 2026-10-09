import React from 'react';
import { Lang, t, href, ui } from '../lib/i18n';
import { Layout } from '../components/Layout';
import { Icon } from '../components/Icon';
import { Section, Btn, PageHero } from '../components/ui';
import { site, waLink } from '../data/site';

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export const projectTypes = (lang: Lang): [string, string][] => [
  ['ecommerce', tr(lang, 'E-commerce store', 'متجر إلكتروني')],
  ['website', tr(lang, 'Corporate website', 'موقع شركة')],
  ['custom', tr(lang, 'Custom web application', 'تطبيق ويب مخصص')],
  ['business', tr(lang, 'Business management system', 'نظام إدارة أعمال')],
  ['mobile', tr(lang, 'Mobile app', 'تطبيق موبايل')],
  ['uiux', tr(lang, 'UI/UX design', 'تصميم واجهات')],
  ['maintenance', tr(lang, 'Maintenance', 'صيانة')],
  ['other', tr(lang, 'Other', 'أخرى')],
];

function Field({ id, label, optional, required, error, hint, full, children }: { id: string; label: string; optional?: string; required?: boolean; error?: string; hint?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={`field ${full ? 'field-full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
        {optional && <span className="opt">({optional})</span>}
      </label>
      {children}
      {hint && <span className="field-hint" id={`${id}-hint`}>{hint}</span>}
      {error && <span className="field-error" id={`${id}-err`}><Icon name="alert" size={14} /> {error}</span>}
    </div>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  const f = ui.form;
  const opt = t(f.optional, lang);
  const types = projectTypes(lang);
  const cfg = {
    endpoint: site.formEndpoint,
    whatsapp: site.whatsapp,
    sending: t(f.sending, lang),
    readyText: t(f.successBody, lang),
    sentText: t(f.successSent, lang),
    thankYou: href(lang, 'contact/thank-you'),
    types: Object.fromEntries(types),
    labels: {
      name: t(f.name, lang), email: t(f.email, lang), company: t(f.company, lang), phone: t(f.phone, lang),
      language: t(f.language, lang), projectType: t(f.projectType, lang), platform: t(f.platform, lang),
      description: t(f.description, lang), features: t(f.features, lang), budget: t(f.budget, lang),
      timeline: t(f.timeline, lang), website: t(f.website, lang), referral: t(f.referral, lang),
    },
  };
  return (
    <Layout meta={{ lang, path: 'contact', title: tr(lang, 'Start a Project', 'ابدأ مشروعك'), description: tr(lang, 'Tell Devixo about your project — store, website, custom software or business system — and get a clear next step.', 'أخبر ديفيكسو عن مشروعك — متجر أو موقع أو برنامج مخصص أو نظام أعمال — واحصل على خطوة تالية واضحة.') }}>
      <PageHero
        lang={lang}
        crumbs={[{ label: t(ui.nav.contact, lang) }]}
        eyebrow={tr(lang, 'Start a project', 'ابدأ مشروعك')}
        title={tr(lang, 'Tell us what you want to build', 'أخبرنا بما تريد بناءه')}
        lead={tr(lang, 'Share as much or as little as you know. We’ll reply with questions, a suggested approach, and the next step.', 'شارك ما تعرفه، قليلًا كان أو كثيرًا. سنرد عليك بأسئلة وطريقة مقترحة والخطوة التالية.')}
      />
      <Section>
        <div className="contact-layout">
          <div className="form-card">
            <form noValidate data-project-form data-config={JSON.stringify(cfg)} aria-labelledby="form-title">
              <h2 id="form-title" className="h3" style={{ marginBottom: 8 }}>{tr(lang, 'Project request', 'طلب مشروع')}</h2>
              <p className="muted" style={{ marginBottom: 28 }}>{tr(lang, 'Fields marked * are required.', 'الحقول المميزة بعلامة * مطلوبة.')}</p>
              <div className="alert alert-error" role="alert" tabIndex={-1} hidden data-error-summary><Icon name="alert" size={18} /> {t(f.errSummary, lang)}</div>
              <div className="alert alert-error" role="alert" tabIndex={-1} hidden data-send-error><Icon name="alert" size={18} /> {t(f.errSend, lang)}</div>

              <div className="form-grid">
                <Field id="f-name" label={t(f.name, lang)} required error={t(f.errName, lang)}>
                  <input id="f-name" name="name" className="input" autoComplete="name" required aria-describedby="f-name-err" />
                </Field>
                <Field id="f-email" label={t(f.email, lang)} required error={t(f.errEmail, lang)}>
                  <input id="f-email" name="email" type="email" className="input" autoComplete="email" dir="ltr" required aria-describedby="f-email-err" />
                </Field>
                <Field id="f-company" label={t(f.company, lang)} optional={opt}>
                  <input id="f-company" name="company" className="input" autoComplete="organization" />
                </Field>
                <Field id="f-phone" label={t(f.phone, lang)} optional={opt}>
                  <input id="f-phone" name="phone" type="tel" className="input" autoComplete="tel" dir="ltr" placeholder="+20 1xx xxx xxxx" />
                </Field>

                <fieldset className="field field-full">
                  <legend>{t(f.projectType, lang)}<span className="req" aria-hidden="true">*</span></legend>
                  <div className="choice-grid" style={{ marginTop: 8 }}>
                    {types.map(([v, l]) => (
                      <label key={v} className="choice">
                        <input type="radio" name="projectType" value={v} aria-describedby="f-type-err" />
                        <span>{l}</span>
                      </label>
                    ))}
                  </div>
                  <span className="field-error" id="f-type-err"><Icon name="alert" size={14} /> {t(f.errType, lang)}</span>
                </fieldset>

                <div className="field field-full">
                  <label className="check-row">
                    <input type="checkbox" name="consultation" value="yes" />
                    <span>{t(f.consult, lang)}</span>
                  </label>
                </div>

                <Field id="f-desc" label={t(f.description, lang)} required full error={t(f.errDesc, lang)} hint={tr(lang, 'What do you want to achieve? Who is it for?', 'ما الذي تريد تحقيقه؟ ولمن؟')}>
                  <textarea id="f-desc" name="description" className="textarea" required aria-describedby="f-desc-hint f-desc-err"></textarea>
                </Field>
                <Field id="f-features" label={t(f.features, lang)} optional={opt} full>
                  <textarea id="f-features" name="features" className="textarea" style={{ minHeight: 100 }} placeholder={tr(lang, 'e.g. online payments, Arabic & English, admin dashboard…', 'مثال: دفع أونلاين، عربي وإنجليزي، لوحة تحكم…')}></textarea>
                </Field>
                <Field id="f-platform" label={t(f.platform, lang)} optional={opt}>
                  <input id="f-platform" name="platform" className="input" placeholder={tr(lang, 'Shopify, WordPress, custom… or not sure', 'شوبيفاي، ووردبريس، برمجة خاصة… أو غير متأكد')} />
                </Field>
                <Field id="f-website" label={t(f.website, lang)} optional={opt} error={t(f.errUrl, lang)}>
                  <input id="f-website" name="website" type="url" className="input" dir="ltr" placeholder="https://" aria-describedby="f-website-err" />
                </Field>
                <Field id="f-budget" label={t(f.budget, lang)} optional={opt}>
                  <select id="f-budget" name="budget" className="select" defaultValue="">
                    <option value="">{t(f.choose, lang)}</option>
                    <option>{tr(lang, 'Not sure yet', 'لم أحدد بعد')}</option>
                    <option>{tr(lang, 'Small — starting out', 'صغيرة — بداية')}</option>
                    <option>{tr(lang, 'Medium — established business', 'متوسطة — نشاط قائم')}</option>
                    <option>{tr(lang, 'Large — complex system', 'كبيرة — نظام متكامل')}</option>
                  </select>
                </Field>
                <Field id="f-timeline" label={t(f.timeline, lang)} optional={opt}>
                  <select id="f-timeline" name="timeline" className="select" defaultValue="">
                    <option value="">{t(f.choose, lang)}</option>
                    <option>{tr(lang, 'As soon as possible', 'في أقرب وقت')}</option>
                    <option>{tr(lang, 'Within 1–3 months', 'خلال 1–3 شهور')}</option>
                    <option>{tr(lang, 'In 3+ months', 'بعد 3 شهور أو أكثر')}</option>
                    <option>{tr(lang, 'Flexible', 'مرن')}</option>
                  </select>
                </Field>
                <fieldset className="field">
                  <legend>{t(f.language, lang)}</legend>
                  <div className="choice-grid" style={{ marginTop: 8 }}>
                    <label className="choice"><input type="radio" name="language" value="العربية" defaultChecked={lang === 'ar'} /><span lang="ar">العربية</span></label>
                    <label className="choice"><input type="radio" name="language" value="English" defaultChecked={lang === 'en'} /><span lang="en">English</span></label>
                  </div>
                </fieldset>
                <Field id="f-ref" label={t(f.referral, lang)} optional={opt}>
                  <select id="f-ref" name="referral" className="select" defaultValue="">
                    <option value="">{t(f.choose, lang)}</option>
                    <option>Facebook</option>
                    <option>{tr(lang, 'Google search', 'بحث جوجل')}</option>
                    <option>{tr(lang, 'Referral from a client', 'ترشيح من عميل')}</option>
                    <option>{tr(lang, 'Saw a project we built', 'شاهدت مشروعًا من تنفيذنا')}</option>
                    <option>{tr(lang, 'Other', 'أخرى')}</option>
                  </select>
                </Field>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
              </div>
              <div className="form-foot">
                <p className="form-privacy"><Icon name="shield" size={16} /> <span>{t(f.privacy, lang)} <a href={href(lang, 'privacy')}>{tr(lang, 'Privacy Policy', 'سياسة الخصوصية')}</a></span></p>
                <button type="submit" className="btn btn-primary btn-lg"><span>{t(f.submit, lang)}</span><Icon name="send" size={18} /></button>
              </div>
            </form>
            <div className="form-success" hidden data-form-success aria-live="polite">
              <span className="success-icon"><Icon name="circleCheck" size={36} /></span>
              <h2 className="h2" tabIndex={-1}>{t(f.successTitle, lang)}</h2>
              <p data-success-text>{t(f.successBody, lang)}</p>
              <div className="actions">
                <a className="btn btn-primary btn-lg" href={waLink()} target="_blank" rel="noopener" data-wa-send><Icon name="whatsapp" size={18} /><span>{t(f.sendWhatsapp, lang)}</span></a>
                <button type="button" className="btn btn-secondary btn-lg" data-edit-request>{t(f.editRequest, lang)}</button>
              </div>
            </div>
          </div>
          <aside className="contact-aside">
            <div className="contact-card dark">
              <h2>{tr(lang, 'What happens next', 'ماذا يحدث بعد ذلك')}</h2>
              <ol className="steps-mini">
                <li>{tr(lang, 'We read your request and reply, usually within one business day.', 'نقرأ طلبك ونرد عليك عادةً خلال يوم عمل.')}</li>
                <li>{tr(lang, 'A short call or chat to understand the details.', 'مكالمة أو محادثة قصيرة لفهم التفاصيل.')}</li>
                <li>{tr(lang, 'You receive a written scope, timeline, and price.', 'تستلم نطاق عمل مكتوبًا ومدة وسعرًا.')}</li>
              </ol>
            </div>
            <div className="contact-card">
              <h2>{tr(lang, 'Prefer to talk directly?', 'تفضّل التواصل مباشرة؟')}</h2>
              <p>{tr(lang, 'Message us on WhatsApp in Arabic or English.', 'راسلنا على واتساب بالعربية أو الإنجليزية.')}</p>
              <a className="contact-line" href={waLink()} target="_blank" rel="noopener"><Icon name="whatsapp" size={20} /> <span>WhatsApp</span> <span dir="ltr" className="muted" style={{ marginInlineStart: 'auto', fontWeight: 600 }}>{site.phone}</span></a>
              <a className="contact-line" href={site.phoneHref}><Icon name="phone" size={20} /> <span>{tr(lang, 'Call', 'اتصال')}</span> <span dir="ltr" className="muted" style={{ marginInlineStart: 'auto', fontWeight: 600 }}>{site.phone}</span></a>
              {site.email && <a className="contact-line" href={`mailto:${site.email}`}><Icon name="mail" size={20} /> {site.email}</a>}
              {site.socials.filter((s) => s.name === 'Facebook').map((s) => (
                <a key={s.name} className="contact-line" href={s.url} target="_blank" rel="noopener"><Icon name="facebook" size={20} /> <span>Facebook</span> <Icon name="external" size={16} className="muted" /></a>
              ))}
            </div>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}

export function ThankYou({ lang }: { lang: Lang }) {
  return (
    <Layout meta={{ lang, path: 'contact/thank-you', title: tr(lang, 'Request received', 'تم استلام طلبك'), description: '', noindex: true }}>
      <section className="notfound">
        <div className="container">
          <span className="success-icon" style={{ display: 'inline-grid', placeItems: 'center', width: 80, height: 80, borderRadius: '50%', background: 'var(--ok-soft)', color: 'var(--ok)', marginBottom: 24 }}><Icon name="circleCheck" size={40} /></span>
          <h1 className="h1">{tr(lang, 'Thanks — we’ve got your request', 'شكرًا — وصلنا طلبك')}</h1>
          <p className="lead">{tr(lang, 'We’ll reply within one business day. If it’s urgent, message us on WhatsApp.', 'سنرد عليك خلال يوم عمل. وإذا كان الأمر عاجلًا، راسلنا على واتساب.')}</p>
          <div className="actions">
            <Btn href={href(lang, 'work')} icon="arrow">{t(ui.cta.explore, lang)}</Btn>
            <Btn href={waLink()} variant="secondary" icon="whatsapp" external>WhatsApp</Btn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
