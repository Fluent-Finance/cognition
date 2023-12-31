// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

import _ from 'lodash';
import type { FluentStyleThemeType } from '$lib/types.d/cognition';

const FluentStyles: FluentStyleThemeType ={

  global :{
    color :{
      base :`bg-white dark:bg-base-100`,
    },
    center :{
      all  :`align-middle text-center items-center content-center`,
    },
    container :{},
    flex :{
      base :`flex flex-col`,
    },
    size :{
      base    :`px-1 mx-1`,
      breaks  :`xs:px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12`,
    },
    grid :{
      all :`grid grid-cols-1 xs:grid-cols-2 gap-6`,
    },
    font :{},
    text :{
      breaks :{
        all :`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl`,
      },
    },
  },

  footer :{
    div :{
      grid    :``,
      layer   :`z-index-999`,
      space   :`my-10 py-10 px-10 xs:px-20`,
      size    :`min-h-90 h-90 w-full`,
      align   :`justify-left`,
      color   :`bg-neutral`,
      dark    :`dark:bg-gray-800`,
      break   :`xs:flex xs:flex-wrap`,
    },

    icon :{
      space   :`mt-3 p-1`,
      size    :`w-7 h-7 rounded-full`,
      break   :`xs:w-9 xs:h-9`,
      align   :`align-bottom`,
      color   :`text-white bg-base-100`,
      dark    :`dark:text-gray-500 dark:hover:text-white`,
      effect  :`hover:text-gray-400`,
    },

    button :{
      align   :``,
      font    :`font-basier font-medium`,
      color   :`bg-base-600 dark:bg-base-800`,
      view    :`sm:block`,
      text    :`text-center text-neutral text-md leading-normal`,
      size    :`min-h-lg px-9 py-5 mx-2 rounded-xl `,
      effect  :`hover:bg-primary dark:hover:bg-base-900 dark:hover:text-base-100`,
      break   :`xs:px-11 xs:text-sm sm:text-md md:text-lg lg:text-2xl`,
    },
  },

  get :((path: string)=> {
    return _.get(FluentStyles, path);
  }),

  processStyles :((elPath: string)=> { 
    return FluentStyles._classes(elPath);
  }),

  _classes :(el: string)=> {
    return _?.values(_.get(FluentStyles, el)).join(' ').trim();
  }
};

export default FluentStyles;
