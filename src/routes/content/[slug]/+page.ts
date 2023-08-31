// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import type { EntryGenerator } from './$types';
 
export const prerender = true; 

export const entries: EntryGenerator = () => {
  return [{ slug: 'whitepaper' }, { slug: 'profile' }];
};

export async function load({ params }) {
	let content  = await import(`../${params.slug}.svelte`);
	let contents = content.default;

	return { contents };
}
