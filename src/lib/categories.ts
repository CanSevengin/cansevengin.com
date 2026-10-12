import type { PhotoKey } from './photos';

export type CategoryKey = 'ai' | 'tech' | 'apps' | 'work' | 'ecommerce' | 'marketing' | 'building' | 'learning' | 'travel' | 'fatherhood' | 'life';

type L = { name: string; slug: string; blurb: string };
export const CATEGORIES: Record<CategoryKey, { icon: string; photo: PhotoKey; en: L; tr: L }> = {
  ai: {
    icon: 'robot', photo: 'laptopDark',
    en: { name: 'AI & Automation', slug: 'ai', blurb: 'Using AI in everyday work, and the automations that actually stick.' },
    tr: { name: 'Yapay Zeka', slug: 'yapay-zeka', blurb: 'Yapay zekayı günlük işte nasıl kullandığım ve gerçekten işe yarayan otomasyonlar.' },
  },
  fatherhood: {
    icon: 'baby', photo: 'dadReading',
    en: { name: 'Fatherhood', slug: 'fatherhood', blurb: 'What I’m learning as a dad, backed by research, not guesswork.' },
    tr: { name: 'Babalık', slug: 'babalik', blurb: 'Baba olarak öğrendiklerim. Tahmine değil, araştırmaya dayanarak.' },
  },
  tech: {
    icon: 'device-mobile', photo: 'phoneDark',
    en: { name: 'Phones & Gadgets', slug: 'tech', blurb: 'New phones and gadgets, judged by one question: is it worth your money?' },
    tr: { name: 'Telefon ve Teknoloji', slug: 'teknoloji', blurb: 'Yeni telefonlar ve cihazlar, tek bir soruyla: Parasına değer mi?' },
  },
  work: {
    icon: 'globe-hemisphere-east', photo: 'containersAerial',
    en: { name: 'Export & Trade', slug: 'export', blurb: 'Distributors, trade fairs and new markets, from the field.' },
    tr: { name: 'İhracat ve Dış Ticaret', slug: 'ihracat', blurb: 'Distribütörler, fuarlar ve yeni pazarlar. Dış ticaretin sahadaki hali.' },
  },
  ecommerce: {
    icon: 'shopping-cart', photo: 'boxes',
    en: { name: 'E-commerce & Marketplaces', slug: 'ecommerce', blurb: 'Selling on Amazon, Trendyol and the rest: listings, operations, lessons.' },
    tr: { name: 'E-ticaret ve Pazaryerleri', slug: 'e-ticaret', blurb: 'Trendyol’dan Amazon’a pazaryerlerinde satış: ilanlar, operasyon, dersler.' },
  },
  apps: {
    icon: 'squares-four', photo: 'phoneHand',
    en: { name: 'Apps & Tools', slug: 'apps', blurb: 'Apps, tools and shortcuts that make everyday work lighter.' },
    tr: { name: 'Uygulamalar ve Araçlar', slug: 'uygulamalar', blurb: 'Günlük işi hafifleten uygulamalar, araçlar ve kısayollar.' },
  },
  marketing: {
    icon: 'chart-line-up', photo: 'analytics',
    en: { name: 'Marketing & Growth', slug: 'marketing', blurb: 'Ads, content and data: what actually moves the numbers.' },
    tr: { name: 'Pazarlama ve Büyüme', slug: 'pazarlama', blurb: 'Reklam, içerik ve veri. Rakamları gerçekten neyin oynattığı.' },
  },
  building: {
    icon: 'rocket-launch', photo: 'planning',
    en: { name: 'Side Projects', slug: 'side-projects', blurb: 'Building things outside the day job, from idea to launch.' },
    tr: { name: 'Yan Projeler', slug: 'yan-projeler', blurb: 'İş dışında bir şeyler üretmek. Fikirden yayına kadar.' },
  },
  learning: {
    icon: 'book-open', photo: 'reading',
    en: { name: 'Learning & Books', slug: 'learning', blurb: 'How to learn faster, and the books worth your evenings.' },
    tr: { name: 'Öğrenme ve Kitaplar', slug: 'ogrenme', blurb: 'Daha hızlı öğrenmenin yolları ve akşamlarına değecek kitaplar.' },
  },
  travel: {
    icon: 'airplane-tilt', photo: 'wing',
    en: { name: 'Travel & Trade Fairs', slug: 'travel', blurb: 'Business trips, trade fair prep and staying sane on the road.' },
    tr: { name: 'Seyahat ve Fuarlar', slug: 'seyahat', blurb: 'İş seyahatleri, fuar hazırlığı ve yolda aklını kaçırmamak.' },
  },
  life: {
    icon: 'coffee', photo: 'coffeeBook',
    en: { name: 'Life', slug: 'life', blurb: 'Time, energy, habits, and making things around a full life.' },
    tr: { name: 'Hayat', slug: 'hayat', blurb: 'Zaman, enerji, alışkanlıklar ve dolu bir hayatın içinde üretmek.' },
  },
};

export const CATEGORY_ORDER: CategoryKey[] = ['ai', 'fatherhood', 'tech', 'work', 'ecommerce', 'apps', 'marketing', 'building', 'learning', 'travel', 'life'];
