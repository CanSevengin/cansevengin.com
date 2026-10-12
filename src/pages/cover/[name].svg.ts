// Static cover SVGs for every post (dark + light) and a few fixed decorative covers.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { coverSvg } from '../../lib/cover';

const FIXED = [{ slug: 'can-sevengin-about', kind: 1 }];

export async function getStaticPaths() {
  const slugs = [...new Set((await getCollection('blog')).map((p) => p.id.replace(/^tr\//, '')))];
  const names: { name: string; slug: string; kind?: number; light: boolean }[] = [];
  for (const slug of slugs) for (const light of [false, true]) names.push({ name: `${slug}${light ? '--l' : ''}`, slug, light });
  for (const f of FIXED) for (const light of [false, true]) names.push({ name: `${f.slug}--k${f.kind}${light ? '--l' : ''}`, slug: f.slug, kind: f.kind, light });
  return names.map((n) => ({ params: { name: n.name }, props: n }));
}

export const GET: APIRoute = ({ props }) => {
  const { slug, kind, light } = props as { slug: string; kind?: number; light: boolean };
  return new Response(coverSvg(slug, kind, light), { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
};
