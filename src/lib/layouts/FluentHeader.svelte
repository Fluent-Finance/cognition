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
  import { onMount }               from 'svelte';
  import { page }                  from '$app/stores';
  import theme                     from '$lib/stores/ThemeStore';
  import FluentLogoIconColor       from '$lib/assets/Logo-Color.svg?url';
  import FluentLogoIconWhite       from '$lib/assets/Logo-White.svg?url';
  import FluentLogoIconBlack       from '$lib/assets/Logo-Black.svg?url';

  let width: number;
  let isFluid: boolean   = true;
  let breakPoint: number = 1280;

  $: currentTheme  = $theme;
  $: logoIconStyle = (currentTheme === 'dark' ? FluentLogoIconColor : FluentLogoIconBlack);
  $: activeUrl     = $page.url.pathname;

  $: if (width >= breakPoint) {
    isFluid = true;
  } else {
    isFluid = false;
  }

  $: isFluid = isFluid;

  onMount(() => {
    if (width >= breakPoint) {
      isFluid = true;
    } else {
      isFluid = false;
    }
  });
 
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
    hover:bg-primary
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
</script>

<header class="realative px-1 z-index-50 sticky mx-0 px-0 top-0 mt-10" style='z-index: 50'>
  <Navbar class="px-1 bg-white dark:bg-base-100" let:hidden let:toggle fluid={isFluid}>

    <NavBrand href="/">
      <Img src={logoIconStyle} class="mr-2 h-7 opacity-75 dark:invert-100" alt="Fluent Logo" />
      <span class={logoSpanClasses}> 
        Fluent Finance
      </span>
    </NavBrand>

    <div class="flex items-center lg:order-2">
      <NavUl {activeUrl} {hidden} {divClass} {ulClass} {activeClass} {nonActiveClass}>
        <NavLi 
          href='/'
          active={activeUrl === '/'}> About
        </NavLi>
        <NavLi 
          href='/'
          active={activeUrl === '/pages/resources'}> Resources
        </NavLi>
        <NavLi 
          href='/'
          active={activeUrl === '/pages/press'}> Press & Media
        </NavLi>
        <NavLi 
          href='/blog/compliance-news'
          active={activeUrl === '/pages/usplus'}> USPlus
        </NavLi>
        <NavLi 
          href='/pages/team'
          active={activeUrl === '/pages/team'}> Team
        </NavLi>
        <NavLi 
          href='/blog/fluent-opsec-2023'
          active={activeUrl === '/blog'}> Blog
        </NavLi>
      </NavUl>

      <Button 
        target="_blank" 
        class={connectWalletClasses}
        href="https://app.fluent.finance">
          Consumer Portal
      </Button>
      <DarkMode class={darkModeClasses} />
      <NavHamburger on:click={toggle} btnClass={hamburgerClasses} />
    </div>
  </Navbar>
</header>
