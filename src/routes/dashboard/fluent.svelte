<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->
<script async lang='ts'>
  import { Heading } from 'flowbite-svelte';
  import BarGraph from '$lib/components/BarGraph.svelte';
  import LineGraph from '$lib/components/LineGraph.svelte';
  let title = 'Fluent Dashboard';
</script>


<Heading class="p-8" tag="h1" customSize="text-3xl">{title}</Heading>

<div class="container flex flex-grow">
  <div class="basis-1/2">
    <BarGraph /> 
  </div>
  <div class="basis-1/2">
    <LineGraph /> 
  </div>
</div>
