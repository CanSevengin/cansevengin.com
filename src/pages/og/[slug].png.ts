// Per-post Open Graph images (1200x630), rendered at build time.
import type { APIRoute } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import { getPosts, slugOf } from '../../site';
import { coverSvg } from '../../lib/cover';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((p) => ({ params: { slug: slugOf(p) }, props: { title: p.data.title } }));
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, max: number) {
  const lines: string[] = [];
  let cur = '';
  for (const w of text.split(' ')) {
    if ((cur + ' ' + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines.slice(0, 4);
}

export const GET: APIRoute = ({ params, props }) => {
  const title = (props as { title: string }).title;
  const cover = coverSvg(params.slug!).replace('<svg ', '<svg x="560" y="0" width="640" height="630" ');
  const lines = wrap(title, title.length > 60 ? 24 : 20);
  const size = lines.length > 3 ? 54 : 64;
  const text = lines.map((l, i) => `<text x="72" y="${250 + i * size * 1.12}" font-family="Inter Display" font-weight="700" font-size="${size}" fill="#f1f3f5" letter-spacing="-1.5">${esc(l)}</text>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#07080a"/>
    ${cover}
    <defs><linearGradient id="f" x1="0" x2="1"><stop offset="0.42" stop-color="#07080a"/><stop offset="0.75" stop-color="#07080a" stop-opacity="0.2"/><stop offset="1" stop-color="#07080a" stop-opacity="0"/></linearGradient></defs>
    <rect width="1200" height="630" fill="url(#f)"/>
    <g transform="translate(72 72) scale(.8)">
      <rect width="64" height="64" rx="16" fill="#0f1210"/>
      <g transform="translate(5.5 5.5) scale(.83)"><path d="M30.2 22.8 A13 13 0 1 0 21 45 C 31 45, 52 48.5, 52 39.5 C 52 31, 37.5 33.5, 37.5 25.5 C 37.5 17.5, 49 17, 52.5 21.5" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52.5" cy="21.5" r="4.7" fill="#c8f031"/></g>
    </g>
    <text x="146" y="110" font-family="Inter Display" font-weight="500" font-size="28" fill="#f1f3f5">Can <tspan fill="#7f8792">Sevengin</tspan></text>
    ${text}
    <text x="72" y="566" font-family="Inter Display" font-weight="500" font-size="26" fill="#c8f031">cansevengin.com</text>
  </svg>`;
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { fontFiles: ['src/assets/fonts/InterDisplay-Bold.otf', 'src/assets/fonts/InterDisplay-Medium.otf'], loadSystemFonts: false, defaultFontFamily: 'Inter Display' },
  }).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
