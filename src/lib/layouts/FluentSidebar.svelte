<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'> 
  import _ from 'lodash';

  import theme       from '$lib/stores/ThemeStore';
  import { onMount } from 'svelte';
  import { page }    from '$app/stores';

  import type { PageData } from './$types';

  import {
    Sidebar,
    SidebarGroup,
    SidebarBrand,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper
  } from 'flowbite-svelte';

  import ChartMixedSolid         from 'flowbite-svelte-icons/ChartMixedSolid.svelte';
  import WandSparklesSolid       from 'flowbite-svelte-icons/WandSparklesSolid.svelte';
  import ChevronRightSolid       from 'flowbite-svelte-icons/ChevronRightSolid.svelte';
  import ChervonDoubleRightSolid from 'flowbite-svelte-icons/ChervonDoubleRightSolid.svelte';

  export let data: PageData;
  export let width: number;

  export let breakPoint:   number  = 2160;
  export let drawerHidden: boolean = false;
  export let activateClickOutside  = true;

  $: currentTheme  = $theme;
  $: logoIconStyle = (currentTheme === 'dark' ? '/images/Fluent-Logo-White.png' : '/images/Fluent-Logo-Black.png');
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
   
  let toggleSide = () => {
    if (width < breakPoint) { drawerHidden = !drawerHidden; }
  };

  const SPACE = '\u00A0';

  let spanClasses     = `pl-2 mr-30 self-center text-md text-gray-900 whitespace-nowrap dark:text-white`;

  let sideIconFlexCss = `w-5 h-5 text-gray-500 transition duration-75`;
  let sideIconTextCss = `dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`;
  let sideItemFlexCss = `flex items-center p-2`;
  let sideItemTextCss = `text-base font-normal text-gray-900 dark:text-white`;
  let sideItemBgCss   = `bg-primary-200 dark:bg-primary-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-700`;
  let sidebarWrapperClasses = `overflow-y-auto py-4 px-3 rounded dark:bg-transparent`;

  let sideIconClasses       = _.join(_.concat( sideIconFlexCss, sideIconTextCss), SPACE);
  let sideItemActiveClasses = _.join(_.concat( sideItemFlexCss, sideItemTextCss, sideItemBgCss ), SPACE);

  $: branding = {
    name: '𝙐𝙎✚',
    href: '/',
    img: logoIconStyle
  };

</script> 

<Sidebar {activeUrl} asideClass="w-54">
  <SidebarWrapper divClass={sidebarWrapperClasses}>
    <SidebarGroup>

      <SidebarBrand site={branding} /> 

      <SidebarItem 
        label="Dashboard" 
        href="/dashboard/fluent" 
        on:click={toggleSide} 
        active={activeUrl === `/dashboard/fluent`}>
          <svelte:fragment slot="icon">
            <ChartMixedSolid size='md' class={sideIconClasses} /> 
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
            <ChervonDoubleRightSolid size='md' class={sideIconClasses} /> 
          </svelte:fragment>
        </SidebarItem> 
      {/each}

      <SidebarDropdownWrapper label="Resources">

        <svelte:fragment slot="icon">
          <WandSparklesSolid size='md' class={sideIconClasses} /> 
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
              <ChevronRightSolid size='md' class={sideIconClasses} /> 
            </svelte:fragment>
          </SidebarItem>
        {/each}

      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
