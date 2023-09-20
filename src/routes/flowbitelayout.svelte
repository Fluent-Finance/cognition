<script lang='ts'>
  // @ts-ignore
  // @ts-nocheck
  import '../app.css';
  import _ from 'lodash';

  import '@fontsource/righteous';
  import '@fontsource/marvel';
  import '@fontsource/kalam';
  import '@fontsource/material-icons';

  import { onMount }  from 'svelte';
  import { MetaTags } from 'svelte-meta-tags';

  import type { PageData } from './$types';
  export let data: PageData; 

  import {
    // Dialog,
    // DialogPanel,
    // Menu,
    // MenuButton,
    // MenuItem,
    // MenuItems,
    // TransitionChild,
    // TransitionRoot,
  } from 'svelte-headlessui'
  
  import {
    Bell,
    Bars3,
    XMark,
    Cog6Tooth,
    Calendar,
    ChartPie,
    DocumentDuplicate,
    Folder,
    Home,
    Users,
    ChevronDown, 
    MagnifyingGlass
  } from '@steeze-ui/heroicons'

  const navigation = [
    { name: 'Dashboard', href: '#', icon: Home, current: true },
    { name: 'Team', href: '#', icon: Users, current: false },
    { name: 'Projects', href: '#', icon: Folder, current: false },
    { name: 'Calendar', href: '#', icon: Calendar, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicate, current: false },
    { name: 'Reports', href: '#', icon: ChartPie, current: false },
  ]

  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ]

  const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  let width: number;
  let active = false
  let sidebarOpen = false
  let show = true;
  let close = false;
</script>

<svelte:window bind:innerWidth={width} />
<div> 
  <!-- <TransitionRoot {show}> -->
  <!-- </TransitionRoot> -->


  <slot /> 
</div>

