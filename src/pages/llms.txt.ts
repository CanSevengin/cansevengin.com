// llms.txt: a plain-text map of the site for AI assistants and answer engines.
import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../site';
import { CATEGORIES, CATEGORY_ORDER } from '../lib/categories';

export const GET: APIRoute = async () => {
  const posts = await getPosts('en');
  const trPosts = await getPosts('tr');
  const body = `# Can Sevengin

> Personal site and notes of Can Sevengin, International Sales Assistant Manager at Babyjem (Istanbul, Türkiye). Writes about AI and automation, new phones and gadgets, international sales and e-commerce, fatherhood, and everyday life. Every note is published in English and Turkish.

## About
- [About Can Sevengin](https://cansevengin.com/about/): career (Babyjem, HHP Eurasia, Getir, Solare Digital), education and background.
- LinkedIn: https://www.linkedin.com/in/can-sevengin-3884a516a/
- [How this site works](https://cansevengin.com/how-it-works/): built in one morning with Claude; a Claude agent researches, writes, checks and publishes notes twice a week.
- [Ghostline](https://cansevengin.com/build/): the self-running personal publishing agent Can is building on Claude; open source at https://github.com/CanSevengin/ghostline
- Contact: hello@cansevengin.com

## Topics
${CATEGORY_ORDER.map((k) => `- [${CATEGORIES[k].en.name}](https://cansevengin.com/blog/topic/${CATEGORIES[k].en.slug}/): ${CATEGORIES[k].en.blurb}`).join('\n')}

## Notes (English)
${posts.map((p) => `- [${p.data.title}](https://cansevengin.com${postUrl(p)}): ${p.data.description}`).join('\n')}

## Notlar (Türkçe)
${trPosts.map((p) => `- [${p.data.title}](https://cansevengin.com${postUrl(p)}): ${p.data.description}`).join('\n')}

## Feeds
- RSS: https://cansevengin.com/rss.xml
- RSS (Türkçe): https://cansevengin.com/tr/rss.xml
- Sitemap: https://cansevengin.com/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
