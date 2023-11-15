<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _             from 'lodash';
  import { P }         from 'flowbite-svelte';
  import { Section }   from 'flowbite-svelte-blocks';
  import LineGraph     from '$components/LineGraph.svelte';
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

    <div class='grid grid-cols-4 grid-flow-row gap-10'>
      <div class='col-span-full row-span-3 md:col-span-2 lg:col-span-2'>
        <DoughnutGraph /> 
      </div>
      <div class='col-span-full row-span-2 md:col-span-2'>
        <BarGraph /> 
        <LineGraph /> 
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
        my-10
        mx-0
        xs:mx-10
        md:mx-20
        p-2
        xs:p-10">
          At Fluent Finance, we’re driven by a simple philosophy: put the users first. 
          We’ve always believed the power of DeFi should be harnessed for the benefit 
          of those who contribute to its growth. That’s why we’re thrilled to announce 
          our integration with Flow Rewards 
          <a 
            class="text-primary dark:text-base-800" 
            href="https://docs.google.com/document/d/11j66k-nuOCo1MXjSKzvt25-WX8jMjxxPepfbFS5HGVs/edit" 
            target="_blank"> 
              open-sourced smart contracts.
          </a> 
        </P>
      </div> 
    </div> 

    <div class={`
    w-full
    my-0
    sm:my-40
    h-[136px]
    ${hTextBreaks}
    font-semibold
    font-basier
    leading-[72px]
    text-center
    text-black
    dark:text-white`}>
      <span class="">USPlus</span>
      <span class="text-base-50 dark:text-base-800">Defi</span>
      <span class="">Pools</span>
    </div>

    <div class='grid grid-cols-4 grid-flow-col gap-10'>
      <div class='col-span-full md:col-span-2 row-span-1 mb-10'>

        <div class="
        flex
        mx-0
        px-0
        p-0">
          <LineGraph /> 
        </div>
      </div>

      <div class='col-span-full md:col-span-2 row-span-1 mb-10'>
        <div class="
        flex
        mx-0
        px-0
        md:mx-0
        md:px-0">
          <BarGraph /> 
        </div>

      </div> 
    </div> 
  </div> 
</Section>
