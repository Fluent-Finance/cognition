<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import Src          from '$lib/assets/USPlus-Logo-Text.svg?url';

  const alt     = 'USPlus Logo';
  const classes = 'w-full mx-auto';
</script> 

<Section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mt-96 min-h-screen max-w-screen-xl text-center sm:py-16 lg:px-6">
    <h1 class="font-basier mb-10 text-4xl font-extrabold leading-none tracking-tighter text-base-200 dark:text-white lg:text-4xl xl:text-5xl 2xl:text-6xl">
      Live Pilot Project
    </h1> 
    <Img src={Src} {alt} class={classes} />
    <p class="text-gray-500 text-xl md:text-2xl dark:text-gray-400">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-primary dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </p> 
    <div>
      <h2 class="my-10 lg:text-4xl w-full tracking-tight font-extrabold text-gray-900 dark:text-white">
       A <span class="text-primary dark:text-base-800"> stablecoin</span> built on principles. 
      </h2>
    </div> 
  </div>
</Section>
