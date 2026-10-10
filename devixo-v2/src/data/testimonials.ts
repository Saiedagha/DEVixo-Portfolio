import type { L } from '../lib/i18n';

/**
 * Client recommendations published on the DEVixo Facebook page. Text is kept
 * exactly as written; `translation` is an English rendering shown on /en/.
 */
export type Testimonial = {
  name: string;
  company?: string;
  project?: string; // project slug
  date: string; // ISO (approximate day for relative Facebook dates)
  text: string;
  textLang: 'ar' | 'en';
  translation?: string; // English, for Arabic originals
  textEn?: string; // English original written by the client
  source: 'Facebook';
  status: 'published';
};

export const facebookReviewsUrl = 'https://www.facebook.com/share/18bB2ESaqm';

export const testimonials: Testimonial[] = [
  {
    name: 'Hasan Fayyad', company: 'ZegiMart Inc.', project: 'zegimart', date: '2026-10-02', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'تجربتنا مع فريق DEVixo خصوصا المهندس/ سعيد ، كانت ممتازة في مشروع متجر Shopify الخاص بنا. الفريق متعاون، سريع في الرد، ومرن في تنفيذ التعديلات والملاحظات. لديهم اهتمام جيد بالتفاصيل ويسعون للوصول إلى النتيجة التي يطلبها العميل. نشكرهم على جهودهم ونتمنى لهم المزيد من النجاح والتوفيق.',
    textEn: 'We had a very good experience working with DEVixo / Eng. Saied, on our Shopify store project. The team is cooperative, responsive, and flexible when it comes to changes and feedback. They pay good attention to details and work hard to achieve the result the client is looking for. We appreciate their efforts and wish them continued success.',
  },
  {
    name: 'Glow by Rose', project: 'glow-by-rose', date: '2026-10-06', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'شغل ممتاز جدًا 👏 احترافي وسريع في التنفيذ، وفاهم كويس احتياج العميل. أنصح بالتعامل معاه جدًا، خصوصًا لأي حد محتاج يعمل ويب سايت بشكل احترافي. بالتوفيق دايمًا 🤝',
    translation: 'Excellent work 👏 Professional, fast to deliver, and really understands what the client needs. I highly recommend working with him, especially for anyone who needs a professional website. Wishing you continued success 🤝',
  },
  {
    name: 'Tamim Gad', date: '2026-10-02', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'بكل أمانة تجربة ممتازة جدا وأنصح بالتعامل مع مهندس سعيد، ما شاء فاهم شغله كويس وعنده حلول بالكود لحاجات مكنتش أتصور إنها ممكن تتعمل ومشاكل كتير قدر يحلها ويتعامل معاها بكل إحترافية، وغير كل ده هو شخص مؤدب جدا ومريح في التعامل وعنده ضمير وأنصح أي حد عايز يعمل موقع من البداية أو حتى تعديلات في موقع قائم بالتعامل معاه.',
    translation: 'Honestly, an excellent experience — I recommend working with Eng. Saied. He knows his work well and had code solutions for things I didn’t think were possible; he solved many problems and handled them very professionally. On top of that he is very polite, easy to work with and conscientious. I recommend him to anyone who wants a website built from scratch, or even changes to an existing one.',
  },
  {
    name: 'Sucríva', date: '2026-07-26', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'شغلهم ممتاز جدا ومن اكتر الناس المحترمة اللي اتعاملت معاهم وفاهمين كويس في شغلهم وعارفين يعني اي تبني براند',
    translation: 'Their work is excellent, and they are some of the most respectful people I have worked with. They know their job well and understand what building a brand really means.',
  },
  {
    name: 'Mohamed Assad Alsawy', date: '2026-06-07', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'حقيقى من افضل الاشخاص ال اتعاملت معاهم و سرعه تسليم المتجر وكمان فى ميزة انت حد فاهم ماركتينج وفاهم قد ايه الويب سايت بيتعمل بناء ع طبيعه البراند والفليو وبيقدر يوفر اى تول عن طريق الكودينج بدل ما تكون التول مدفوعة ربنا يوفقك ويكرمك ي صديقى',
    translation: 'Truly one of the best people I have worked with, and the store was delivered quickly. Another advantage: you understand marketing and how a website should be built around the brand and its flow, and you can replace paid tools with custom code. Wishing you every success, my friend.',
  },
  {
    name: 'Moussa S. Moussa', date: '2026-05-10', source: 'Facebook', status: 'published', textLang: 'ar',
    text: 'شغله جميل وو شاطر جدا و منجز',
    translation: 'Beautiful work — very skilled and gets things done.',
  },
];

export const testimonialsFor = (project: string) => testimonials.filter((x) => x.project === project);
