import type { PhotoKey } from './photos';

export type CategoryKey = 'ai' | 'tech' | 'work' | 'fatherhood' | 'life';

export const CATEGORIES: Record<CategoryKey, {
  icon: string;
  photo: PhotoKey;
  en: { name: string; slug: string; blurb: string };
  tr: { name: string; slug: string; blurb: string };
}> = {
  ai: {
    icon: 'robot', photo: 'laptopDark',
    en: { name: 'AI & Automation', slug: 'ai', blurb: 'Using AI in everyday work, and the automations that actually stick.' },
    tr: { name: 'Yapay Zeka & Otomasyon', slug: 'yapay-zeka', blurb: 'Günlük işte yapay zeka ve gerçekten işe yarayan otomasyonlar.' },
  },
  tech: {
    icon: 'device-mobile', photo: 'phoneDark',
    en: { name: 'Phones & Gadgets', slug: 'tech', blurb: 'New phones and gadgets, judged by one question: is it worth your money?' },
    tr: { name: 'Telefon & Teknoloji', slug: 'teknoloji', blurb: 'Yeni telefonlar ve cihazlar, tek bir soruyla: parana değer mi?' },
  },
  work: {
    icon: 'globe-hemisphere-east', photo: 'containersAerial',
    en: { name: 'Work & Selling', slug: 'work', blurb: 'Export, e-commerce and marketplaces, country by country.' },
    tr: { name: 'İş & Satış', slug: 'is', blurb: 'İhracat, e-ticaret ve pazaryerleri, ülke ülke.' },
  },
  fatherhood: {
    icon: 'baby', photo: 'dadReading',
    en: { name: 'Fatherhood', slug: 'fatherhood', blurb: 'What I’m learning as a dad, backed by research, not guesswork.' },
    tr: { name: 'Babalık', slug: 'babalik', blurb: 'Baba olarak öğrendiklerim, tahminle değil araştırmayla.' },
  },
  life: {
    icon: 'coffee', photo: 'coffeeBook',
    en: { name: 'Life', slug: 'life', blurb: 'Time, energy, habits, and making things around a full life.' },
    tr: { name: 'Hayat', slug: 'hayat', blurb: 'Zaman, enerji, alışkanlıklar ve dolu bir hayatın içinde üretmek.' },
  },
};

export const CATEGORY_ORDER: CategoryKey[] = ['ai', 'tech', 'work', 'fatherhood', 'life'];
