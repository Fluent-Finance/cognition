<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Bar } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/reserves';
  import Memoize from '$lib/utils/Memoize';

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';


  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  let dataset   = new DataSet();
  const cache   = {};
  const promise = Memoize(dataset.initialize, cache);

  export let dada    = promise();
  export let options = { responsive: true };
</script>

{#await dada}
  <div class='flex justify-between w-full text-center'> 
    <span class="text-center justify-between m-auto h-auto loading loading-infinity loading-lg"></span>
  </div> 
{:then data}
  <Bar {data} {options} />
{/await}
