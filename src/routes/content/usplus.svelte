<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section } from 'flowbite-svelte-blocks';

  import LineGraph      from '$components/LineGraph.svelte';
  import BarGraph       from '$components/BarGraph.svelte';
  import PieGraph       from '$components/PieGraph.svelte';
  import DoughnutGraph  from '$components/DoughnutGraph.svelte';

  let divPanel = `
    flex-col 
    justify-center
    align-middle
    content-center
    items-center
  `;
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="
  flex-col
  py-0
  my-0
  px-4
  min-h-fit
  max-w-screen-xl
  text-center
  lg:px-6">

    <!-- USPlus Background Image -->
    <div class={`
    w-full 
    h-[300px]
    bg-usplus-bg 
    object-fill 
    bg-cover
    bg-no-repeat
    bg-clip-padding 
    bg-center
      `}>
    </div>
    <!-- USPlus Background Image -->

    <div class="
    my-1 
    md:my-10
    text-4xl 
    xs:text-5xl 
    sm:text-6xl 
    md:text-7xl 
    lg:text-8xl 
    font-semibold 
    font-basier 
    leading-[42px]
    md:leading-[72px]
    text-center">
      <span class="mr-1 md:mr-7 text-black">Fluent’s</span>
      <span class="mr-1 md:mr-7 text-base-50"> Live</span>
      <span class="text-black"> Pilot Project</span>
    </div>
     
    <div class="
    m-10
    px-2
    py-10
    md:m-10
    md:mx-20
    md:px-20
    md:py-10
    lg:m-20
    lg:mx-10
    lg:px-40
    text-sm  
    xs:text-lg  
    sm:text-xl 
    md:text-2xl 
    content-center
    items-center
    justify-center
    text-center
    text-base-200
    font-normal
    font-neuehaas
    leading-loose">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-base-50 dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </div>

    <div class="
    mx-auto
    w-md
    h-15
    px-8
    py-6
    content-center
    align-middle
    rounded-2xl
    border-2
    border-black
    justify-center
    items-center
    gap-2
    inline-flex">
      <div class="text-center text-neutral-900 text-md xs:text-lg md:text-xl  font-medium font-basier leading-loose">
        <a href="/dashboard/fluent">
          USPlus Analytics Dashboards
        </a>
      </div>
    </div>

    <div class={divPanel}>
      <div class="flex justify-center align-middle justify-center content-center items-center py-10">
        <div class="flex min-h-[30vh] flex-col items-center gap-14 mx-auto">
          <div class="
          mt-20
          mx-5
          px-2
          md:mx-20
          md:px-40
          text-center
          text-black
          text-xl
          sm:text-2xl
          lg:text-5xl
          font-medium
          font-basier
          leading-9">
            <span class="font-bold">
              USPlus 
            </span>
            is available on leading crypto exchanges
          </div>

          <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 my-10">
            <div class="">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>
