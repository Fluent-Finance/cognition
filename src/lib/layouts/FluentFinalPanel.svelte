<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import Src          from '$lib/assets/USPlus-Logo-Text.svg?url';
  import prinImage    from '$lib/assets/principles.png';

  const alt     = 'USPlus Logo';
  const classes = 'w-full mx-auto';
</script> 

<Section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 my-auto min-h-screen mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
      <div class="text-gray-500 dark:text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Operating Principles
        </h2>
        <p class="mb-8 font-light lg:text-xl">
          Fluent’s engineering and business development efforts are grounded 
          in a common belief that decentralized mechanics enable fairer, 
          open systems – whether in on-chain environments, traditional environments, or across both.
        </p>
        <p class="mb-8 font-light lg:text-xl">
          Decentralized systems are characterized by 4 defining principles that 
          must be upheld in both the development process and ongoing operations.
        </p>
        <div class="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
          <div class="flex">
            <div class="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
              <svg class="w-15 h-15 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div>
              <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Genuine Ownership</h3>
            </div>
          </div>
          <div class="flex pt-8">
            <div class="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
              <svg class="w-15 h-15 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            </div>
            <div>
              <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">On-Chain Verification</h3>
            </div>
          </div>
          <div class="flex pt-8">
            <div class="flex justify-center items-center mr-4 w-8 h-8 bg-teal-100 rounded-full dark:bg-teal-900 shrink-0">
              <svg class="w-15 h-15 text-teal-600 dark;text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            <div>
              <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Disintermediation</h3>
            </div>
          </div>
        </div>
      </div>
      <Img class="mb-4 w-full lg:mb-0 transition-all duration-300 rounded-lg blur-sm hover:blur-none" src={prinImage} alt="feature image" />
    </div>

    <div class="py-8 px-4 mt-96 min-h-screen max-w-screen-xl text-center sm:py-16 lg:px-6">
      <h1 class="font-basier mb-10 text-xl font-extrabold leading-none tracking-tighter text-base-600 dark:text-white lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Fluent's Live Pilot Project
      </h1> 
      <p class="text-gray-500 sm:text-xl dark:text-gray-400">
        The USPlus stablecoin is a pilot project that showcases the basic viability and broader potential of the Fluent tech stack. 
        It resolves the inherent flaws of web3-native stablecoins. 
        USPlus issuance is led by a network of banks where its reserves are custodied in core deposit accounts. 
        <br class="hidden lg:inline-block" /> 
        Fluent provides real time transparency into USPlus <span class="text-primary dark:text-base-800"> 1:1 </span> 
        reserves via direct banking apis.
      </p> 
      <Img src={Src} {alt} class={classes} />
      <h2 class="mt-25 text-4xl w-full tracking-tight font-extrabold text-gray-900 dark:text-white">
        A superior more reliable <span class="text-primary dark:text-base-800"> stablecoin</span> 
      </h2>
    </div>
</Section>
