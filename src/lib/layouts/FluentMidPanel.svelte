<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang="ts">
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
  
  let classes = {
    class:   "max-w-full mb-8 lg:mb-16",
    h2Class: "mb-4 text-4xl lg:text-6xl xl:text-7xl tracking-tight font-extrabold text-gray-900 dark:text-white",
    pClass:  "text-gray-500 text-xl sm:text-2xl lg:text-3xl xl:text-4xl dark:text-gray-400",
  };
</script>

<div class="container flex flex-col min-w-full mx-auto">
  <Section name="feature" class="bg-white dark:bg-base-100">

    <div class="min-h-screen"> 
      <HeroHeader {...classes}> 
        <svelte:fragment slot="h2">Deposit Token Infrastructure</svelte:fragment>
        <svelte:fragment slot="paragraph">
          Deposit tokens are stable-valued, regulatory-compliant digital assets interoperable with core banking systems. 
          With Fluent, banks may issue fiat-equivalent tokens directly to public blockchains 
          based on outstanding customer deposits and central bank-issued CBDCs.
        </svelte:fragment>
      </HeroHeader>
      <FeatureDefault>
        <div class="flex flex-grow"> 
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><DollarSolid size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">1-Click Issuance & Redemption</svelte:fragment>
          </FeatureItem>
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><CogOutline size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">Regulated & Compliant</svelte:fragment>
          </FeatureItem>
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><LandmarkSolid size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">Federated Custody</svelte:fragment>
          </FeatureItem>
        </div> 
      </FeatureDefault>
    </div> 

    <div class="min-h-screen"> 
      <HeroHeader {...classes}> 
        <svelte:fragment slot="h2">On the Rise</svelte:fragment>
        <svelte:fragment slot="paragraph">
          Deposit tokens already produce unprecedented efficiencies in cross-border transactions and humanitarian aid delivery.
        </svelte:fragment>
      </HeroHeader>
      <FeatureDefault>
        <div class="flex flex-grow"> 
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><ChartSolid size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">Reserve Transparancy</svelte:fragment>
          </FeatureItem>
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><BriefcaseSolid size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">Cross Border Transmission</svelte:fragment>
          </FeatureItem>
          <FeatureItem class={featureItemClass} {h3Class} {iconClass}>
            <svelte:fragment slot="icon"><RocketSolid size="xl" /></svelte:fragment>
            <svelte:fragment slot="h3">CBDC Bank Compatibility</svelte:fragment>
          </FeatureItem>
        </div> 
      </FeatureDefault>
    </div> 

    <div class="py-8 px-4 my-auto min-h-screen min-w-full sm:py-16 lg:px-4">
      <div class="gap-8 py-8 px-4 mx-auto xl:gap-16 sm:py-16 lg:px-6 ">
        <div class="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 class="mb-4 text-6xl xl:text-7xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Operating Principles
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
        </div>
      </div>
    </div>
  </Section>
</div>
