<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script async lang='ts'>
  import { Heading } from 'flowbite-svelte';
  import BarGraph    from '$lib/components/BarGraph.svelte';
  import PieGraph    from '$lib/components/PieGraph.svelte';
  import LineGraph   from '$lib/components/LineGraph.svelte';

  let title = 'Fluent Network';
  let headingClass = `
    w-full p-9 mb-10 
    prose-h1 
    text-center 
    justify-between 
    font-medium 
    font-["Kalam"] 
    text-slate-800/[0.4] 
    dark:text-slate-200/[0.4] 
  `;
</script>

<Heading 
  class={headingClass}
  tag='h1' 
  customSize="text-xl lg:text-xl 2xl:text-4xl">
  {title}
</Heading>

<div class='grid grid-cols-4 grid-flow-row gap-10'>
  <div class='col-span-full row-span-3 md:col-span-2 lg:col-span-2'>
    <PieGraph /> 
  </div>
  <div class='col-span-full row-span-2 md:col-span-2'>
    <BarGraph /> 
    <LineGraph /> 
  </div>
</div>
