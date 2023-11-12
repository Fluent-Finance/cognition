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
    min-w-[200px]
    max-w-[337px]
    xs:max-w-[487px]
    sm:max-w-[637px]
    md:max-w-[797px]
    lg:max-w-[797px]
    xs:w-[487px]
    sm:w-[637px]
    md:w-[797px]
    lg:w-[797px]
    text-base-200
    text-xl 
    xs:text-3xl 
    sm:text-4xl 
    md:text-5xl 
    lg:text-5xl 
    xl:text-5xl 
    font-medium
    font-basier
    leading-90
  `;

  let divHeroClass = `
    relative
    min-h-screen
    max-w-full
    my-5
    mx-0
    px-0
    py-19
    xs:mx-5
    xs:px-10
    md:mx-10
    md:px-12
    lg:px-16
    lg:py-10
  `;

  let divHeroTextClass = `
    my-12
    max-w-[383px]
    xs:max-w-[583px]
    sm:max-w-[733px]
    md:max-w-[983px]
    lg:max-w-[1283px]
    xs:w-[583px]
    sm:w-[733px] 
    md:w-[983px] 
    lg:w-[1283px] 
    xl:w-[1476px] 
  `;

  let shader = `
    text-base-50 
    xs:text-6xl
    sm:text-7xl
    md:text-8xl
    lg:text-9xl
  `;

  let heroText = `
    text-black
    leading-[40px]
    xs:leading-[58px]
    sm:leading-[72px]
    md:leading-[90px]
    lg:leading-[112px]
    xl:leading-[112px]
    font-basier
    font-medium
    max-w-9xl
    text-[35px] 
    xs:text-6xl
    sm:text-7xl
    md:text-8xl
    lg:text-9xl
    xl:text-9xl
    tracking-tighter
    dark:text-white
  `;

  function handleAnchorClick (event) {
		event.preventDefault();
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

  <div class={divHeroClass}>
    <div class="text-left">
      <div class="max-w-screen-xl relative">
        <div>
          <div class={divHeroTextClass}>
            <span class={heroText}>
              Interoperable Financial Infrastructure Bringing Banks  
              <span class={shader}>On-Chain</span>
            </span>
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
