// @ts-ignore
// @ts-nocheck
import _ from 'lodash';
import R from 'ramda';
import axios from 'axios';

export let fetchDataset = async () => {
  const url     = 'https://gatewayapi.fluent.finance/v1/gateway/balances';
  const results = await axios.get(url);

  const reserves = _.filter(results.data, { type: 'Reserve'});
  const labels   = _.map(reserves, 'bankId');
  const bardata  = _.map(reserves, 'availableBalance');
  const zipped   = R.zip(labels, bardata);

  const realLabels = _.map(zipped, (x) => { return `${x[0]} - $${x[1]}`; })

  const chartdata = {
    labels: realLabels,
    datasets: [{
      label: 'Total US+ Across All Networks',
      data: bardata,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
  };

  return {data: chartdata};
};
