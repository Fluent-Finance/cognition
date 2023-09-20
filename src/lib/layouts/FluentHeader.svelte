<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _       from 'lodash';
  import FluentLogoIconWhite from '$lib/assets/Logo-White.svg?component';
  import FluentLogoIconBlack from '$lib/assets/Logo-Black.svg?component';
  import FluentLogoIconColor from '$lib/assets/Logo-Color.svg?component';
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';

  import theme                     from '$lib/stores/ThemeStore';
  import { page }                  from '$app/stores';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: currentTheme  = $theme;
  $: logoIconStyle = (currentTheme === 'dark' ? FluentLogoIconWhite : FluentLogoIconColor);

  export let drawerHidden: boolean = false;

  $: activeUrl    = $page.url.pathname;
  $: drawerHidden = drawerHidden;

  let toggleDrawer = () => { 
    dispatch('toggleDrawer', drawerHidden);
  };

  let headerClasses = `
    z-index-50
    sticky top-0 
    flex 
    header w-full 
    mb-auto mx-auto 
    bg-white dark:bg-base-100
  `;

  let btnCss = `
    focus:outline-none 
    whitespace-normal 
    rounded-lg 
    focus:ring-2 
    p-1.5 
    focus:ring-gray-400
  `;

  let btnBgCss = `
    hover:bg-white
    dark:hover:bg-base-100 
    m-0 mr-3 
    xl:hidden
  `;

  let darkModeClasses = `
    inline-block 
    dark:hover:text-white 
    hover:text-gray-900
  `;

  let navUlMarginCss = `
    md:!pl-3 md:!py-2 
    lg:!pl-0 
    text-base-100
  `;

  let navUlFlexCss = `
    md:!pl-3 md:!py-2 
    lg:!pl-0 lg:text-primary-400 
    text-white
  `;

  let navUlNonBgCss = `
    hover:bg-base-100 
    lg:hover:bg-transparent 
    lg:border-0 
    lg:hover:text-primary-700
  `;

  let navUlDarkBgCss = `
    dark:text-white 
    lg:dark:hover:text-primary-700 
    dark:hover:bg-base-100 
    dark:hover:text-white 
    lg:dark:hover:bg-transparent
  `;

  let navUlBgCss = `
    dark:text-white 
    dark:lg:text-primary-500 
    bg-primary-700 
    lg:bg-transparent 
    dark:bg-base-100 
    cursor-default
  `;

  let brandSpanClasses = `
    pl-3 self-center 
    whitespace-nowrap
    lg:text-2xl 
    font-semibold
    font-['Basier Circle Bold'] 
    text-base-300
    opacity-70
    dark:text-neutral 
  `;

  let divClass = `
    m-auto 
    items-center
    justify between
    text-center 
    order-3 
    xl:order-none
  `;

  let navbarClasses = `w-full bg-white dark:bg-base-100`;
  let navLiClasses  = `px-0 lg:px-2 lg:mb-0`;
  let ulFlexCss     = `flex flex-row py-7 my-3 mx-30`;
  let ulBgCss       = `bg-white dark:bg-base-100 lg:border-0`;
  let ulTextCss     = `text-sm lg:text-xl font-neuehaas font-medium gap-4`;

  const SPACE = '\u00A0';

  let btnClasses            = _.join(_.concat( btnCss, btnBgCss ), SPACE);
  let ulClass               = _.join(_.concat( ulFlexCss, ulTextCss, ulBgCss ), SPACE);
  let navUlNonActiveClasses = _.join(_.concat( navUlMarginCss, navUlNonBgCss, navUlDarkBgCss ), SPACE);
  let navUlActiveClasses    = _.join(_.concat( navUlFlexCss, navUlBgCss ), SPACE);
</script> 

<!-- @Header Content Slot --> 
<header class={headerClasses} style='z-index: 50'>

  <Navbar class={navbarClasses} let:hidden let:toggle>

    <div class='justify-between items-center'>
    <NavHamburger 
      on:toggleDrawer 
      on:click={toggleDrawer} 
      data-drawer-target='sidebar' 
      data-drawer-show='sidebar' 
      aria-controls='sidebar' 
      btnClass={btnClasses} />

    <NavBrand href="/">
      <svelte:component this={logoIconStyle} width="32" height="32" /> 
      <span class={brandSpanClasses}>
        Fluent | 𝙐𝙎✚
      </span>
    </NavBrand>

      <NavUl {hidden} {divClass} {ulClass}
        nonActiveClass={navUlNonActiveClasses} 
        activeClass={navUlActiveClasses}>

        <NavLi 
          href='/pages/about'
          class={navLiClasses} 
          active={activeUrl === '/pages/about'}> About
        </NavLi>
        <NavLi 
          href='/'
          class={navLiClasses} 
          active={activeUrl === '/'}> Resources
        </NavLi>

        <NavLi 
          href='/pages/engagements'
          class={navLiClasses} 
          active={activeUrl === '/pages/engagements'}> Engagments
        </NavLi>

        <NavLi 
          href='/pages/team'
          class={navLiClasses} 
          active={activeUrl === '/pages/team'}> Team
        </NavLi>

        <NavLi 
          href='/content/whitepaper' 
          class={navLiClasses} 
          active={activeUrl === '/content/whitepaper'}> Whitepaper
        </NavLi>
      </NavUl>

    <div class="flex items-center ml-auto">
      <DarkMode class={darkModeClasses} />
    </div>

    <NavHamburger on:click={toggle} btnClass="md:hidden lg:hidden xl:hidden" />
    </div>

  </Navbar>
</header>
