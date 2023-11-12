<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang="ts">
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';

  import { Hr } from 'flowbite-svelte';

  import { 
    Section, 
    HeroHeader, 
    FeatureDefault, 
  } from 'flowbite-svelte-blocks';

  let pclasses = `
    font-normal 
    font-neuehass
    leading-loose
    text-center
    align-center
    my-0
    mx-2
    px-2
    md:my-10
    md:mx-20
    md:px-20
    lg:px-20
    lg:mx-10
    text-[16px]
    xs:text-md    
    sm:text-lg    
    md:text-xl   
    lg:text-2xl  
    xl:text-3xl
    text-base-300
    dark:text-gray-400
  `;

  let pLowerClasses = `
    ${pclasses}
    px-1
    mx-1
    xs:px-10
    xs:mx-10
    md:px-20
  `;

  let h1classes = `
    py-2
    mx-0
    xs:mx-5
    font-basier 
    font-semibold
    leading-none
    tracking-tight
    text-white
    dark:text-white
    text-4xl
    xs:text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
  `; 

  let headerclasses = {
    class:   "max-w-full",
    h2Class: "mb-9 text-4xl lg:text-6xl xl:text-7xl tracking-tight font-medium text-neutral dark:text-white",
    pClass:  "text-neutral font-normal font-neuehass text-md xs:text-xl lg:text-2xl dark:text-gray-400",
  };

  let shader = ` 
    text-base-800 
    font-basier 
  `;

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

  let anchorClasses = `
    flex
    flex-col 
    rounded-3xl
    min-h-fit
    max-w-full    
    text-center
    my-0
    py-0
    px-3
    mx-3
    xs:py-8
    xs:px-8
    xs:mx-8
    sm:py-8
    sm:px-8
    sm:mx-8
  `;

  let lowerAnchorClasses = `
    ${anchorClasses} 
    bg-base-100
    dark:bg-white
  `;

  let h3TextClass = `
    text-xs
    xs:text-sm
    md:text-md 
    lg:text-lg  
    xl:text-xl   
    font-normal
    dark:text-white
  `;
</script>

<Section id="anchor-deposit" name="feature" class="bg-white dark:bg-base-100 mt-0">
  <div class={`bg-base-600 ${anchorClasses}`}>

    <HeroHeader {...headerclasses}> 
      <svelte:fragment slot="h2">
        <div class="
          mt-10
          py-2 
          my-2 
          lg:py-10 
          lg:mx-10">
          <h1 class={h1classes}>
            Deposit <span class={shader}>Token</span>
            Infrastructure
          </h1>
        </div>
      </svelte:fragment>
      <svelte:fragment slot="paragraph">
        <div class="
          py-5
          px-1
          mx-1
          xs:px-5
          xs:mx-5
          sm:px-9
          sm:mx-9
          lg:px-30 
          lg:mx-20">
          <p class={pclasses}>
            Deposit tokens are stable-valued, regulatory-compliant digital 
            assets interoperable with core banking systems. With Fluent, 
            banks may issue fiat-equivalent tokens directly to public blockchains 
            based on outstanding customer deposits and central bank-issued CBDCs.
          </p>
        </div> 
      </svelte:fragment>
    </HeroHeader>

    <div class="     
    px-1
    mx-1
    xs:px-5
    xs:mx-5
    mt-6
    mb-10
    md:px-30
    md:mx-20">
      <div class="
      p-1
      my-10
      mx-0
      grid
      grid-cols-3
      gap-5
      xs:gap-20
      xs:mx-10
      space-y-0">
        <div>
          <Inoutcircle class={iconClasses} color="white" />
          <h3 class={h3TextClass}>1-Click Issuance & Redemption</h3>
        </div>
        <div>
          <Inoutcircle class={iconClasses} color="white" />
          <h3 class={h3TextClass}>Regulated & Compliant</h3>
        </div>
        <div>
          <Inoutcircle class={iconClasses} color="white" />
          <h3 class={h3TextClass}>Federated Custody</h3>
        </div>
      </div>
    </div>

    <Hr classHr="my-1 mx-5 md:my-10 md:mx-40" /> 

    <div class="my-20 mx-10 px-60 xs:px-40">
      <HeroHeader {...headerclasses}> 
        <svelte:fragment slot="h2">On the Rise</svelte:fragment>
        <svelte:fragment slot="paragraph">
          Deposit tokens already produce unprecedented efficiencies 
          in cross-border transactions and humanitarian aid delivery.
        </svelte:fragment>
      </HeroHeader> 
    </div> 

  </div>
</Section>

<Section id="anchor-principles" class="bg-white dark:bg-base-100 mt-0">
  <div class={lowerAnchorClasses}>
    <div class="
    py-5
    px-0
    xs:py-8 
    xs:px-4">
      <div class="
      py-10 
      sm:py-8 
      sm:px-4 
      xl:gap-16 
      sm:py-6 
      lg:mx-8
      lg:px-8">
        <h2 class="
        mb-10 
        tracking-tight
        font-semibold
        font-extrabold
        text-5xl
        xs:text-3xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl
        text-white
        dark:text-white">
            Operating <span class={shader}>Principles</span>
        </h2>
        <p class={pLowerClasses}>
          Fluent’s engineering and business development efforts are grounded 
          in a common belief that decentralized mechanics enable fairer, 
          open systems, whether using on-chain environments, 
          traditional environments, or across both.
        </p>
        <br />
        <p class={pLowerClasses}>
          Decentralized systems are characterized by 4 defining principles that 
          must be upheld in both the development process and ongoing operations.
        </p>
      </div>
      <div class="
      px-1
      mx-1
      xs:px-5
      xs:mx-5
      mt-6
      mb-10
      md:px-30
      md:mx-20">
        <div class="
        my-10 
        sm:my-20 
        py-0 
        mx-0 
        xs:mx-10 
        md:mx-5 
        grid
        grid-cols-2
        xs:grid-cols-4
        gap-5
        xs:gap-10
        space-y-0">
          <div>
            <Inoutcircle class={iconClasses} color="#a02de5" />
            <h3 class={h3TextClass}>Genuine Ownership</h3>
          </div>
          <div>
            <Inoutcircle class={iconClasses} color="#a02de5" />
            <h3 class={h3TextClass}>On-Chain Verification</h3>
          </div>
          <div>
            <Inoutcircle class={iconClasses} color="#a02De5" />
            <h3 class={h3TextClass}>Disintermediation</h3>
          </div>
          <div>
            <Fingerprint class={iconClasses} color="#a02De5" />
            <h3 class={h3TextClass}>Censorship Resistance</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<Section id="anchor-curating" class="bg-white dark:bg-base-100 mt-0">
  <div class="w-full text-center my-10">
    <h2 class="
    w-full
    text-xl 
    xs:text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
    tracking-loose
    font-semibold
    text-gray-900
    dark:text-white">
      Curating the 
      <span class="text-base-50 dark:text-base-800"> Best</span> of 
      <span class="text-base-50 dark:text-base-800"> Both Worlds</span>
    </h2>
  </div>
</Section>
