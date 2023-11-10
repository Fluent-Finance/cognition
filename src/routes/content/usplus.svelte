<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import Src          from '$lib/assets/USPlus-Logo-Text.svg?url';

  let title     = 'USPlus';
  const alt     = 'USPlus Logo';
  const classes = 'h-[850px] my-0 py-0 mx-auto';

  let divPanel = `
    w-full
    grid
    grid-cols-1
    gap-4
    align-middle
    content-center
    items-center
  `;
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="
  py-0
  my-0
  px-4
  mt-[-190px]
  min-h-fit
  max-w-screen-xl
  text-center
  lg:px-6">

    <Img src={Src} {alt} class={classes} />

    <div class="w-full my-30 h-[136px] text-center">
      <span class="mr-7 text-black text-[90px] font-semibold font-basier leading-[72px]">Fluent’s</span>
      <span class="mr-7 text-base-50 text-[90px] font-semibold font-basier leading-[72px]"> Live</span>
      <span class="text-black text-[90px] font-semibold font-basier leading-[72px]"> Pilot Project</span>
    </div>
     
    <div class="mb-40 mx-40 px-40 w-lg h-[43px] text-center text-base-200 text-[22px] font-normal font-neuehaas leading-loose">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-base-50 dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </div>

    <div class="
    flex-col
    mx-auto
    w-[350px]
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
      <div class="text-center text-neutral-900 text-xl font-medium font-basier leading-loose">
        USPlus Analytics Dashboards
      </div>
    </div>

    <div class={divPanel}>
      <div class="align-middle justify-center content-center items-center mx-auto py-3">
        <div class="h-[395px] flex-col items-center gap-14 inline-flex">


          <div class="mt-20 text-center text-black text-5xl font-medium font-basier leading-9">
            <span class="font-bold">
              USPlus 
            </span>
            is available on leading crypto exchanges
          </div>

          <div class="my-10 justify-start items-start gap-6 inline-flex">
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>
