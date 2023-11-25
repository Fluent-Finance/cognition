// handcoded with ♥︎  by ⚡️ 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import type { EntryGenerator } from './$types';
 
export const prerender = true; 

export const entries: EntryGenerator = () => {
  return [
    { slug: 'whitepaper' }, 
    { slug: 'press-media' }, 
    { slug: 'usplus' }
  ];
};

export async function load({ params }) {
  let content  = await import(`./../${params.slug}.svelte`);
  let contents = content.default;

  return { contents };
}
