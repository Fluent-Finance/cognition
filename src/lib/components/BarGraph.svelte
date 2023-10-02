<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Bar } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/reserves';
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

  const memoize = (fn, cache) => {
    return (...args) => {
      const key = JSON.stringify(args);
      if (key in cache) { return cache[key]; }

      const result = fn(...args);
      cache[key]   = result;

      return result;
    };
  };

  let dataset  = new DataSet();
  const cache  = {};
  const memoFn = memoize(dataset.initialize, cache);


  export let promise = memoFn();

  export let options = {
    responsive: true,
  };
</script>

{#await promise}
  <div class='flex justify-between w-full text-center'> 
    <span class="text-center justify-between m-auto h-auto loading loading-infinity loading-lg"></span>
  </div> 
{:then data}
  <Bar {data} {options} />
{/await}
