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

  let iconClasses = `
    w-6 h-6 
    text-gray-500 
    dark:text-gray-500 
    hover:text-gray-900 
    dark:hover:text-white`;

  let lowerFooterClasses = `
    py-2 px-4 
    bg-neutral 
    dark:bg-base-100 
    brightness-110
    dark:brightness-100
    md:flex 
    md:items-center 
    md:justify-between`;

  let footerClasses = `
    grid
    grid-cols-1
    xs:flex
    xs:flex-wrap
    sm:grid-cols-2
    md:grid-cols-3
    min-h-60
    h-80
    justify-center
    items-center
    bg-gradient-to-t
    from-base-500
    via-neutral
    to-white
    bg-opacity-5
    dark:from-base-100
    dark:via-base-100
    dark:to-base-100
  `;

  let backgroundClasses = `
    grid
    grid-cols-1
    bg-contain
    bg-right-bottom
    bg-no-repeat
    bg-rotate-180
    bg-footer-texture
  `;

  let by = (`
    Fluent Finance Inc. & Fluent Federation Corp. 
  `);
</script>

<div class={backgroundClasses}>  
  <div class={lowerFooterClasses}>
    <span class='w-full pt-40 h-60'> 
      <p class='mx-auto mb-0 prose prose-p text-center text-xs justify-center'> 
        Fluent Finance is the fintech infrastructure company responsible for 
        developing the connections from core banking to public layers, 
        bridging Web2 to Web3 utilizing the Fluent Protocol. Our flagship product 
        is US Plus, the only fully verifiable cash and equivalent backed stablecoin.
      </p>
      <p class='mx-auto mt-10 mb-5 prose prose-p text-center text-xs justify-center'> 
        <FooterCopyright spanClass="text-xs text-gray-300 text-center justify-center visible sm:invisible" {by} />
      </p>
    </span>
  </div>

  <Footer footerType="sitemap" class={footerClasses}>

    <span class='hidden sm:flex min-w-fit pl-20'>  
      <p class='prose prose-p text-xs justify-left'> 
        Cognition™<br />Fluent Finance | 𝙐𝙎✚<br/>A superior, more reliable, stablecoin
      </p>
    </span> 

    <p class='mx-auto mb-5 prose prose-p text-center text-xs justify-center'> 
      <FooterCopyright spanClass="text-xs max-w-md text-gray-300 text-center justify-center sm:visible invisible" {by} />
    </p>

    <div class="flex space-x-4 sm:items-center justify-center sm:justify-end sm:pr-20">
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
</div>
