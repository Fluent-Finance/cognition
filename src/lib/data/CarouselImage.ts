// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

import _ from 'lodash';

const Images = async () => {
  return await Promise.all(
    _.map(
      import.meta.glob('$lib/assets/carousel/*'), 
      async (v,k) => { return _.get((await v()), 'default') }
    )
  ); 
};

export default {
  ...(await (async () => { return await Images() })())
}
