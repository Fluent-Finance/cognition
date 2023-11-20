<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _            from 'lodash';
  import { Img }      from 'flowbite-svelte';

  import bitrue            from '$lib/assets/bitrue.png';
  import ethereum          from '$lib/assets/ethereum.png';
  import celo              from '$lib/assets/celo.svg?url';
  import arbitrum          from '$lib/assets/arbitrum.png';


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

  let placeholder = `w-[271px] h-[104px] inset-0 object-center bg-neutral-50 rounded-[10px] shadow`;
</script> 

<div id="img-panels" class="hidden sm:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 my-10">
  <div class={placeholder}>
    <a href="https://www.bitrue.com/trade/usplus_usdt" target="_blank"> 
      <Img src={bitrue} class={imageClass} {imgClass} {size} alt="Bitrue" />
    </a>  
  </div>
  <div class={placeholder}>
    <a href="https://app.uniswap.org/pools/651885" target="_blank"> 
      <Img src={arbitrum} class={imageClass} {imgClass} {size} alt="Arbitrum" />
    </a>  
  </div>
  <div class={`pt-3 ${placeholder}`}>
    <a href="https://info.uniswap.org/#/celo/pools/0x7053060549aaad6ea733d053153bb9c00bfe42d2" target="_blank"> 
      <Img src={celo} class={imageClass} {imgClass} {size} alt="Celo" />
    </a>  
  </div>
  <div class={placeholder}>
    <a href="https://info.uniswap.org/#/pools/0x73d4c165472d38ca879b7cbd4f5f7ab218d49086" target="_blank"> 
      <Img src={ethereum} class={imageClass} {imgClass} {size} alt="Ethereum" />
    </a>  
  </div>
</div>
