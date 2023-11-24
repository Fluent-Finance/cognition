---
dir: pages
title: Blog
icon: UserGroupSolid
order: 2
---

<script>
  import { Section } from 'flowbite-svelte-blocks';

  let defaults = `
    text-[90px]
    font-semibold
    font-basier
    leading-[72px]
    text-4xl 
    xs:text-5xl 
    sm:text-6xl 
    md:text-7xl 
    lg:text-8xl 
    xl:text-9xl 
  `;
</script>

<Section class="bg-white dark:bg-base-100 min-h-[100vh]">

  <div class="
  w-full 
  my-30 
  min-h-[60vh] 
  text-black 
  dark:text-white
  text-center">
    <span class={`${defaults}`}>Coming Soon!</span>
  </div>
 
</Section>
