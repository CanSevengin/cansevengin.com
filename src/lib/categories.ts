import type { PhotoKey } from './photos';

export type CategoryKey = 'ai' | 'tech' | 'apps' | 'work' | 'ecommerce' | 'marketing' | 'building' | 'learning' | 'travel' | 'fatherhood' | 'life';

type L = { name: string; slug: string; blurb: string; intro?: string };
export const CATEGORIES: Record<CategoryKey, { icon: string; photo: PhotoKey; en: L; tr: L }> = {
  ai: {
    icon: 'robot', photo: 'laptopDark',
    en: { name: 'AI & Automation', slug: 'ai', blurb: 'Using AI in everyday work, and the automations that actually stick.' , intro: 'Practical notes on using AI at work: writing better prompts, picking automation tools, and telling a real AI agent from a chatbot with a new label. Tested on ordinary tasks, written for people who have a job to do.' },
    tr: { name: 'Yapay Zeka', slug: 'yapay-zeka', blurb: 'Yapay zekayı günlük işte nasıl kullandığım ve gerçekten işe yarayan otomasyonlar.' , intro: 'İşte yapay zekayı nasıl kullandığıma dair pratik notlar: daha iyi prompt yazmak, otomasyon aracı seçmek, gerçek bir AI ajanını adı değiştirilmiş bir chatbottan ayırmak. Sıradan işler üzerinde denenmiş, işi gücü olan insanlar için yazılmış.' },
  },
  fatherhood: {
    icon: 'baby', photo: 'dadReading',
    en: { name: 'Fatherhood', slug: 'fatherhood', blurb: 'What I’m learning as a dad, backed by research, not guesswork.' , intro: 'Notes from a working dad on the questions parents of babies and toddlers actually ask. Every note leans on pediatric guidance and research, and none of it replaces your pediatrician.' },
    tr: { name: 'Babalık', slug: 'babalik', blurb: 'Baba olarak öğrendiklerim. Tahmine değil, araştırmaya dayanarak.' , intro: 'Bebek ve küçük çocuk sahibi ebeveynlerin gerçekten sorduğu sorular üzerine çalışan bir babanın notları. Her not çocuk sağlığı kurumlarının önerilerine ve araştırmalara dayanıyor, hiçbiri çocuk doktorunun yerini tutmuyor.' },
  },
  tech: {
    icon: 'device-mobile', photo: 'phoneDark',
    en: { name: 'Phones & Gadgets', slug: 'tech', blurb: 'New phones and gadgets, judged by one question: is it worth your money?' , intro: 'New phones and gadgets, looked at from the buyer’s side: what changed, what it costs, and whether your current device is still good enough. No unboxing hype, just the decision.' },
    tr: { name: 'Telefon ve Teknoloji', slug: 'teknoloji', blurb: 'Yeni telefonlar ve cihazlar, tek bir soruyla: Parasına değer mi?' , intro: 'Yeni telefonlara ve cihazlara alıcının gözünden bakıyorum: ne değişti, kaça mal oluyor, elindeki cihaz hâlâ yeterli mi. Kutu açılışı heyecanı yok, sadece karar.' },
  },
  work: {
    icon: 'globe-hemisphere-east', photo: 'containersAerial',
    en: { name: 'Export & Trade', slug: 'export', blurb: 'Distributors, trade fairs and new markets, from the field.' , intro: 'How export really works from the sales side: distributors, trade fairs, shipping terms and entering new markets, plus the rule changes that small exporters need to know about.' },
    tr: { name: 'İhracat ve Dış Ticaret', slug: 'ihracat', blurb: 'Distribütörler, fuarlar ve yeni pazarlar. Dış ticaretin sahadaki hali.' , intro: 'İhracatın satış tarafından nasıl yürüdüğü: distribütörler, fuarlar, teslim şekilleri ve yeni pazarlara giriş. Bir de küçük ihracatçıların bilmesi gereken kural değişiklikleri.' },
  },
  ecommerce: {
    icon: 'shopping-cart', photo: 'boxes',
    en: { name: 'E-commerce & Marketplaces', slug: 'ecommerce', blurb: 'Selling on Amazon, Trendyol and the rest: listings, operations, lessons.' , intro: 'Selling on marketplaces from Trendyol and Hepsiburada to Amazon: listings, operations and the lessons that carry over to everything else, including AI.' },
    tr: { name: 'E-ticaret ve Pazaryerleri', slug: 'e-ticaret', blurb: 'Trendyol’dan Amazon’a pazaryerlerinde satış: ilanlar, operasyon, dersler.' , intro: 'Trendyol ve Hepsiburada’dan Amazon’a pazaryerlerinde satış: ilanlar, operasyon ve yapay zeka dahil her şeye taşınan dersler.' },
  },
  apps: {
    icon: 'squares-four', photo: 'phoneHand',
    en: { name: 'Apps & Tools', slug: 'apps', blurb: 'Apps, tools and shortcuts that make everyday work lighter.' , intro: 'The apps, settings and small tools that make everyday work lighter and safer, from password managers to phone automations. Only things worth the setup time.' },
    tr: { name: 'Uygulamalar ve Araçlar', slug: 'uygulamalar', blurb: 'Günlük işi hafifleten uygulamalar, araçlar ve kısayollar.' , intro: 'Günlük işi hafifleten ve daha güvenli hale getiren uygulamalar, ayarlar ve küçük araçlar: şifre yöneticilerinden telefon otomasyonlarına. Sadece kurmaya değenler.' },
  },
  marketing: {
    icon: 'chart-line-up', photo: 'analytics',
    en: { name: 'Marketing & Growth', slug: 'marketing', blurb: 'Ads, content and data: what actually moves the numbers.' , intro: 'What actually moves the numbers for a small brand or a personal site: search, AI answers, ads, content and clean data. Documented facts kept apart from opinion.' },
    tr: { name: 'Pazarlama ve Büyüme', slug: 'pazarlama', blurb: 'Reklam, içerik ve veri. Rakamları gerçekten neyin oynattığı.' , intro: 'Küçük bir marka ya da kişisel site için rakamları gerçekten neyin oynattığı: arama, yapay zeka cevapları, reklam, içerik ve temiz veri. Belgelenmiş bilgi ile kişisel görüş ayrı tutuluyor.' },
  },
  building: {
    icon: 'rocket-launch', photo: 'planning',
    en: { name: 'Side Projects', slug: 'side-projects', blurb: 'Building things outside the day job, from idea to launch.' , intro: 'Building things outside the day job: testing ideas before building them, shipping a small first version, and finding the time to do it with a full life.' },
    tr: { name: 'Yan Projeler', slug: 'yan-projeler', blurb: 'İş dışında bir şeyler üretmek. Fikirden yayına kadar.' , intro: 'İş dışında bir şeyler üretmek: fikri kurmadan önce test etmek, küçük bir ilk sürüm çıkarmak ve dolu bir hayatın içinde buna zaman bulmak.' },
  },
  learning: {
    icon: 'book-open', photo: 'reading',
    en: { name: 'Learning & Books', slug: 'learning', blurb: 'How to learn faster, and the books worth your evenings.' , intro: 'Learning as a busy adult: methods that research supports, business English for people who freeze in calls, and books worth your evenings.' },
    tr: { name: 'Öğrenme ve Kitaplar', slug: 'ogrenme', blurb: 'Daha hızlı öğrenmenin yolları ve akşamlarına değecek kitaplar.' , intro: 'Yoğun bir yetişkin olarak öğrenmek: araştırmaların desteklediği yöntemler, toplantıda kilitlenenler için iş İngilizcesi ve akşamlarına değecek kitaplar.' },
  },
  travel: {
    icon: 'airplane-tilt', photo: 'wing',
    en: { name: 'Travel & Trade Fairs', slug: 'travel', blurb: 'Business trips, trade fair prep and staying sane on the road.' , intro: 'Business travel and trade fairs: preparing so the trip pays off, following up before the leads go cold, and getting through the jet lag.' },
    tr: { name: 'Seyahat ve Fuarlar', slug: 'seyahat', blurb: 'İş seyahatleri, fuar hazırlığı ve yolda aklını kaçırmamak.' , intro: 'İş seyahatleri ve fuarlar: yolculuğun karşılığını almak için hazırlık, fırsatlar soğumadan geri dönüş ve jet lag ile başa çıkmak.' },
  },
  life: {
    icon: 'coffee', photo: 'coffeeBook',
    en: { name: 'Life', slug: 'life', blurb: 'Time, energy, habits, and making things around a full life.' , intro: 'Time, energy, habits and attention: small changes that make a full life with work and family a bit calmer.' },
    tr: { name: 'Hayat', slug: 'hayat', blurb: 'Zaman, enerji, alışkanlıklar ve dolu bir hayatın içinde üretmek.' , intro: 'Zaman, enerji, alışkanlıklar ve dikkat: iş ve ailenin iç içe olduğu dolu bir hayatı biraz daha sakin hale getiren küçük değişiklikler.' },
  },
};

export const CATEGORY_ORDER: CategoryKey[] = ['ai', 'fatherhood', 'tech', 'work', 'ecommerce', 'apps', 'marketing', 'building', 'learning', 'travel', 'life'];
