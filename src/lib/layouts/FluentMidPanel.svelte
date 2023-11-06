<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang="ts">
  import Inoutcircle from '$lib/utils/icons/Inoutcircle.svelte';
  import Fingerprint from '$lib/utils/icons/Fingerprint.svelte';
  import Clipboard   from '$lib/utils/icons/Clipboard.svelte';

  import { Hr } from 'flowbite-svelte';

  import { 
    Section, 
    HeroHeader, 
    FeatureDefault, 
    FeatureItem 
  } from 'flowbite-svelte-blocks';

  import {
    ChartSolid,
    LandmarkSolid,
    BriefcaseSolid,
    DollarSolid,
    RocketSolid,
    CogOutline
  } from 'flowbite-svelte-icons';

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
    text-base-300
    dark:text-gray-400
  `;

  let h1classes = `
    mx-5
    font-basier 
    font-semibold
    leading-none
    tracking-tight
    text-white
    dark:text-white
    text-2xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
  `; 

  let h3Class = `
    text-sm
    sm:text-md
    md:text-xl 
    w-46
    sm:w-50
    md:w-56
    lg:w-76
    xl:w-96
  `;

  let iconClass = `
    p-5
    rounded-full
    text-md 
    md:text-lg
    lg:text-2xl
    text-base-600
    bg-base-200
    dark:text-base-800
  `;
  
  let featureItemClass = `
    shadow-lg
    shadow-inner
    bg-base-50
    bg-opacity-75
    hover:bg-opacity-100
    dark:bg-base-800
    p-6
    md:p-8
  `;
  
  let headerclasses = {
    class:   "max-w-full",
    h2Class: "mb-9 text-4xl lg:text-6xl xl:text-5xl tracking-tight font-medium text-neutral dark:text-white",
    pClass:  "text-neutral font-normal font-neuehass text-lg dark:text-gray-400",
  };

  let deposit = `
    text-neutral-50
    text-[64px]
    font-bold
    font-['Basier
    Circle']
    leading-[64px]
  `;

  let token = `
    text-purple-400
    text-[64px]
    font-bold
    font-['Basier
    Circle']
    leading-[64px]
  `;

  let shader = ` 
    text-base-800 
    font-basier 
  `;

  let classes = 'mx-auto mb-4 w-15 h-15 text-primary-600 dark:text-primary-500';
</script>

<Section id="anchor-deposit" name="feature" class="bg-white dark:bg-base-100">
  <div class="bg-base-600 rounded-3xl text-center justify-center min-h-fit max-w-screen-xl text-center py-10 px-8 mx-12 my-0">

    <HeroHeader {...headerclasses}> 
      <svelte:fragment slot="h2">
        <div class="py-20 mx-10">
          <h1 class={h1classes}>
            Deposit <span class={shader}>Token</span>
            Infrastructure
          </h1>
        </div>
      </svelte:fragment>
      <svelte:fragment slot="paragraph">
        <div class="flex w-lg px-40 mx-20">
          <p class={pclasses}>
            Deposit tokens are stable-valued, regulatory-compliant digital 
            assets interoperable with core banking systems. With Fluent, 
            banks may issue fiat-equivalent tokens directly to public blockchains 
            based on outstanding customer deposits and central bank-issued CBDCs.
          </p>
        </div> 
      </svelte:fragment>
    </HeroHeader>

    <FeatureDefault>
      <div class="flex w-xl mt-1 px-20 mx-80">
        <div class="my-10 lg:my-12 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <Inoutcircle class={classes} color="white" />
            <h3 class="mb-2 text-lg font-bold dark:text-white">1-Click Issuance & Redemption</h3>
          </div>
          <div>
            <Inoutcircle class={classes} color="white" />
            <h3 class="mb-2 text-xl font-bold dark:text-white">Regulated & Compliant</h3>
          </div>
          <div>
            <Inoutcircle class={classes} color="white" />
            <h3 class="mb-2 text-xl font-bold dark:text-white">Federated Custody</h3>
          </div>
        </div>
      </div>
    </FeatureDefault>

    <Hr classHr="my-10 mx-80 justify-center" /> 

    <div class="my-20">
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
  <div class="bg-base-100 rounded-3xl text-center justify-center min-h-fit max-w-screen-xl text-center py-10 px-8 mx-12">
    <div class="py-8 px-4 min-w-full">
      <div class="gap-8 py-8 px-4 mx-auto xl:gap-16 sm:py-16 lg:px-6 ">
        <!-- <div class="text-gray-500 dark:text-gray-400 sm:text-lg"> -->
          <h2 class="mb-4 text-6xl xl:text-7xl tracking-tight font-semibold font-extrabold text-white dark:text-white">
            Operating <span class={shader}>Principles</span>
          </h2>
          <p class="mb-8 font-light text-xl lg:text-2xl">
            Fluent’s engineering and business development efforts are grounded 
            in a common belief that decentralized mechanics enable fairer, 
            open systems – whether in on-chain environments, 
            traditional environments, or across both.
          </p>
          <p class="mb-8 font-light text-xl lg:text-2xl">
            Decentralized systems are characterized by 3 defining principles that 
            must be upheld in both the development process and ongoing operations.
          </p>
          <div class="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
            <div class="flex">
              <div class="flex justify-center items-center mr-4 w-12 h-12 rounded-full bg-base-400 dark:bg-base-200 shrink-0">
                <svg class="w-9 h-9 p-1 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Genuine Ownership</h3>
              </div>
            </div>
            <div class="flex pt-8">
              <div class="flex justify-center items-center mr-4 w-12 h-12 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
                <svg class="w-9 h-9 p-1 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">On-Chain Verification</h3>
              </div>
            </div>
            <div class="flex pt-8">
              <div class="flex justify-center items-center mr-4 w-12 h-12 bg-teal-100 rounded-full dark:bg-teal-900 shrink-0">
                <svg class="w-9 h-9 p-1 text-teal-600 dark;text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Disintermediation</h3>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    <!-- </div> -->
  </div>
</Section>
