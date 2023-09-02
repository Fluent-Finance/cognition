<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->

<script>
  import { Bar } from 'svelte-chartjs';
  import DataSet from '$lib/chartData/bar';
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

         let dataset = new DataSet();
  export let promise = dataset.initialize();
</script>

{#await promise}
  <h1>Loading Reserves Chart...</h1>
{:then data}
  <Bar {data} options={{ responsive: true, }} />
{/await}
