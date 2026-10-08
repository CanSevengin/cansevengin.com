// Turkish share images: same renderer, Turkish titles.
import { getPosts, slugOf } from '../../../site';
export { GET } from '../[slug].png';

export async function getStaticPaths() {
  const posts = await getPosts('tr');
  return posts.map((p) => ({ params: { slug: slugOf(p) }, props: { title: p.data.title } }));
}
