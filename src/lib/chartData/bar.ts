// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

import * as _  from 'lodash';
import * as ax from 'axios';

import type { DataSetType } from '$lib/types.d/cognition.d.ts';

const axios = ax.default;

class DataSet implements DataSetType {

  public data            = null;
  public response        = null;
  public rendered        = null;
  public balances        = null;
  public types           = null;
  public names           = null;
  public labels          = null;
  public borderColor:     any[] = [];
  public backgroundColor: any[] = [];

  constructor() {
    return this;
  }

  initialize = async () => {
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

    _.set(this, 'data',     _.orderBy(_.get(this.response, 'data'), ['balance'], ['asc']));
    _.set(this, 'balances', _.sortBy(_.map(this.data, 'availableBalance').map(parseFloat)));
    _.set(this, 'types',    _.map(this.data, 'type'));
    _.set(this, 'names',    _.map(this.data, 'bankId'));

    return this.data;
  }

  format =()=> {
    const RGB = [_.random(100.00,255.00), _.random(100.00,255.00), _.random(100.00,255.00)].join();
    this.backgroundColor.push(`rgba(${RGB},0.2)`);
    this.borderColor.push(`rgb(${RGB})`);
    return;
  }

  formatNumber = (num: number) => { return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); }
  formatString = (x: any[])    => { return `${x[1]} - ${x[0]} - $${this.formatNumber(x[2])}`;  }

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

    _.set(this, 'rendered', {
      labels,
      datasets: [{
        label: 'Total US+ Reserves',
        data,
        borderWidth,
        backgroundColor,
        borderColor,
      }]
    });

    return this.rendered;
  }
}

export default DataSet;
