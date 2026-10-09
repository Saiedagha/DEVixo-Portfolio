import type { L } from '../lib/i18n';

export type Block = { type: 'p'; text: L } | { type: 'h2'; text: L } | { type: 'ul'; items: L[] };
export type Post = {
  slug: string;
  title: L;
  excerpt: L;
  category: L;
  author: string;
  date: string; // ISO
  readMin: number;
  cover: string; // css visual key
  body: Block[];
  seo?: { title: L; description: L };
};

const P = (en: string, ar: string): Block => ({ type: 'p', text: { en, ar } });
const H = (en: string, ar: string): Block => ({ type: 'h2', text: { en, ar } });
const U = (...items: [string, string][]): Block => ({ type: 'ul', items: items.map(([en, ar]) => ({ en, ar })) });

export const posts: Post[] = [
  {
    slug: 'shopify-or-custom-store',
    title: { en: 'Shopify or a custom store? How to decide', ar: 'شوبيفاي أم متجر مبرمج خصيصًا؟ كيف تقرر' },
    excerpt: {
      en: 'Both can work. The right choice depends on your catalog, your operations, and what you’ll need a year from now.',
      ar: 'الاثنان ممكن ينجحوا. الاختيار الصحيح يعتمد على منتجاتك وطريقة تشغيلك وما ستحتاجه بعد سنة.',
    },
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    author: 'Devixo', date: '2026-10-09', readMin: 4, cover: 'store',
    body: [
      P('Most new stores should start on a hosted platform like Shopify. It handles hosting, security updates, checkout, and a large app ecosystem, so you can focus on products and marketing.', 'أغلب المتاجر الجديدة الأفضل لها أن تبدأ على منصة جاهزة مثل شوبيفاي. فهي تتولى الاستضافة وتحديثات الأمان وصفحة الدفع ومنظومة كبيرة من التطبيقات، لتركز أنت على المنتجات والتسويق.'),
      H('When a hosted platform is the right call', 'متى تكون المنصة الجاهزة هي الاختيار الصحيح'),
      U(['Your products and pricing are standard', 'منتجاتك وتسعيرك بشكل معتاد'], ['You want to launch quickly', 'تريد الإطلاق بسرعة'], ['Your team should manage the store without a developer', 'تريد أن يدير فريقك المتجر بدون مطوّر'], ['Available apps cover payments and shipping in your market', 'التطبيقات المتاحة تغطي الدفع والشحن في سوقك']),
      H('When custom development makes more sense', 'متى تكون البرمجة الخاصة أنسب'),
      U(['Your pricing, ordering, or fulfilment rules are unusual', 'قواعد التسعير أو الطلب أو التنفيذ عندك غير معتادة'], ['You need deep integration with an internal system', 'تحتاج تكاملًا عميقًا مع نظام داخلي'], ['Monthly app fees keep growing', 'اشتراكات التطبيقات الشهرية تزيد باستمرار'], ['You need full control over data and features', 'تحتاج تحكمًا كاملًا في البيانات والمميزات']),
      H('A practical middle path', 'حل وسط عملي'),
      P('Many businesses start on Shopify, then add custom pieces as they grow — a custom section, a private app, or a separate dashboard connected through the API. You get a fast launch without closing the door on custom work later.', 'كثير من الأنشطة تبدأ على شوبيفاي، ثم تضيف أجزاء مخصصة مع النمو — قسم مخصص أو تطبيق خاص أو لوحة تحكم منفصلة مرتبطة عبر الواجهة البرمجية. فتحصل على إطلاق سريع بدون غلق الباب أمام البرمجة الخاصة لاحقًا.'),
    ],
  },
  {
    slug: 'before-you-start-a-website',
    title: { en: '7 things to prepare before you start a website project', ar: '7 أشياء جهّزها قبل أن تبدأ مشروع موقعك' },
    excerpt: {
      en: 'A little preparation saves weeks. Here’s what to gather before your first call with a developer.',
      ar: 'قليل من التحضير يوفر أسابيع. هذه الأشياء جهّزها قبل أول مكالمة مع المطوّر.',
    },
    category: { en: 'Planning', ar: 'التخطيط' },
    author: 'Devixo', date: '2026-10-09', readMin: 3, cover: 'website',
    body: [
      P('You don’t need technical knowledge to start a website project, but having these ready makes the first conversation far more useful.', 'لا تحتاج معرفة تقنية لتبدأ مشروع موقع، لكن تجهيز هذه النقاط يجعل أول محادثة مفيدة أكثر بكثير.'),
      U(
        ['The main goal: sales, leads, bookings, or information', 'الهدف الأساسي: مبيعات أم عملاء محتملون أم حجوزات أم معلومات'],
        ['Who your visitors are and what they need to find', 'من هم زوارك وما الذي يبحثون عنه'],
        ['Your logo, brand colors, and any existing materials', 'شعارك وألوان علامتك وأي مواد موجودة'],
        ['A list of pages or a rough sitemap', 'قائمة بالصفحات أو خريطة مبدئية للموقع'],
        ['Three websites you like, and why', 'ثلاثة مواقع تعجبك، ولماذا'],
        ['Languages you need (Arabic, English, or both)', 'اللغات المطلوبة (عربي أو إنجليزي أو الاثنان)'],
        ['Who will update the content after launch', 'من سيحدّث المحتوى بعد الإطلاق'],
      ),
      P('If some of these are unclear, that’s fine — working them out together is part of the discovery step.', 'لو بعض هذه النقاط غير واضحة، لا مشكلة — توضيحها معًا جزء من مرحلة الاستكشاف.'),
    ],
  },
  {
    slug: 'when-spreadsheets-stop-working',
    title: { en: 'When spreadsheets stop working for your business', ar: 'عندما تتوقف الشيتات عن خدمة نشاطك' },
    excerpt: {
      en: 'Spreadsheets are a great start. Here are the signs it’s time for a proper management system.',
      ar: 'الشيتات بداية ممتازة. وهذه علامات أن الوقت حان لنظام إدارة حقيقي.',
    },
    category: { en: 'Business systems', ar: 'أنظمة الأعمال' },
    author: 'Devixo', date: '2026-10-09', readMin: 3, cover: 'dashboard',
    body: [
      P('Spreadsheets are flexible and free, which is why almost every business starts with them. The problems appear as more people, more data, and more steps get involved.', 'الشيتات مرنة ومجانية، ولذلك يبدأ بها تقريبًا كل نشاط. المشاكل تظهر مع زيادة الأشخاص والبيانات والخطوات.'),
      H('Signs you’ve outgrown them', 'علامات أنك تجاوزتها'),
      U(['Several people edit the same file and overwrite each other', 'أكثر من شخص يعدّل نفس الملف ويكتبون فوق بعض'], ['You can’t tell who changed what, or when', 'لا تعرف من غيّر ماذا ومتى'], ['Stock or balances don’t match reality', 'المخزون أو الأرصدة لا تطابق الواقع'], ['Reports take hours to prepare by hand', 'التقارير تأخذ ساعات لتجهيزها يدويًا'], ['Staff need access to some data but not all of it', 'الموظفون يحتاجون جزءًا من البيانات وليس كلها']),
      H('What a management system changes', 'ما الذي يغيّره نظام الإدارة'),
      P('A system gives each person the screens and permissions they need, keeps a history of changes, and produces reports automatically. Start small with the one process that hurts most, then grow from there.', 'النظام يعطي كل شخص الشاشات والصلاحيات التي يحتاجها، ويحتفظ بسجل للتغييرات، ويُخرج التقارير تلقائيًا. ابدأ صغيرًا بالعملية الأكثر إزعاجًا، ثم توسّع منها.'),
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
