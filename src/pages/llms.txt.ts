// llms.txt: a plain-text map of the site for AI assistants and answer engines.
import type { APIRoute } from 'astro';
import { getPosts } from '../site';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const body = `# Can Sevengin

> Personal site and notes of Can Sevengin, International Sales Assistant Manager at Babyjem (Istanbul, Türkiye). Writes about AI in everyday work, automation, e-commerce, Amazon and marketplaces, and selling across borders.

## About
- [About Can Sevengin](https://cansevengin.com/about/): career (Babyjem, HHP Eurasia, Getir, Solare Digital), education and background.
- LinkedIn: https://www.linkedin.com/in/can-sevengin-3884a516a/
- [How this site works](https://cansevengin.com/how-it-works/): built in one morning with Claude; a Claude agent researches, writes, checks and publishes notes twice a week.
- [Ghostline](https://cansevengin.com/build/): the self-running personal publishing agent Can is building on Claude; open source at https://github.com/CanSevengin/ghostline
- Contact: hello@cansevengin.com

## Notes
${posts.map((p) => `- [${p.data.title}](https://cansevengin.com/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Feeds
- RSS: https://cansevengin.com/rss.xml
- Sitemap: https://cansevengin.com/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
