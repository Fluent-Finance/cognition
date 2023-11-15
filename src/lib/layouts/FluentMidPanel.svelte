<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang="ts">
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';
  import Clipboard   from '$lib/utils/icons/Clipboard.svelte';
  import Checkmark   from '$lib/utils/icons/Checkmark.svelte';
  import Union       from '$lib/utils/icons/Union.svelte';
  import Eye         from '$lib/utils/icons/Eye.svelte';
  import Padlock     from '$lib/utils/icons/Padlock.svelte';
  import Bank        from '$lib/utils/icons/Bank.svelte';

  import { Hr } from 'flowbite-svelte';

  import { 
    Section, 
    HeroHeader, 
    FeatureDefault, 
  } from 'flowbite-svelte-blocks';

  let pClasses = `
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
    dark:text-gray-600
  `;


  let pclasses = `
    font-normal 
    font-neuehass
    leading-loose
    text-center
    align-center
    my-0
    mx-0
    px-2
    xs:mx-2
    xs:px-2
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
    dark:text-neutral
  `;

  let pLowerClasses = `
    ${pclasses}
    px-5
    mx-0
    xs:px-10
    xs:mx-10
    md:px-20
    dark:text-gray-600
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

  let h1Class = `
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
    xs:text-3xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
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

  let h2Classes = `
    font-basier
    text-center
    text-2xl 
    xs:text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-4xl
    xl:text-6xl
    my-10
    sm:my-20
    px-4 
    xs:px-2 
    sm:px-5 
    md:px-10 
    lg:px-20 
    font-medium
    text-base-200
    dark:text-base-200
  `;

  let h3classes = `
    mb-2 
    text-md 
    xs:text-md 
    md:text-lg 
    lg:text-xl  
    font-normal  
    text-black 
    dark:text-gray-600
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

  export let iconClasses = `
    mx-auto
    mb-4
    w-15
    h-15
    xs:w-15
    xs:h-15
    text-primary-600
    dark:text-primary-500
  `;

  let anchorClasses = `
    flex
    flex-col 
    xs:rounded-3xl
    max-w-full    
    text-center
    my-0
    xs:my-5
    py-0
    px-8
    mx-0
    xs:py-8
    xs:px-8
    xs:mx-8
    sm:py-8
    sm:px-8
    sm:mx-8
    md:mx-20
    lg:mx-40
  `;

  let lowerAnchorClasses = `
    ${anchorClasses} 
    bg-base-100
    dark:transparent
  `;

  let h3TextClass = `
    text-md
    xs:text-sm
    md:text-lg  
    xl:text-xl   
    font-medium
  `;
</script>

<div id="anchor-learn" class={`${anchorClasses} bg-neutral`}>
  <HeroHeader {...headerclasses}> 
    <svelte:fragment slot="h2">
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
        <h1 class={h1Class}>
          Interoperable <span class='text-base-50'>Infrastructure</span>
          for a Fragmented Financial System
        </h1> 
      </div>
    </svelte:fragment>

    <svelte:fragment slot="paragraph">
      <div class={pDivClasses}>
        <p class={pClasses}>
          Public blockchains, digital native systems, and digital assets are here to stay. 
          Traditional financial institutions, banks, and custodians are too. 
          Powerful financial landscapes need infrastructure that allows them to communicate 
          so they can grow – without growing apart.
        </p>
      </div>
    </svelte:fragment>
  </HeroHeader>

  <div class={lowerCopy}>
    <h2 class={h2Classes}>
      Fluent’s proprietary infrastructure 
      enables banks and FIs to enter the on-chain world
    </h2> 
  </div>

  <div class="
  mt-0
  mb-10
  xs:mt-6
  lg:px-20
  lg:mx-10">
    <div class="
    my-1
    xs:my-5
    p-1
    mx-1
    sm:mx-10
    grid
    grid-cols-1
    xs:grid-cols-3
    gap-9
    xs:gap-5
    xs:gap-10
    space-y-0">
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

<div id="anchor-deposit" class={`bg-base-600 ${anchorClasses}`}>
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
        px-0
        mx-0
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
    my-2
    xs:my-10
    mx-0
    grid
    grid-cols-1
    xs:grid-cols-3
    gap-14
    xs:gap-10
    xs:mx-10
    md:mx-10
    lg:mx-40
    space-y-0">
      <div>
        <Inoutcircle class={iconClasses} color="white" />
        <h3 class={h3TextClass}>1-Click Issuance & Redemption</h3>
      </div>
      <div>
        <Checkmark class={iconClasses} color="white" />
        <h3 class={h3TextClass}>Regulated & Compliant</h3>
      </div>
      <div>
        <Bank class={iconClasses} color="white" />
        <h3 class={h3TextClass}>Federated Custody</h3>
      </div>
    </div>
  </div>

  <Hr classHr="my-1 mx-5 md:my-10 md:mx-40" /> 

  <div class="my-20 mx-2 xs:mx-10 px-3 xs:px-10 xs:px-40 md:px-60">
    <HeroHeader {...headerclasses}> 
      <svelte:fragment slot="h2">On the Rise</svelte:fragment>
      <svelte:fragment slot="paragraph">
        Deposit tokens already produce unprecedented efficiencies 
        in cross-border transactions and humanitarian aid delivery.
      </svelte:fragment>
    </HeroHeader> 
  </div> 
</div>

<div id="anchor-principles" class={lowerAnchorClasses}>
  <div class="
  py-5
  px-0
  xs:py-8 
  xs:px-4">
    <div class="
    py-10 
    sm:py-8 
    sm:px-4 
    sm:py-6 
    md:py-7 
    lg:mx-8
    lg:px-8
    xl:gap-16">
      <h2 class="
      mb-20 
      sm:mb-40 
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
      dark:text-neutral">
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
      my-4 
      xs:my-10 
      sm:my-20 
      py-0 
      mx-0 
      xs:mx-10 
      md:mx-20 
      lg:mx-40 
      grid
      grid-cols-1
      xs:grid-cols-4
      gap-14
      xs:gap-10
      lg:gap-12
      space-y-0">
        <div>
          <Padlock class={iconClasses} color="#a02de5" />
          <h3 class={h3TextClass}>Genuine Ownership</h3>
        </div>
        <div>
          <Checkmark class={iconClasses} color="#a02de5" />
          <h3 class={h3TextClass}>On-Chain Verification</h3>
        </div>
        <div>
          <Union class={iconClasses} color="#a02De5" />
          <h3 class={h3TextClass}>Disintermediation</h3>
        </div>
        <div>
          <Eye class={iconClasses} color="#a02De5" />
          <h3 class={h3TextClass}>Censorship Resistance</h3>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="w-full text-center my-20">
  <h2 class="
  w-full
  px-5
  my-10
  xs:my-9
  text-4xl 
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
