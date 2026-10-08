import rss from '@astrojs/rss';
import { getPosts, SITE, postUrl } from '../../site';

export async function GET(context) {
  const posts = await getPosts('tr');
  return rss({
    title: `${SITE.name} (Türkçe)`,
    description: 'Can Sevengin’in yapay zeka, teknoloji, iş, babalık ve hayat üzerine notları.',
    site: context.site,
    customData: '<language>tr</language>',
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: postUrl(p), categories: [p.data.category] })),
  });
}
