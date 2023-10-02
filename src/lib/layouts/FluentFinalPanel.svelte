<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import Src          from '$lib/assets/USPlus-Logo-Text.svg?url';

  const alt     = 'USPlus Logo';
  const classes = 'w-full mx-auto';
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="py-18 px-4 mt-86 min-h-screen max-w-screen-xl text-center sm:py-16 lg:px-6">
    <!-- <h1 class="font-basier mb-10 text-6xl font-extrabold leading-none tracking-tighter text-base-200 dark:text-white lg:text-6xl xl:text-7xl"> -->
    <!--   Live Pilot Project -->
    <!-- </h1>  -->
    <Img src={Src} {alt} class={classes} />
    <p class="w-xl text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-400">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-base-50 dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </p> 
    <div class="my-40">
      <h2 class="text-2xl md:text-4xl lg:text-7xl w-full tracking-tight font-extrabold text-gray-900 dark:text-white">
       A <span class="text-base-50 dark:text-base-800"> stablecoin</span> built on principles. 
      </h2>
    </div> 
  </div>
</Section>
