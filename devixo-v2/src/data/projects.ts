import type { L } from '../lib/i18n';

export type ProjectCategory = 'ecommerce' | 'websites' | 'custom';
export const projectCategories: { id: ProjectCategory; label: L }[] = [
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'متاجر إلكترونية' } },
  { id: 'websites', label: { en: 'Corporate & Websites', ar: 'مواقع الشركات' } },
  { id: 'custom', label: { en: 'Custom Development', ar: 'برمجة خاصة' } },
];

/**
 * Project collection. Only facts taken from the existing Devixo website are filled in.
 * Fields left null are rendered as CMS placeholders (or hidden in production).
 */
export type Project = {
  slug: string;
  title: string;
  subtitle: L;
  industry: L;
  categories: ProjectCategory[];
  services: string[]; // service slugs
  platform: string | null; // only when verified
  technologies: string[];
  url: string;
  image: string | null; // in public/img/projects
  gallery: string[];
  featured: boolean;
  status: 'published' | 'draft';
  summary: L;
  // Case-study sections — fill from the CMS once confirmed with the client.
  context: L | null;
  requirements: L | null;
  solution: L | null;
  scope: L[] | null;
  implementation: L | null;
  results: L | null;
  accent: string; // used for the screenshot placeholder
};

const p = (x: Partial<Project> & Pick<Project, 'slug' | 'title' | 'subtitle' | 'industry' | 'categories' | 'url' | 'summary'>): Project => ({
  services: [], platform: null, technologies: [], image: null, gallery: [], featured: false, status: 'published',
  context: null, requirements: null, solution: null, scope: null, implementation: null, results: null, accent: '#E9E6DF',
  ...x,
});

export const projects: Project[] = [
  p({
    slug: 'velcot', title: 'Velcot',
    subtitle: { en: 'Premium bedding & home comfort store', ar: 'متجر مفروشات وأغطية سرير فاخرة' },
    industry: { en: 'Home & bedding', ar: 'المنزل والمفروشات' },
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    url: 'https://velcot.net', image: 'velcot.webp', featured: true,
    summary: {
      en: 'A fully designed and developed e-commerce website for Velcot, a premium bedding and home comfort brand — elegant product displays of bedsheets, bedding sets, pillows and accessories, with intuitive navigation and a smooth shopping experience.',
      ar: 'متجر إلكتروني مصمم ومطوّر بالكامل لـ Velcot، علامة مفروشات وأغطية سرير فاخرة — عرض أنيق للملايات وأطقم السرير والمخدات والإكسسوارات، مع تنقل سهل وتجربة شراء سلسة.',
    },
    scope: [
      { en: 'Store design', ar: 'تصميم المتجر' },
      { en: 'E-commerce development', ar: 'تطوير المتجر' },
      { en: 'Product presentation', ar: 'عرض المنتجات' },
    ],
    accent: '#E8E1D7',
  }),
  p({
    slug: 'hayba', title: 'Hayba',
    subtitle: { en: 'Modest fashion e-commerce store', ar: 'متجر أزياء محتشمة' },
    industry: { en: 'Fashion', ar: 'الأزياء' },
    categories: ['ecommerce'], services: ['ecommerce-development', 'ui-ux-design'],
    platform: 'Shopify', technologies: ['shopify'],
    url: 'https://hayba.net', image: 'heyba.webp', featured: true,
    summary: {
      en: 'A professional e-commerce store designed and developed for Hayba, a modern fashion brand, on the Shopify platform — built to give shoppers an easy and fast buying experience in Arabic.',
      ar: 'متجر إلكتروني احترافي صُمم وطُوّر لـ «هيبة»، علامة أزياء عصرية، على منصة شوبيفاي — لتجربة شراء سهلة وسريعة باللغة العربية.',
    },
    scope: [
      { en: 'Shopify store setup', ar: 'إعداد متجر شوبيفاي' },
      { en: 'Arabic storefront', ar: 'واجهة عربية' },
      { en: 'Theme customization', ar: 'تخصيص الثيم' },
    ],
    accent: '#E9DCCB',
  }),
  p({
    slug: 'towntech', title: 'Town Tech Shop',
    subtitle: { en: 'Electronics & tech store with admin dashboard', ar: 'متجر إلكترونيات مع لوحة تحكم' },
    industry: { en: 'Electronics', ar: 'الإلكترونيات' },
    categories: ['ecommerce', 'custom'], services: ['ecommerce-development', 'custom-software-development'],
    url: 'https://towntechshop.com', image: 'towntech.webp', featured: true,
    summary: {
      en: 'An Arabic electronics and tech e-commerce store with an admin dashboard, featuring detailed product specifications and a user-friendly interface for tech shoppers.',
      ar: 'متجر إلكتروني عربي للإلكترونيات والتقنية مع لوحة تحكم، يعرض مواصفات المنتجات بالتفصيل بواجهة سهلة لمحبي التقنية.',
    },
    accent: '#DCE3EC',
  }),
  p({
    slug: 'topaz', title: 'Topaz',
    subtitle: { en: 'Shopify e-commerce store', ar: 'متجر على شوبيفاي' },
    industry: { en: 'Retail', ar: 'التجزئة' },
    categories: ['ecommerce'], services: ['ecommerce-development'],
    platform: 'Shopify', technologies: ['shopify'],
    url: 'https://topazwebsite.myshopify.com', image: 'topaz.webp',
    summary: {
      en: 'A Shopify store with custom branding — product catalogs, promotional banners, secure payments, and a mobile-responsive design.',
      ar: 'متجر على شوبيفاي بهوية مخصصة — كتالوج منتجات وبانرات عروض ودفع آمن وتصميم متجاوب مع الموبايل.',
    },
    accent: '#E2E0EE',
  }),
  p({
    slug: 'orin-store', title: 'Orin Store',
    subtitle: { en: 'Online shopping platform', ar: 'منصة تسوق أونلاين' },
    industry: { en: 'Retail', ar: 'التجزئة' },
    categories: ['ecommerce'], services: ['ecommerce-development'],
    url: 'https://orin-store.com', image: 'orin.webp',
    summary: {
      en: 'A modern e-commerce platform with a wide range of products, organized categories, search, and a responsive design optimized for all devices.',
      ar: 'منصة تجارة إلكترونية حديثة بتشكيلة واسعة من المنتجات وتصنيفات منظمة وبحث وتصميم متجاوب مع كل الأجهزة.',
    },
    accent: '#E5E9E2',
  }),
  p({
    slug: 'nushea', title: 'Nushéa',
    subtitle: { en: 'Fashion & lifestyle store', ar: 'متجر أزياء وأسلوب حياة' },
    industry: { en: 'Fashion', ar: 'الأزياء' },
    categories: ['ecommerce'], services: ['ecommerce-development'],
    url: 'https://nushea.shop', image: 'nushea.webp',
    summary: {
      en: 'A fashion and lifestyle e-commerce store with elegant product displays, seasonal collections, easy navigation, and a fast checkout.',
      ar: 'متجر أزياء وأسلوب حياة بعرض أنيق للمنتجات وتشكيلات موسمية وتنقل سهل ودفع سريع.',
    },
    accent: '#EFE2E0',
  }),
  p({
    slug: 'eva-fashion', title: 'Eva Fashion EG',
    subtitle: { en: 'Fashion brand store', ar: 'متجر علامة أزياء' },
    industry: { en: 'Fashion', ar: 'الأزياء' },
    categories: ['ecommerce'], services: ['ecommerce-development'],
    url: 'https://www.evafashioneg.com', image: 'eva.webp',
    summary: {
      en: 'A fashion brand e-commerce store showcasing the latest collections, new arrivals, and trending items through an easy-to-navigate interface.',
      ar: 'متجر إلكتروني لعلامة أزياء يعرض أحدث التشكيلات والوصول الجديد والأكثر رواجًا بواجهة سهلة التصفح.',
    },
    accent: '#ECE4EA',
  }),
  p({
    slug: 'amr-gazzaz', title: 'Amr Gazzaz',
    subtitle: { en: 'Personal brand & services website', ar: 'موقع علامة شخصية وخدمات' },
    industry: { en: 'Professional services', ar: 'خدمات مهنية' },
    categories: ['websites'], services: ['website-development'],
    url: 'https://amrgazzaz.com', image: 'amrgazzaz.webp',
    summary: {
      en: 'A professional website presenting a personal brand and services — portfolio highlights, service offerings, and contact options in a clean, modern design.',
      ar: 'موقع احترافي يقدّم علامة شخصية وخدماتها — أبرز الأعمال والخدمات ووسائل التواصل بتصميم نظيف وعصري.',
    },
    accent: '#E3E6E9',
  }),
  p({
    slug: 'el-hamd-curtains', title: 'El-Hamd Curtains',
    subtitle: { en: 'Curtains & home décor website', ar: 'موقع ستائر وديكور منزلي' },
    industry: { en: 'Home décor', ar: 'الديكور المنزلي' },
    categories: ['websites'], services: ['website-development'],
    technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/EL-hamd/', image: 'elhamd.webp',
    summary: {
      en: 'A responsive website for El-Hamd, a curtains and home décor brand, presenting curtain designs, styles and accessories in an organized, mobile-friendly layout.',
      ar: 'موقع متجاوب لـ «الحمد»، علامة ستائر وديكور منزلي، يعرض تصميمات الستائر وأنواعها وإكسسواراتها بتخطيط منظم ومناسب للموبايل.',
    },
  }),
  p({
    slug: 'restaurant-website', title: 'Frid Chicken',
    subtitle: { en: 'Restaurant website', ar: 'موقع مطعم' },
    industry: { en: 'Food & restaurants', ar: 'المطاعم' },
    categories: ['websites'], services: ['website-development'],
    technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/fried-chicken-websit/', image: 'frid.webp',
    summary: {
      en: 'A responsive restaurant website for a fried chicken business, highlighting signature menu items, combo offers, ordering and contact sections, with a mobile-friendly layout.',
      ar: 'موقع مطعم متجاوب لنشاط فرايد تشيكن، يبرز أشهر الأصناف والعروض وأقسام الطلب والتواصل بتخطيط مناسب للموبايل.',
    },
  }),
  p({
    slug: 'pastry-chef-portfolio', title: 'Pastry Chef Portfolio',
    subtitle: { en: 'Chef portfolio website', ar: 'موقع أعمال شيف حلويات' },
    industry: { en: 'Culinary', ar: 'الطهي' },
    categories: ['websites'], services: ['website-development'],
    technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/Western-Pastry-Chef-portfolio/', image: 'pastry.webp',
    summary: {
      en: 'A portfolio website for a Western pastry chef presenting signature creations, biography, skills and contact details in an elegant layout.',
      ar: 'موقع أعمال لشيف حلويات غربية يعرض أبرز إبداعاته ونبذة عنه ومهاراته ووسائل التواصل بتخطيط أنيق.',
    },
    accent: '#F1E6DA',
  }),
  p({
    slug: 'developer-portfolio', title: 'Developer Portfolio',
    subtitle: { en: 'Front-end developer portfolio', ar: 'موقع أعمال مطوّر واجهات' },
    industry: { en: 'Personal portfolio', ar: 'موقع شخصي' },
    categories: ['websites'], services: ['website-development'],
    technologies: ['html', 'css', 'javascript'],
    url: 'https://saiedagha.github.io/my-portfolio/', image: 'portfolio.webp',
    summary: {
      en: 'A personal portfolio for a front-end developer, built with HTML, CSS and JavaScript, presenting projects with a clean design and smooth interactions.',
      ar: 'موقع أعمال شخصي لمطوّر واجهات، مبني بـ HTML وCSS وJavaScript، يعرض المشاريع بتصميم نظيف وتفاعلات سلسة.',
    },
  }),
];

export const getProject = (slug: string) => projects.find((x) => x.slug === slug);
export const domainOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
