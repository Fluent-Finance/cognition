<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';
  import Clipboard   from '$lib/utils/icons/Clipboard.svelte';

  import { Section } from 'flowbite-svelte-blocks';

  export let classes = 'mx-auto mb-4 w-15 h-15 text-primary-600 dark:text-primary-500';

  let pclasses = `
    font-normal 
    font-neuehass
    leading-loose
    text-center
    align-center
    my-10
    mx-20
    px-20
    text-lg
    md:text-lg  
    lg:text-lg 
    xl:text-xl
    text-gray-500
    dark:text-gray-400
  `;

  let h1classes = `
    font-basier 
    font-semibold
    my-0
    mx-20
    px-40
    max-w-full
    text-center
    text-black
    dark:text-white
    text-2xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
  `; 

  let onchain = `
    ml-2 
    text-base-50 
    font-medium
    font-basier 
    leading-[112px]
    max-w-9xl
    text-2xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
  `;
</script> 

<Section class="bg-white dark:bg-transparent">
  <div id="anchor-learn" class="bg-neutral rounded-3xl min-h-fit max-w-screen-xl text-center py-8 px-8 mx-8">

    <div class="flex w-xl py-20 mx-30">
      <h1 class={h1classes}>
        Interoperable <span class={onchain}>Infrastructure</span>
        for a Fragmented Financial System
      </h1> 
    </div>

    <div class="flex w-lg px-40 mx-20">
      <p class={pclasses}>
        Public blockchains, digital native systems, and digital assets are here to stay. 
        Traditional financial institutions, banks, and custodians are too. 
        Powerful financial landscapes need infrastructure that allows them to communicate 
        so they can grow – without growing apart.
      </p>
    </div>

    <div class="flex w-lg px-40 mx-20">
      <h2 class="font-basier text-center my-10 mx-30 px-20 text-3xl font-medium text-base-200 dark:text-base-300 xl:text-5xl">
        Fluent’s proprietary infrastructure 
        enables banks and FIs to enter the on-chain world
      </h2> 
    </div>

    <div class="flex w-xl mt-10 px-20 mx-80">
      <div class="my-10 lg:my-12 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <Fingerprint class={classes} />
          <h3 class="mb-2 text-lg font-bold dark:text-white">Tokenize Off-Chain Assets</h3>
        </div>
        <div>
          <Clipboard class={classes} />
          <h3 class="mb-2 text-xl font-bold dark:text-white">Leverage Off-Chain Collateral</h3>
        </div>
        <div>
          <Inoutcircle class={classes} />
          <h3 class="mb-2 text-xl font-bold dark:text-white">Issue & Redeem Instantly</h3>
        </div>
      </div>
    </div>
  </div>
</Section>
