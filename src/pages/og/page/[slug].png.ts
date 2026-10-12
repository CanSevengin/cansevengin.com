// Share images for non-post pages (About, Ghostline, How it works, Notes and every topic), both languages.
import { CATEGORIES, CATEGORY_ORDER } from '../../../lib/categories';
export { GET } from '../[slug].png';

export function getStaticPaths() {
  const pages: Record<string, string> = {
    'about-en': 'About Can Sevengin: sales by trade, builder by habit',
    'about-tr': 'Can Sevengin hakkında: mesleğim satış, huyum üretmek',
    'build-en': 'Ghostline: your expertise, published while you work',
    'build-tr': 'Ghostline: sen çalışırken uzmanlığın yayında',
    'how-en': 'How this site works: built in a morning with Claude',
    'how-tr': 'Bu site nasıl çalışıyor: bir sabahta Claude ile',
    'notes-en': 'Notes on AI, tech, work, fatherhood and life',
    'notes-tr': 'Yapay zeka, teknoloji, iş, babalık ve hayat üzerine notlar',
  };
  for (const k of CATEGORY_ORDER) {
    pages[`topic-${k}-en`] = `${CATEGORIES[k].en.name}: notes by Can Sevengin`;
    pages[`topic-${k}-tr`] = `${CATEGORIES[k].tr.name}: Can Sevengin’in notları`;
  }
  return Object.entries(pages).map(([slug, title]) => ({ params: { slug }, props: { title } }));
}
