import type { L } from '../lib/i18n';

export type TechCategory = 'ecommerce' | 'frontend' | 'backend' | 'data' | 'tooling' | 'mobile' | 'design';
export const techCategories: { id: TechCategory; title: L; text: L }[] = [
  { id: 'ecommerce', title: { en: 'E-commerce platforms', ar: 'منصات التجارة الإلكترونية' }, text: { en: 'Hosted and self-hosted platforms we set up, customize, and extend.', ar: 'منصات جاهزة ومستضافة ذاتيًا نجهزها ونخصصها ونطورها.' } },
  { id: 'frontend', title: { en: 'Frontend development', ar: 'تطوير الواجهات' }, text: { en: 'Languages, frameworks, and styling tools for what users see and click.', ar: 'لغات وأطر عمل وأدوات تنسيق لما يراه المستخدم ويتفاعل معه.' } },
  { id: 'backend', title: { en: 'Backend development', ar: 'تطوير الخادم' }, text: { en: 'Server logic, APIs, and business rules behind the interface.', ar: 'منطق الخادم والواجهات البرمجية وقواعد العمل خلف الواجهة.' } },
  { id: 'data', title: { en: 'Databases & backend services', ar: 'قواعد البيانات وخدمات الخادم' }, text: { en: 'Where your data lives, with authentication and storage.', ar: 'مكان حفظ بياناتك، مع تسجيل الدخول والتخزين.' } },
  { id: 'mobile', title: { en: 'Mobile', ar: 'الموبايل' }, text: { en: 'Cross-platform frameworks for Android and iOS.', ar: 'أطر عمل متعددة المنصات لأندرويد وiOS.' } },
  { id: 'tooling', title: { en: 'Deployment & collaboration', ar: 'النشر والتعاون' }, text: { en: 'Version control, hosting, and release workflows.', ar: 'إدارة النسخ والاستضافة ومسارات النشر.' } },
  { id: 'design', title: { en: 'Design', ar: 'التصميم' }, text: { en: 'Interface design and prototyping.', ar: 'تصميم الواجهات والنماذج التفاعلية.' } },
];

/**
 * level: 'core' = used regularly in delivered projects; 'supported' = available
 * when the project calls for it. Review this list so it reflects real experience.
 * `logo` is empty on purpose: add official logo files from each brand's press kit.
 */
export type Tech = { id: string; name: string; category: TechCategory; kind: L; level: 'core' | 'supported'; logo?: string };
const k = {
  lang: { en: 'Language', ar: 'لغة برمجة' },
  markup: { en: 'Markup', ar: 'لغة ترميز' },
  style: { en: 'Styling', ar: 'تنسيق' },
  fw: { en: 'Framework', ar: 'إطار عمل' },
  lib: { en: 'Library', ar: 'مكتبة' },
  platform: { en: 'Platform', ar: 'منصة' },
  db: { en: 'Database', ar: 'قاعدة بيانات' },
  baas: { en: 'Backend service', ar: 'خدمة خادم' },
  runtime: { en: 'Runtime', ar: 'بيئة تشغيل' },
  arch: { en: 'Architecture', ar: 'معمارية' },
  tool: { en: 'Tool', ar: 'أداة' },
  hosting: { en: 'Hosting', ar: 'استضافة' },
  practice: { en: 'Practice', ar: 'منهجية' },
  template: { en: 'Template language', ar: 'لغة قوالب' },
};

export const technologies: Tech[] = [
  { id: 'shopify', name: 'Shopify', category: 'ecommerce', kind: k.platform, level: 'core' },
  { id: 'liquid', name: 'Liquid', category: 'ecommerce', kind: k.template, level: 'core' },
  { id: 'woocommerce', name: 'WooCommerce / WordPress', category: 'ecommerce', kind: k.platform, level: 'supported' },
  { id: 'salla', name: 'Salla', category: 'ecommerce', kind: k.platform, level: 'supported' },
  { id: 'zid', name: 'Zid', category: 'ecommerce', kind: k.platform, level: 'supported' },
  { id: 'easyorder', name: 'EasyOrder', category: 'ecommerce', kind: k.platform, level: 'supported' },
  { id: 'wix', name: 'Wix', category: 'ecommerce', kind: k.platform, level: 'supported' },
  { id: 'webflow', name: 'Webflow', category: 'ecommerce', kind: k.platform, level: 'supported' },

  { id: 'html', name: 'HTML5', category: 'frontend', kind: k.markup, level: 'core' },
  { id: 'css', name: 'CSS3', category: 'frontend', kind: k.style, level: 'core' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', kind: k.lang, level: 'core' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', kind: k.lang, level: 'core' },
  { id: 'react', name: 'React', category: 'frontend', kind: k.lib, level: 'core' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', kind: k.fw, level: 'core' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', kind: k.style, level: 'core' },
  { id: 'sass', name: 'Sass / SCSS', category: 'frontend', kind: k.style, level: 'supported' },

  { id: 'nodejs', name: 'Node.js', category: 'backend', kind: k.runtime, level: 'core' },
  { id: 'express', name: 'Express.js', category: 'backend', kind: k.fw, level: 'supported' },
  { id: 'rest', name: 'REST APIs', category: 'backend', kind: k.arch, level: 'core' },
  { id: 'laravel', name: 'Laravel', category: 'backend', kind: k.fw, level: 'supported' },

  { id: 'supabase', name: 'Supabase', category: 'data', kind: k.baas, level: 'core' },
  { id: 'mysql', name: 'MySQL', category: 'data', kind: k.db, level: 'supported' },
  { id: 'firebase', name: 'Firebase', category: 'data', kind: k.baas, level: 'supported' },

  { id: 'react-native', name: 'React Native', category: 'mobile', kind: k.fw, level: 'supported' },

  { id: 'git', name: 'Git', category: 'tooling', kind: k.tool, level: 'core' },
  { id: 'github', name: 'GitHub', category: 'tooling', kind: k.platform, level: 'core' },
  { id: 'vercel', name: 'Vercel', category: 'tooling', kind: k.hosting, level: 'core' },
  { id: 'cloud', name: 'Cloud hosting', category: 'tooling', kind: k.hosting, level: 'supported' },

  { id: 'figma', name: 'Figma', category: 'design', kind: k.tool, level: 'core' },
];

export const getTech = (id: string) => technologies.find((x) => x.id === id);
