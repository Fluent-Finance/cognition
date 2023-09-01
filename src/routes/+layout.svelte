<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->
<script lang="ts">
  import '../app.css';

  import '@fontsource/righteous';
  import '@fontsource/marvel';
  import '@fontsource/kalam';
  import '@fontsource/material-icons';

  import { MetaTags }      from 'svelte-meta-tags';
  import type { PageData } from './$types';
  import { page }          from '$app/stores';
  import { onMount }       from 'svelte';
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Sidebar,
    SidebarGroup,
    SidebarBrand,
    SidebarItem,
    SidebarWrapper,
    Drawer,
    CloseButton,
    SidebarDropdownWrapper
  } from 'flowbite-svelte';

  import { Icon }   from 'flowbite-svelte-icons';
  import { Cog }    from 'svelte-heros-v2';
  import { sineIn } from 'svelte/easing';

  export const mainClasses     = 'flex mx-auto pt-10';
  export const layoutClasses   = 'container mx-auto layout';
  export const flexGrowClasses = 'flex flex-grow';

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  export let data: PageData;

  let width: number;
  let breakPoint: number    = 1024;
  let backdrop: boolean     = false;
  let drawerHidden: boolean = false;
  let activateClickOutside  = true;

  $: activeUrl = $page.url.pathname;

  $: if (width >= breakPoint) {
    drawerHidden         = false;
    activateClickOutside = false;
  } else {
    drawerHidden         = true;
    activateClickOutside = true;
  }

  onMount(() => {
    if (width >= breakPoint) {
      drawerHidden         = false;
      activateClickOutside = false;
    } else {
      drawerHidden         = true;
      activateClickOutside = true;
    }
  });

  const toggleSide = () => {
    if (width < breakPoint) { drawerHidden = !drawerHidden; }
  };

  const toggleDrawer = () => { drawerHidden = false; };

  const SPACE = ' ';

  let darkModeClasses  = 'inline-block dark:hover:text-white hover:text-gray-900';
  let headerClasses    = 'flex-none w-full mx-auto bg-transparent dark:bg-primary';
  let spanClasses      = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
  let brandSpanClasses = "self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4";

  let divClasses = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulFlexCss  = 'flex flex-col py-3 my-4 lg:flex-row lg:my-0';
  let ulBgCss    = 'dark:lg:bg-transparent lg:bg-white lg:border-0';
  let ulTextCss  = 'text-sm font-medium gap-4';

  let navbarClasses   = 'dark:bg-base-100';
  let navLiClasses    = "lg:px-2 lg:mb-0";
  let drawerClasses   = 'overflow-scroll pb-32 dark:bg-base-100';
  let closeBtnClasses = 'mb-4 dark:text-white lg:hidden';

  let navUlMarginCss = 'md:!pl-3 md:!py-2 lg:!pl-0 text-base-100';
  let navUlFlexCss   = 'md:!pl-3 md:!py-2 lg:!pl-0 lg:text-primary-700 text-white';
  let navUlNonBgCss  = 'hover:bg-base-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700';
  let navUlDarkBgCss = 'dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-base-100 dark:hover:text-white lg:dark:hover:bg-transparent';
  let navUlBgCss     = 'dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-base-100 lg:dark:bg-transparent cursor-default';

  let sideIconFlexCss       = 'w-5 h-5 text-gray-500 transition duration-75';
  let sideIconTextCss       = 'dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white';
  let sideItemFlexCss       = 'flex items-center p-2';
  let sideItemTextCss       = 'text-base font-normal text-gray-900 dark:text-white';
  let sideItemBgCss         = 'bg-primary-200 dark:bg-primary-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-700';
  let sidebarWrapperClasses = 'overflow-y-auto py-4 px-3 rounded dark:bg-transparent';

  let btnCss   = 'focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400';
  let btnBgCss = 'hover:bg-base-100 dark:hover:bg-base-100 m-0 mr-3 lg:hidden';

  let btnClasses            = [ btnCss, btnBgCss ].join(SPACE);
  let sideIconClasses       = [ sideIconFlexCss, sideIconTextCss ].join(SPACE);
  let sideItemActiveClasses = [ sideItemFlexCss, sideItemTextCss, sideItemBgCss ].join(SPACE);
  let ulClasses             = [ ulFlexCss, ulTextCss, ulBgCss ].join(SPACE);
  let navUlNonActiveClasses = [ navUlMarginCss, navUlNonBgCss, navUlDarkBgCss ].join(SPACE);
  let navUlActiveClasses    = [ navUlFlexCss, navUlBgCss ].join(SPACE);

  let site = {
    name: 'Fluent: US+',
    href: '/',
    img: '/images/favicon-32x32.png'
  };
</script>

<style lang='postcss'>
  :global(body) {
    min-height: 100vh;
  }
</style>

<!-- Site MetaData OG Tags --> 
<MetaTags 
  title='Cognition'
  description='Fluent Finance Data Charts.' 
  openGraph={{
    url: `${import.meta.env.VITE_URL}`,
    title: 'Cognition: Fluent Finance',
    description: 'Data Charts for Fluent Stablecoins.',
    images: [
      {
        url: 'https://kod3.nyc3.cdn.digitaloceanspaces.com/Fluent/fluent.logo.dark.png',
        width: 1920,
        height: 430,
        alt: 'Fluent Og Image Alt'
      },
      {
        url: 'https://kod3.nyc3.cdn.digitaloceanspaces.com/Fluent/fluent.logo.png',
        width: 1920,
        height: 424,
        alt: 'Fluent Og Image Alt Second'
      },
    ],
    siteName: 'Fluent: Cognition'
  }}
/> 

<!-- Header NavBar Slot  --> 
<svelte:window bind:innerWidth={width} />
<header class={headerClasses}>
  <Navbar class={navbarClasses} let:hidden let:toggle>
    <NavHamburger
      on:click={toggleDrawer}
      btnClass={btnClasses} 
    />
    <NavBrand href="/" class="lg:ml-64">
      <Cog />
      <span class={brandSpanClasses}>
        Cognition
      </span>
    </NavBrand>
    <NavUl {hidden} {divClasses} {ulClasses} nonActiveClass={navUlNonActiveClasses} activeClass={navUlActiveClasses}>
      <NavLi class={navLiClasses} active={activeUrl === '/dashboard/fluent'} href="/dashboard/fluent">
        Dashboard
      </NavLi>
      <NavLi class={navLiClasses} active={activeUrl === '/content/whitepaper'} href="/content/whitepaper">
        Whitepaper
      </NavLi>
      <NavLi class={navLiClasses} href="https://github.com/Fluent-Finance/Cognition"> 
        GitHub
      </NavLi>
    </NavUl>
    <div class="flex items-center ml-auto">
      <DarkMode class={darkModeClasses} />
    </div>
    <NavHamburger on:click={toggle} btnClass="lg:hidden" />
  </Navbar>
</header>

<!-- Sidebar Slot  --> 
<Drawer
  transitionType="fly"
  {backdrop}
  {transitionParams}
  bind:hidden={drawerHidden}
  bind:activateClickOutside
  width="w-64"
  class={drawerClasses}
  id="sidebar"
>
  <div class="flex items-center">
    <CloseButton on:click={() => (drawerHidden = true)} class={closeBtnClasses} />
  </div>

  <Sidebar {activeUrl} asideClass="w-54">
    <SidebarWrapper divClass={sidebarWrapperClasses}>
      <SidebarGroup>

        <SidebarBrand {site} /> 

        <SidebarItem label="Dashboard" href="/dashboard/fluent" on:click={toggleSide} active={activeUrl === `/dashboard/fluent`}>
          <svelte:fragment slot="icon">
            <Icon name="chart-mixed-solid" class={sideIconClasses} /> 
          </svelte:fragment>
        </SidebarItem> 

        {#each data.pages as { meta, path }}
          <SidebarItem
            label={meta.title}
            href={`/pages/${path}`}
            {spanClasses}
            activeClass={sideItemActiveClasses}
            on:click={toggleSide}
            active={activeUrl === `/pages/${path}`}
          > 
            <svelte:fragment slot="icon">
              <Icon name="chervon-double-right-solid" class={sideIconClasses} /> 
            </svelte:fragment>
          </SidebarItem> 
        {/each}

        <SidebarDropdownWrapper label="Research">

          <svelte:fragment slot="icon">
            <Icon name="lightbulb-solid" class={sideIconClasses} /> 
          </svelte:fragment>
          {#each data.posts as { meta, path }}
            <SidebarItem
              label={meta.title}
              href={`/blog/${path}`}
              {spanClasses}
              activeClass={sideItemActiveClasses}
              on:click={toggleSide}
              active={activeUrl === `/blog/${path}`}
            >
              <svelte:fragment slot="icon">
                <Icon name="chevron-right-solid" class={sideIconClasses} /> 
              </svelte:fragment>
            </SidebarItem>
          {/each}

        </SidebarDropdownWrapper>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>

<!-- Main Content Slot  --> 
<div class="flex px-4 mx-auto w-full">
  <main class="lg:ml-72 w-full mx-auto">
    <slot />
  </main>
</div>
