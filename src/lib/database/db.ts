import _ from 'lodash';

type DBType = {
  store: object;
}

export default class DB implements DBType {

  public store: object;

  constructor() {
    this.store = {};

    return this;
  }

  async connect() {
    this.store = await Deno.openKv();
    console.log(this.store);
  }
}

