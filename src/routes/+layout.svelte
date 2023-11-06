<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang="ts">
  import '../app.css';
  import _ from 'lodash';

  import { onMount }     from 'svelte';
  import { MetaTags }    from 'svelte-meta-tags';
  import { sineIn }      from 'svelte/easing';
  
  import { Drawer, CloseButton } from 'flowbite-svelte';

  import FluentHeader      from '$lib/layouts/FluentHeader.svelte';
  import FluentSidebar     from '$lib/layouts/FluentSidebar.svelte';
  import FluentFooter      from '$lib/layouts/FluentFooter.svelte';
  import type { PageData } from './$types';

  export let data: PageData; 

  let width: number;
  let breakPoint: number    = 2160;
  let backdrop: boolean     = false; 
  let drawerHidden: boolean = true;
  let activateClickOutside  = true;

  $: drawerHidden = drawerHidden;

  $: if (width >= breakPoint) {
    drawerHidden         = true;
    activateClickOutside = true;
  } else {
    drawerHidden         = true;
    activateClickOutside = true;
  }

  onMount(() => {
    if (width >= breakPoint) {
      drawerHidden         = true;
      activateClickOutside = true;
    } else {
      drawerHidden         = true;
      activateClickOutside = true;
    }
  });
   
  let transitionParams = {
    x: -320,
    duration: 222,
    easing: sineIn
  };
  
  let toggleDrawer = () => { drawerHidden = false; };

  const sidebarProps = {
    breakPoint,
    activateClickOutside,
    data,
  }

  let drawerClasses   = 'overflow-scroll pb-32 dark:bg-base-100';
  let closeBtnClasses = 'mb-4 dark:text-white lg:hidden';

</script>

<style lang='postcss'>
  :global(body) {
    min-height: 100vh;
  }
</style>

<!-- Site MetaData OG Tags --> 
<MetaTags 
  title='Fluent Finance'
  description='Fluent Finance Data Charts.' 
  openGraph={{
    url: `${import.meta.env.VITE_URL}`,
    title: 'Cognition: by Fluent Finance',
    description: 'Fluent Network Data Charts.',
    images: [
      {
        url: '/images/fluent_banner_1500x500.png',
        width: 1500,
        height: 500,
        alt: 'Fluent Og Image Alt'
      },
      {
        url: '/images/fluent_banner.png',
        width: 1500,
        height: 500,
        alt: 'Fluent Og Image Alt Second'
      },
    ],
    siteName: 'Fluent: Cognition'
  }}
/> 

<svelte:window bind:innerWidth={width} />
<div class='flex flex-col w-full mb-auto mx-auto'> 

  <FluentHeader  
    bind:drawerHidden={drawerHidden} 
    on:toggleDrawer={toggleDrawer} />  

  <Drawer
    id="sidebar"
    width="w-64"
    class={drawerClasses}
    transitionType="fly"
    bind:hidden={drawerHidden}
    bind:activateClickOutside
    {backdrop}
    {transitionParams}>
      <div class="flex items-center">
        <CloseButton on:click={() => (drawerHidden = true)} class={closeBtnClasses} />
      </div> 
      <!-- @Sidebar Slot  --> 
      <FluentSidebar on:toggleDrawer={toggleDrawer} {width} {...sidebarProps} /> 
  </Drawer> 

  <!-- @Main Content Slot --> 
  <main class="">
    <slot />
    <FluentFooter /> 
  </main>
</div>

