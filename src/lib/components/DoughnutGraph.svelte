<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'> 
  import { Doughnut } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/reserves';
  import Memoize from '$lib/utils/Memoize';

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

  let dataset   = new DataSet();
  const cache   = {};
  const promise = Memoize(dataset.initialize, cache);

  export let dada    = promise();
  export let options = { responsive: true, };
</script>


{#await dada}
  <div class='flex justify-center text-center'> 
    <span class="text-center justify-between m-auto h-auto loading loading-infinity loading-lg"></span>
  </div> 
{:then data}
  <Doughnut {data} {options} class="align-middle mt-10 mx-4 p-0" />
{/await}
