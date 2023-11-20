---
dir: blog
title: 'Fluent Finance’s integration with Flow Rewards offers LPs a risk-off and non-custodial offering on Uniswap'
---

<script>
  import { Img, Heading, P } from 'flowbite-svelte'

  import { Section } from 'flowbite-svelte-blocks';
  import Banner      from '$lib/assets/fluent_blog_banner.png?url';
  import FlowRewards from '$lib/assets/flow_rewards.png?url';

  let postTitle = 'Fluent Finance’s integration with Flow Rewards offers LPs a risk-off and non-custodial offering on Uniswap';

  let pClasses = `px-8 py-4 text-lg md:text-2xl lg:text-4xl xl:text-3xl font-basier`;
</script>

<Section class="flex w-full mt-0 font-neuehaas">

  <div class="mt-0 h-md max-h-xl"> 
    <Img src={Banner} alt="about" size="object-cover max-h-50 rounded-xl" alignment="mx-auto" />
  </div>  

  <div class="container px-10 font-neuehaas">

    <Heading class="p-8" tag="h1" customSize="text-4xl">{postTitle}</Heading>

    <P class={pClasses}>
      At Fluent Finance, we're driven by a simple philosophy: put the users first. We’ve always believed the 
      power of DeFi should be harnessed for the benefit of those who contribute to its growth. 
      That's why we're thrilled to announce our integration with Flow Rewards'
      <a href="https://github.com/Fluent-Finance">open-sourced smart contracts</a>.
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Rewards Amplified All About US Plus 
    </Heading>
    <P class={pClasses}>
      <Img src={FlowRewards} alt="about" size="m-10 object-cover max-h-50 rounded-xl " alignment="mx-auto" />

      We’re using Flow Rewards’ smart contracts to give back the revenue we generate from Market Makers to you, 
      our liquidity providers. We’re providing our users with more US Plus — Fluent Finance’s fiat-backed stablecoin 
      that maintains 1:1 auditable reserves through Chainlink’s Proof of Reserve. With seamless integration with core 
      banking APIs, zero fees, 24/7 access, and borderless settlement, we like to think that US Plus is a superior, 
      more reliable stablecoin. The best part? You can access US Plus through familiar DeFi platforms 
      like Uniswap (USDT/US+; cUSD/US+), with Curve coming soon.
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Key Benefits for Liquidity Providers
    </Heading>

    <P class={pClasses}>
      Our integration with Flow Rewards brings a basket of benefits for Liquidity Providers:
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Lower volatility
    </Heading>

    <P class={pClasses}>
      We’re minimizing risk exposure and impermanent loss with stablecoin paired pools 
      (USDT / US+; cUSD / US+), which typically exhibit minimal price fluctuations.
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Non-custodial asset holding
    </Heading>

    <P class={pClasses}>
      Keep your assets secure (own your keys) without locking them into centralized exchanges.
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Fixed-income stability
    </Heading>

    <P class={pClasses}>
      No more unpredictability. Revenue we earn is redirected to liquidity providers.
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      Reliable liquidity
    </Heading>

    <P class={pClasses}>
      Exiting your position is simple, clear, and timely
    </P>

    <Heading class="mt-5 p-0 font-semibold" tag="h2" customSize="text-3xl">
      The Fluent-Flow Model: How It Works
    </Heading>

    <P class={pClasses}>
      Our strategy is simple yet effective. We take our revenue from Market Maker earnings 
      and funnel it back to our Liquidity Providers through the Flow Rewards smart contract.

      ![](https://miro.medium.com/v2/resize:fit:1920/0*e_88xxYmM_cJOf8f)

      Fluent Finance Implementation of Flow Rewards
      Please note that our rewards program is not applicable to US citizens or residents.
    </P>

    <Heading class="p-8 font-semibold text-center items-center" tag="h2" customSize="text-3xl">
      Get USPlus
    </Heading>

    <P class={pClasses}>
      We believe in transparency. We will shortly have all our stats and transactions available on DeFi Llama. 
      You’re also invited to participate in our pools on Uniswap — 

        [ETH](https://info.uniswap.org/#/pools/0x73d4c165472d38ca879b7cbd4f5f7ab218d49086), 
        [CELO](https://info.uniswap.org/#/celo/pools/0x7053060549aaad6ea733d053153bb9c00bfe42d2), and 
        [ARB](https://app.uniswap.org/#/pools/651885).
    </P>

  </div>
</Section>
