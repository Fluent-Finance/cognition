<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>

  import { 
    Img,
    Hr,
    Button, 
    Footer, 
    FooterIcon, 
    FooterCopyright 
  } from 'flowbite-svelte';

  import {
    LinkedinSolid,
    GithubSolid,  
    DiscordSolid, 
    TwitterSolid,
    LinkSolid, 
  } from 'flowbite-svelte-icons';

  import FluentStyles from '$styles/FluentStyles';

  import Medium     from '$lib/assets/_Medium.svg?url';

  let by = (`Fluent Finance Inc., and its subsidiary Fluent Federation Corp. 2022. All rights reserved.`);

  let iconClasses:   string = FluentStyles.processStyles('footer.icon');
  let footerClasses: string = FluentStyles.processStyles('footer.div');
  let buttonClasses: string = FluentStyles.processStyles('footer.button');
</script>

<Footer footerType="sitemap" class={footerClasses}>

  <div class='z-index-999 relative w-full my-10'>

    <div class="flex items-center space-x-3 align-middle pr-10 sm:pr-20">

      <h1 class="
      mx-1 
      mt-5 
      xs:mx-3 
      my-0 
      text-black 
      dark:text-base-900 
      min-w-[80px] 
      text-lg  
      xs:text-3xl 
      md:text-4xl 
      lg:text-5xl 
      align-middle 
      items-center">
        Follow Us
      </h1>

      <FooterIcon target="_blank" href="https://github.com/Fluent-Finance">
        <GithubSolid class={iconClasses} />
      </FooterIcon>
      <FooterIcon target="_blank" href="https://discord.gg/22ywcEfU65">
        <DiscordSolid class={iconClasses} /> 
      </FooterIcon>
      <FooterIcon target="_blank" href="https://twitter.com/Fluentinfra">
        <TwitterSolid class={iconClasses} />
      </FooterIcon>
      <FooterIcon target="_blank" href="https://www.linkedin.com/company/fluent-finance/">
        <LinkedinSolid class={iconClasses} />
      </FooterIcon>
      <FooterIcon target="_blank" href="https://etherscan.io/token/0xe2e15a27fd732a96534b9797bf8091f3d9849831">
        <LinkSolid class={iconClasses} />
      </FooterIcon>
      <FooterIcon target="_blank" href="https://fluentfinance.medium.com">
        <Img src={Medium} class={`${iconClasses} dark:hue-rotate-100 dark:opacity-60 dark:backdrop-contrast-200 p-0 min-w-6 max-w-12`} />
      </FooterIcon>
    </div>

    <Hr class='mx-2 px-10' />

    <div> 
      <FooterCopyright spanClass="ml-3 my-5 text-[6px] xs:text-xs max-w-xl text-base-200" {by} />

      <div class='my-5 max-w-sm'>
        <Button 
          target="_blank" 
          class={buttonClasses}
          href="https://app.fluent.finance">
            Consumer Portal
        </Button>
      </div>
    </div>
  </div>
</Footer>
