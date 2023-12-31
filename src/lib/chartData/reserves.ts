// handcoded with ♥︎  by ⚡️ 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import _  from 'lodash';
import * as ax from 'axios';

import type { DataSetType } from '$lib/types.d/cognition.d.ts';
import type { ChartData } from 'chart.js';

const axios = ax.default;

class DataSet implements DataSetType {

  public data            = null;
  public response        = null;
  public rendered        = { labels: [], datasets: [] };
  public balances        = null;
  public types           = null;
  public names           = null;
  public banks           = null;
  public labels          = null;
  public borderColor:     any[] = [];
  public backgroundColor: any[] = [];

  constructor() {
    return this;
  }

  initialize = async (): Promise<ChartData> => {
    await this.fetch();

    this.parse();
    this.render();

    return this.rendered; 
  }

  fetch = async () => {
    if (_.isEmpty(_.get(this.response, 'data')))
      _.set(this, 'response',  (await axios.get(import.meta.env.VITE_GATEWAY_URL))); 

    return this.response;
  }

  parse =()=> {
    if (_.isEmpty(_.get(this, 'response.data'))) 
      throw new Error('Dataset response is empty, ensure fetch completed successful');

    const ordered = _.orderBy(_.get(this.response, 'data'), ['balance'], ['asc']);

    _.set(this, 'data',     _.filter(ordered, { active: true, valid: true }));
    _.set(this, 'balances', _.sortBy(_.map(this.data, 'availableBalance').map(parseFloat)));
    _.set(this, 'types',    _.map(this.data, 'type'));
    _.set(this, 'banks',    _.map(this.data, 'bankId'));
    _.set(this, 'names',    _.map(this.data, 'name'));

    return this.data;
  }

  format =()=> {
    const RGB = [_.random(100.00,255.00), _.random(100.00,255.00), _.random(100.00,255.00)].join();
    this.backgroundColor.push(`rgba(${RGB},0.2)`);
    this.borderColor.push(`rgb(${RGB})`);
    return;
  }

  formatNumber = (num: number) => { return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); }
  formatString = (x: any[])    => { return `$${this.formatNumber(x[2])} : ${x[0]}`;  }
  formatBanks  = (x: any[])    => { return `${_.truncate(x[1], {length: 9})} : ${x[0]}`; }

  formatLabels =()=> {
    if (_.isEmpty(this.data)) { this.fetch(); this.parse(); }

    _.set(this, 'labels', _.uniq(_.map(_.zip(this.types, this.names, this.balances), this.formatString)));

    return this.labels;
  }

  render =()=> {

    _.times(_.size(this.balances), this.format);

    this.formatLabels();

    const data            = _.get(this, 'balances');
    const labels          = _.get(this, 'labels');
    const borderWidth     = _.size(this.balances);
    const borderColor     = _.get(this, 'borderColor');
    const backgroundColor = _.get(this, 'backgroundColor');

    const title = _.uniq(_.map(_.zip(this.types, this.names, this.balances), this.formatBanks));

    _.set(this, 'rendered', {
      labels,
      datasets: [{
        label: `Total US+ : \n ${_.join(title, '  |  ')}`,
        data,
        borderWidth,
        backgroundColor,
        borderColor,
        hoverOffset: 4,
      }]
    });

    return this.rendered;
  }
}

export default DataSet;
