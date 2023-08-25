<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { 
    Img, 
    DarkMode, 
    Navbar, 
    NavBrand, 
    NavHamburger, 
    NavUl, 
    NavLi, 
    Button 
  } from 'flowbite-svelte';

  import _                         from 'lodash';
  import { page }                  from '$app/stores';
  import theme                     from '$lib/stores/ThemeStore';
  import FluentLogoIconColor       from '$lib/assets/Logo-Color.svg?url';
  import FluentLogoIconWhite       from '$lib/assets/Logo-White.svg?url';
  import FluentLogoIconBlack       from '$lib/assets/Logo-Black.svg?url';

  export let drawerHidden: boolean = false;

  $: currentTheme  = $theme;
  $: logoIconStyle = (currentTheme === 'light' ? FluentLogoIconColor : FluentLogoIconWhite);
  $: activeUrl     = $page.url.pathname;
  $: drawerHidden  = drawerHidden;

  let navClass    = 'bg-white dark:bg-base-100 border-none px-4 lg:px-6 py-2.5';
  let navDivClass = 'bg-white dark:bg-base-100 flex flex-wrap justify-between items-center mx-auto max-w-full';

  let darkModeClasses = `
    dark:hover:text-white 
    hover:text-base-900
  `;

  let divClass = `
    justify-between 
    items-center 
    w-full 
    lg:flex 
    lg:w-auto 
    lg:order-1
  `;

  let ulClass = `
    flex flex-col 
    mt-4 
    font-medium 
    lg:flex-row 
    lg:space-x-8 
    lg:mt-0
  `;

  let activeClass = `
    text-neutral 
    bg-base-600 
    md:bg-transparent 
    md:text-primary 
    md:dark:text-base-800 
    dark:bg-base-800 
    md:dark:bg-transparent
  `;

  let nonActiveClass = `
    text-gray-700 
    hover:bg-base-400 
    md:hover:bg-transparent 
    md:border-0 
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
    hover:bg-primary
    dark:hover:bg-base-700
    dark:bg-base-800
  `;

  let logoSpanClasses = `
    self-center
    whitespace-nowrap
    text-2xl
    sm:text-3xl
    font-basier
    font-bold
    opacity-80
    text-base-100
    dark:opacity-100
    dark:text-neutral
  `;
</script>

<header class="z-index-50 sticky top-0" style='z-index: 50'>
  <Navbar class="bg-white dark:bg-base-100" let:hidden let:toggle fluid={true} {navClass} {navDivClass}>
    <NavBrand href="/">
      <Img src={logoIconStyle} class="mr-2 h-7 opacity-75 dark:invert-100" alt="Fluent Logo" />

      <span class={logoSpanClasses}> 
        <span class="text-primary dark:text-base-800"> Fluent </span> Finance
      </span>
    </NavBrand>

    <div class="flex items-center lg:order-2">
      <Button 
        target="_blank" 
        class={connectWalletClasses}
        href="https://app.fluent.finance">
          Consumer Portal
      </Button>
      <DarkMode class={darkModeClasses} />
      <NavHamburger on:click={toggle} btnClass={hamburgerClasses} />
    </div>

    <NavUl {activeUrl} {hidden} {divClass} {ulClass} {activeClass} {nonActiveClass}>
        <NavLi 
          href='/'
          active={activeUrl === '/'}> Home
        </NavLi>
        <NavLi 
          href='/pages/team'
          active={activeUrl === '/pages/team'}> Team
        </NavLi>
        <NavLi 
          target="_blank"
          href='https://twitter.com/fluentdao'> About
        </NavLi>
        <NavLi 
          target="_blank"
          href='https://fluentfinance.medium.com'> Engagments
        </NavLi>
        <NavLi 
          target="_blank"
          href='https://docsend.com/view/4zjd678kaifqy7jf'> Whitepaper
        </NavLi>
    </NavUl>
  </Navbar>
</header>
