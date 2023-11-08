// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

import _ from 'lodash';

type FSType = {

  footer: {
    div: object;
    icon: object;
    button: object;
  };

  processStyles: Function;
  _classes: Function;
}

const FluentStyles: FSType ={

  footer: {
    div: {
      grid:  ``,
      space: `my-10 py-10 px-20`,
      size:  `min-h-90 h-90 w-full`,
      align: `justify-left`,
      color: `bg-neutral`,
      dark:  `dark:from-base-100 dark:via-base-100 dark:to-base-100`,
      break: `xs:flex xs:flex-wrap`,
    },

    icon: {
      space:  `mt-4 p-1`,
      size:   `w-5 h-5 rounded-full`,
      break:  `xs:w-7 xs:h-7`,
      align:  `align-bottom`,
      color:  `text-white bg-base-100`,
      dark:   `dark:text-gray-500 dark:hover:text-white`,
      effect: `hover:text-gray-900`
    },

    button: {
      align:  ``,
      font:   `font-basier font-medium`,
      color:  `bg-base-600`,
      view:   `sm:block`,
      text:   `text-center text-neutral text-md leading-normal`,
      size:   `min-h-lg px-9 py-5 mx-2 rounded-xl `,
      effect: `hover:bg-primary dark:hover:bg-base-700`,
      break:  `xs:px-11 xs:text-sm sm:text-md md:text-lg lg:text-2xl`
    },
  },

  processStyles :((s: {el: string})=> { 
    return FluentStyles._classes(s.el);
  }),

  _classes :(el: string)=> {
    return _.values(_.get(FluentStyles, el)).join(' ').trim();
  }
};

export default FluentStyles;
