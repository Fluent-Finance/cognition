// handcoded with ♥︎  by ⚡️ 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

export const prerender = true;

import { json } from '@sveltejs/kit';
import _ from 'lodash';

export const GET = async () => {
  const allContent = await fetchMarkdown();
  return json(allContent);
};

const fetchMarkdown = async () => {
  const page    = import.meta.glob('/src/routes/pages/*.md');
  const blog    = import.meta.glob('/src/routes/blog/*.md');
  const content = import.meta.glob('/src/routes/content/*.svelte');
  const images = [
    {
      id: 1,
      imgClass: 'h-128',
      alt: 'Fluent Finance',
      src: '/images/fluent_banner_1500x500.png',
      title: 'Fluent Finance Hero Banner'
    },
    {
      id: 2,
      imgClass: 'h-128',
      alt: 'Cristina Gottardi',
      src: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      id: 3,
      imgClass: 'h-128',
      alt: 'Johannes Plenio',
      src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    },
    {
      id: 4,
      imgClass: 'h-128',
      alt: 'Jonatan Pie',
      src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp',
      title: 'jonatan-pie-3l3RwQdHRHg-unsplash.com'
    },
    {
      id: 5,
      imgClass: 'h-128',
      alt: 'Mark Harpur',
      src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp',
      title: 'mark-harpur-K2s_YE031CA-unsplash'
    },
    {
      id: 6,
      imgClass: 'h-128',
      alt: 'Pietro De Grandi',
      src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp',
      title: 'pietro-de-grandi-T7K4aEPoGGk-unsplash'
    },
    {
      id: 7,
      imgClass: 'h-128',
      alt: 'Sergey Pesterev',
      src: '/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp',
      title: 'sergey-pesterev-tMvuB9se2uQ-unsplash'
    },
    {
      id: 8,
      imgClass: 'h-128',
      alt: 'Solo travel goals',
      src: '/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp',
      title: 'solotravelgoals-7kLufxYoqWk-unsplash'
    },
    {
      id: 9,
      imgClass: 'h-128',
      alt: 'Cosmic timetraveler',
      src: '/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    }
  ];

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

  return { pages, posts, images, contentfiles };
};
