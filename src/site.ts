import { getCollection, type CollectionEntry } from 'astro:content';
import type { CategoryKey } from './lib/categories';

export const SITE = {
  name: 'Can Sevengin',
  title: 'Can Sevengin | Selling across borders, building with AI',
  description:
    'Can Sevengin’s personal site and notes: international sales at Babyjem, AI, phones and gadgets, fatherhood and life in Istanbul.',
  email: 'hello@cansevengin.com',
  linkedin: 'https://www.linkedin.com/in/can-sevengin-3884a516a/',
};

export type Lang = 'en' | 'tr';
export const LANGS: Lang[] = ['en', 'tr'];
export type Post = CollectionEntry<'blog'>;

/** Prefix a site path with the language ('/about/' -> '/tr/about/'). */
export function lp(lang: Lang, path = '/') {
  return lang === 'en' ? path : `/tr${path === '/' ? '/' : path}`;
}

/** The same page in the other language. */
export function altPath(path: string, to: Lang) {
  const clean = path.replace(/^\/tr(?=\/|$)/, '') || '/';
  return lp(to, clean);
}

// Drafts show locally and on Vercel preview deploys, never on production.
const showDrafts =
  import.meta.env.DEV || process.env.VERCEL_ENV === 'preview' || process.env.SHOW_DRAFTS === '1';

export async function getPosts(lang: Lang = 'en', category?: CategoryKey) {
  const posts = await getCollection(
    'blog',
    ({ data }) => (showDrafts || !data.draft) && data.lang === lang && (!category || data.category === category),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** URL slug of a post, identical across languages ('tr/foo' -> 'foo'). */
export const slugOf = (p: Post) => p.id.replace(/^tr\//, '');

export const postUrl = (p: Post) => lp(p.data.lang, `/blog/${slugOf(p)}/`);

export function formatDate(d: Date, lang: Lang = 'en') {
  return d.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function readingTime(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 220));
}

/** Shared interface strings. */
export const UI = {
  en: {
    skip: 'Skip to content',
    nav: { notes: 'Notes', about: 'About', build: 'Ghostline', hi: 'Say Hi' },
    home: 'Can Sevengin, home',
    switchTo: 'Türkçe',
    switchLabel: 'Bu sayfayı Türkçe oku',
    foot: { built: 'Built with Claude', written: 'Written in Istanbul.', photos: 'Stock photos from' },
    min: 'min',
    minRead: 'min read',
    draft: 'Draft',
    allNotes: 'All Notes',
    notes: 'notes',
    note: 'note',
    copied: 'Copied',
    copyFail: 'Copy failed, select it manually',
  },
  tr: {
    skip: 'İçeriğe geç',
    nav: { notes: 'Notlar', about: 'Hakkımda', build: 'Ghostline', hi: 'Bana Yaz' },
    home: 'Can Sevengin, ana sayfa',
    switchTo: 'English',
    switchLabel: 'Read this page in English',
    foot: { built: 'Claude ile yapıldı', written: 'İstanbul’da yazıldı.', photos: 'Stok fotoğraflar:' },
    min: 'dk',
    minRead: 'dk okuma',
    draft: 'Taslak',
    allNotes: 'Tüm Notlar',
    notes: 'not',
    note: 'not',
    copied: 'Kopyalandı',
    copyFail: 'Kopyalanamadı, elle seç',
  },
} as const;
