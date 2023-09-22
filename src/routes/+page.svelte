<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

<script lang='ts'>
  // @ts-ignore 
  // @ts-nocheck 
  import FluentHero       from '$lib/layouts/FluentHero.svelte'
  import FluentPanel      from '$lib/layouts/FluentPanel.svelte';
  import FluentFinalPanel from '$lib/layouts/FluentFinalPanel.svelte';
  // import FluentModal      from '$lib/components/FluentModal.svelte';

  // let clickOutsideModal = false;

</script>

<div class='flex flex-col w-full h-full'> 
  <div class='flex flex-row h-full'> 
    <FluentHero />                             
  </div> 
  <div class='flex flex-row h-full'> 
    <FluentPanel /> 
  </div> 
  <div class='flex flex-row h-full'> 
    <FluentFinalPanel /> 
  </div> 
</div> 
