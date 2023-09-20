<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script>
  import _ from 'lodash';
  import { Heading, P } from 'flowbite-svelte';
  import LineGraph      from '$components/LineGraph.svelte';
  import BarGraph       from '$components/BarGraph.svelte';
  import PieGraph       from '$components/PieGraph.svelte';
  import DoughnutGraph  from '$components/DoughnutGraph.svelte';

  const SPACE     = '\u00A0';
  let paragraph   = `prose-p font-neuehaas text-md xs:text-sm lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl m-4 p-2`;
  let margins     = `prose m-5 px-5`;
  let paramargins = _.concat(paragraph, margins).join(SPACE);
</script>

<div class='w-full mt-40 pt-30'>
  <Heading 
    tag="h1" 
    class="font-neuehaas font-extrabold text-slate-800/[0.4] dark:text-slate-200/[0.4] justify-between w-full prose-h1 text-center p-9 mb-10" 
    customSize="text-xl lg:text-3xl xl:text-5xl">
      <span class="text-base-100 dark:text-base-300/[0.4] mx-3">USPlus</span>Bank Reserves
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

  <div class='grid grid-cols-4 grid-flow-row gap-3'>
    <div class='col-span-2 font-thin'>
      <P class={paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque
        fermentum dui faucibus in. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.
        Ipsum dolor sit amet consectetur adipiscing elit. Euismod nisi porta lorem mollis aliquam ut
        porttitor. Tortor consequat id porta nibh. Tortor condimentum lacinia quis vel eros donec ac odio.
        Elementum sagittis vitae et leo duis ut diam quam nulla. Vel turpis nunc eget lorem.
      </P>
    </div> 

    <div class="col-span-2 font-['Days One']">
      <P class={paramargins}>
        Aliquet porttitor lacus luctus accumsan. Ac orci phasellus egestas tellus rutrum tellus. Non odio
        euismod lacinia at quis risus sed. Nam libero justo laoreet sit amet cursus sit amet. Arcu odio ut
        sem nulla pharetra diam sit amet nisl. Vulputate mi sit amet mauris commodo quis imperdiet.
        Malesuada nunc vel risus commodo viverra. Eget nulla facilisi etiam dignissim diam quis enim. Hac
        habitasse platea dictumst quisque. Ultrices gravida dictum fusce ut placerat orci nulla
        pellentesque dignissim.
      </P>
    </div> 
  </div> 

  <Heading 
    tag="h1" 
    class="font-basier text-slate-800/[0.4] dark:text-slate-200/[0.4] justify-between w-full font-bold prose-h1 text-center p-9 mb-10" 
    customSize="text-xl lg:text-3xl xl:text-5xl">
    𝙐𝙎✚ DeFi Pools
  </Heading>

  <div class='grid grid-cols-4 grid-flow-col gap-10'>
    <div class='col-span-full row-span-1 mb-10 md:col-span-3 lg:col-span-4'>

      <BarGraph /> 

      <div class='grid grid-cols-4 grid-flow-row gap-10'>
        <div class='row-span-3 col-span-4'>
          <P class="font-['Proxima Nova'] xs:text-xs text-lg sm:text-sm md:text-lg lg:text-xl prose-2xl font-thin m-10 p-25">
            Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nulla pharetra diam sit amet nisl
            suscipit adipiscing bibendum est. Eu turpis egestas pretium aenean pharetra magna. Ultricies lacus
            sed turpis tincidunt id. Urna nec tincidunt praesent semper feugiat nibh. Aliquam etiam erat velit
            scelerisque in dictum non consectetur. Suspendisse in est ante in nibh mauris cursus mattis
            molestie. Facilisi nullam vehicula ipsum a. Tellus pellentesque eu tincidunt tortor aliquam nulla
            facilisi. Libero justo laoreet sit amet cursus sit amet.
          </P>
        </div> 
      </div> 

      <PieGraph /> 

    </div> 
  </div> 
</div> 
