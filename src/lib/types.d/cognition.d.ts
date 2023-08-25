import type { AxiosResponse } from "axios";
import type { ChartData } from 'chart.js';

export type DataSetType = {
  data:     object | null;
  response: AxiosResponse<any> | {data: object} | null;
  rendered: ChartData;
  balances: any[] | number[] | null;
  types:    any[] | string[] | null;
  names:    any[] | string[] | null;
  banks:    any[] | string[] | null;
  labels:   any[] | string[] | null;
  borderColor:     string[]  | null;
  backgroundColor: string[]  | null;
  initialize: () => Promise<object>;
  fetch:      () => Promise<object | null>;
  render:     () => object | DataSetType['rendered'];
};
