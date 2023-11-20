<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _             from 'lodash';
  import { Section }   from 'flowbite-svelte-blocks';
  import LineGraph     from '$components/LineGraph.svelte';
  import PieGraph      from '$components/PieGraph.svelte';
  import BarGraph      from '$components/BarGraph.svelte';
  import DoughnutGraph from '$components/DoughnutGraph.svelte';

  let hTextBreaks = `
    text-4xl 
    xs:text-5xl 
    md:text-6xl 
    lg:text-7xl 
    xl:text-8xl 
  `;
</script>

<Section class="bg-white dark:bg-base-100">
  <div class='container w-full pt-0'>
    <div class={`
    my-8
    w-full
    text-black
    dark:text-white
    text-center
    font-basier
    font-semibold
    leading-[52px]
    ${hTextBreaks}`}>
      <span class="text-base-50 dark:text-base-800">USPlus</span> Bank Reserves
    </div>

    <div class='grid grid-cols-4 grid-flow-row gap-18'>
      <div class='col-span-full row-span-2 lg:col-span-4 mb-20'>
        <LineGraph /> 
      </div>

      <div class='col-span-full row-span-2 lg:col-span-4 mb-40'>
        <BarGraph /> 
      </div>

      <div class='items-center content-center col-span-full xs:col-span-2 row-span-1'>
        <PieGraph /> 
      </div>

      <div class='col-span-full xs:col-span-2 row-span-1'>
        <DoughnutGraph /> 
      </div>
    </div>
  </div> 
</Section>
