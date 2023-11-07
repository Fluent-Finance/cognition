<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import Src          from '$lib/assets/USPlus-Logo-Text.svg?url';

  const alt     = 'USPlus Logo';
  const classes = 'w-full my-0 py-0 mx-auto';
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="
  py-18
  px-4
  mt-86
  min-h-fit
  max-w-screen-xl
  text-center
  sm:py-16
  lg:px-6">
    <Img src={Src} {alt} class={classes} />
    <p class="
    w-xl
    px-10
    mx-10
    text-gray-500
    text-xl
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    dark:text-gray-400">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-base-50 dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </p> 
  </div>
</Section>
