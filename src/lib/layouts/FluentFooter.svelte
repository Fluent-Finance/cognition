<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Footer, FooterIcon, FooterCopyright } from 'flowbite-svelte';

  import {
    LinkedinSolid,
    GithubSolid,  
    DiscordSolid, 
    TwitterSolid,
    LinkSolid, 
  } from 'flowbite-svelte-icons';

  import { Img }        from 'flowbite-svelte';
  import theme          from '$lib/stores/ThemeStore';
  import footerImgDark  from '$lib/assets/dark_large_fluent_footer.png?w=2160&format=webp;png&as=run';
  import footerImgLight from '$lib/assets/light_large_fluent_footer.png?w=2160&format=webp;png&as=run';

  $: currentTheme = $theme;
  $: footerImage = (currentTheme === 'light' ? footerImgLight : footerImgDark);

  let footerImgClasses = `
    bg-white 
    dark:bg-transparent 
    dark:hover:invert-0 
    max-w-full 
    mt-0 mx-auto mb-auto
    text-center 
    justify-between 
    transition-all 
    filter 
    invert-0 
    dark:invert 
    grayscale 
    hover:grayscale-0`;

  let iconClasses = `
    w-6 h-6 
    text-gray-500 
    dark:text-gray-500 
    hover:text-gray-900 
    dark:hover:text-white`;

  let lowerFooterClasses = `
    py-6 px-4 
    bg-white dark:bg-base-100 
    md:flex 
    md:items-center 
    md:justify-between`;

  let by = (`
    Fluent Finance Inc. & Fluent Federation Corp. 
  `);
</script>

<div class={lowerFooterClasses}>
  <span class='w-full'> 
    <p class='mx-auto mb-5 prose prose-p text-center text-xs justify-center'> 
      <FooterCopyright spanClass="text-xs max-w-md text-gray-300 text-center justify-center sm:visible invisible" {by} />
    </p>
    <p class='mx-auto prose prose-p text-center text-xs justify-center'> 
      Fluent Finance is the fintech infrastructure company responsible for 
      developing the connections from core banking to public layers, 
      bridging Web2 to Web3 utilizing the Fluent Protocol. Our flagship product 
      is US Plus, the only fully verifiable cash and equivalent backed stablecoin.
    </p>
  </span>
</div>
<Footer footerType="sitemap" class='flex flex-row mb-10 bg-white dark:bg-base-100'>
  <span class='min-w-fit'>  
    <p class='prose prose-p text-xs justify-left'> 
      Cognition™<br />Fluent Finance | 𝙐𝙎✚<br/>A superior, more reliable, stablecoin
    </p>
  </span> 
  <span class='flex flex-col items-center text-center '>  
    <Img src={footerImage} alt='Fluent Alt Logo Img' class={footerImgClasses} /> 
  </span> 
  <div class="flex space-x-6 m-0 r-0 sm:justify-center">
    <FooterIcon target="_blank" href="https://discord.gg/22ywcEfU65">
      <DiscordSolid class={iconClasses} /> 
    </FooterIcon>
    <FooterIcon target="_blank" href="https://twitter.com/FluentDAO">
      <TwitterSolid class={iconClasses} />
    </FooterIcon>
    <FooterIcon target="_blank" href="https://www.linkedin.com/company/fluent-finance/">
      <LinkedinSolid class={iconClasses} />
    </FooterIcon>
    <FooterIcon target="_blank" href="https://etherscan.io/token/0xe2e15a27fd732a96534b9797bf8091f3d9849831">
      <LinkSolid class={iconClasses} />
    </FooterIcon>
    <FooterIcon target="_blank" href="https://github.com/Fluent-Finance">
      <GithubSolid class={iconClasses} />
    </FooterIcon>
  </div>
</Footer>
