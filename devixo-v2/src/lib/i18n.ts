// Localization helpers. Every piece of content is stored as { en, ar } so a CMS
// can map one field per language without changing the components.
export type Lang = 'en' | 'ar';
export type L = { en: string; ar: string };
export const LANGS: Lang[] = ['en', 'ar'];

export const t = (v: L | string | undefined | null, lang: Lang): string =>
  v == null ? '' : typeof v === 'string' ? v : v[lang];

/** Base path for deployment under a sub-folder (e.g. GitHub Pages project site). */
export const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');

/** Build a localized URL. `path` is language-neutral, e.g. "services/ui-ux-design". */
export const href = (lang: Lang, path = ''): string => {
  const clean = path.replace(/^\/|\/$/g, '');
  return `${BASE}/${lang}/${clean ? clean + '/' : ''}`;
};
export const asset = (p: string) => `${BASE}/${p.replace(/^\//, '')}`;

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

// Interface strings (buttons, labels, form messages). Content lives in /data.
export const ui = {
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    services: { en: 'Services', ar: 'الخدمات' },
    work: { en: 'Our Work', ar: 'أعمالنا' },
    about: { en: 'About', ar: 'من نحن' },
    technologies: { en: 'Technologies', ar: 'التقنيات' },
    contact: { en: 'Contact', ar: 'تواصل معنا' },
    faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    blog: { en: 'Blog', ar: 'المدونة' },
    allServices: { en: 'All services', ar: 'كل الخدمات' },
    menu: { en: 'Menu', ar: 'القائمة' },
    close: { en: 'Close menu', ar: 'إغلاق القائمة' },
    openMenu: { en: 'Open menu', ar: 'فتح القائمة' },
    skip: { en: 'Skip to content', ar: 'تخطَّ إلى المحتوى' },
    langName: { en: 'العربية', ar: 'English' },
    langSwitchLabel: { en: 'Switch to Arabic', ar: 'التبديل إلى الإنجليزية' },
    breadcrumb: { en: 'Breadcrumb', ar: 'مسار التنقل' },
  },
  cta: {
    start: { en: 'Start a Project', ar: 'ابدأ مشروعك' },
    explore: { en: 'Explore Our Work', ar: 'تصفّح أعمالنا' },
    learnMore: { en: 'Learn more', ar: 'اعرف المزيد' },
    viewProject: { en: 'View project', ar: 'عرض المشروع' },
    visitSite: { en: 'Visit live site', ar: 'زيارة الموقع' },
    whatsapp: { en: 'Contact on WhatsApp', ar: 'تواصل عبر واتساب' },
    similar: { en: 'Start a Similar Project', ar: 'ابدأ مشروعًا مشابهًا' },
    allProjects: { en: 'View all projects', ar: 'عرض كل المشاريع' },
    allServices: { en: 'View all services', ar: 'عرض كل الخدمات' },
    readArticle: { en: 'Read article', ar: 'اقرأ المقال' },
    discuss: { en: 'Discuss your project', ar: 'ناقش مشروعك معنا' },
    inquire: { en: 'Ask about this system', ar: 'استفسر عن هذا النظام' },
    backHome: { en: 'Back to home', ar: 'العودة للرئيسية' },
  },
  labels: {
    platform: { en: 'Platform', ar: 'المنصة' },
    industry: { en: 'Industry', ar: 'المجال' },
    services: { en: 'Services', ar: 'الخدمات' },
    technologies: { en: 'Technologies', ar: 'التقنيات' },
    liveUrl: { en: 'Live site', ar: 'الموقع' },
    all: { en: 'All', ar: 'الكل' },
    search: { en: 'Search projects', ar: 'ابحث في المشاريع' },
    noResults: { en: 'No projects match your filters.', ar: 'لا توجد مشاريع تطابق اختياراتك.' },
    clearFilters: { en: 'Clear filters', ar: 'مسح الفلاتر' },
    screenshotSoon: { en: 'Screenshot coming soon', ar: 'لقطة الشاشة قريبًا' },
    illustrative: { en: 'Illustrative interface', ar: 'واجهة توضيحية' },
    cmsPlaceholder: { en: 'To be added from the CMS', ar: 'يُضاف لاحقًا من نظام إدارة المحتوى' },
    relatedProjects: { en: 'Related projects', ar: 'مشاريع ذات صلة' },
    primary: { en: 'Primary expertise', ar: 'خبرة أساسية' },
    supported: { en: 'Also supported', ar: 'ندعمها أيضًا' },
    minRead: { en: 'min read', ar: 'دقائق قراءة' },
    by: { en: 'By', ar: 'بقلم' },
    onThisPage: { en: 'On this page', ar: 'في هذه الصفحة' },
    modules: { en: 'Example modules', ar: 'وحدات مقترحة' },
    roles: { en: 'Typical user roles', ar: 'أدوار المستخدمين' },
    integrations: { en: 'Possible integrations', ar: 'تكاملات محتملة' },
    problem: { en: 'The problem', ar: 'المشكلة' },
    draft: { en: 'Draft — review with a legal advisor before publishing.', ar: 'مسودة — يُرجى مراجعتها مع مستشار قانوني قبل النشر.' },
    lastUpdated: { en: 'Last updated', ar: 'آخر تحديث' },
  },
  form: {
    name: { en: 'Full name', ar: 'الاسم بالكامل' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    company: { en: 'Company or business name', ar: 'اسم الشركة أو النشاط' },
    phone: { en: 'WhatsApp or phone number', ar: 'رقم واتساب أو الهاتف' },
    language: { en: 'Preferred language', ar: 'اللغة المفضلة' },
    projectType: { en: 'Project type', ar: 'نوع المشروع' },
    platform: { en: 'Preferred platform or technology', ar: 'المنصة أو التقنية المفضلة' },
    description: { en: 'Project description', ar: 'وصف المشروع' },
    features: { en: 'Required features', ar: 'المميزات المطلوبة' },
    budget: { en: 'Estimated budget range', ar: 'نطاق الميزانية التقريبي' },
    timeline: { en: 'Expected timeline', ar: 'الإطار الزمني المتوقع' },
    website: { en: 'Existing website URL', ar: 'رابط موقعك الحالي' },
    referral: { en: 'How did you hear about us?', ar: 'كيف عرفت عنّا؟' },
    optional: { en: 'Optional', ar: 'اختياري' },
    required: { en: 'Required', ar: 'مطلوب' },
    choose: { en: 'Select an option', ar: 'اختر' },
    consult: { en: "I'm not sure about the technical details — I'd like a consultation first.", ar: 'لست متأكدًا من التفاصيل التقنية — أريد استشارة أولًا.' },
    submit: { en: 'Send project request', ar: 'إرسال طلب المشروع' },
    sending: { en: 'Preparing your request…', ar: 'جارٍ تجهيز طلبك…' },
    privacy: {
      en: 'We use your details only to reply to this request. We never sell or share them.',
      ar: 'نستخدم بياناتك فقط للرد على هذا الطلب، ولا نبيعها أو نشاركها مع أي طرف.',
    },
    errName: { en: 'Please enter your name.', ar: 'من فضلك اكتب اسمك.' },
    errEmail: { en: 'Please enter a valid email address.', ar: 'من فضلك اكتب بريدًا إلكترونيًا صحيحًا.' },
    errType: { en: 'Please choose a project type.', ar: 'من فضلك اختر نوع المشروع.' },
    errDesc: { en: 'Tell us a little about the project (at least 20 characters).', ar: 'اكتب نبذة عن المشروع (20 حرفًا على الأقل).' },
    errUrl: { en: 'Please enter a full URL, starting with https://', ar: 'اكتب الرابط كاملًا يبدأ بـ https://' },
    errSummary: { en: 'Please fix the highlighted fields.', ar: 'من فضلك راجع الحقول المحددة.' },
    errSend: {
      en: "We couldn't send your request. Please try again, or reach us on WhatsApp.",
      ar: 'تعذّر إرسال طلبك. حاول مرة أخرى أو تواصل معنا عبر واتساب.',
    },
    successTitle: { en: 'Your request is ready', ar: 'طلبك جاهز' },
    successBody: {
      en: 'Tap the button below to send it to us on WhatsApp. We usually reply within one business day.',
      ar: 'اضغط الزر بالأسفل لإرساله إلينا عبر واتساب. نرد عادةً خلال يوم عمل.',
    },
    successSent: {
      en: 'Thanks — we received your request and will reply soon.',
      ar: 'شكرًا لك — استلمنا طلبك وسنرد عليك قريبًا.',
    },
    sendWhatsapp: { en: 'Send on WhatsApp', ar: 'إرسال عبر واتساب' },
    editRequest: { en: 'Edit request', ar: 'تعديل الطلب' },
  },
};
