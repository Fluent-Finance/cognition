<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';
  import Clipboard   from '$lib/utils/icons/Clipboard.svelte';

  import { Section } from 'flowbite-svelte-blocks';

  export let classes = 'mx-auto mb-4 w-15 h-15 text-primary-600 dark:text-primary-500';

  let h1classes = `
    font-basier 
    font-semibold
    leading-none
    tracking-tight
    my-10
    mx-1
    sm:mx-20
    md:mx-20
    lg:mx-10
    lg:px-40
    max-w-full
    text-[30px]
    text-center
    text-black
    dark:text-white
    text-3xl
    xs:text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
  `; 

  let h3classes = `
    mb-2 
    text-lg 
    font-normal  
    text-black 
    dark:text-white
  `;

  let shader = `
    text-base-50 
  `;

  let anchorClasses = `
    flex
    flex-col 
    bg-neutral
    rounded-3xl
    min-h-fit
    text-center
    py-8
    px-8
    mx-8
  `;

  let pDivClasses = `
    font-normal 
    font-neuehass
    leading-loose
    text-center
    align-center
    px-0
    mx-0
    xs:mx-5 
    sm:mx-10 
    md:mx-20 
    lg:mx-30 
    xs:px-10 
    sm:px-20 
    md:px-30 
    lg:px-40 
  `;

  let pclasses = `
    my-0
    mx-10
    xs:px-0
    sm:px-3
    md:px-10
    lg:px-2
    text-sm
    md:text-lg  
    lg:text-xl  
    xl:text-2xl
    text-gray-500
    dark:text-gray-400
  `;

  let h2Classes = `
    font-basier
    text-center
    text-xl
    xs:text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-4xl
    xl:text-6xl
    my-20
    xs:px-2 
    sm:px-5 
    md:px-10 
    lg:px-20 
    font-medium
    text-base-200
    dark:text-base-300
  `;

  let lowerCopy = `
    px-1 
    mx-1
    xs:mx-10 
    sm:mx-20 
    md:mx-30 
    lg:mx-40 
    xs:px-2 
    sm:px-20 
    md:px-30 
    lg:px-0 
  `;

</script> 

<Section class="bg-white dark:bg-transparent">
  <div id="anchor-learn" class={anchorClasses}>

    <div class="lg:py-10 lg:mx-30">
      <h1 class={h1classes}>
        Interoperable <span class={shader}>Infrastructure</span>
        for a Fragmented Financial System
      </h1> 
    </div>

    <div class={pDivClasses}>
      <p class={pclasses}>
        Public blockchains, digital native systems, and digital assets are here to stay. 
        Traditional financial institutions, banks, and custodians are too. 
        Powerful financial landscapes need infrastructure that allows them to communicate 
        so they can grow – without growing apart.
      </p>
    </div>

    <div class={lowerCopy}>
      <h2 class={h2Classes}>
        Fluent’s proprietary infrastructure 
        enables banks and FIs to enter the on-chain world
      </h2> 
    </div>

    <div class="mt-6 mb-10 lg:px-20 lg:mx-10">
      <div class="my-10 mx-10 space-y-8 md:grid md:grid-cols-3 md:gap-20 md:space-y-0">
        <div>
          <Fingerprint class={classes} />
          <h3 class={h3classes}>Tokenize Off-Chain Assets</h3>
        </div>
        <div>
          <Clipboard class={classes} />
          <h3 class={h3classes}>Leverage Off-Chain Collateral</h3>
        </div>
        <div>
          <Inoutcircle class={classes} />
          <h3 class={h3classes}>Issue & Redeem Instantly</h3>
        </div>
      </div>
    </div>
  </div>
</Section>
