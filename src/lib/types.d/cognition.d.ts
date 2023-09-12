import type { AxiosResponse } from "axios";

export type DataSetType = {
  data:     object | null;
  response: AxiosResponse<any> | {data: object} | null;
  rendered: object | null;
  balances: any[] | number[] | null;
  types:    any[] | string[] | null;
  names:    any[] | string[] | null;
  banks:    any[] | string[] | null;
  labels:   any[] | string[] | null;
  borderColor:     string[]  | null;
  backgroundColor: string[]  | null;
  initialize: () => Promise<object | null>;
  fetch:      () => Promise<object | null>;
  render:     () => object | DataSetType['rendered'];
};
