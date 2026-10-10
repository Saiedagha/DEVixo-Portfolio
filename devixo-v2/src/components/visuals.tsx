import React from 'react';
import { Lang, t, asset, ui } from '../lib/i18n';
import { Icon } from './Icon';

// Illustrations are built in HTML/CSS so they stay sharp, light, and translatable.
// Anything that is not a real project screenshot carries an "Illustrative" caption.

const tr = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export function Browser({ url, children, className = '' }: { url?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="dots"><i></i><i></i><i></i></span>
        {url && <span className="browser-url" dir="ltr">{url}</span>}
      </div>
      <div className="browser-view">{children}</div>
    </div>
  );
}

export function Phone({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-notch" aria-hidden="true"></div>
      <div className="phone-view">{children}</div>
    </div>
  );
}

const Caption = ({ lang }: { lang: Lang }) => (
  <figcaption className="visual-caption"><Icon name="eye" size={14} /> {t(ui.labels.illustrative, lang)}</figcaption>
);

export function HeroComposition({ lang }: { lang: Lang }) {
  return (
    <div className="hero-visual" aria-label={tr(lang, 'Websites and stores built by Devixo on desktop and mobile', 'مواقع ومتاجر من تنفيذ ديفيكسو على الكمبيوتر والموبايل')} role="img">
      <Browser url="towntechshop.com" className="hv-desktop">
        <img src={asset('img/projects/towntech.webp')} alt="" width={1200} height={750} fetchPriority="high" />
      </Browser>
      <Phone className="hv-phone">
        <img src={asset('img/projects/eva-m.webp')} alt="" className="phone-shot" />
      </Phone>
      <Browser url="nushea.shop" className="hv-small">
        <img src={asset('img/projects/nushea.webp')} alt="" loading="lazy" />
      </Browser>
      <div className="hv-badge" aria-hidden="true">
        <span className="hv-badge-icon"><Icon name="code" size={18} /></span>
        <span>
          <strong>{tr(lang, 'Live projects', 'مشاريع حقيقية')}</strong>
          <small>{tr(lang, 'Shopify · Custom builds', 'شوبيفاي · برمجة خاصة')}</small>
        </span>
      </div>
    </div>
  );
}

export function DashboardMock({ lang, variant = 'analytics' }: { lang: Lang; variant?: 'analytics' | 'inventory' }) {
  const nav =
    variant === 'inventory'
      ? [['box', tr(lang, 'Inventory', 'المخزون')], ['receipt', tr(lang, 'Sales', 'المبيعات')], ['truck', tr(lang, 'Suppliers', 'الموردون')], ['users', tr(lang, 'Staff', 'الموظفون')], ['network', tr(lang, 'Branches', 'الفروع')]]
      : [['dashboard', tr(lang, 'Overview', 'نظرة عامة')], ['users', tr(lang, 'Customers', 'العملاء')], ['clipboard', tr(lang, 'Orders', 'الطلبات')], ['file', tr(lang, 'Reports', 'التقارير')], ['settings', tr(lang, 'Settings', 'الإعدادات')]];
  const rows =
    variant === 'inventory'
      ? [[tr(lang, 'Item A', 'صنف أ'), 'ok'], [tr(lang, 'Item B', 'صنف ب'), 'low'], [tr(lang, 'Item C', 'صنف ج'), 'ok'], [tr(lang, 'Item D', 'صنف د'), 'ok']]
      : [[tr(lang, 'Order', 'طلب'), 'ok'], [tr(lang, 'Order', 'طلب'), 'wait'], [tr(lang, 'Order', 'طلب'), 'ok'], [tr(lang, 'Order', 'طلب'), 'ok']];
  const status: Record<string, string> = {
    ok: variant === 'inventory' ? tr(lang, 'In stock', 'متوفر') : tr(lang, 'Completed', 'مكتمل'),
    low: tr(lang, 'Low stock', 'مخزون منخفض'),
    wait: tr(lang, 'Pending', 'قيد الانتظار'),
  };
  return (
    <figure className="mock-figure">
      <Browser url={variant === 'inventory' ? 'app.yourbusiness.com/inventory' : 'app.yourbusiness.com'} className="mock-dash">
        <div className="dash">
          <aside className="dash-side" aria-hidden="true">
            <span className="dash-logo"></span>
            {nav.map(([ic, label], i) => (
              <span key={i} className={`dash-nav ${i === 0 ? 'on' : ''}`}><Icon name={ic} size={14} /> {label}</span>
            ))}
          </aside>
          <div className="dash-main">
            <div className="dash-top">
              <span className="dash-title">{nav[0][1]}</span>
              <span className="dash-search"><Icon name="search" size={12} /></span>
            </div>
            <div className="dash-kpis">
              {[0, 1, 2].map((i) => (
                <div key={i} className="dash-kpi"><span className="sk w40"></span><span className="sk-num"></span><span className={`spark s${i}`}></span></div>
              ))}
            </div>
            <div className="dash-panels">
              <div className="dash-chart">
                {[38, 54, 46, 70, 62, 84, 76, 92].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }}></span>
                ))}
              </div>
              <div className="dash-table">
                {rows.map(([name, st], i) => (
                  <div key={i} className="dash-row">
                    <span>{name}</span>
                    <span className="sk w30"></span>
                    <span className={`pill pill-${st}`}>{status[st]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Browser>
      <Caption lang={lang} />
    </figure>
  );
}

export function StoreMock({ lang }: { lang: Lang }) {
  return (
    <figure className="mock-figure store-visual">
      <Browser url="zegimart.ca" className="sv-main">
        <img src={asset('img/projects/zegimart-inner.webp')} alt={tr(lang, 'ZegiMart product page', 'صفحة منتج في متجر ZegiMart')} />
      </Browser>
      <Phone className="sv-phone">
        <div className="pm-store">
          <div className="pm-head"><span className="sk w30"></span><Icon name="store" size={14} /></div>
          <div className="pm-hero"></div>
          <div className="pm-grid">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="pm-prod"><span className={`pm-img c${i}`}></span><span className="sk w60"></span><span className="sk w30 accent"></span></div>
            ))}
          </div>
          <span className="pm-cta">{tr(lang, 'Add to cart', 'أضف للسلة')}</span>
        </div>
      </Phone>
      <figcaption className="visual-caption"><Icon name="eye" size={14} /> {tr(lang, 'ZegiMart screenshot · mobile view illustrative', 'لقطة من ZegiMart · عرض الموبايل توضيحي')}</figcaption>
    </figure>
  );
}

export function WebsiteMock({ lang }: { lang: Lang }) {
  return (
    <figure className="mock-figure web-visual">
      <Browser url="saiedagha.github.io/EL-hamd" className="wv-main">
        <img src={asset('img/projects/elhamd.webp')} alt={tr(lang, 'El-Hamd Curtains website', 'موقع الحمد للستائر')} />
      </Browser>
      <Browser url="saiedagha.github.io" className="wv-second">
        <img src={asset('img/projects/frid.webp')} alt={tr(lang, 'Restaurant website', 'موقع مطعم')} loading="lazy" />
      </Browser>
    </figure>
  );
}

export function MobileMock({ lang }: { lang: Lang }) {
  return (
    <figure className="mock-figure mobile-visual">
      <Phone className="mv-a">
        <div className="pm-app">
          <div className="pm-head"><span className="sk w40"></span><Icon name="bell" size={14} /></div>
          <div className="pm-card accent"><span className="sk w40 light"></span><span className="sk-num light"></span></div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="pm-list"><span className="pm-dot"></span><span className="sk w60"></span><span className="sk w20"></span></div>
          ))}
          <div className="pm-tabbar"><Icon name="home" size={14} /><Icon name="search" size={14} /><Icon name="clipboard" size={14} /><Icon name="users" size={14} /></div>
        </div>
      </Phone>
      <Phone className="mv-b">
        <div className="pm-app">
          <div className="pm-head"><Icon name="arrowBack" size={14} /><span className="sk w40"></span></div>
          <div className="pm-hero tall"></div>
          <span className="sk w60"></span>
          <span className="sk w80"></span>
          <span className="sk w40"></span>
          <span className="pm-cta">{tr(lang, 'Book now', 'احجز الآن')}</span>
        </div>
      </Phone>
      <Caption lang={lang} />
    </figure>
  );
}

export function DesignMock({ lang }: { lang: Lang }) {
  return (
    <figure className="mock-figure design-visual">
      <div className="dv-step">
        <span className="dv-label mono">01 · {tr(lang, 'Wireframe', 'مخطط أولي')}</span>
        <div className="dv-card wire">
          <span className="wf-img"></span><span className="wf-line w80"></span><span className="wf-line w60"></span><span className="wf-btn"></span>
        </div>
      </div>
      <span className="dv-arrow"><Icon name="arrow" size={20} /></span>
      <div className="dv-step">
        <span className="dv-label mono">02 · {tr(lang, 'Interface', 'الواجهة')}</span>
        <div className="dv-card final">
          <img src={asset('img/projects/glowbyrose.webp')} alt="" />
          <span className="final-title">{tr(lang, 'Product page', 'صفحة المنتج')}</span>
          <span className="sk w60"></span>
          <span className="final-btn">{tr(lang, 'Add to cart', 'أضف للسلة')}</span>
        </div>
      </div>
      <div className="dv-tokens" aria-hidden="true">
        <span style={{ background: '#FDA305' }}></span><span style={{ background: '#16161A' }}></span><span style={{ background: '#F4F3EF' }}></span>
        <span className="mono">Aa</span>
      </div>
      <Caption lang={lang} />
    </figure>
  );
}

export function HubDiagram({ lang }: { lang: Lang }) {
  const nodes: [string, string, string][] = [
    ['card', tr(lang, 'Payments', 'الدفع'), 'n1'],
    ['truck', tr(lang, 'Shipping', 'الشحن'), 'n2'],
    ['users', 'CRM', 'n3'],
    ['whatsapp', tr(lang, 'WhatsApp', 'واتساب'), 'n4'],
    ['file', tr(lang, 'Sheets & reports', 'الشيتات والتقارير'), 'n5'],
    ['mail', tr(lang, 'Email', 'البريد'), 'n6'],
  ];
  return (
    <figure className="mock-figure hub">
      <svg className="hub-lines" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        {[[60, 50], [340, 50], [30, 150], [370, 150], [60, 250], [340, 250]].map(([x, y], i) => (
          <line key={i} x1="200" y1="150" x2={x} y2={y} />
        ))}
      </svg>
      <div className="hub-center">
        <Icon name="workflow" size={22} />
        <strong>{tr(lang, 'Your store or system', 'متجرك أو نظامك')}</strong>
      </div>
      {nodes.map(([ic, label, cls]) => (
        <div key={cls} className={`hub-node ${cls}`}><Icon name={ic} size={16} /> {label}</div>
      ))}
      <figcaption className="sr-only">{tr(lang, 'Diagram: your store or system connected to payments, shipping, CRM, WhatsApp, spreadsheets and email.', 'رسم توضيحي: متجرك أو نظامك متصل بالدفع والشحن وCRM وواتساب والشيتات والبريد.')}</figcaption>
    </figure>
  );
}

export function SupportMock({ lang }: { lang: Lang }) {
  const items: [string, string, string][] = [
    ['circleCheck', tr(lang, 'Uptime check', 'فحص التوافر'), tr(lang, 'Passing', 'سليم')],
    ['refresh', tr(lang, 'Theme & apps updated', 'تحديث الثيم والتطبيقات'), tr(lang, 'Done', 'تم')],
    ['database', tr(lang, 'Backup', 'نسخة احتياطية'), tr(lang, 'Scheduled', 'مجدولة')],
    ['wrench', tr(lang, 'Checkout bug fix', 'إصلاح مشكلة الدفع'), tr(lang, 'In review', 'قيد المراجعة')],
    ['sparkles', tr(lang, 'New homepage section', 'قسم جديد بالرئيسية'), tr(lang, 'Planned', 'مخطط')],
  ];
  return (
    <figure className="mock-figure support-visual">
      <div className="sp-panel">
        <div className="sp-head">
          <strong>{tr(lang, 'Support log', 'سجل الدعم')}</strong>
          <span className="pill pill-ok">{tr(lang, 'Site healthy', 'الموقع سليم')}</span>
        </div>
        <ul>
          {items.map(([ic, a, b], i) => (
            <li key={i}><Icon name={ic} size={16} /> <span>{a}</span> <em>{b}</em></li>
          ))}
        </ul>
      </div>
      <Caption lang={lang} />
    </figure>
  );
}

/** How information moves through a custom application. */
export function DataFlow({ lang }: { lang: Lang }) {
  const steps: [string, string, string][] = [
    ['users', tr(lang, 'Users & roles', 'المستخدمون والأدوار'), tr(lang, 'Staff, managers, customers — each sees only what they need.', 'الموظفون والمديرون والعملاء — كلٌّ يرى ما يحتاجه فقط.')],
    ['devices', tr(lang, 'Interface', 'الواجهة'), tr(lang, 'Forms, tables, and dashboards on web or mobile.', 'نماذج وجداول ولوحات تحكم على الويب أو الموبايل.')],
    ['server', tr(lang, 'API & business rules', 'الواجهة البرمجية وقواعد العمل'), tr(lang, 'Validation, permissions, pricing, approvals.', 'التحقق والصلاحيات والتسعير والموافقات.')],
    ['database', tr(lang, 'Database', 'قاعدة البيانات'), tr(lang, 'One source of truth with a history of changes.', 'مصدر واحد للحقيقة مع سجل للتغييرات.')],
    ['file', tr(lang, 'Reports & integrations', 'التقارير والتكاملات'), tr(lang, 'Dashboards, exports, payments, messaging.', 'لوحات وتصدير ودفع ورسائل.')],
  ];
  return (
    <ol className="flow">
      {steps.map(([ic, title, text], i) => (
        <li key={i} className="flow-step reveal">
          <span className="flow-icon"><Icon name={ic} size={20} /></span>
          <strong>{title}</strong>
          <p>{text}</p>
          {i < steps.length - 1 && <span className="flow-arrow" aria-hidden="true"><Icon name="arrow" size={16} /></span>}
        </li>
      ))}
    </ol>
  );
}

export function ServiceVisual({ k, lang }: { k: string; lang: Lang }) {
  switch (k) {
    case 'store': return <StoreMock lang={lang} />;
    case 'website': return <WebsiteMock lang={lang} />;
    case 'dashboard': return <DashboardMock lang={lang} />;
    case 'inventory': return <DashboardMock lang={lang} variant="inventory" />;
    case 'mobile': return <MobileMock lang={lang} />;
    case 'design': return <DesignMock lang={lang} />;
    case 'hub': return <HubDiagram lang={lang} />;
    case 'support': return <SupportMock lang={lang} />;
    default: return null;
  }
}

/** Small decorative cover for blog cards — not a photo. */
export function Cover({ k }: { k: string }) {
  const icon = { store: 'store', website: 'globe', dashboard: 'dashboard' }[k] || 'news';
  return (
    <div className={`cover cover-${k}`} aria-hidden="true">
      <span className="cover-grid"></span>
      <span className="cover-icon"><Icon name={icon} size={28} /></span>
    </div>
  );
}
