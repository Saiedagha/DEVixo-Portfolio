import type { L } from '../lib/i18n';

export type ProjectCategory = 'ecommerce' | 'websites' | 'custom';
export const projectCategories: { id: ProjectCategory; label: L }[] = [
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'متاجر إلكترونية' } },
  { id: 'websites', label: { en: 'Corporate & Websites', ar: 'مواقع الشركات' } },
  { id: 'custom', label: { en: 'Custom Development', ar: 'برمجة خاصة' } },
];

export type Shot = { src: string; kind: 'desktop' | 'mobile'; caption: L };

/**
 * Portfolio collection. Platform, theme, markets and features were checked on each
 * live site (October 2026). Business results are left null until confirmed by clients.
 */
export type Project = {
  slug: string;
  title: string;
  subtitle: L;
  industry: L;
  market: L | null;
  categories: ProjectCategory[];
  services: string[];
  platform: string | null;
  technologies: string[];
  url: string;
  image: string | null;
  gallery: Shot[];
  featured: boolean;
  status: 'published' | 'draft';
  summary: L;
  context: L | null;
  requirements: L | null;
  solution: L | null;
  scope: L[] | null;
  implementation: L | null;
  results: L | null;
  accent: string;
};

const l = (en: string, ar: string): L => ({ en, ar });
const shots = (key: string, inner = true): Shot[] => [
  ...(inner ? [{ src: `${key}-inner.webp`, kind: 'desktop' as const, caption: l('Product page', 'صفحة المنتج') }] : []),
  { src: `${key}-m.webp`, kind: 'mobile', caption: l('Mobile homepage', 'الرئيسية على الموبايل') },
];

const p = (x: Partial<Project> & Pick<Project, 'slug' | 'title' | 'subtitle' | 'industry' | 'categories' | 'url' | 'summary'> & { key: string; inner?: boolean }): Project => {
  const { key, inner, ...rest } = x;
  return {
    services: [], platform: null, technologies: [], image: `${key}.webp`, gallery: shots(key, inner !== false),
    featured: false, status: 'published', market: null,
    context: null, requirements: null, solution: null, scope: null, implementation: null, results: null, accent: '#E9E6DF',
    ...rest,
  };
};

export const projects: Project[] = [
  p({
    key: 'zegimart', slug: 'zegimart', title: 'ZegiMart',
    subtitle: l('Bilingual home & lifestyle store for Canada', 'متجر منزل وأسلوب حياة ثنائي اللغة في كندا'),
    industry: l('Home & lifestyle', 'المنزل وأسلوب الحياة'), market: l('Canada', 'كندا'),
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://zegimart.ca', featured: true,
    summary: l(
      'A large-catalog Shopify store for ZegiMart, a Canadian retailer of rugs, home goods, lifestyle and everyday essentials — built on a custom DEVixo theme with English and French storefronts.',
      'متجر شوبيفاي بكتالوج كبير لـ ZegiMart، متجر كندي للسجاد ومستلزمات المنزل وأسلوب الحياة والاحتياجات اليومية — مبني على قالب DEVixo مخصص بواجهتين بالإنجليزية والفرنسية.',
    ),
    context: l(
      'ZegiMart sells across Canada with a wide range: area rugs and runners, home & living, lifestyle and salon care, everyday essentials, and business supplies. Canadian shoppers expect both English and French, prices in CAD, and clear delivery and return terms.',
      'يبيع ZegiMart في كل كندا بتشكيلة واسعة: سجاد وممرات، ومستلزمات المنزل، وأسلوب الحياة والعناية، والاحتياجات اليومية، ومستلزمات الأعمال. والعميل الكندي يتوقع الموقع بالإنجليزية والفرنسية والأسعار بالدولار الكندي وشروط توصيل واسترجاع واضحة.',
    ),
    solution: l(
      'We built a custom Shopify theme around fast product discovery: a full-width search bar, an "All Categories" menu, and a mega menu for each department, so shoppers can reach any of the store’s categories in a couple of clicks.',
      'بنينا قالب شوبيفاي مخصص يركّز على الوصول السريع للمنتج: شريط بحث عريض، وقائمة "كل الأقسام"، وقائمة كبيرة لكل قسم، ليصل العميل لأي تصنيف في المتجر بضغطتين.',
    ),
    scope: [l('Custom Shopify theme', 'قالب شوبيفاي مخصص'), l('English / French storefront', 'واجهة إنجليزية وفرنسية'), l('Mega-menu navigation', 'قوائم تنقل كبيرة'), l('Product page design', 'تصميم صفحة المنتج'), l('Wishlist & account', 'المفضلة والحساب')],
    implementation: l(
      'Bilingual EN/FR storefront with CAD pricing; homepage sections for "Shop by Living Domain", curated "Zegi Select" picks, customer favourites and deals; product pages with image gallery, ratings, stock status, express checkout and trust badges for returns and warranty; wishlist, account and a trust strip highlighting Canadian fulfilment hubs, 30-day returns and bilingual support.',
      'واجهة ثنائية اللغة (إنجليزي/فرنسي) بأسعار بالدولار الكندي؛ وأقسام في الرئيسية مثل "تسوّق حسب المساحة" واختيارات "Zegi Select" والأكثر طلبًا والعروض؛ وصفحات منتجات بمعرض صور وتقييمات وحالة المخزون ودفع سريع وشارات ثقة للاسترجاع والضمان؛ مع المفضلة والحساب وشريط يوضح مراكز الشحن في كندا والاسترجاع خلال 30 يومًا والدعم بلغتين.',
    ),
    accent: '#EDE7DD',
  }),
  p({
    key: 'bluetech', slug: 'blue-tech-kuwait', title: 'Blue Tech Kuwait',
    subtitle: l('Bilingual laptop store in Kuwait', 'متجر لابتوبات ثنائي اللغة في الكويت'),
    industry: l('Electronics', 'الإلكترونيات'), market: l('Kuwait', 'الكويت'),
    categories: ['ecommerce'], services: ['ecommerce-development', 'integrations-automation'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://bluetech-kw.com', featured: true,
    summary: l(
      'An English and Arabic Shopify store for Blue Tech, a Kuwaiti retailer of like-new business, workstation and gaming laptops — with detailed spec-led product pages, monthly offers and local payment and delivery options.',
      'متجر شوبيفاي بالعربية والإنجليزية لـ Blue Tech، متجر كويتي للابتوبات المستعملة بحالة ممتازة (بيزنس ووركستيشن وجيمنج) — بصفحات منتجات مفصّلة بالمواصفات وعروض شهرية وخيارات دفع وتوصيل محلية.',
    ),
    context: l(
      'Blue Tech sells used and refurbished laptops from brands like HP and Dell. Buyers compare processors, RAM, storage and graphics before deciding, and want reassurance on condition, returns and payment.',
      'تبيع Blue Tech لابتوبات مستعملة ومجددة من ماركات مثل HP وDell. والعميل بيقارن المعالج والرامات والتخزين وكارت الشاشة قبل ما يقرر، ومحتاج يطمّن على الحالة والاسترجاع وطريقة الدفع.',
    ),
    solution: l(
      'We set up the store on Shopify with the Kalles theme, structured the catalog by laptop type and brand, and made every product title and page carry the key specs so customers can compare at a glance.',
      'جهّزنا المتجر على شوبيفاي بقالب Kalles، ونظّمنا الكتالوج حسب نوع اللابتوب والماركة، وخلّينا كل اسم منتج وصفحته فيهم أهم المواصفات عشان العميل يقارن بسرعة.',
    ),
    scope: [l('Shopify store setup', 'إعداد متجر شوبيفاي'), l('Arabic / English storefront', 'واجهة عربية وإنجليزية'), l('Catalog & brand structure', 'تنظيم الكتالوج والماركات'), l('Buy-now-pay-later integration', 'ربط التقسيط'), l('WhatsApp contact', 'التواصل عبر واتساب')],
    implementation: l(
      'Bilingual EN/AR storefront with prices in KWD; categories for business, touchscreen, 2-in-1, workstation, graphics and gaming laptops plus shop-by-brand; "Monthly Offers" and one-day deals with sale pricing; product pages with specifications, condition, SKU, delivery options (standard, express, store pickup) and pay-in-4 through Deema; trust strip for free shipping, open-before-pay, 14-day returns and Grade A condition; WhatsApp and phone contact in the header.',
      'واجهة ثنائية اللغة بأسعار بالدينار الكويتي؛ وأقسام للابتوبات البيزنس والتاتش و2 في 1 والووركستيشن والجرافيك والجيمنج مع التسوق حسب الماركة؛ و"عروض الشهر" وعروض اليوم الواحد بأسعار مخفّضة؛ وصفحات منتجات بالمواصفات والحالة ورقم المنتج وخيارات التوصيل (عادي وسريع واستلام من المحل) والتقسيط على 4 دفعات عبر Deema؛ وشريط ثقة للشحن المجاني والفحص قبل الدفع والاسترجاع خلال 14 يومًا؛ وأرقام واتساب والتليفون في أعلى الموقع.',
    ),
    accent: '#DDE5F2',
  }),
  p({
    key: 'glowbyrose', slug: 'glow-by-rose', title: 'Glow by Rose',
    subtitle: l('K-beauty skincare store', 'متجر عناية بالبشرة كوري'),
    industry: l('Beauty & skincare', 'التجميل والعناية بالبشرة'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://glowbyrose.shop', featured: true,
    summary: l(
      'A Shopify store for Glow by Rose, an Egyptian retailer of Korean skincare — built on a custom DEVixo theme with shopping by concern, by product type and by brand.',
      'متجر شوبيفاي لـ Glow by Rose، متجر مصري لمنتجات العناية بالبشرة الكورية — مبني على قالب DEVixo مخصص مع التسوق حسب المشكلة ونوع المنتج والماركة.',
    ),
    context: l(
      'Glow by Rose sells authentic K-beauty products from brands such as Anua, Cosrx, Medicube and Numbuzin. Skincare shoppers usually look for a concern (dark spots, dark circles) or a trusted brand rather than browsing everything.',
      'تبيع Glow by Rose منتجات كورية أصلية من ماركات زي Anua وCosrx وMedicube وNumbuzin. وعميلة العناية بالبشرة غالبًا بتدوّر بمشكلة معينة (بقع داكنة، هالات) أو ماركة بتثق فيها، مش بتتصفح كل حاجة.',
    ),
    solution: l(
      'We designed a soft, brand-led storefront in pink and built navigation around how customers shop skincare: by concern, by product type, and by brand — with item counts so shoppers know what’s in stock.',
      'صممنا واجهة ناعمة بهوية العلامة باللون الوردي، وبنينا التنقل على طريقة تسوق منتجات العناية: حسب المشكلة ونوع المنتج والماركة — مع عدد المنتجات في كل قسم.',
    ),
    scope: [l('Custom Shopify theme', 'قالب شوبيفاي مخصص'), l('Brand & concern navigation', 'التنقل حسب الماركة والمشكلة'), l('Bundles & offers', 'الباقات والعروض'), l('Product page design', 'تصميم صفحة المنتج')],
    implementation: l(
      'Collections for cleansers, serums, toners, masks, eye care, dark circles and dark spots; "Shop by Brand" grid with product counts; bundles, bestsellers and offers on the homepage; announcement bar for free shipping over EGP 3,000 and authenticity guarantee; product pages with sale pricing and detailed Arabic usage descriptions; mobile bottom navigation.',
      'أقسام للغسول والسيروم والتونر والماسكات والعناية بالعين والهالات والبقع الداكنة؛ وشبكة "تسوق حسب الماركة" بعدد المنتجات؛ والباقات والأكثر مبيعًا والعروض في الرئيسية؛ وشريط إعلانات للشحن المجاني فوق 3,000 جنيه وضمان الأصالة؛ وصفحات منتجات بأسعار العروض ووصف استخدام مفصّل بالعربي؛ وقائمة سفلية على الموبايل.',
    ),
    accent: '#F7DCE4',
  }),
  p({
    key: 'towntech', slug: 'towntech', title: 'Town Tech Shop',
    subtitle: l('Custom-built Arabic store for surveillance systems', 'متجر عربي مبرمج خصيصًا لأنظمة المراقبة'),
    industry: l('Security & electronics', 'أنظمة المراقبة والإلكترونيات'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce', 'custom'], services: ['ecommerce-development', 'custom-software-development'],
    technologies: ['react', 'javascript'], url: 'https://towntechshop.com', featured: true,
    summary: l(
      'A custom-coded Arabic e-commerce store and admin dashboard for Town Tech, an Egyptian supplier of surveillance cameras, recorders and accessories — including installation and site-inspection requests.',
      'متجر إلكتروني عربي مبرمج خصيصًا مع لوحة تحكم لـ Town Tech، مورد مصري لكاميرات المراقبة وأجهزة التسجيل وملحقاتها — مع طلبات المعاينة والتركيب.',
    ),
    context: l(
      'Town Tech doesn’t just sell products — customers often need a technician to inspect the site and install the system. The store had to handle both buying online and requesting a visit.',
      'Town Tech مش بتبيع منتجات بس — العميل غالبًا محتاج فني يعاين المكان ويركّب النظام. فالمتجر كان لازم يخدم الشراء أونلاين وطلب الزيارة مع بعض.',
    ),
    solution: l(
      'Instead of a hosted platform, we built the store as a custom React application with its own admin dashboard, so the business controls products, categories and features directly.',
      'بدل المنصات الجاهزة، بنينا المتجر كتطبيق React مبرمج خصيصًا بلوحة تحكم خاصة، عشان صاحب النشاط يتحكم في المنتجات والأقسام والمميزات بنفسه.',
    ),
    scope: [l('Custom storefront (React)', 'واجهة مبرمجة خصيصًا (React)'), l('Admin dashboard', 'لوحة تحكم'), l('Arabic RTL interface', 'واجهة عربية RTL'), l('Inspection & installation requests', 'طلبات المعاينة والتركيب'), l('WhatsApp contact', 'التواصل عبر واتساب')],
    implementation: l(
      'Full Arabic right-to-left storefront; categories for cameras, hard drives, recorders, cables and power; "Request an inspection" flow; favourites, orders, product comparison and cart; project gallery of completed installations and customer reviews; trust strip for nationwide delivery, warranty, cash-on-delivery or online payment, and returns; newsletter signup and WhatsApp button.',
      'واجهة عربية كاملة من اليمين لليسار؛ وأقسام للكاميرات والهاردات وأجهزة التسجيل والكابلات والشواحن؛ ومسار "اطلب معاينة"؛ والمفضلة والطلبات ومقارنة المنتجات والسلة؛ ومعرض لأعمال التركيب المنفذة وآراء العملاء؛ وشريط ثقة للتوصيل لكل المحافظات والضمان والدفع عند الاستلام أو أونلاين والاسترجاع؛ والاشتراك في النشرة وزر واتساب.',
    ),
    accent: '#DCE3EC',
  }),
  p({
    key: 'eva', slug: 'eva-fashion', title: 'Eva Fashion EG',
    subtitle: l('Women’s fashion store selling across the Gulf', 'متجر أزياء نسائية يبيع في الخليج'),
    industry: l('Fashion', 'الأزياء'), market: l('Egypt & GCC', 'مصر والخليج'),
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://www.evafashioneg.com', featured: true,
    summary: l(
      'A Shopify store for Eva Fashion, an online women’s clothing brand — set up with Arabic and English versions for Saudi Arabia, the UAE, Bahrain, Qatar and Kuwait.',
      'متجر شوبيفاي لـ Eva Fashion، علامة ملابس نسائية أونلاين — بنسخ عربية وإنجليزية للسعودية والإمارات والبحرين وقطر والكويت.',
    ),
    solution: l(
      'Built on the Wokiee theme and configured for multiple markets, so each Gulf country gets its own Arabic and English version of the store.',
      'مبني على قالب Wokiee ومضبوط لأكثر من سوق، فكل دولة خليجية ليها نسخة عربي وإنجليزي من المتجر.',
    ),
    scope: [l('Shopify store setup', 'إعداد متجر شوبيفاي'), l('Multi-market & bilingual', 'تعدد الأسواق واللغتين'), l('Category structure', 'هيكلة الأقسام')],
    implementation: l(
      'Category navigation for tracksuits & sets, jackets, shirts, pants, sweatshirts, homewear and kaftans with "New" and "Hot" labels; homepage sections for new arrivals, top sellers and featured categories; product cards with colour options and quick add-to-cart; customer accounts and order tracking.',
      'تنقل بين أقسام الترينجات والجواكت والقمصان والبناطيل والسويتشيرتات وملابس البيت والقفاطين مع علامات "جديد" و"رائج"؛ وأقسام في الرئيسية للوصول الجديد والأكثر مبيعًا؛ وكروت منتجات بالألوان وإضافة سريعة للسلة؛ وحسابات العملاء ومتابعة الطلبات.',
    ),
    accent: '#ECE4EA',
  }),
  p({
    key: 'amrgazzaz', slug: 'amr-gazzaz', title: 'Amr Gazzaz (AG Store)',
    subtitle: l('Luxury multi-category store in Saudi Arabia', 'متجر منتجات فاخرة متعدد الأقسام في السعودية'),
    industry: l('Luxury retail', 'المنتجات الفاخرة'), market: l('Saudi Arabia', 'السعودية'),
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://amrgazzaz.com',
    summary: l(
      'A bilingual Shopify store for AG Store by Amr Gazzaz in Saudi Arabia — perfumes, watches, cosmetics, antiques, jewelry and more, with exclusive and international brands.',
      'متجر شوبيفاي ثنائي اللغة لـ AG Store من عمرو جزاز في السعودية — عطور وساعات ومستحضرات تجميل وتحف ومجوهرات وغيرها، بماركات حصرية وعالمية.',
    ),
    implementation: l(
      'Arabic and English storefront priced in SAR; a deep category menu (perfumes by type, watches, cosmetics, shemagh, oud, pens, antiques, leather goods); shop by gender, exclusive brands and international brands; seasonal campaign pages such as Saudi National Day offers; product filtering for a large catalog.',
      'واجهة عربية وإنجليزية بالأسعار بالريال السعودي؛ وقائمة أقسام متعددة المستويات (العطور حسب النوع، الساعات، التجميل، الشماغ، العود، الأقلام، التحف، المنتجات الجلدية)؛ والتسوق حسب الفئة والماركات الحصرية والعالمية؛ وصفحات حملات موسمية مثل عروض اليوم الوطني؛ وفلاتر للكتالوج الكبير.',
    ),
    scope: [l('Shopify store', 'متجر شوبيفاي'), l('Arabic / English', 'عربي وإنجليزي'), l('Large catalog structure', 'هيكلة كتالوج كبير')],
    accent: '#E3E6E9',
  }),
  p({
    key: 'velcot', slug: 'velcot', title: 'Velcot',
    subtitle: l('Premium bedding store with custom orders', 'متجر مفروشات فاخرة مع طلبات مخصصة'),
    industry: l('Home & bedding', 'المنزل والمفروشات'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://velcot.net',
    summary: l(
      'A Shopify store for Velcot, a premium bedding brand — bedsheets, quilts, duvet cover sets and kids’ bedding, plus a page for ordering custom pieces.',
      'متجر شوبيفاي لـ Velcot، علامة مفروشات فاخرة — ملايات وكوفرتات وأطقم ألحفة ومفروشات أطفال، مع صفحة لطلب قطع مخصصة.',
    ),
    implementation: l(
      'Elegant storefront on the Dwell theme; collections for bedsheets, quilts, duvet cover sets and kids’ bedding; "Create your own custom piece" section; scrolling announcement bar; social feed section.',
      'واجهة أنيقة على قالب Dwell؛ وأقسام للملايات والكوفرتات وأطقم الألحفة ومفروشات الأطفال؛ وقسم "صمّم قطعتك الخاصة"؛ وشريط إعلانات متحرك؛ وقسم لحسابات التواصل الاجتماعي.',
    ),
    scope: [l('Store design', 'تصميم المتجر'), l('Shopify setup', 'إعداد شوبيفاي'), l('Custom-order page', 'صفحة الطلبات المخصصة')],
    accent: '#E8E1D7',
  }),
  p({
    key: 'topaz', slug: 'topaz', title: 'Topaz',
    subtitle: l('Jewelry & accessories store with personalization', 'متجر مجوهرات وإكسسوارات مع تخصيص القطع'),
    industry: l('Jewelry & accessories', 'المجوهرات والإكسسوارات'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://topazwebsite.myshopify.com',
    summary: l(
      'A Shopify store for Topaz Accessories — necklaces, bracelets, rings and gifts, with a dedicated flow for customizing your own piece.',
      'متجر شوبيفاي لـ Topaz للإكسسوارات — سلاسل وأساور وخواتم وهدايا، مع مسار مخصص لتصميم قطعتك.',
    ),
    implementation: l(
      'Built on the Prestige theme; collections for women and men (necklaces, bracelets, earrings, rings, groom’s collection, misbaha, Quran bookmarks); "Customize your Topaz piece" page; product options for colour and finish; best sellers and reviews on the homepage; care instructions and policy pages.',
      'مبني على قالب Prestige؛ وأقسام للسيدات والرجال (سلاسل، أساور، حلقان، خواتم، مجموعة العريس، سبح، فواصل مصحف)؛ وصفحة "صمّم قطعتك"؛ وخيارات للون والتشطيب؛ والأكثر مبيعًا وآراء العملاء في الرئيسية؛ وصفحات العناية والسياسات.',
    ),
    scope: [l('Shopify store setup', 'إعداد متجر شوبيفاي'), l('Personalization page', 'صفحة التخصيص'), l('Collections structure', 'هيكلة الأقسام')],
    accent: '#E2E0EE',
  }),
  p({
    key: 'orin', slug: 'orin-store', title: 'Orin',
    subtitle: l('Bilingual apparel brand store', 'متجر علامة ملابس ثنائي اللغة'),
    industry: l('Apparel', 'الملابس'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://orin-store.com',
    summary: l(
      'A Shopify store for Orin, an apparel brand with manufacturing experience since 2008 — Arabic and English versions, bundles and a clean, product-first design.',
      'متجر شوبيفاي لـ Orin، علامة ملابس بخبرة تصنيع منذ 2008 — بنسختين عربي وإنجليزي وباقات منتجات وتصميم نظيف يبرز المنتج.',
    ),
    implementation: l(
      'Built on the Dawn theme with an Arabic/English language switcher; bundle products with savings; best-seller and all-products sections; brand story and community section; free-shipping bar for Cairo & Giza; shipping, returns and payment policy pages.',
      'مبني على قالب Dawn مع زر تبديل اللغة عربي/إنجليزي؛ ومنتجات بالباقات بسعر أقل؛ وأقسام الأكثر مبيعًا وكل المنتجات؛ وقصة العلامة ومجتمعها؛ وشريط الشحن المجاني للقاهرة والجيزة؛ وصفحات الشحن والاسترجاع والدفع.',
    ),
    scope: [l('Shopify store setup', 'إعداد متجر شوبيفاي'), l('Arabic / English', 'عربي وإنجليزي'), l('Bundles', 'الباقات')],
    accent: '#E5E9E2',
  }),
  p({
    key: 'nushea', slug: 'nushea', title: 'Nushéa',
    subtitle: l('Skincare & beauty store', 'متجر عناية بالبشرة والتجميل'),
    industry: l('Beauty & skincare', 'التجميل والعناية بالبشرة'),
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://nushea.shop',
    summary: l(
      'A Shopify store for Nushéa, a skincare and beauty brand — makeup, glow tools, clear-skin essentials and bodycare, with order tracking and customer reviews.',
      'متجر شوبيفاي لـ Nushéa، علامة عناية بالبشرة وتجميل — مكياج وأدوات نضارة ومنتجات صفاء البشرة والعناية بالجسم، مع تتبع الطلبات وآراء العملاء.',
    ),
    implementation: l(
      'Brand-led pink storefront with a "Nushéa Promise" hero; collections for makeup, glow tools, clear-skin essentials and bodycare; "Track your order" page; reviews page; trust icons for quality, safety and worldwide shipping; customer accounts.',
      'واجهة وردية بهوية العلامة مع قسم "وعد Nushéa"؛ وأقسام للمكياج وأدوات النضارة ومنتجات صفاء البشرة والعناية بالجسم؛ وصفحة "تتبع طلبك"؛ وصفحة آراء العملاء؛ وأيقونات ثقة للجودة والأمان والشحن الدولي؛ وحسابات العملاء.',
    ),
    scope: [l('Store design', 'تصميم المتجر'), l('Shopify setup', 'إعداد شوبيفاي'), l('Order tracking page', 'صفحة تتبع الطلبات')],
    accent: '#EFE2E0',
  }),
  p({
    key: 'hayba', slug: 'hayba', title: 'Hayba',
    subtitle: l('Fashion brand store', 'متجر علامة أزياء'),
    industry: l('Fashion', 'الأزياء'), market: l('Egypt', 'مصر'),
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify', 'liquid'], url: 'https://hayba.net',
    summary: l(
      'A Shopify store for Hayba (هَيبة), a fashion brand built around elegant everyday pieces — a minimal storefront that keeps the focus on the collection.',
      'متجر شوبيفاي لـ «هَيبة»، علامة أزياء بقطع يومية أنيقة — واجهة بسيطة تركّز على التشكيلة.',
    ),
    implementation: l(
      'Built on Shopify’s Horizon theme; a focused catalog with sale pricing and "sold out" states; brand story page; clean product pages for linen sets, shirts, dresses and pants.',
      'مبني على قالب Horizon من شوبيفاي؛ وكتالوج مركّز بأسعار العروض وحالة "نفدت الكمية"؛ وصفحة قصة العلامة؛ وصفحات منتجات نظيفة للأطقم الكتان والقمصان والفساتين والبناطيل.',
    ),
    scope: [l('Shopify store setup', 'إعداد متجر شوبيفاي'), l('Theme customization', 'تخصيص القالب')],
    accent: '#E9DCCB',
  }),
  p({
    key: 'elhamd', slug: 'el-hamd-curtains', title: 'El-Hamd Curtains', inner: false,
    subtitle: l('Curtains & home décor website', 'موقع ستائر وديكور منزلي'),
    industry: l('Home décor', 'الديكور المنزلي'),
    categories: ['websites'], services: ['website-development'], technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/EL-hamd/',
    summary: l(
      'A responsive website for El-Hamd, a curtains and home décor brand, presenting curtain designs, styles and accessories in an organized, mobile-friendly layout.',
      'موقع متجاوب لـ «الحمد»، علامة ستائر وديكور منزلي، يعرض تصميمات الستائر وأنواعها وإكسسواراتها بتخطيط منظم ومناسب للموبايل.',
    ),
  }),
  p({
    key: 'frid', slug: 'restaurant-website', title: 'Frid Chicken', inner: false,
    subtitle: l('Restaurant website', 'موقع مطعم'),
    industry: l('Food & restaurants', 'المطاعم'),
    categories: ['websites'], services: ['website-development'], technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/fried-chicken-websit/',
    summary: l(
      'A responsive restaurant website for a fried chicken business, highlighting signature menu items, combo offers, ordering and contact sections.',
      'موقع مطعم متجاوب لنشاط فرايد تشيكن، يبرز أشهر الأصناف والعروض وأقسام الطلب والتواصل.',
    ),
  }),
  p({
    key: 'pastry', slug: 'pastry-chef-portfolio', title: 'Pastry Chef Portfolio', inner: false,
    subtitle: l('Chef portfolio website', 'موقع أعمال شيف حلويات'),
    industry: l('Culinary', 'الطهي'),
    categories: ['websites'], services: ['website-development'], technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/Western-Pastry-Chef-portfolio/',
    summary: l(
      'A portfolio website for a Western pastry chef presenting signature creations, biography, skills and contact details.',
      'موقع أعمال لشيف حلويات غربية يعرض أبرز إبداعاته ونبذة عنه ومهاراته ووسائل التواصل.',
    ),
  }),
  p({
    key: 'portfolio', slug: 'developer-portfolio', title: 'Developer Portfolio', inner: false,
    subtitle: l('Front-end developer portfolio', 'موقع أعمال مطوّر واجهات'),
    industry: l('Personal portfolio', 'موقع شخصي'),
    categories: ['websites'], services: ['website-development'], technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/my-portfolio/',
    summary: l(
      'Saied Agha’s personal front-end portfolio, built with HTML, CSS and JavaScript, presenting projects with a clean design and smooth interactions.',
      'موقع الأعمال الشخصي لـ Saied Agha كمطوّر واجهات، مبني بـ HTML وCSS وJavaScript، يعرض المشاريع بتصميم نظيف وتفاعلات سلسة.',
    ),
  }),
];

export const getProject = (slug: string) => projects.find((x) => x.slug === slug);
export const domainOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
