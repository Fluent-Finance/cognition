<script lang='ts'>
  import { Section, } from 'flowbite-svelte-blocks';
  import { Img }      from "flowbite-svelte";
  import tokenImage   from '$lib/assets/tokenInfra.png';
</script> 

<Section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
    <!-- Row -->
    <div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
      <div class="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Deposit Token Infrastructure</h2>
        <p class="mb-8 font-light lg:text-xl">
          Deposit tokens are stable-valued, regulatory-compliant digital assets interoperable with core banking systems. 
          With Fluent, banks may issue fiat-equivalent tokens directly to public blockchains 
          based on outstanding customer deposits and central bank-issued CBDCs.
        </p>
        <!-- List -->
        <ul role="list" class="pt-8 text-3xl my-7 space-y-5 border-t border-gray-200 dark:border-gray-700">
          <li class="flex space-x-3 mt-2">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-bold leading-tight text-gray-900 dark:text-white">1-Click Issuance & Redemption</span>
          </li>
          <li class="flex space-x-3 mt-2">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-bold leading-tight text-gray-900 dark:text-white">Optimized Transactions</span>
          </li>
          <li class="flex space-x-3 mt-2">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-bold leading-tight text-gray-900 dark:text-white"> Federated Custody</span>
          </li>
        </ul>
      </div>
      <Img class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg" src={tokenImage}  alt="office feature image" />
    </div>

    <!-- Row -->
    <div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
      <Img class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png" alt="office feature image 2" />
      <div class="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">On the Rise:</h2>
        <p class="mb-8 font-light lg:text-xl">
          Deposit tokens already produce unprecedented efficiencies in cross-border transactions and humanitarian aid delivery.
        </p>
        <!-- List -->
        <ul role="list" class="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700">
          <li class="flex space-x-3">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Real Time Reserve Transparancy Dashboards</span>
          </li>
          <li class="flex space-x-3">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">CBDC Compatibility</span>
          </li>
          <li class="flex space-x-3">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Regulated & Compliant</span>
          </li>
          <li class="flex space-x-3">
            <!-- Icon -->
            <svg class="flex-shrink-0 w-10 h-10 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless cross-border transmissions</span>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</Section>
