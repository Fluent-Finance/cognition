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
    mx-auto mb-auto
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
</script>

<Footer footerType="sitemap" class='bg-white dark:bg-base-100'>

  <Img src={footerImage} alt='Fluent Alt Logo Img' class={footerImgClasses} /> 

  <div class={lowerFooterClasses}>

    <span class=''>  
      <p class='prose prose-p text-xs justify-center'> 
        Fluent Finance | 𝙐𝙎✚<br/>A superior, more reliable, stablecoin
      </p>
    </span> 

    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">

      <FooterIcon target="_blank" href={import.meta.env.VITE_FLUENT_DISCORD_URL}>
        <DiscordSolid class={iconClasses} /> 
      </FooterIcon>

      <FooterIcon target="_blank" href={import.meta.env.VITE_FLUENT_TWITTER_URL}>
        <TwitterSolid class={iconClasses} />
      </FooterIcon>

      <FooterIcon target="_blank" href={import.meta.env.VITE_FLUENT_LINKEDIN_URL}>
        <LinkedinSolid class={iconClasses} />
      </FooterIcon>

      <FooterIcon target="_blank" href={import.meta.env.VITE_FLUENT_ETHERSCAN_URL}>
        <LinkSolid class={iconClasses} />
      </FooterIcon>

      <FooterIcon target="_blank" href={import.meta.env.VITE_FLUENT_GITHUB_URL}>
        <GithubSolid class={iconClasses} />
      </FooterIcon>
    </div>

    <FooterCopyright spanClass="text-xs text-gray-300 sm:text-center sm:visible invisible" href="/" by=" Cognition™ " />

  </div>
</Footer>
