<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
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

  let color = `
    text-base-50
    dark:text-base-800

  `;
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="
  w-full 
  my-30 
  min-h-[60vh] 
  text-black 
  dark:text-white
  text-center">
    <span class={`${defaults}`}>Press</span>
    <span class={`${defaults} ${color}`}>&</span>
    <span class={`${defaults}`}>Media</span>
  </div>
</Section>
