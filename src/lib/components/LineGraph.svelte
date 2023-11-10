<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Line } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/reserves';
  import Memoize from '$lib/utils/Memoize';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
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
  <Line {data} {options} class="text-2xl mx-1 my-10"/>
{/await}
