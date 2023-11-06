<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Button }        from 'flowbite-svelte';
  import { Section, News } from 'flowbite-svelte-blocks';
  import FluentHeroPanel   from './FluentHeroPanel.svelte';
  import { Img, Modal }    from 'flowbite-svelte';
  import bitrue            from '$lib/assets/bitrue.png';
  import xdc               from '$lib/assets/xdc.png';
  import ethereum          from '$lib/assets/ethereum.png';
  import celo              from '$lib/assets/celo.svg?url';
  import arbitrum          from '$lib/assets/arbitrum.png';

  let clickOutsideModal = false;

  let imgClass = `
    flex flex-row
    w-10
    object-fit 
    dark:invert
    md:w-15
    lg:w-20
    xl:w-25
  `;

  let heroText = `
    text-black
    text-[90px] 
    leading-[112px]
    font-basier
    font-medium
    max-w-9xl
    text-3xl
    md:text-6xl
    lg:text-7xl
    xl:text-9xl
    leading-none
    tracking-tighter
    dark:text-white
  `;

  let onchain = `
    ml-2 
    text-base-50 
    font-medium
    font-basier 
    leading-[112px]
    max-w-9xl
    text-3xl
    md:text-6xl
    lg:text-7xl
    xl:text-9xl
  `;

  let btnColor = `
    items-center
    block
    px-5
    py-4
    font-medium
    text-center
    text-white
    transition
    duration-500
    ease-in-out
    transform
    bg-base-50
    lg:px-10
    rounded-xl
    hover:bg-primary
    dark:bg-base-800
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-blue-500
  `;

  let btnPlain = `
    items-center
    block
    px-5
    lg:px-10
    py-3.5
    text-base
    font-medium
    text-center
    text-secondary
    dark:text-neutral
    transition
    duration-500
    ease-in-out
    transform
    border-2
    border-white
    shadow-md
    rounded-xl
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-gray-500
  `;

  let lowerCopy = `
    mb-12
    w-[589px]
    lg:w-[897px]
    text-base-200
    text-5xl 
    font-medium
    font-basier
    leading-90
  `;

  function handleAnchorClick (event) {
		event.preventDefault()
		const link     = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor   = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		})
	}
</script>

<Section name="heroDefault">

  <Button 
    on:click={() => (clickOutsideModal = true)}
    class="p-0 m-0">
    <News>
      <span class="text-sm bg-base-50 dark:bg-base-800 rounded-full text-white px-3 py-1 mr-3">USPlus</span>
      <span class="text-sm mx-1 px-1 font-bold opacity-80 text-base-100 dark:text-neutral">is live!</span> 
      <span class="text-sm font-medium opacity-80 text-base-100 dark:text-neutral" >Take a look</span>
    </News>
  </Button>
  <Modal title="Get USPlus today!" bind:open={clickOutsideModal} autoclose outsideclose>
    <div class="grid grid-cols-5 gap-2">
      <a href="https://www.bitrue.com/trade/usplus_usdt" target="_blank"> 
        <Img src={bitrue} class={imgClass} size="max-w-xl" alt="Bitrue" />
      </a>  
      <a href="https://app.uniswap.org/pools/651885" target="_blank"> 
        <Img src={arbitrum} class={imgClass} size="max-w-xl" alt="Arbitrum" />
      </a>  
      <a href="https://info.uniswap.org/#/celo/pools/0x7053060549aaad6ea733d053153bb9c00bfe42d2" target="_blank"> 
        <Img src={celo} class={imgClass} size="max-w-xl" alt="CELO" />
      </a>  
      <a href="https://info.uniswap.org/#/pools/0x73d4c165472d38ca879b7cbd4f5f7ab218d49086" target="_blank"> 
        <Img src={ethereum} class={imgClass} size="max-w-xl" alt="Ethereum" />
      </a>  
      <a href="https://analytics.xspswap.finance/token/0xc280ebcd651d2a0c8d4bb49151062c9eef55d370" target="_blank"> 
        <Img src={xdc} class={imgClass} size="max-w-xl" alt="XDC" />
      </a>  
    </div>

    <svelte:fragment slot="footer">
    </svelte:fragment>
  </Modal>

  <div class="relative items-center min-h-screen w-full mx-15 px-5 py-19 my-5 md:px-12 lg:px-16 max-w-9xl lg:py-10">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex">
        <div>
          <div class="w-[883px] lg:w-[1276px] mb-9">
            <span class={heroText}>
              Interoperable Financial Infrastructure Bringing Banks  
            </span>
            <span class={onchain}>On-Chain</span>
          </div>
          <div class={lowerCopy}>
            Deposit Token Infrastructure for Direct On-Chain Asset Issuance
          </div>

          <div class="flex w-full gap-2 mx-auto mt-6">
            <div class="mt-3 rounded-lg sm:mt-0">
              <a href="#anchor-learn" on:click={handleAnchorClick}>
                <button class={btnColor}>
                  Learn More
                </button>
              </a> 
            </div>
            <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <a href="/dashboard/fluent">
                <button class={btnPlain}>
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
