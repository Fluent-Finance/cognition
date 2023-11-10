// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
import type { AxiosResponse } from "axios";
import type { ChartData }     from 'chart.js';

export type DataSetType = {
  data            :object | null;
  response        :AxiosResponse<any> | {data: object} | null;
  rendered        :ChartData;
  balances        :any[] | number[] | null;
  types           :any[] | string[] | null;
  names           :any[] | string[] | null;
  banks           :any[] | string[] | null;
  labels          :any[] | string[] | null;
  borderColor     :string[]  | null;
  backgroundColor :string[]  | null;
  initialize      :() => Promise<object>;
  fetch           :() => Promise<object | null>;
  render          :() => object | DataSetType['rendered'];
};


export type FluentStyleThemeType = {

  global :{

    color :{
      bgBase :string;

    } | object | undefined | null;

    text :{
      breaks :string;

    } | object | undefined | null;

    center      :object | undefined | null;
    flex        :object | undefined | null;
    grid        :object | undefined | null;
    font        :object | undefined | null;
    container   :object | undefined | null;

  } | object | undefined | null;

  footer :{
    div         :object;
    icon        :object;
    button      :object;
  };

  get           :Function;
  processStyles :Function;
  _classes      :Function;
}
