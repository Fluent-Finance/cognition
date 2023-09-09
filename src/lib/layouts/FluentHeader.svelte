<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->
<script lang='ts'>
  import _       from 'lodash';
  import { Cog } from 'svelte-heros-v2';
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';

  import { page }                  from '$app/stores';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let drawerHidden: boolean = false;

  $: activeUrl    = $page.url.pathname;
  $: drawerHidden = drawerHidden;

  let toggleDrawer = () => { 
    dispatch('toggleDrawer', drawerHidden);
  };

  let headerClasses = `
    sticky top-0 
    flex flex-col 
    header w-full 
    justify-between 
    mb-auto mx-auto 
    bg-white dark:bg-base-100
  `;

  let btnCss   = `
    focus:outline-none 
    whitespace-normal 
    rounded-lg 
    focus:ring-2 
    p-1.5 
    focus:ring-gray-400
  `;

  let btnBgCss = `
    hover:bg-base-100 
    dark:hover:bg-base-100 
    m-0 mr-3 
    4xl:hidden
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
    lg:!pl-0 lg:text-primary-700 
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
    self-center 
    whitespace-nowrap 
    text-xl 
    font-semibold 
    dark:text-white 
    pl-4
  `;

  let divClasses = `
    flex flex-grow 
    m-auto text-center 
    justify-between 
    lg:block 
    2xl:w-auto 
    order-1 
    lg:order-none
  `;

  let navbarClasses = `dark:bg-base-100`;
  let navLiClasses  = `lg:px-2 lg:mb-0`;
  let ulFlexCss     = `flex flex-row py-9 my-8`;
  let ulBgCss       = `lg:bg-white dark:lg:bg-transparent lg:border-0`;
  let ulTextCss     = `text-sm lg:text-xl lg:font-normal font-medium gap-4`;

  const SPACE = '\u00A0';

  let btnClasses            = _.join(_.concat( btnCss, btnBgCss ), SPACE);
  let ulClasses             = _.join(_.concat( ulFlexCss, ulTextCss, ulBgCss ), SPACE);
  let navUlNonActiveClasses = _.join(_.concat( navUlMarginCss, navUlNonBgCss, navUlDarkBgCss ), SPACE);
  let navUlActiveClasses    = _.join(_.concat( navUlFlexCss, navUlBgCss ), SPACE);
</script> 

<!-- @Header Content Slot --> 
<header class={headerClasses}>
  <Navbar class={navbarClasses} let:hidden let:toggle>

    <NavHamburger 
      on:toggleDrawer 
      on:click={toggleDrawer} 
      data-drawer-target='sidebar' 
      data-drawer-show='sidebar' 
      aria-controls='sidebar' 
      btnClass={btnClasses} />

    <NavBrand href="/">
      <Cog />
      <span class={brandSpanClasses}>
        Cognition
      </span>
    </NavBrand>

    <NavUl {hidden} {divClasses} {ulClasses} 
      nonActiveClass={navUlNonActiveClasses} 
      activeClass={navUlActiveClasses}>
      <NavLi 
        href='/dashboard/fluent'
        class={navLiClasses} 
        active={activeUrl === '/dashboard/fluent'}> Dashboard
      </NavLi>
      <NavLi 
        href='/content/whitepaper' 
        class={navLiClasses} 
        active={activeUrl === '/content/whitepaper'}> Whitepaper
      </NavLi>
      <NavLi 
        href='https://github.com/Fluent-Finance/Cognition' 
        class={navLiClasses}> GitHub
      </NavLi>
    </NavUl>

    <div class="flex items-center ml-auto">
      <DarkMode class={darkModeClasses} />
    </div>

    <NavHamburger on:click={toggle} btnClass="md:hidden lg:hidden xl:hidden" />

  </Navbar>
</header>
