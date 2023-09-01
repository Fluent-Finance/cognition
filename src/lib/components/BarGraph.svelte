<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->

<script>
  import { Bar } from 'svelte-chartjs';
  import * as _  from 'lodash';
  import * as ax from 'axios';
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  const axios = ax.default;

  const borderColor     = [];
  const backgroundColor = [];

  const format   = (num) => { return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); }; 
  const display  = (x)   => { return `${x[1]} - ${x[0]} - $${format(x[2])}`; }
  const colorset = ()    => {
    const [red, green, blue] = [_.random(100.00,255.00), _.random(100.00,255.00), _.random(100.00,255.00)];
    const background         = `rbga(${red}, ${green}, ${blue}, 0.2)`;
    const border             = `rgb(${red}, ${green}, ${blue})`;
    backgroundColor.push(background);
    borderColor.push(border);
  }; 

  const fetchAndFormatDataset = async () => {

    const results = await axios.get(import.meta.env.VITE_GATEWAY_URL);

    const accounts = _.orderBy(results.data, ['balance'], ['asc']);
    const balances = _.sortBy(_.map(accounts, 'availableBalance').map(parseFloat));
    const types    = _.map(accounts, 'type');
    const names    = _.map(accounts, 'bankId');
    const labels   = _.uniq(_.map(_.zip(types, names, balances), display));

    _.times(_.size(balances), colorset)

    return {
      labels,
      datasets: [{
        label: 'Total US+ Reserves',
        data: balances,
        borderWidth: _.size(balances),
        backgroundColor,
        borderColor,
      }]
    };
  };

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  export let promise = fetchAndFormatDataset();
</script>

{#await promise}
  <h1>Loading Reserves Chart...</h1>
{:then data}
  <Bar {data} options={{ responsive: true, }} />
{/await}
