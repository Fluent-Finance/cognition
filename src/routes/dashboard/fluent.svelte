<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script>
  import _ from 'lodash';
  import { Heading, P } from 'flowbite-svelte';
  import LineGraph      from '$components/LineGraph.svelte';
  import BarGraph       from '$components/BarGraph.svelte';
  import PieGraph       from '$components/PieGraph.svelte';
  import DoughnutGraph  from '$components/DoughnutGraph.svelte';
</script>

<div class='container w-full pt-10'>
  <Heading 
    tag="h1" 
    class="font-neuehaas font-extrabold text-slate-800/[0.4] dark:text-slate-200/[0.4] justify-between w-full prose-h1 text-center p-9 mb-10" 
    customSize="text-xl lg:text-3xl xl:text-5xl">
      <span class="text-base-200 dark:text-base-300/[0.4] mx-3">USPlus</span>Bank Reserves
  </Heading>

  <div class='grid grid-cols-4 grid-flow-row gap-10'>
    <div class='col-span-full row-span-3 md:col-span-2 lg:col-span-2'>
      <DoughnutGraph /> 
    </div>
    <div class='col-span-full row-span-2 md:col-span-2'>
      <BarGraph /> 
      <LineGraph /> 
    </div>
  </div>

  <Heading 
    tag="h1" 
    class="font-basier text-slate-800/[0.4] dark:text-slate-200/[0.4] justify-between w-full font-bold prose-h1 text-center p-9 mb-10" 
    customSize="text-xl lg:text-3xl xl:text-5xl">
      USPlus DeFi Pools
  </Heading>

  <div class='grid grid-cols-4 grid-flow-col gap-10'>
    <div class='col-span-full row-span-1 mb-10'>

      <BarGraph /> 

      <div class='grid grid-cols-4 grid-flow-row gap-10'>
        <div class='row-span-3 col-span-4'>
          <P class="font-['Proxima Nova'] text-xs md:text-xl lg:text-2xl xl:text-4xl prose-2xl font-thin m-10 p-25">
            At Fluent Finance, we’re driven by a simple philosophy: put the users first. 
            We’ve always believed the power of DeFi should be harnessed for the benefit 
            of those who contribute to its growth. That’s why we’re thrilled to announce 
            our integration with Flow Rewards 
            <a 
              class="text-primary dark:text-base-700" 
              href="https://docs.google.com/document/d/11j66k-nuOCo1MXjSKzvt25-WX8jMjxxPepfbFS5HGVs/edit" 
              target="_blank"> 
                open-sourced smart contracts.
            </a> 
          </P>
        </div> 
      </div> 

      <PieGraph /> 

    </div> 
  </div> 
</div> 
