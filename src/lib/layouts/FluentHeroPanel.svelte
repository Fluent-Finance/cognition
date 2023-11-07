<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';
  import Clipboard   from '$lib/utils/icons/Clipboard.svelte';

  import { Section } from 'flowbite-svelte-blocks';

  export let iconClasses = `
    mx-auto
    mb-4
    w-10
    h-10
    xs:w-15
    xs:h-15
    text-primary-600
    dark:text-primary-500
  `;

  let h1classes = `
    font-basier 
    font-semibold
    leading-none
    tracking-tight
    my-10

    mx-0
    xs:mx-2
    sm:mx-3
    md:mx-2
    lg:mx-3
    xl:mx-0

    sm:px-3
    md:px-20
    lg:px-30
    xl:px-0

    w-full 
    text-[30px]
    xs:text-[40px]
    text-center
    text-black
    dark:text-white
    xs:text-3xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
  `; 

  let h3classes = `
    mb-2 
    text-xs 
    xs:text-sm 
    sm:text-md 
    md:text-lg 
    lg:text-xl  
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
    max-w-full 
    max-w-screen-xl
    text-center
    py-1
    px-0
    mx-0
    xs:py-8
    xs:px-8
    xs:mx-8
    sm:py-8
    sm:px-8
    sm:mx-8
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
    sm:mx-5 
    md:mx-20 
    lg:mx-30 
    xs:px-10 
    sm:px-10 
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
    xs:text-lg  
    sm:text-xl   
    md:text-xl   
    lg:text-2xl  
    xl:text-2xl
    text-gray-500
    dark:text-gray-400
  `;

  let h2Classes = `
    font-basier
    text-center
    text-md
    xs:text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-4xl
    xl:text-6xl
    my-10
    sm:my-20
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
    sm:mx-10 
    md:mx-30 
    lg:mx-60 
    xl:mx-40 
    xs:px-2 
    sm:px-10 
    md:px-30 
    lg:px-5 
    xl:px-0 
  `;

</script> 

<Section class="bg-white dark:bg-transparent">
  <div id="anchor-learn" class={anchorClasses}>

    <div class="
      sm:py-10
      lg:py-10 

      sm:px-3
      md:px-0

      xs:mx-10
      sm:mx-10
      md:mx-0
      lg:mx-30
      xl:mx-10">
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

    <div class="mt-0 mb-10 xs:mt-6 lg:px-20 lg:mx-10">
      <!-- <div class="my-10 mx-10 space-y-8 xs:my-1 xs:grid xs:grid-cols-3 xs:gap-20 xs:space-y-0"> -->
      <div class="my-5 p-1 mx-1 sm:mx-10 grid grid-cols-3 gap-5 xs:gap-10 space-y-0">
        <div>
          <Fingerprint class={iconClasses} />
          <h3 class={h3classes}>Tokenize Off-Chain Assets</h3>
        </div>
        <div>
          <Clipboard class={iconClasses} />
          <h3 class={h3classes}>Leverage Off-Chain Collateral</h3>
        </div>
        <div>
          <Inoutcircle class={iconClasses} />
          <h3 class={h3classes}>Issue & Redeem Instantly</h3>
        </div>
      </div>
    </div>
  </div>
</Section>
