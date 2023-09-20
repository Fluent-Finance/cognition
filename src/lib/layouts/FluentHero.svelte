<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

<script lang='ts'>
  // @ts-ignore
  // @ts-nocheck
  import { Section, News } from 'flowbite-svelte-blocks';
  import FluentHeroPanel   from './FluentHeroPanel.svelte';

  function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}
</script>

<Section name="heroDefault">
    <News>
      <a href="https://etherscan.io/token/0xe2e15a27fd732a96534b9797bf8091f3d9849831" target="_blank">
        <span class="text-sm bg-primary dark:bg-base-800 rounded-full text-white px-3 py-1 mr-3">New</span>
        <span class="text-sm font-medium opacity-80 text-base-100 dark:text-neutral">𝙐𝙎✚ is live! Take a look</span>
      </a> 
    </News>

  <div class="relative items-center min-h-screen w-full px-5 py-19 my-5 mx-auto md:px-12 lg:px-16 max-w-9xl lg:py-10">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle">
        <div class="text-center">
          <h1 class="font-basier max-w-4xl text-3xl font-bold leading-none tracking-tighter dark:text-white text-neutral-600 md:text-6xl xl:text-8xl lg:text-7xl lg:max-w-5xl">
            Financial Interoperability Infrastructure Bringing Banks On-Chain today!
          </h1>
          <p class="font-neuehaas max-w-xl lg:text-1xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
            Deposit Token Infrastructure for Direct On-Chain Asset Issuance.
          </p>
          <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div class="mt-3 rounded-lg sm:mt-0">
              
              <a href="#anchor-learnmore" on:click={handleAnchorClick}>
                <button class="items-center block px-5 py-4 font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary lg:px-10 rounded-xl hover:bg-accent dark:bg-base-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Learn More
                </button>
              </a> 
            </div>
            <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <a href="/dashboard/fluent">
                <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-secondary dark:text-neutral transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Dashboard
                </button>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FluentHeroPanel /> 
</Section>
