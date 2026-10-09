import type { L } from '../lib/i18n';

export type Faq = { id: string; category: 'general' | 'ecommerce' | 'process' | 'support'; q: L; a: L; order: number };
export const faqCategories = [
  { id: 'general', label: { en: 'General', ar: 'عام' } },
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'المتاجر الإلكترونية' } },
  { id: 'process', label: { en: 'Process & delivery', ar: 'طريقة العمل والتسليم' } },
  { id: 'support', label: { en: 'Hosting & support', ar: 'الاستضافة والدعم' } },
] as const;

export const faqs: Faq[] = [
  {
    id: 'project-types', category: 'general', order: 1,
    q: { en: 'What types of projects does Devixo build?', ar: 'ما أنواع المشاريع التي تنفذها ديفيكسو؟' },
    a: {
      en: 'Online stores (mostly on Shopify), company and service websites, landing pages, custom web applications, admin dashboards, and business management systems such as inventory, CRM, or booking tools. We also design interfaces and support projects after launch.',
      ar: 'متاجر إلكترونية (غالبًا على شوبيفاي)، ومواقع الشركات والخدمات، وصفحات الهبوط، وتطبيقات الويب المخصصة، ولوحات التحكم، وأنظمة إدارة الأعمال مثل المخزون وإدارة العملاء والحجوزات. كما نصمم الواجهات وندعم المشاريع بعد الإطلاق.',
    },
  },
  {
    id: 'platform-vs-custom', category: 'general', order: 2,
    q: { en: 'Should I use a platform like Shopify or build something custom?', ar: 'هل أستخدم منصة مثل شوبيفاي أم أبرمج نظامًا خاصًا؟' },
    a: {
      en: 'If a hosted platform already does what you need, it is usually faster and cheaper to start with. Custom development makes sense when your workflow, pricing, data, or integrations don’t fit the platform — or when monthly app fees start costing more than owning the software. We’ll recommend the option that fits your situation, even if it is the simpler one.',
      ar: 'لو المنصة الجاهزة تؤدي احتياجك، فهي غالبًا أسرع وأقل تكلفة في البداية. البرمجة الخاصة تكون منطقية عندما لا تناسب المنصة طريقة عملك أو التسعير أو البيانات أو التكاملات — أو عندما تصبح اشتراكات التطبيقات الشهرية أغلى من امتلاك البرنامج. سنرشح لك الخيار المناسب لوضعك، حتى لو كان الأبسط.',
    },
  },
  {
    id: 'shopify', category: 'ecommerce', order: 3,
    q: { en: 'What do you do on Shopify stores?', ar: 'ماذا تقدمون في متاجر شوبيفاي؟' },
    a: {
      en: 'New store setup, theme customization, custom sections in Liquid, product and collection structure, payment and shipping setup, domain connection, Arabic/English storefronts, migrations from other platforms, and ongoing changes after launch.',
      ar: 'إنشاء المتجر، وتخصيص الثيم، وأقسام مخصصة بلغة Liquid، وتنظيم المنتجات والتصنيفات، وإعداد الدفع والشحن، وربط الدومين، وواجهات عربية وإنجليزية، ونقل المتاجر من منصات أخرى، وتعديلات مستمرة بعد الإطلاق.',
    },
  },
  {
    id: 'timelines', category: 'process', order: 4,
    q: { en: 'How long does a project take, and how is it priced?', ar: 'كم يستغرق المشروع، وكيف يتم تسعيره؟' },
    a: {
      en: 'It depends on scope. After a short discovery conversation we send a written scope with the features, an estimated timeline, and a price for that scope. If requirements change during the project, we agree on the change before doing the work.',
      ar: 'يعتمد ذلك على نطاق العمل. بعد محادثة قصيرة لفهم المشروع نرسل نطاق عمل مكتوبًا بالمميزات وإطار زمني تقديري وسعر لهذا النطاق. ولو تغيرت المتطلبات أثناء التنفيذ، نتفق على التغيير قبل تنفيذه.',
    },
  },
  {
    id: 'hosting', category: 'support', order: 5,
    q: { en: 'Do you handle domains, hosting, and third-party services?', ar: 'هل تتولون الدومين والاستضافة والخدمات الخارجية؟' },
    a: {
      en: 'Yes. We can help you choose and connect a domain, set up hosting suitable for the project, and configure services such as payment gateways, shipping providers, email, and analytics. Accounts are created in your name wherever possible so you keep control.',
      ar: 'نعم. نساعدك في اختيار الدومين وربطه، وإعداد استضافة مناسبة للمشروع، وضبط خدمات مثل بوابات الدفع وشركات الشحن والبريد والتحليلات. ونُنشئ الحسابات باسمك كلما أمكن لتظل متحكمًا فيها.',
    },
  },
  {
    id: 'integrations', category: 'ecommerce', order: 6,
    q: { en: 'Can you connect payment gateways and shipping companies?', ar: 'هل يمكنكم ربط بوابات الدفع وشركات الشحن؟' },
    a: {
      en: 'Yes, depending on what the provider and your platform support. On hosted platforms we use available apps or official integrations; in custom builds we integrate through the provider’s API. You’ll need an active merchant account with the provider.',
      ar: 'نعم، حسب ما يدعمه المزوّد ومنصتك. في المنصات الجاهزة نستخدم التطبيقات أو التكاملات الرسمية المتاحة، وفي البرمجة الخاصة نربط عبر الواجهة البرمجية للمزوّد. وستحتاج إلى حساب تاجر مفعّل لدى المزوّد.',
    },
  },
  {
    id: 'ownership', category: 'process', order: 7,
    q: { en: 'Who owns the project when it is finished?', ar: 'لمن تؤول ملكية المشروع بعد انتهائه؟' },
    a: {
      en: 'You do. On delivery you receive access to your store or website, the source code for custom work, and the accounts used for hosting and services. Any third-party licenses (themes, apps, plugins) remain subject to their own terms.',
      ar: 'لك أنت. عند التسليم تحصل على صلاحيات متجرك أو موقعك، والكود المصدري للأعمال المبرمجة خصيصًا، والحسابات المستخدمة للاستضافة والخدمات. وتظل تراخيص الطرف الثالث (الثيمات والتطبيقات والإضافات) خاضعة لشروطها.',
    },
  },
  {
    id: 'maintenance', category: 'support', order: 8,
    q: { en: 'What happens after launch?', ar: 'ماذا يحدث بعد الإطلاق؟' },
    a: {
      en: 'Every project includes an agreed support period after launch for fixes. After that, we offer ongoing maintenance and enhancements — updates, new features, and technical improvements — based on what your project needs.',
      ar: 'كل مشروع يشمل فترة دعم متفق عليها بعد الإطلاق للإصلاحات. وبعدها نقدم صيانة وتطوير مستمرين — تحديثات ومميزات جديدة وتحسينات تقنية — حسب احتياج مشروعك.',
    },
  },
  {
    id: 'international', category: 'general', order: 9,
    q: { en: 'Do you work with clients outside Egypt?', ar: 'هل تعملون مع عملاء خارج مصر؟' },
    a: {
      en: 'Yes. We work remotely in Arabic and English, using WhatsApp, video calls, and shared project updates. Time zones and payment methods are agreed at the start.',
      ar: 'نعم. نعمل عن بُعد بالعربية والإنجليزية، عبر واتساب ومكالمات الفيديو وتحديثات المشروع المشتركة. ونتفق على فروق التوقيت وطرق الدفع من البداية.',
    },
  },
  {
    id: 'consultation', category: 'process', order: 10,
    q: { en: 'I’m not technical. Can I still start a project?', ar: 'لست متخصصًا تقنيًا، هل أستطيع بدء مشروع؟' },
    a: {
      en: 'Of course. Tell us what you want to achieve in your own words. We’ll ask the right questions, explain the options in plain language, and suggest a sensible first step.',
      ar: 'بالتأكيد. احكِ لنا ما تريد تحقيقه بكلماتك. سنسأل الأسئلة المناسبة ونشرح الخيارات بلغة بسيطة ونقترح خطوة أولى منطقية.',
    },
  },
  {
    id: 'arabic', category: 'general', order: 11,
    q: { en: 'Can my website or store be in Arabic and English?', ar: 'هل يمكن أن يكون موقعي أو متجري بالعربية والإنجليزية؟' },
    a: {
      en: 'Yes. We build bilingual sites with proper right-to-left layouts for Arabic — not just translated text in a left-to-right design.',
      ar: 'نعم. نبني مواقع ثنائية اللغة بتخطيط صحيح من اليمين لليسار للعربية — وليس مجرد نص مترجم داخل تصميم إنجليزي.',
    },
  },
];

export const faqsById = (ids: string[]) => ids.map((id) => faqs.find((f) => f.id === id)!).filter(Boolean);
export const homeFaqIds = ['project-types', 'platform-vs-custom', 'shopify', 'timelines', 'hosting', 'ownership', 'maintenance', 'international'];
