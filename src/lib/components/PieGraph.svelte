<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->
<script lang='ts'> 
  import { Spinner } from 'flowbite-svelte';

  import { Pie } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/reserves';

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  Chart.register(
    Title, 
    Tooltip, 
    Legend, 
    ArcElement, 
    CategoryScale
  );

         let dataset = new DataSet();
  export let promise = dataset.initialize();
  export let options = { responsive: true, };
</script>


{#await promise}
  <div class='flex justify-between w-full text-center'> 
    <Spinner size='8' color='purple' class='mr-3 text-center' />
  </div> 
{:then data}
  <Pie {data} {options} />
{/await}
