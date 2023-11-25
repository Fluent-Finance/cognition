// handcoded with ♥︎  by ⚡️ 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import { json } from '@sveltejs/kit';
import _ from 'lodash';

export const prerender = true;

export const GET = async () => {
  const allContent = await fetchMarkdown();
  return json(allContent);
};

const fetchMarkdown = async () => {
  const page    = import.meta.glob('/src/routes/pages/*.svelte.md');
  const blog    = import.meta.glob('/src/routes/blog/*.svelte.md');
  const content = import.meta.glob('/src/routes/content/*.svelte');

  const posts = await Promise.all(
    Object
      .entries(blog)
      .map(async ([path, resolver]: [string, Function]) => {
        const { metadata } = await resolver();
        const filePath     = path.slice(17, -3);

        return {
          meta: metadata,
          path: filePath
        };
    })
  );

  const pages = _.sortBy(await Promise.all(
    Object
      .entries(page)
      .map(async ([path, resolver]: [string, Function]) => {

        const { metadata } = await resolver();
        const filePath     = path.slice(18, -3);

        return Promise.resolve({
          meta: metadata,
          path: filePath
        });
    })
  ), ['meta.order']);

  const contentfiles = await Promise.all(
    Object
      .entries(content)
      .map(async ([path, resolver]: [string, Function]) => {
        const { metadata } = await resolver();
        const filePath     = path.slice(18, -7);

        return {
          meta: metadata,
          path: filePath
        };
    })
  );

  return { pages, posts, contentfiles };
};
