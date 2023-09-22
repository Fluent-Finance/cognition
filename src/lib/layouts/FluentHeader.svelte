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
  import { createEventDispatcher } from 'svelte';
  import { page }                  from '$app/stores';
  import theme                     from '$lib/stores/ThemeStore';
  import FluentLogoIconColor       from '$lib/assets/Logo-Color.svg?url';
  import FluentLogoIconWhite       from '$lib/assets/Logo-White.svg?url';
  import { DotsVerticalOutline }   from 'flowbite-svelte-icons'

  const dispatch = createEventDispatcher();
  export let drawerHidden: boolean = false;

  $: currentTheme  = $theme;
  $: logoIconStyle = (currentTheme === 'light' ? FluentLogoIconColor : FluentLogoIconWhite);
  $: activeUrl     = $page.url.pathname;
  $: drawerHidden  = drawerHidden;

  let toggleDrawer = () => { dispatch('toggleDrawer', drawerHidden); };

  let navClass    = 'bg-white border-none px-4 lg:px-6 py-2.5 dark:bg-base-100';
  let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';

  let darkModeClasses = `
    dark:hover:text-white 
    hover:text-base-900
  `;

  let btnCss = `
    p-1.5 
    m-0 mr-3 
    xl:hidden
    whitespace-normal 
    rounded-lg 
  `;

  let btnBgCss = `
    hover:bg-white
    dark:hover:bg-base-100 
    focus:ring-2 
    focus:ring-gray-400
    focus:outline-none 
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
    text-primary 
    bg-primary 
    md:bg-transparent 
    md:text-primary 
    md:dark:text-base-800 
    dark:bg-base-800 
    md:dark:bg-transparent
  `;

  let nonActiveClass = `
    text-gray-700 
    hover:bg-primary 
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
    bg-primary
    hover:bg-secondary
    dark:hover:bg-base-700
    dark:bg-base-800
  `;

  let logoSpanClasses = `
    self-center
    whitespace-nowrap
    text-lg
    sm:text-3xl
    font-basier
    font-bold
    opacity-80
    text-base-100
    dark:opacity-100
    dark:text-neutral
  `;

  const SPACE = '\u00A0';
  let sidebarBtnClasses = _.join(_.concat( btnCss, btnBgCss ), SPACE);
</script>

<header class="z-index-50 sticky top-0" style='z-index: 50'>
  <Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
    <NavBrand href="/">
      <DotsVerticalOutline 
        on:toggleDrawer 
        on:click={toggleDrawer} 
        data-drawer-target='sidebar' 
        data-drawer-show='sidebar' 
        aria-controls='sidebar' 
        btnClass={sidebarBtnClasses} />

      <Img src={logoIconStyle} class="mr-2 h-6 sm:h-7" alt="Fluent Logo" />

      <span class={logoSpanClasses}> 
        <span class="text-primary dark:text-base-800"> Fluent </span> Finance
      </span>
    </NavBrand>

    <div class="flex items-center lg:order-2">
      <Button 
        href="https://app.fluent.finance" 
        target="_blank" 
        class={connectWalletClasses} 
        color="none">
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
          href='/pages/about'
          active={activeUrl === '/pages/about'}> About
        </NavLi>
        <NavLi 
          href='/pages/team'
          active={activeUrl === '/pages/team'}> Team
        </NavLi>
        <NavLi 
          href='/pages/engagements'
          active={activeUrl === '/pages/engagements'}> Engagments
        </NavLi>
        <NavLi 
          target="_blank"
          href='https://docsend.com/view/4zjd678kaifqy7jf'> Whitepaper
        </NavLi>
    </NavUl>
  </Navbar>
</header>
