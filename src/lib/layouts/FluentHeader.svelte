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
    Button,
    Dropdown, 
    DropdownItem, 
    DropdownDivider,
  } from 'flowbite-svelte';

  import _                         from 'lodash';
  import { onMount }               from 'svelte';
  import { page }                  from '$app/stores';
  import FluentLogoIconWhite       from '$lib/assets/Logo-White.svg?url';
  
  let width: number;
  let isFluid: boolean   = true;
  let breakPoint: number = 1280;

  $: logoIconStyle = FluentLogoIconWhite;
  $: activeUrl     = $page.url.pathname;
  $: isFluid       = (width >= breakPoint) ? true : false 

  onMount( ()=> {
    isFluid = (width >= breakPoint) ? true : false 
  });

  let divClass = `
    mx-0
    w-full 
    xs:flex 
    xs:w-auto
  `;

  let logoSpanClasses = `
    self-center
    whitespace-nowrap
    font-basier
    font-medium
    text-2xl
    sm:text-3xl
    text-base-100
    dark:opacity-100
    dark:text-neutral
  `;
  
  let ulClass = `
    flex
    flex-col
    xs:flex-row
    text-xs
    xs:mt-4 
    xs:mt-0
    sm:text-sm
    sm:font-medium
    space-x-0 
    md:space-x-7 
    lg:space-x-8
  `;

  let activeClass = `
    text-neutral 
    bg-base-50 
    dark:bg-base-800 
    xs:bg-transparent 
    xs:text-base-50 
    xs:dark:text-base-800 
    xs:dark:bg-transparent
  `;

  let nonActiveClass = `
    text-gray-700 
    hover:bg-base-400 
    md:border-0
    md:hover:bg-transparent 
    md:hover:text-primary 
    dark:text-gray-400 
    md:dark:hover:text-base-800 
    dark:hover:bg-gray-700 
    dark:hover:text-base-800 
    md:dark:hover:bg-transparent
  `;

  let connectWalletClasses = `
    hidden
    sm:flex
    p-5
    m-1
    h-8
    order-0
    content-center
    xs:py-0
    text-neutral
    text-xs
    sm:text-sm
    bg-base-50
    hover:bg-800
    dark:hover:text-base-100
    dark:hover:bg-base-900
    dark:bg-base-800
  `;

  let darkModeClasses = `
    sm:order-1
    dark:hover:text-white 
    hover:text-base-900
  `;

  let menuClass = `
    h-6 
    w-6 
    shrink-0
    order-2
  `;

</script>

<header class="z-index-50 sticky mx-0 px-0 top-0 mt-10" style='z-index: 50'>
  <Navbar class="p-0 py-3 m-0 bg-white dark:bg-base-100" let:hidden let:toggle fluid={isFluid}>

    <NavBrand href="/">
      <Img src={logoIconStyle} class="mr-2 h-7 invert dark:invert-0" alt="Fluent Finance Logo" />
      <span class={logoSpanClasses}> 
        Fluent Finance
      </span>
    </NavBrand>

    <div class="inline-flex order-0 xs:order-1 ">
      <Button 
        target="_blank" 
        class={connectWalletClasses}
        href="https://app.fluent.finance">
          Consumer Portal
      </Button>
      <DarkMode class={darkModeClasses} />
      <NavHamburger {menuClass} on:click={toggle}  />
    </div>

    <NavUl class="order-0" 
    {hidden}
    {ulClass} 
    {divClass}
    {activeUrl} 
    {activeClass} 
    {nonActiveClass}>
      <NavLi 
        href='/'
        active={activeUrl === '/'}> About
      </NavLi>
      <NavLi 
        class='cursor-pointer'
        href='#'
        active={activeUrl === '/content/whitepaper'}> Resources
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/content/whitepaper">Whitepaper</DropdownItem>
        <DropdownItem 
          href="https://github.com/Fluent-Finance" 
          target="_blank">
            Github
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/dashboard/fluent">Dashboard</DropdownItem>
      </Dropdown>
      <NavLi 
        href='/content/press-media'
        active={activeUrl === '/content/press-media'}> Press
      </NavLi>
      <NavLi 
        href='/content/usplus'
        active={activeUrl === '/content/usplus'}> USPlus
      </NavLi>
      <NavLi 
        href='/pages/team'
        active={activeUrl === '/pages/team'}> Team
      </NavLi>
      <NavLi 
        href='/pages/blog'
        active={activeUrl === '/pages/blog'}> Blog
      </NavLi>
    </NavUl>

  </Navbar>
</header>
