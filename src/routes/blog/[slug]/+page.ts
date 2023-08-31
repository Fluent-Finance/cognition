// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import { error }               from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
 
export const entries: EntryGenerator = () => {
  return [{ slug: 'article-1' }, { slug: 'article-2' }];
};

export const prerender = 'auto'; 

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  const post     = await import(`../${params.slug}.md`);
  const contents = post.default;

  if (!contents) 
    throw error(404, 'Not found');

  return { contents, ...post.metadata };
}
