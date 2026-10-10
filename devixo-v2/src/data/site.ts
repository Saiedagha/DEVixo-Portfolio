// Global site settings. Only verified contact details are listed; leave a value
// null to hide it everywhere (e.g. add the business email once it exists).
export const site = {
  name: 'DEVixo',
  domain: 'https://www.devixo-eg.site',
  phone: '+20 103 402 0029',
  phoneHref: 'tel:+201034020029',
  whatsapp: '201034020029',
  email: null as string | null, // e.g. 'hello@devixo-eg.site' — not published yet
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/share/18bB2ESaqm' },
    { name: 'GitHub', url: 'https://github.com/Saiedagha' },
  ],
  /**
   * Optional form endpoint (Formspree, a Next.js route handler, Supabase edge function…).
   * When null, the contact form validates and hands the request over to WhatsApp.
   */
  formEndpoint: 'https://formspree.io/f/mdeazkre' as string | null,
  /** Show dashed "add from CMS" blocks for missing case-study content. Set false for production. */
  showCmsPlaceholders: process.env.SHOW_CMS_PLACEHOLDERS !== 'false',
  /** Search Console / Bing verification tokens (meta tag content), once you have them. */
  verification: { google: null as string | null, bing: null as string | null },
  areaServed: ['Egypt', 'Saudi Arabia', 'Kuwait', 'United Arab Emirates', 'Canada'],
  homeTitle: {
    en: 'DEVixo | Web Development & Shopify Store Design Company in Egypt',
    ar: 'ديفيكسو | شركة تصميم مواقع ومتاجر إلكترونية وبرمجة في مصر',
  },
  homeDescription: {
    en: 'DEVixo is a web development company in Egypt building Shopify stores, company websites, custom web apps and business systems for clients in Egypt, the Gulf and beyond. Arabic & English.',
    ar: 'ديفيكسو شركة برمجة وتصميم مواقع في مصر: تصميم متاجر شوبيفاي، مواقع شركات، تطبيقات ويب وأنظمة إدارة أعمال لعملاء في مصر والخليج. بالعربي والإنجليزي.',
  },
  tagline: {
    en: 'From Ideas to Powerful Digital Solutions.',
    ar: 'من الفكرة إلى حلول رقمية قوية.',
  },
  description: {
    en: 'Devixo designs and develops high-quality websites, e-commerce stores, and custom software solutions that help businesses operate, grow, and succeed online.',
    ar: 'تصمم ديفيكسو وتطوّر مواقع إلكترونية ومتاجر أونلاين وحلولًا برمجية مخصصة بجودة عالية، تساعد الشركات على إدارة أعمالها والنمو والنجاح على الإنترنت.',
  },
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
