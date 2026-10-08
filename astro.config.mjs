import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cansevengin.com',
  integrations: [sitemap({ lastmod: new Date(), changefreq: 'weekly' })],
});
