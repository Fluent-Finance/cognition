<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Img, Modal } from 'flowbite-svelte';

  import bitrue                 from '$lib/assets/bitrue.png';
  import xdc                    from '$lib/assets/xdc.png';
  import ethereum               from '$lib/assets/ethereum.png';
  import celo                   from '$lib/assets/celo.svg?url';
  import arbitrum               from '$lib/assets/arbitrum.png';

  $: clickOutsideModal = false;

</script>

<Modal title="Get USPlus today!" bind:open={clickOutsideModal} autoclose outsideclose>
  <div class="grid grid-cols-5 gap-4">
    <a href="https://www.bitrue.com/trade/usplus_usdt" target="_blank"> 
      <Img src={bitrue} class="w-20" size="max-w-lg" alt="Bitrue" />
    </a>  
    <a href="https://app.uniswap.org/pools/651885" target="_blank"> 
      <Img src={arbitrum} class="w-20" size="max-w-lg" alt="Arbitrum" />
    </a>  
    <a href="https://info.uniswap.org/#/celo/pools/0x7053060549aaad6ea733d053153bb9c00bfe42d2" target="_blank"> 
      <Img src={celo} class="w-20" size="max-w-lg" alt="CELO" />
    </a>  
    <a href="https://info.uniswap.org/#/pools/0x73d4c165472d38ca879b7cbd4f5f7ab218d49086" target="_blank"> 
      <Img src={ethereum} class="w-20" size="max-w-lg" alt="Ethereum" />
    </a>  
    <a href="https://analytics.xspswap.finance/token/0xc280ebcd651d2a0c8d4bb49151062c9eef55d370" target="_blank"> 
      <Img src={xdc} class="w-20" size="max-w-lg" alt="XDC" />
    </a>  
  </div>

  <svelte:fragment slot="footer">
  </svelte:fragment>
</Modal>
