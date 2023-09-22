<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

<script lang='ts'>
  // @ts-ignore 
  // @ts-nocheck 
  import FluentHero       from '$lib/layouts/FluentHero.svelte'
  // import FluentPanel      from '$lib/layouts/FluentPanel.svelte';
  import FluentMidPanel   from '$lib/layouts/FluentMidPanel.svelte';
  import FluentFinalPanel from '$lib/layouts/FluentFinalPanel.svelte';
</script>

<div class='flex flex-col w-full h-full'> 
  <div class='flex flex-row h-full'> 
    <FluentHero />                             
  </div> 
  <div class='flex flex-row h-full'> 
    <FluentMidPanel /> 
  </div> 
  <div class='flex flex-row h-full'> 
    <FluentFinalPanel /> 
  </div> 
</div> 
