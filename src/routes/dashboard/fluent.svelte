<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _             from 'lodash';
  import { P }         from 'flowbite-svelte';
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
    w-full
    my-8
    ${hTextBreaks}
    text-black
    dark:text-white
    text-center
    font-basier
    font-semibold
    leading-[52px]`}>
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

    <div class='grid grid-cols-4 grid-flow-row gap-10'>
      <div class='row-span-3 col-span-4'>
        <P class="
        text-sm
        xs:text-md   
        sm:text-lg   
        md:text-2xl
        lg:text-2xl
        xl:text-4xl
        prose-2xl
        font-neuehaas
        font-normal
        text-center
        items-center
        leading-loose
        my-10
        mx-0
        xs:mx-10
        md:mx-20
        p-2
        xs:p-10">
          <a 
            class="text-primary dark:text-base-800" 
            href="https://github.com/Fluent-Finance" 
            target="_blank"> 
              open-sourced smart contracts.
          </a> 
        </P>
      </div> 
    </div> 
  </div> 
</Section>
