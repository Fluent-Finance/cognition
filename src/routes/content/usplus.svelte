<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _            from 'lodash';
  import { Section }  from 'flowbite-svelte-blocks';
  import { Img }      from 'flowbite-svelte';
  import { browser }  from '$app/environment';
  import Carousel     from 'svelte-carousel';
  import CarouselDot  from '$lib/atoms/CarouselDot.svelte';

  import bitrue       from '$lib/assets/bitrue.png';
  import ethereum     from '$lib/assets/ethereum.png';
  import celo         from '$lib/assets/celo.svg?url';
  import arbitrum     from '$lib/assets/arbitrum.png';
  import ImagePanels  from '$lib/atoms/ImagePanels.svelte';

  let carousel: any; 

  let divPanel = `
    flex-col 
    justify-center
    align-middle
    content-center
    items-center
  `;

  let imgClass = `
    mx-auto
    max-w-sm
    max-h-[104px]
  `;

  let imageClass = `
    mx-auto
    px-7
    py-7
    items-center
    content-center
  `;

  let size = 'max-w-full';

  let placeholder = `w-[270px] h-[104px] rounded-xl inset-0 object-center`;
</script> 

<Section class="bg-white dark:bg-base-100">
  <div class="
  flex-col
  mt-[-50px]  
  xs:mt-[0px]  
  py-[0]
  xs:py-0
  my-0
  px-4
  min-h-fit
  max-w-screen-xl
  text-center
  lg:px-6">

    <!-- USPlus Background Image -->
    <div class={`
    my-[-70px]
    md:my-[-40px]
    lg::my-[0px]
    w-full 
    h-[300px]
    md:h-[300px]
    bg-usplus-bg 
    object-fit 
    overflow-hidden
    bg-cover
    bg-no-repeat
    bg-clip-padding 
    bg-center
    dark:invert `} />
    <!-- USPlus Background Image -->

    <div class="
    my-1 
    md:my-10
    px-10
    text-4xl 
    xs:text-5xl 
    sm:text-6xl 
    md:text-7xl 
    lg:text-8xl 
    font-semibold 
    font-basier 
    leading-[42px]
    md:leading-[72px]
    text-black 
    dark:text-white
    text-center">
      <span class="">Fluent’s</span>
      <span class="text-base-50 dark:text-base-800"> Live</span>
      <span class=""> Pilot Project</span>
    </div>
     
    <div class="
    m-10
    px-2
    py-10
    md:m-10
    md:mx-20
    md:px-20
    md:py-10
    lg:m-10
    lg:mx-40
    lg:px-40
    text-sm  
    xs:text-lg  
    sm:text-xl 
    md:text-2xl 
    content-center
    items-center
    justify-center
    text-center
    text-base-200
    dark:text-neutral
    font-normal
    font-neuehaas
    leading-loose">
      The USPlus stablecoin showcases the basic viability and broader 
      potential of the Fluent tech stack. In order to resolve the inherent 
      flaws of web3-native stablecoins, USPlus issuance is led by a network of 
      banks where its reserves are custodied in deposit accounts. 
      Fluent provides real time transparency into USPlus 
      <span class="text-base-50 dark:text-base-800"> 1:1 </span> 
      reserves via direct banking apis.
    </div>

    <div class="
    mx-auto
    w-md
    h-15
    px-8
    py-6
    content-center
    align-middle
    rounded-2xl
    border-2
    border-black
    dark:border-white
    justify-center
    items-center
    gap-2
    inline-flex">
      <div class="
      text-center
      text-neutral-900
      dark:text-neutral
      text-md
      xs:text-lg
      md:text-xl
      font-medium
      font-basier
      leading-loose">
        <a href="/dashboard/fluent">
          USPlus Analytics Dashboard
        </a>
      </div>
    </div>

    <div class={divPanel}>
      <div class="flex justify-center align-middle justify-center content-center items-center py-10">
        <div class="flex min-h-[30vh] flex-col items-center gap-14 mx-auto">
          <div class="
          mt-20
          mx-5
          px-2
          md:mx-20
          md:px-40
          lg:px-20
          text-center
          text-black
          dark:text-neutral 
          text-xl
          sm:text-2xl
          lg:text-5xl
          font-medium
          font-basier
          leading-9">
            <span class="font-bold">
              USPlus 
            </span>
            is available on leading crypto exchanges
          </div>

          <ImagePanels />

          <div id="img-panels" class="sm:hidden max-w-[270px] max-h-[120px] rounded-lg shadow-lg bg-neutral-50 py-2 grid grid-cols-1">
            {#if browser}
              <Carousel 
              let:currentPageIndex
              arrows={false}
              autoplay={true}
              bind:this={carousel}>

                <div id={`panel-${currentPageIndex}`} class={placeholder}>
                  <a href="https://www.bitrue.com/trade/usplus_usdt" target="_blank"> 
                    <Img src={bitrue} class={imageClass} {imgClass} {size} alt="Bitrue" />
                  </a>  
                </div>
                <div id={`panel-${currentPageIndex}`} class={placeholder}>
                  <a href="https://app.uniswap.org/pools/651885" target="_blank"> 
                    <Img src={arbitrum} class={imageClass} {imgClass} {size} alt="Arbitrum" />
                  </a>  
                </div>
                <div id={`panel-${currentPageIndex}`} class={`pt-3 ${placeholder}`}>
                  <a href="https://info.uniswap.org/#/celo/pools/0x7053060549aaad6ea733d053153bb9c00bfe42d2" target="_blank"> 
                    <Img src={celo} class={imageClass} {imgClass} {size} alt="Celo" />
                  </a>  
                </div>
                <div id={`panel-${currentPageIndex}`} class={placeholder}>
                  <a href="https://info.uniswap.org/#/pools/0x73d4c165472d38ca879b7cbd4f5f7ab218d49086" target="_blank"> 
                    <Img src={ethereum} class={imageClass} {imgClass} {size} alt="Ethereum" />
                  </a>  
                </div>

                <div 
                slot="dots"
                let:showPage 
                let:currentPageIndex 
                let:pagesCount
                class="relative mt-20 h-[12px]">
                  <div class="w-[172.25px] h-1 relative">
                    {#each Array(pagesCount) as _, pageIndex (pageIndex)}
                      <CarouselDot
                        active={currentPageIndex === pageIndex}
                        on:click={() => showPage(pageIndex)}
                      ></CarouselDot>
                    {/each}
                  </div>
                </div>
              </Carousel>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>
