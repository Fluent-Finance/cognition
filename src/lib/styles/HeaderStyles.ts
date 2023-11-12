// handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->

let darkModeClasses = `
  dark:hover:text-white 
  hover:text-base-900
`;

let divClass = `
  mx-3
  md:flex
  order-0
`;

let ulClass = `
  mt-4 
  lg:mt-0
  flex 
  flex-col 
  md:flex-row 
  font-medium 
  md:space-x-7 
`;

let activeClass = `
  text-neutral 
  bg-base-50 
  md:bg-transparent 
  md:text-base-50 
  md:dark:text-base-800 
  dark:bg-base-800 
  md:dark:bg-transparent
`;

let nonActiveClass = `
  text-gray-700 
  hover:bg-base-400 
  md:hover:bg-transparent 
  md:order-0 
  md:hover:text-primary 
  dark:text-gray-400 
  md:dark:hover:text-base-800 
  dark:hover:bg-gray-700 
  dark:hover:text-base-800 
  md:dark:hover:bg-transparent
`;

let hamburgerClasses = `
  inline-flex
  items-center
  p-2
  ml-1
  text-sm
  text-gray-500
  rounded-lg
  lg:hidden
  hover:bg-base-400
  focus:outline-none
  focus:ring-2
  focus:ring-base-300
  dark:text-base-400
  dark:hover:bg-base-900
  dark:focus:ring-gray-600
`;

let connectWalletClasses = `
  mx-2
  hidden
  xs:py-2
  sm:block
  text-neutral
  bg-base-50
  hover:bg-800
  dark:hover:bg-base-700
  dark:bg-base-800
`;

let logoSpanClasses = `
  order-1
  self-center
  whitespace-nowrap
  text-2xl
  sm:text-3xl
  font-basier
  font-medium
  opacity-80
  text-base-100
  dark:opacity-100
  dark:text-neutral
`;

const HeaderStyles = {
  darkModeClasses,
  divClass,
  ulClass,
  activeClass,
  nonActiveClass,
  hamburgerClasses,
  connectWalletClasses,
  logoSpanClasses,
}

export default HeaderStyles;
