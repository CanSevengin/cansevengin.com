// Checks every internal link and image in dist/ points at a built file. Run after `npm run build`.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const SKIP = [/^\/_vercel\//, /^\/pagefind\//];
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);

const exists = (url) => {
  const path = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!path || SKIP.some((r) => r.test(path))) return true;
  const p = join(DIST, path);
  return existsSync(p) && statSync(p).isFile() || existsSync(join(p, 'index.html'));
};

let bad = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (m[1].startsWith('//')) continue;
    if (!exists(m[1])) { bad++; console.log(`BROKEN  ${f.replace(DIST, '')}  ->  ${m[1]}`); }
  }
}
console.log(bad ? `\n${bad} broken internal link(s) in ${files.length} pages.` : `All internal links OK (${files.length} pages).`);
process.exit(bad ? 1 : 0);
