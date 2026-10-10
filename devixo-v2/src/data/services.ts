import type { L } from '../lib/i18n';

export type Offering = { title: L; text: L };
export type Service = {
  slug: string;
  icon: string;
  visual: string;
  title: L;
  short: L; // card description
  lead: L; // page hero
  capabilities: L[]; // 2–3 shown on cards
  offerings: Offering[];
  relatedProjects: string[];
  relatedTech: string[];
  faqIds: string[];
  seo: { title: L; description: L };
};

export const services: Service[] = [
  {
    slug: 'ecommerce-development',
    icon: 'store',
    visual: 'store',
    title: { en: 'E-commerce Development', ar: 'تطوير المتاجر الإلكترونية' },
    short: {
      en: 'Online stores that are easy to manage and easy to buy from — on Shopify, other hosted platforms, or fully custom.',
      ar: 'متاجر أونلاين سهلة الإدارة وسهلة الشراء منها — على شوبيفاي أو منصات جاهزة أخرى أو مبرمجة بالكامل.',
    },
    lead: {
      en: 'We set up, customize, and extend online stores so your products look right, checkout works smoothly, and your team can run the store without a developer for every change.',
      ar: 'نجهّز المتاجر الإلكترونية ونخصصها ونطوّرها، لتظهر منتجاتك بالشكل الصحيح، ويتم الدفع بسلاسة، ويقدر فريقك يدير المتجر بدون الرجوع لمطوّر في كل تعديل.',
    },
    capabilities: [
      { en: 'Shopify setup & theme customization', ar: 'إعداد شوبيفاي وتخصيص الثيم' },
      { en: 'Payments, shipping & domains', ar: 'الدفع والشحن وربط الدومين' },
      { en: 'Store migration & UX improvements', ar: 'نقل المتاجر وتحسين تجربة الشراء' },
    ],
    offerings: [
      { title: { en: 'New store setup', ar: 'إنشاء متجر جديد' }, text: { en: 'Store structure, settings, policies, and launch checklist — ready to take real orders.', ar: 'هيكلة المتجر والإعدادات والسياسات وقائمة مراجعة الإطلاق — جاهز لاستقبال طلبات حقيقية.' } },
      { title: { en: 'Shopify theme customization', ar: 'تخصيص ثيمات شوبيفاي' }, text: { en: 'Adapting a theme to your brand: typography, colors, layouts, and page templates.', ar: 'تعديل الثيم ليناسب هويتك: الخطوط والألوان وتخطيط الصفحات وقوالبها.' } },
      { title: { en: 'Liquid development', ar: 'برمجة Liquid' }, text: { en: 'Custom Liquid templates and logic when the theme editor is not enough.', ar: 'قوالب ومنطق مخصص بلغة Liquid عندما لا يكفي محرر الثيم.' } },
      { title: { en: 'Custom storefront sections', ar: 'أقسام مخصصة للمتجر' }, text: { en: 'Reusable sections your team can add, reorder, and edit from the admin.', ar: 'أقسام قابلة لإعادة الاستخدام يضيفها فريقك ويرتبها ويعدّلها من لوحة التحكم.' } },
      { title: { en: 'Products & collections', ar: 'تنظيم المنتجات والتصنيفات' }, text: { en: 'Clear catalog structure, variants, filters, and collection rules.', ar: 'كتالوج منظم بوضوح مع الخيارات والفلاتر وقواعد التصنيفات.' } },
      { title: { en: 'Payments & shipping', ar: 'الدفع والشحن' }, text: { en: 'Connecting available payment gateways and shipping providers for your market.', ar: 'ربط بوابات الدفع وشركات الشحن المتاحة في سوقك.' } },
      { title: { en: 'Domain connection', ar: 'ربط الدومين' }, text: { en: 'Connecting your domain, email records, and SSL correctly.', ar: 'ربط الدومين وسجلات البريد وشهادة SSL بشكل صحيح.' } },
      { title: { en: 'Mobile-first storefronts', ar: 'متاجر مصممة للموبايل أولًا' }, text: { en: 'Most shoppers browse on phones — layouts, menus, and checkout are designed for that first.', ar: 'أغلب العملاء يتسوقون من الموبايل — لذلك نصمم التخطيط والقوائم والدفع للموبايل أولًا.' } },
      { title: { en: 'Multilingual & multi-market', ar: 'تعدد اللغات والأسواق' }, text: { en: 'Arabic and English storefronts, currencies, and market settings.', ar: 'متاجر بالعربية والإنجليزية مع إعداد العملات والأسواق.' } },
      { title: { en: 'Store migration', ar: 'نقل المتجر' }, text: { en: 'Moving products, customers, and content between platforms with a tested plan.', ar: 'نقل المنتجات والعملاء والمحتوى بين المنصات بخطة مُختبرة.' } },
      { title: { en: 'Conversion-focused UX', ar: 'تحسين تجربة الشراء' }, text: { en: 'Reviewing product pages, navigation, and checkout friction, then fixing what matters.', ar: 'مراجعة صفحات المنتجات والتنقل وعقبات الدفع، ثم معالجة الأهم.' } },
      { title: { en: 'Maintenance & enhancements', ar: 'الصيانة والتطوير المستمر' }, text: { en: 'Ongoing changes, new sections, and fixes after launch.', ar: 'تعديلات مستمرة وأقسام جديدة وإصلاحات بعد الإطلاق.' } },
    ],
    relatedProjects: ['zegimart', 'blue-tech-kuwait', 'glow-by-rose', 'towntech'],
    relatedTech: ['shopify', 'liquid', 'woocommerce'],
    faqIds: ['platform-vs-custom', 'shopify', 'integrations'],
    seo: {
      title: { en: 'E-commerce & Shopify Store Development', ar: 'تطوير المتاجر الإلكترونية وشوبيفاي' },
      description: { en: 'Shopify setup, theme customization, Liquid development, payments, shipping and store migration by Devixo.', ar: 'إعداد شوبيفاي وتخصيص الثيمات وبرمجة Liquid وربط الدفع والشحن ونقل المتاجر مع ديفيكسو.' },
    },
  },
  {
    slug: 'website-development',
    icon: 'globe',
    visual: 'website',
    title: { en: 'Website Development', ar: 'تطوير المواقع الإلكترونية' },
    short: {
      en: 'Fast, responsive websites that explain what you do clearly and make it easy for visitors to contact you.',
      ar: 'مواقع سريعة ومتجاوبة تشرح نشاطك بوضوح وتسهّل على الزوار التواصل معك.',
    },
    lead: {
      en: 'From a focused landing page to a full company website, we design and build sites that load fast, read well on every screen, and are easy to update.',
      ar: 'من صفحة هبوط مركّزة إلى موقع شركة متكامل، نصمم ونبني مواقع سريعة التحميل، مريحة القراءة على كل الشاشات، وسهلة التحديث.',
    },
    capabilities: [
      { en: 'Company & service websites', ar: 'مواقع الشركات والخدمات' },
      { en: 'Landing pages & catalogs', ar: 'صفحات الهبوط والكتالوجات' },
      { en: 'Redesign & migration', ar: 'إعادة التصميم والنقل' },
    ],
    offerings: [
      { title: { en: 'Responsive by default', ar: 'متجاوب افتراضيًا' }, text: { en: 'Layouts designed for phones, tablets, and desktops — not shrunk afterwards.', ar: 'تخطيطات مصممة للموبايل والتابلت والكمبيوتر — لا مجرد تصغير لاحق.' } },
      { title: { en: 'Content you can edit', ar: 'محتوى تقدر تعدّله' }, text: { en: 'A CMS or simple editing workflow when your content changes often.', ar: 'نظام إدارة محتوى أو طريقة تعديل بسيطة إذا كان محتواك يتغيّر باستمرار.' } },
      { title: { en: 'Bilingual & RTL', ar: 'ثنائي اللغة ويدعم RTL' }, text: { en: 'Arabic and English versions with proper right-to-left layouts.', ar: 'نسخ عربية وإنجليزية بتخطيط صحيح من اليمين لليسار.' } },
      { title: { en: 'Forms & integrations', ar: 'النماذج والتكاملات' }, text: { en: 'Contact forms, WhatsApp, booking tools, maps, and analytics.', ar: 'نماذج تواصل وواتساب وأدوات حجز وخرائط وتحليلات.' } },
      { title: { en: 'SEO foundations', ar: 'أساسيات تحسين الظهور' }, text: { en: 'Clean structure, metadata, and page speed that search engines can read.', ar: 'هيكلة نظيفة وبيانات وصفية وسرعة تحميل تفهمها محركات البحث.' } },
      { title: { en: 'Redesign & migration', ar: 'إعادة التصميم والنقل' }, text: { en: 'Rebuilding an outdated site while keeping the content and links that still work.', ar: 'إعادة بناء موقع قديم مع الحفاظ على المحتوى والروابط التي ما زالت تعمل.' } },
    ],
    relatedProjects: ['el-hamd-curtains', 'restaurant-website', 'pastry-chef-portfolio'],
    relatedTech: ['html', 'css', 'javascript', 'react', 'nextjs'],
    faqIds: ['project-types', 'timelines', 'hosting'],
    seo: {
      title: { en: 'Website Design & Development', ar: 'تصميم وتطوير المواقع' },
      description: { en: 'Corporate websites, landing pages, catalogs, booking sites and redesigns — responsive, bilingual and easy to update.', ar: 'مواقع شركات وصفحات هبوط وكتالوجات ومواقع حجز وإعادة تصميم — متجاوبة وثنائية اللغة وسهلة التحديث.' },
    },
  },
  {
    slug: 'custom-software-development',
    icon: 'code',
    visual: 'dashboard',
    title: { en: 'Custom Software Development', ar: 'تطوير البرمجيات المخصصة' },
    short: {
      en: 'Web applications built around your workflow when ready-made tools force you to work around them.',
      ar: 'تطبيقات ويب مبنية حول طريقة عملك، عندما تجبرك الأدوات الجاهزة على التحايل عليها.',
    },
    lead: {
      en: 'We build web applications, dashboards, and multi-user platforms designed around how your business actually works — with the data, roles, and integrations you need.',
      ar: 'نبني تطبيقات ويب ولوحات تحكم ومنصات متعددة المستخدمين مصممة حول طريقة عمل نشاطك فعليًا — بالبيانات والصلاحيات والتكاملات التي تحتاجها.',
    },
    capabilities: [
      { en: 'Web apps & admin dashboards', ar: 'تطبيقات الويب ولوحات التحكم' },
      { en: 'Roles, permissions & APIs', ar: 'الصلاحيات والأدوار والـ APIs' },
      { en: 'SaaS & multi-user platforms', ar: 'منصات SaaS متعددة المستخدمين' },
    ],
    offerings: [
      { title: { en: 'Custom web applications', ar: 'تطبيقات ويب مخصصة' }, text: { en: 'Browser-based tools your team and customers use every day.', ar: 'أدوات تعمل من المتصفح يستخدمها فريقك وعملاؤك يوميًا.' } },
      { title: { en: 'Full-stack development', ar: 'تطوير متكامل للواجهة والخادم' }, text: { en: 'Interface, server logic, database, and deployment handled together.', ar: 'الواجهة ومنطق الخادم وقاعدة البيانات والنشر في مسار واحد.' } },
      { title: { en: 'Admin dashboards', ar: 'لوحات التحكم' }, text: { en: 'Manage records, orders, users, and settings from one place.', ar: 'إدارة السجلات والطلبات والمستخدمين والإعدادات من مكان واحد.' } },
      { title: { en: 'Authentication & roles', ar: 'تسجيل الدخول والصلاحيات' }, text: { en: 'Sign-in, user roles, and permission rules for who can see and change what.', ar: 'تسجيل الدخول وأدوار المستخدمين وقواعد تحدد من يرى ماذا ومن يعدّل.' } },
      { title: { en: 'APIs & integrations', ar: 'الـ APIs والتكاملات' }, text: { en: 'Connecting payment, shipping, messaging, and other services.', ar: 'الربط مع خدمات الدفع والشحن والرسائل وغيرها.' } },
      { title: { en: 'Data management', ar: 'إدارة البيانات' }, text: { en: 'Forms, tables, search, filters, imports, and exports for your data.', ar: 'نماذج وجداول وبحث وفلاتر واستيراد وتصدير لبياناتك.' } },
      { title: { en: 'Workflow automation', ar: 'أتمتة سير العمل' }, text: { en: 'Replacing repetitive manual steps with rules and notifications.', ar: 'استبدال الخطوات اليدوية المتكررة بقواعد وتنبيهات تلقائية.' } },
      { title: { en: 'Reporting dashboards', ar: 'لوحات التقارير' }, text: { en: 'Clear views of the numbers you already track, in real time.', ar: 'عرض واضح للأرقام التي تتابعها بالفعل، لحظة بلحظة.' } },
    ],
    relatedProjects: ['towntech'],
    relatedTech: ['react', 'nextjs', 'typescript', 'nodejs', 'supabase'],
    faqIds: ['platform-vs-custom', 'ownership', 'timelines'],
    seo: {
      title: { en: 'Custom Software & Web Application Development', ar: 'تطوير البرمجيات وتطبيقات الويب المخصصة' },
      description: { en: 'Custom web apps, admin dashboards, role-based access, APIs and SaaS platforms built around your workflow.', ar: 'تطبيقات ويب ولوحات تحكم وصلاحيات وواجهات برمجية ومنصات SaaS مبنية حول طريقة عملك.' },
    },
  },
  {
    slug: 'business-management-systems',
    icon: 'layers',
    visual: 'inventory',
    title: { en: 'Business Management Systems', ar: 'أنظمة إدارة الأعمال' },
    short: {
      en: 'Systems for inventory, sales, clients, staff, and operations — shaped to the way your business runs.',
      ar: 'أنظمة للمخزون والمبيعات والعملاء والموظفين والعمليات — مصممة على طريقة تشغيل نشاطك.',
    },
    lead: {
      en: 'Spreadsheets and disconnected apps work until they don’t. We design and build management systems that bring your operations into one place, scoped to your real requirements.',
      ar: 'الشيتات والتطبيقات المتفرقة تنفع لحد ما توقف. نصمم ونبني أنظمة إدارة تجمع عملياتك في مكان واحد، حسب احتياجاتك الفعلية.',
    },
    capabilities: [
      { en: 'ERP, CRM & inventory', ar: 'ERP وCRM والمخزون' },
      { en: 'POS, invoicing & HR', ar: 'نقاط البيع والفواتير والموارد البشرية' },
      { en: 'Clinics, schools & restaurants', ar: 'العيادات والمدارس والمطاعم' },
    ],
    offerings: [],
    relatedProjects: ['towntech'],
    relatedTech: ['react', 'nextjs', 'nodejs', 'supabase'],
    faqIds: ['platform-vs-custom', 'timelines', 'maintenance'],
    seo: {
      title: { en: 'Business Management Systems — ERP, CRM, Inventory, POS', ar: 'أنظمة إدارة الأعمال — ERP وCRM والمخزون ونقاط البيع' },
      description: { en: 'Custom ERP, CRM, inventory, POS, HR, clinic, school and restaurant management systems scoped to your requirements.', ar: 'أنظمة ERP وCRM ومخزون ونقاط بيع وموارد بشرية وعيادات ومدارس ومطاعم حسب متطلباتك.' },
    },
  },
  {
    slug: 'mobile-app-development',
    icon: 'smartphone',
    visual: 'mobile',
    title: { en: 'Mobile App Development', ar: 'تطوير تطبيقات الموبايل' },
    short: {
      en: 'Android and iOS apps connected to your website, store, or business system.',
      ar: 'تطبيقات أندرويد وiOS مرتبطة بموقعك أو متجرك أو نظام أعمالك.',
    },
    lead: {
      en: 'When your customers or team need an app on their phone, we plan and build it to work with the systems you already have — sharing the same data, accounts, and backend.',
      ar: 'عندما يحتاج عملاؤك أو فريقك تطبيقًا على الموبايل، نخطط له ونبنيه ليعمل مع أنظمتك الحالية — بنفس البيانات والحسابات والخادم.',
    },
    capabilities: [
      { en: 'Android & iOS apps', ar: 'تطبيقات أندرويد وiOS' },
      { en: 'Cross-platform development', ar: 'تطوير متعدد المنصات' },
      { en: 'API & backend integration', ar: 'الربط مع الخادم والـ APIs' },
    ],
    offerings: [
      { title: { en: 'Cross-platform apps', ar: 'تطبيقات متعددة المنصات' }, text: { en: 'One codebase for Android and iOS where it fits the project.', ar: 'كود واحد لأندرويد وiOS عندما يناسب ذلك المشروع.' } },
      { title: { en: 'Connected to your backend', ar: 'مرتبط بنظامك' }, text: { en: 'Apps that read and write the same data as your website or dashboard.', ar: 'تطبيقات تقرأ وتكتب نفس بيانات موقعك أو لوحة التحكم.' } },
      { title: { en: 'Accounts & notifications', ar: 'الحسابات والإشعارات' }, text: { en: 'Sign-in, user profiles, and push notifications.', ar: 'تسجيل الدخول وملفات المستخدمين والإشعارات.' } },
      { title: { en: 'Mobile-friendly web apps', ar: 'تطبيقات ويب مناسبة للموبايل' }, text: { en: 'Sometimes a fast, installable web app is the better first step — we’ll tell you when.', ar: 'أحيانًا يكون تطبيق ويب سريع قابل للتثبيت هو الخطوة الأولى الأنسب — وسنخبرك بذلك.' } },
      { title: { en: 'Store publishing support', ar: 'دعم النشر على المتاجر' }, text: { en: 'Preparing builds and listings for Google Play and the App Store.', ar: 'تجهيز النسخ وصفحات التطبيق على Google Play وApp Store.' } },
      { title: { en: 'Updates after launch', ar: 'تحديثات بعد الإطلاق' }, text: { en: 'OS updates, fixes, and new features over time.', ar: 'تحديثات أنظمة التشغيل والإصلاحات ومميزات جديدة مع الوقت.' } },
    ],
    relatedProjects: [],
    relatedTech: ['react-native', 'firebase', 'supabase'],
    faqIds: ['project-types', 'timelines', 'ownership'],
    seo: {
      title: { en: 'Mobile App Development — Android & iOS', ar: 'تطوير تطبيقات الموبايل — أندرويد وiOS' },
      description: { en: 'Cross-platform Android and iOS apps connected to your website, store or business system.', ar: 'تطبيقات أندرويد وiOS متعددة المنصات مرتبطة بموقعك أو متجرك أو نظامك.' },
    },
  },
  {
    slug: 'ui-ux-design',
    icon: 'pen',
    visual: 'design',
    title: { en: 'UI/UX Design', ar: 'تصميم واجهات وتجربة المستخدم' },
    short: {
      en: 'Clear user flows and interfaces designed before a line of code is written.',
      ar: 'مسارات استخدام وواجهات واضحة نصممها قبل كتابة أي سطر برمجي.',
    },
    lead: {
      en: 'Good design starts with understanding what users need to do. We map the flows, structure the content, and design interfaces your developers can build with confidence.',
      ar: 'التصميم الجيد يبدأ بفهم ما يحتاج المستخدم لفعله. نرسم المسارات وننظم المحتوى ونصمم واجهات يقدر المطوّر ينفذها بثقة.',
    },
    capabilities: [
      { en: 'User flows & wireframes', ar: 'مسارات الاستخدام والـ Wireframes' },
      { en: 'Interface design & prototypes', ar: 'تصميم الواجهات والنماذج التفاعلية' },
      { en: 'Developer handoff', ar: 'تسليم جاهز للتطوير' },
    ],
    offerings: [
      { title: { en: 'Discovery', ar: 'الاستكشاف' }, text: { en: 'Goals, users, competitors, and what success looks like.', ar: 'الأهداف والمستخدمون والمنافسون وكيف يبدو النجاح.' } },
      { title: { en: 'Information architecture', ar: 'هيكلة المعلومات' }, text: { en: 'Sitemaps and navigation that match how people look for things.', ar: 'خرائط الموقع والتنقل بما يناسب طريقة بحث الناس.' } },
      { title: { en: 'User flows', ar: 'مسارات المستخدم' }, text: { en: 'Step-by-step paths for key tasks like buying, booking, or signing up.', ar: 'خطوات المهام الأساسية مثل الشراء أو الحجز أو التسجيل.' } },
      { title: { en: 'Wireframes', ar: 'المخططات الأولية' }, text: { en: 'Low-detail layouts to agree on structure before visual design.', ar: 'تخطيطات مبسطة للاتفاق على الهيكل قبل التصميم المرئي.' } },
      { title: { en: 'Interface design', ar: 'تصميم الواجهات' }, text: { en: 'Polished screens with a consistent design system.', ar: 'شاشات نهائية بنظام تصميم متسق.' } },
      { title: { en: 'Interactive prototypes', ar: 'نماذج تفاعلية' }, text: { en: 'Clickable prototypes to test the experience before development.', ar: 'نماذج قابلة للنقر لاختبار التجربة قبل التطوير.' } },
      { title: { en: 'Responsive design', ar: 'تصميم متجاوب' }, text: { en: 'Dedicated layouts for mobile, tablet, and desktop.', ar: 'تخطيطات مخصصة للموبايل والتابلت والكمبيوتر.' } },
      { title: { en: 'Developer handoff', ar: 'التسليم للمطورين' }, text: { en: 'Components, tokens, and specs organized for implementation.', ar: 'مكونات ومتغيرات ومواصفات منظمة للتنفيذ.' } },
    ],
    relatedProjects: ['zegimart', 'glow-by-rose', 'nushea'],
    relatedTech: ['figma'],
    faqIds: ['project-types', 'ownership'],
    seo: {
      title: { en: 'UI/UX Design — Flows, Wireframes, Interfaces', ar: 'تصميم الواجهات وتجربة المستخدم' },
      description: { en: 'Discovery, information architecture, user flows, wireframes, interface design and developer handoff.', ar: 'الاستكشاف وهيكلة المعلومات ومسارات المستخدم والمخططات الأولية وتصميم الواجهات والتسليم.' },
    },
  },
  {
    slug: 'integrations-automation',
    icon: 'plug',
    visual: 'hub',
    title: { en: 'Integrations & Automation', ar: 'التكاملات والأتمتة' },
    short: {
      en: 'Connect your store, website, and tools so data moves on its own instead of being copied by hand.',
      ar: 'اربط متجرك وموقعك وأدواتك لتنتقل البيانات تلقائيًا بدل نسخها يدويًا.',
    },
    lead: {
      en: 'Payments, shipping, messaging, CRMs, spreadsheets — we connect the services you rely on and automate the repetitive steps between them.',
      ar: 'الدفع والشحن والرسائل وأنظمة العملاء والشيتات — نربط الخدمات التي تعتمد عليها ونؤتمت الخطوات المتكررة بينها.',
    },
    capabilities: [
      { en: 'Payment & shipping gateways', ar: 'بوابات الدفع والشحن' },
      { en: 'External APIs & CRMs', ar: 'الـ APIs الخارجية وأنظمة العملاء' },
      { en: 'Workflow automation', ar: 'أتمتة سير العمل' },
    ],
    offerings: [
      { title: { en: 'Payment gateways', ar: 'بوابات الدفع' }, text: { en: 'Card and wallet payments through providers available in your market.', ar: 'الدفع بالبطاقات والمحافظ عبر المزودين المتاحين في سوقك.' } },
      { title: { en: 'Shipping services', ar: 'خدمات الشحن' }, text: { en: 'Shipping rates, labels, and tracking from your carrier.', ar: 'أسعار الشحن والبوالص والتتبع من شركة الشحن.' } },
      { title: { en: 'External APIs', ar: 'الواجهات البرمجية الخارجية' }, text: { en: 'Reading from and writing to third-party services securely.', ar: 'القراءة والكتابة من خدمات خارجية بشكل آمن.' } },
      { title: { en: 'CRM integrations', ar: 'ربط أنظمة العملاء' }, text: { en: 'Sending leads and customers into the CRM you use.', ar: 'إرسال العملاء المحتملين والعملاء إلى نظام CRM الذي تستخدمه.' } },
      { title: { en: 'E-commerce integrations', ar: 'تكاملات المتاجر' }, text: { en: 'Syncing products, stock, and orders with other systems.', ar: 'مزامنة المنتجات والمخزون والطلبات مع أنظمة أخرى.' } },
      { title: { en: 'Workflow automation', ar: 'أتمتة سير العمل' }, text: { en: 'Notifications, approvals, and scheduled tasks that run on their own.', ar: 'تنبيهات وموافقات ومهام مجدولة تعمل تلقائيًا.' } },
    ],
    relatedProjects: ['towntech', 'blue-tech-kuwait'],
    relatedTech: ['nodejs', 'rest', 'supabase'],
    faqIds: ['integrations', 'hosting'],
    seo: {
      title: { en: 'Integrations & Workflow Automation', ar: 'التكاملات وأتمتة سير العمل' },
      description: { en: 'Payment gateways, shipping, external APIs, CRM and e-commerce integrations, and workflow automation.', ar: 'بوابات الدفع والشحن والواجهات البرمجية وتكامل أنظمة العملاء والمتاجر وأتمتة سير العمل.' },
    },
  },
  {
    slug: 'maintenance-support',
    icon: 'wrench',
    visual: 'support',
    title: { en: 'Website Maintenance & Support', ar: 'صيانة المواقع والدعم الفني' },
    short: {
      en: 'Fixes, updates, and improvements after launch — so your site keeps working as your business changes.',
      ar: 'إصلاحات وتحديثات وتحسينات بعد الإطلاق — ليظل موقعك يعمل مع تغيّر نشاطك.',
    },
    lead: {
      en: 'Launch is the start, not the end. We keep your website, store, or system healthy with agreed ongoing support, fixes, and improvements.',
      ar: 'الإطلاق بداية وليس نهاية. نحافظ على موقعك أو متجرك أو نظامك بدعم مستمر متفق عليه وإصلاحات وتحسينات.',
    },
    capabilities: [
      { en: 'Bug fixes & updates', ar: 'إصلاح الأخطاء والتحديثات' },
      { en: 'Performance monitoring', ar: 'متابعة الأداء' },
      { en: 'Ongoing improvements', ar: 'تحسينات مستمرة' },
    ],
    offerings: [
      { title: { en: 'Bug fixes', ar: 'إصلاح الأخطاء' }, text: { en: 'Investigating and fixing issues reported by you or your customers.', ar: 'تتبّع وإصلاح المشاكل التي تبلغ عنها أنت أو عملاؤك.' } },
      { title: { en: 'Technical improvements', ar: 'تحسينات تقنية' }, text: { en: 'Cleaning up slow pages, broken layouts, and outdated code.', ar: 'معالجة الصفحات البطيئة والتخطيطات المكسورة والكود القديم.' } },
      { title: { en: 'Platform updates', ar: 'تحديثات المنصة' }, text: { en: 'Keeping themes, apps, plugins, and dependencies current.', ar: 'تحديث الثيمات والتطبيقات والإضافات والمكتبات.' } },
      { title: { en: 'Performance monitoring', ar: 'متابعة الأداء' }, text: { en: 'Checking speed and uptime and acting on problems early.', ar: 'متابعة السرعة والتوافر والتعامل مع المشاكل مبكرًا.' } },
      { title: { en: 'Backups', ar: 'النسخ الاحتياطي' }, text: { en: 'Backup routines where the platform and hosting allow it.', ar: 'روتين نسخ احتياطي حيث تسمح المنصة والاستضافة بذلك.' } },
      { title: { en: 'Content & feature changes', ar: 'تعديلات المحتوى والمميزات' }, text: { en: 'New pages, sections, and features as your business grows.', ar: 'صفحات وأقسام ومميزات جديدة مع نمو نشاطك.' } },
    ],
    relatedProjects: ['velcot', 'towntech', 'eva-fashion'],
    relatedTech: ['github', 'vercel'],
    faqIds: ['maintenance', 'hosting'],
    seo: {
      title: { en: 'Website Maintenance & Technical Support', ar: 'صيانة المواقع والدعم الفني' },
      description: { en: 'Bug fixes, platform updates, performance monitoring, backups and ongoing improvements after launch.', ar: 'إصلاح الأخطاء وتحديثات المنصات ومتابعة الأداء والنسخ الاحتياطي والتحسين المستمر بعد الإطلاق.' },
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;

// Six cards on the homepage: five services + one combined card.
export const homeServiceCards = [
  'ecommerce-development',
  'website-development',
  'custom-software-development',
  'business-management-systems',
  'mobile-app-development',
];
export const combinedCard = {
  icon: 'pen',
  title: { en: 'UI/UX, Integrations & Support', ar: 'التصميم والتكاملات والدعم' },
  short: {
    en: 'Interface design before development, connections between your tools, and support after launch.',
    ar: 'تصميم الواجهات قبل التطوير، وربط أدواتك ببعضها، ودعم بعد الإطلاق.',
  },
  links: ['ui-ux-design', 'integrations-automation', 'maintenance-support'],
};

// ---------------------------------------------------------------------------
// Website types (Website Development page)
export const websiteTypes: { title: L; text: L; icon: string }[] = [
  { icon: 'building', title: { en: 'Corporate websites', ar: 'مواقع الشركات' }, text: { en: 'Who you are, what you offer, and how to reach you.', ar: 'من أنتم وماذا تقدمون وكيف يتواصل العميل معكم.' } },
  { icon: 'id', title: { en: 'Company profiles', ar: 'مواقع تعريفية' }, text: { en: 'A credible online version of your company profile.', ar: 'نسخة أونلاين موثوقة من ملف شركتك التعريفي.' } },
  { icon: 'target', title: { en: 'Landing pages', ar: 'صفحات الهبوط' }, text: { en: 'One page, one offer, one clear action.', ar: 'صفحة واحدة وعرض واحد وإجراء واضح.' } },
  { icon: 'briefcase', title: { en: 'Service businesses', ar: 'مواقع الخدمات' }, text: { en: 'Services, areas, pricing requests, and inquiries.', ar: 'الخدمات والمناطق وطلبات الأسعار والاستفسارات.' } },
  { icon: 'book', title: { en: 'Catalog websites', ar: 'مواقع الكتالوج' }, text: { en: 'Show products without online checkout.', ar: 'عرض المنتجات بدون دفع أونلاين.' } },
  { icon: 'calendar', title: { en: 'Booking & appointments', ar: 'الحجز والمواعيد' }, text: { en: 'Let clients pick a time and book it.', ar: 'خلّي العميل يختار الموعد ويحجزه.' } },
  { icon: 'users', title: { en: 'Membership sites', ar: 'مواقع العضويات' }, text: { en: 'Members-only content and accounts.', ar: 'محتوى وحسابات خاصة بالأعضاء.' } },
  { icon: 'list', title: { en: 'Directories', ar: 'مواقع الأدلة' }, text: { en: 'Searchable listings with filters.', ar: 'قوائم قابلة للبحث مع فلاتر.' } },
  { icon: 'home', title: { en: 'Real estate', ar: 'العقارات' }, text: { en: 'Property listings, details, and inquiries.', ar: 'قوائم العقارات وتفاصيلها والاستفسارات.' } },
  { icon: 'graduation', title: { en: 'Education', ar: 'التعليم' }, text: { en: 'Courses, programs, and enrollment.', ar: 'الدورات والبرامج والتسجيل.' } },
  { icon: 'heart', title: { en: 'Healthcare & clinics', ar: 'العيادات والرعاية الصحية' }, text: { en: 'Doctors, specialties, and appointment requests.', ar: 'الأطباء والتخصصات وطلبات المواعيد.' } },
  { icon: 'utensils', title: { en: 'Restaurants', ar: 'المطاعم' }, text: { en: 'Menus, branches, and ordering links.', ar: 'المنيو والفروع وروابط الطلب.' } },
  { icon: 'cursor', title: { en: 'Interactive web apps', ar: 'تطبيقات ويب تفاعلية' }, text: { en: 'Calculators, configurators, and tools.', ar: 'حاسبات وأدوات تخصيص وأدوات تفاعلية.' } },
  { icon: 'refresh', title: { en: 'Redesign & migration', ar: 'إعادة التصميم والنقل' }, text: { en: 'Modernize what you have without losing what works.', ar: 'حدّث ما لديك بدون خسارة ما ينجح.' } },
];

export const websiteDeliverables: L[] = [
  { en: 'Sitemap and page structure', ar: 'خريطة الموقع وهيكل الصفحات' },
  { en: 'Desktop and mobile designs', ar: 'تصميمات للكمبيوتر والموبايل' },
  { en: 'Developed, tested website', ar: 'موقع مطوّر ومُختبر' },
  { en: 'Contact forms and WhatsApp', ar: 'نماذج التواصل وواتساب' },
  { en: 'Basic SEO setup and metadata', ar: 'إعداد أساسي لتحسين الظهور' },
  { en: 'Domain and hosting connection', ar: 'ربط الدومين والاستضافة' },
  { en: 'A walkthrough of how to update content', ar: 'شرح لطريقة تحديث المحتوى' },
  { en: 'Agreed post-launch support', ar: 'دعم متفق عليه بعد الإطلاق' },
];

// ---------------------------------------------------------------------------
// E-commerce platforms directory. `level` separates primary expertise from
// platforms Devixo supports case by case. Adjust as experience changes.
export type Platform = { name: string; level: 'primary' | 'supported'; note: L; region?: L };
export const platforms: Platform[] = [
  { name: 'Shopify', level: 'primary', note: { en: 'Store setup, themes, Liquid, apps, markets', ar: 'إعداد المتاجر والثيمات وLiquid والتطبيقات والأسواق' } },
  { name: 'WooCommerce / WordPress', level: 'supported', note: { en: 'Self-hosted stores with full control', ar: 'متاجر مستضافة ذاتيًا بتحكم كامل' } },
  { name: 'Salla', level: 'supported', note: { en: 'Popular in Saudi Arabia', ar: 'منتشرة في السعودية' }, region: { en: 'KSA', ar: 'السعودية' } },
  { name: 'Zid', level: 'supported', note: { en: 'Arabic-first store builder', ar: 'منصة متاجر عربية' }, region: { en: 'KSA', ar: 'السعودية' } },
  { name: 'EasyOrder', level: 'supported', note: { en: 'Quick-launch stores in Egypt', ar: 'إطلاق سريع للمتاجر في مصر' }, region: { en: 'Egypt', ar: 'مصر' } },
  { name: 'Wix', level: 'supported', note: { en: 'Simple stores and small catalogs', ar: 'متاجر بسيطة وكتالوجات صغيرة' } },
  { name: 'Webflow', level: 'supported', note: { en: 'Design-led sites with commerce', ar: 'مواقع بتصميم مميز مع بيع' } },
  { name: 'Squarespace Commerce', level: 'supported', note: { en: 'Small brand stores', ar: 'متاجر العلامات الصغيرة' } },
  { name: 'BigCommerce', level: 'supported', note: { en: 'Larger catalogs, B2B features', ar: 'كتالوجات كبيرة ومميزات B2B' } },
  { name: 'PrestaShop', level: 'supported', note: { en: 'Open-source, self-hosted', ar: 'مفتوحة المصدر ومستضافة ذاتيًا' } },
  { name: 'OpenCart', level: 'supported', note: { en: 'Lightweight open-source stores', ar: 'متاجر خفيفة مفتوحة المصدر' } },
  { name: 'Adobe Commerce / Magento', level: 'supported', note: { en: 'Enterprise-scale catalogs', ar: 'كتالوجات بحجم المؤسسات' } },
];

export const platformCriteria: { title: L; text: L; icon: string }[] = [
  { icon: 'wallet', title: { en: 'Budget', ar: 'الميزانية' }, text: { en: 'Hosted platforms cost less to start but have monthly fees and app costs. Custom builds cost more upfront and less in subscriptions.', ar: 'المنصات الجاهزة أقل تكلفة في البداية لكن لها اشتراك شهري وتكلفة تطبيقات. البرمجة الخاصة تكلفتها أعلى في البداية وأقل في الاشتراكات.' } },
  { icon: 'puzzle', title: { en: 'Functionality', ar: 'المميزات المطلوبة' }, text: { en: 'If your needs fit what the platform and its apps already do, use it. If you need unusual pricing, workflows, or data, custom may be cleaner.', ar: 'لو احتياجاتك موجودة في المنصة وتطبيقاتها، استخدمها. لو تحتاج تسعيرًا أو سير عمل أو بيانات غير معتادة، قد تكون البرمجة الخاصة أنسب.' } },
  { icon: 'trending', title: { en: 'Scalability', ar: 'قابلية التوسع' }, text: { en: 'Think about catalog size, markets, and order volume a year from now — not just launch day.', ar: 'فكّر في حجم الكتالوج والأسواق وعدد الطلبات بعد سنة — مش يوم الإطلاق فقط.' } },
  { icon: 'settings', title: { en: 'Operations', ar: 'طريقة التشغيل' }, text: { en: 'Who manages the store daily, which local payment and shipping providers you need, and what systems it must connect to.', ar: 'مين هيدير المتجر يوميًا، وأي بوابات دفع وشركات شحن محلية تحتاجها، وأي أنظمة لازم يتربط بها.' } },
];

// ---------------------------------------------------------------------------
// Custom software: SaaS vs custom comparison
export const saasVsCustom: { label: L; saas: L; custom: L }[] = [
  { label: { en: 'Getting started', ar: 'البداية' }, saas: { en: 'Sign up and configure in days', ar: 'اشتراك وإعداد خلال أيام' }, custom: { en: 'Planned, designed, and built for you', ar: 'تخطيط وتصميم وبناء خاص بك' } },
  { label: { en: 'Fit to your workflow', ar: 'التوافق مع طريقة عملك' }, saas: { en: 'You adapt to the product', ar: 'أنت تتأقلم مع المنتج' }, custom: { en: 'The product adapts to you', ar: 'المنتج يتأقلم معك' } },
  { label: { en: 'Costs', ar: 'التكلفة' }, saas: { en: 'Per-user monthly fees that grow with you', ar: 'اشتراك شهري لكل مستخدم يزيد مع نموك' }, custom: { en: 'Upfront build, then hosting and support', ar: 'تكلفة بناء مبدئية ثم استضافة ودعم' } },
  { label: { en: 'Data & ownership', ar: 'البيانات والملكية' }, saas: { en: 'Stored in the vendor’s system', ar: 'محفوظة في نظام المزوّد' }, custom: { en: 'Your code, your database', ar: 'كودك وقاعدة بياناتك' } },
  { label: { en: 'Best when', ar: 'الأنسب عندما' }, saas: { en: 'A standard tool already does the job', ar: 'أداة جاهزة تؤدي المطلوب بالفعل' }, custom: { en: 'Your process is your advantage', ar: 'طريقة عملك هي ميزتك التنافسية' } },
];

// ---------------------------------------------------------------------------
// Business management systems: 16 categories
export type SystemCat = { slug: string; icon: string; title: L; problem: L; modules: L[]; roles: L[]; integrations: L[] };
const l = (en: string, ar: string): L => ({ en, ar });
export const systems: SystemCat[] = [
  { slug: 'erp', icon: 'layers', title: l('ERP systems', 'أنظمة ERP'), problem: l('Sales, purchasing, stock, and accounts live in separate files, so nobody sees the full picture.', 'المبيعات والمشتريات والمخزون والحسابات في ملفات منفصلة، فلا أحد يرى الصورة كاملة.'), modules: [l('Sales & purchasing', 'المبيعات والمشتريات'), l('Inventory', 'المخزون'), l('Finance overview', 'نظرة مالية'), l('Reports', 'التقارير')], roles: [l('Owner', 'المالك'), l('Accountant', 'المحاسب'), l('Sales', 'المبيعات'), l('Warehouse', 'المخزن')], integrations: [l('Accounting software', 'برامج المحاسبة'), l('E-commerce store', 'المتجر الإلكتروني')] },
  { slug: 'crm', icon: 'users', title: l('CRM systems', 'أنظمة إدارة العملاء CRM'), problem: l('Leads come from WhatsApp, calls, and forms, and follow-ups get lost.', 'العملاء المحتملون يأتون من واتساب والمكالمات والنماذج، والمتابعات تضيع.'), modules: [l('Leads & pipeline', 'العملاء المحتملون ومراحل البيع'), l('Contacts', 'جهات الاتصال'), l('Tasks & reminders', 'المهام والتذكيرات'), l('Sales reports', 'تقارير المبيعات')], roles: [l('Sales rep', 'مندوب مبيعات'), l('Sales manager', 'مدير المبيعات')], integrations: [l('Website forms', 'نماذج الموقع'), l('WhatsApp', 'واتساب'), l('Email', 'البريد')] },
  { slug: 'inventory', icon: 'box', title: l('Inventory management', 'إدارة المخزون'), problem: l('Stock counts are wrong, items run out unexpectedly, and nobody knows why.', 'أرصدة المخزون غير دقيقة، والأصناف تنفد فجأة، ولا أحد يعرف السبب.'), modules: [l('Items & variants', 'الأصناف والخيارات'), l('Stock movements', 'حركات المخزون'), l('Low-stock alerts', 'تنبيهات نقص المخزون'), l('Suppliers', 'الموردون')], roles: [l('Store keeper', 'أمين المخزن'), l('Purchasing', 'المشتريات'), l('Manager', 'المدير')], integrations: [l('Online store', 'المتجر الإلكتروني'), l('Barcode scanners', 'قارئات الباركود')] },
  { slug: 'warehouse', icon: 'warehouse', title: l('Warehouse management', 'إدارة المستودعات'), problem: l('Receiving, picking, and dispatch rely on paper and memory.', 'الاستلام والتجهيز والصرف معتمد على الورق والذاكرة.'), modules: [l('Locations & bins', 'المواقع والأرفف'), l('Receiving', 'الاستلام'), l('Picking & packing', 'التجهيز والتغليف'), l('Dispatch', 'الصرف والشحن')], roles: [l('Warehouse staff', 'عمال المستودع'), l('Supervisor', 'المشرف')], integrations: [l('Shipping carriers', 'شركات الشحن'), l('Inventory system', 'نظام المخزون')] },
  { slug: 'pos', icon: 'receipt', title: l('POS & cashier systems', 'نقاط البيع والكاشير'), problem: l('In-store sales are not connected to stock or to the online store.', 'مبيعات الفرع غير مرتبطة بالمخزون أو بالمتجر الإلكتروني.'), modules: [l('Fast checkout', 'بيع سريع'), l('Receipts', 'الإيصالات'), l('Shifts & cash drawer', 'الورديات والدرج'), l('Daily closing', 'الإقفال اليومي')], roles: [l('Cashier', 'الكاشير'), l('Branch manager', 'مدير الفرع')], integrations: [l('Receipt printers', 'طابعات الإيصالات'), l('Inventory', 'المخزون')] },
  { slug: 'invoicing', icon: 'file', title: l('Accounting & invoicing workflows', 'الحسابات والفواتير'), problem: l('Invoices are made by hand and payments are tracked in a spreadsheet.', 'الفواتير تُعمل يدويًا والمدفوعات متابعة في شيت.'), modules: [l('Quotes & invoices', 'عروض الأسعار والفواتير'), l('Payment tracking', 'متابعة التحصيل'), l('Expenses', 'المصروفات'), l('Statements', 'كشوف الحساب')], roles: [l('Accountant', 'المحاسب'), l('Owner', 'المالك')], integrations: [l('Accounting software', 'برامج المحاسبة'), l('Payment gateway', 'بوابة الدفع')] },
  { slug: 'hr', icon: 'id', title: l('HR & employee management', 'الموارد البشرية وشؤون الموظفين'), problem: l('Attendance, leave, and employee records are scattered.', 'الحضور والإجازات وملفات الموظفين متفرقة.'), modules: [l('Employee records', 'ملفات الموظفين'), l('Attendance', 'الحضور والانصراف'), l('Leave requests', 'طلبات الإجازة'), l('Payroll inputs', 'مدخلات الرواتب')], roles: [l('HR officer', 'مسؤول الموارد البشرية'), l('Employee', 'الموظف'), l('Manager', 'المدير')], integrations: [l('Attendance devices', 'أجهزة البصمة'), l('Payroll tools', 'أدوات الرواتب')] },
  { slug: 'clinic', icon: 'heart', title: l('Clinic management', 'إدارة العيادات'), problem: l('Appointments clash and patient visit history is hard to find.', 'المواعيد تتعارض وسجل زيارات المريض صعب الوصول إليه.'), modules: [l('Appointments', 'المواعيد'), l('Patient files', 'ملفات المرضى'), l('Visits & billing', 'الزيارات والفواتير'), l('Doctor schedules', 'جداول الأطباء')], roles: [l('Receptionist', 'الاستقبال'), l('Doctor', 'الطبيب'), l('Clinic manager', 'مدير العيادة')], integrations: [l('SMS / WhatsApp reminders', 'تذكيرات SMS وواتساب'), l('Online booking', 'الحجز الأونلاين')] },
  { slug: 'lms', icon: 'graduation', title: l('Education & LMS platforms', 'منصات التعليم الإلكتروني'), problem: l('Courses, students, and progress are managed across several tools.', 'الدورات والطلاب والتقدم موزعة على أكثر من أداة.'), modules: [l('Courses & lessons', 'الدورات والدروس'), l('Enrollment', 'التسجيل'), l('Quizzes', 'الاختبارات'), l('Progress tracking', 'متابعة التقدم')], roles: [l('Student', 'الطالب'), l('Instructor', 'المحاضر'), l('Admin', 'المسؤول')], integrations: [l('Payment gateway', 'بوابة الدفع'), l('Video hosting', 'استضافة الفيديو')] },
  { slug: 'school', icon: 'school', title: l('School management', 'إدارة المدارس'), problem: l('Classes, grades, fees, and parent communication are handled manually.', 'الفصول والدرجات والمصروفات والتواصل مع أولياء الأمور يدوي.'), modules: [l('Students & classes', 'الطلاب والفصول'), l('Grades', 'الدرجات'), l('Fees', 'المصروفات'), l('Announcements', 'الإعلانات')], roles: [l('Administrator', 'الإدارة'), l('Teacher', 'المعلم'), l('Parent', 'ولي الأمر')], integrations: [l('Messaging', 'الرسائل'), l('Payment collection', 'تحصيل المدفوعات')] },
  { slug: 'restaurant', icon: 'utensils', title: l('Restaurant management', 'إدارة المطاعم'), problem: l('Orders, kitchen, and stock of ingredients are not connected.', 'الطلبات والمطبخ ومخزون الخامات غير مترابطة.'), modules: [l('Menu management', 'إدارة المنيو'), l('Orders & tables', 'الطلبات والطاولات'), l('Kitchen display', 'شاشة المطبخ'), l('Ingredients stock', 'مخزون الخامات')], roles: [l('Waiter', 'الويتر'), l('Kitchen', 'المطبخ'), l('Cashier', 'الكاشير'), l('Manager', 'المدير')], integrations: [l('Delivery apps', 'تطبيقات التوصيل'), l('POS', 'نقاط البيع')] },
  { slug: 'projects', icon: 'check', title: l('Project & task management', 'إدارة المشاريع والمهام'), problem: l('Work is assigned in chats and deadlines slip without anyone noticing.', 'المهام تُوزع في الشات والمواعيد تفوت بدون ما حد ياخد باله.'), modules: [l('Projects & tasks', 'المشاريع والمهام'), l('Assignments', 'توزيع المهام'), l('Deadlines', 'المواعيد النهائية'), l('Time tracking', 'تتبع الوقت')], roles: [l('Team member', 'عضو الفريق'), l('Project manager', 'مدير المشروع'), l('Client', 'العميل')], integrations: [l('Email & notifications', 'البريد والإشعارات'), l('Calendar', 'التقويم')] },
  { slug: 'booking', icon: 'calendar', title: l('Booking & appointment systems', 'أنظمة الحجز والمواعيد'), problem: l('Bookings come by phone and chat, causing double-bookings and no-shows.', 'الحجوزات تأتي بالهاتف والشات، فيحدث تكرار وعدم حضور.'), modules: [l('Online booking', 'الحجز الأونلاين'), l('Availability', 'المواعيد المتاحة'), l('Reminders', 'التذكيرات'), l('Payments & deposits', 'المدفوعات والعربون')], roles: [l('Customer', 'العميل'), l('Staff', 'الموظف'), l('Manager', 'المدير')], integrations: [l('Calendar sync', 'مزامنة التقويم'), l('Payment gateway', 'بوابة الدفع'), l('WhatsApp', 'واتساب')] },
  { slug: 'real-estate', icon: 'home', title: l('Real estate management', 'إدارة العقارات'), problem: l('Units, tenants, contracts, and payments are tracked in separate sheets.', 'الوحدات والمستأجرون والعقود والمدفوعات في شيتات منفصلة.'), modules: [l('Properties & units', 'العقارات والوحدات'), l('Leads & viewings', 'العملاء والمعاينات'), l('Contracts', 'العقود'), l('Installments', 'الأقساط')], roles: [l('Agent', 'الوسيط'), l('Property manager', 'مدير العقار'), l('Owner', 'المالك')], integrations: [l('Listing website', 'موقع العرض'), l('Payment reminders', 'تذكيرات السداد')] },
  { slug: 'multi-branch', icon: 'network', title: l('Multi-branch management', 'إدارة الفروع المتعددة'), problem: l('Each branch reports differently and head office can’t compare them.', 'كل فرع يرفع تقاريره بشكل مختلف والإدارة لا تقدر تقارن.'), modules: [l('Branches', 'الفروع'), l('Transfers between branches', 'التحويلات بين الفروع'), l('Branch reports', 'تقارير الفروع'), l('Central settings', 'إعدادات مركزية')], roles: [l('Head office', 'الإدارة العامة'), l('Branch manager', 'مدير الفرع')], integrations: [l('POS', 'نقاط البيع'), l('Inventory', 'المخزون')] },
  { slug: 'service-business', icon: 'briefcase', title: l('Service business management', 'إدارة شركات الخدمات'), problem: l('Jobs, technicians, and customer requests are coordinated by phone.', 'الطلبات والفنيون وطلبات العملاء تُنسق بالتليفون.'), modules: [l('Service requests', 'طلبات الخدمة'), l('Scheduling & dispatch', 'الجدولة والتوزيع'), l('Job status', 'حالة الطلب'), l('Invoices', 'الفواتير')], roles: [l('Dispatcher', 'منسق'), l('Technician', 'فني'), l('Customer', 'العميل')], integrations: [l('Maps', 'الخرائط'), l('WhatsApp updates', 'تحديثات واتساب')] },
];
