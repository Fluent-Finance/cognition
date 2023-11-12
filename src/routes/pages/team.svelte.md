---
dir: pages
title: Team
icon: UserGroupSolid
order: 1
---

<script>
  import { Img, Heading, P } from 'flowbite-svelte'
  import { 
    Section, 
    TeamWrapper, 
    TeamHeader, 
    TeamBody, 
    TeamItem, 
    Github, 
    Twitter
  } from 'flowbite-svelte-blocks';

  import TeamMembers from '$lib/data/TeamMembers';

  let imgClass = `
    w-full 
    grayscale
    hover:grayscale-0
    min-w-lg
    min-h-lg
    object-fill
    rounded-3xl 
  `;

  let divClass = ` 
    justify-center
    content-center
    items-center
    text-center
    bg-neutral
    rounded-lg
    shadow
    sm:flex
    dark:bg-base-100
    dark:border-gray-700
  `;

  let wrapperClass = `
    py-8
    px-4
    mx-auto
    min-w-full
    max-w-full
    lg:py-16
    lg:px-6
  `;
</script>

<Section name="team" class='relative py-6 sm:py-10 min-w-full'>
  <TeamWrapper divClass={wrapperClass}> 
    <TeamHeader>
      <div class="
      w-full 
      my-5 
      py-5
      px-10
      sm:px-5
      md:px-0
      text-3xl 
      xs:text-4xl 
      sm:text-6xl 
      md:text-6xl 
      lg:text-7xl 
      xl:text-8xl 
      font-semibold 
      font-basier 
      leading-[72px]
      text-center" slot="label">
        <span class="mr-0 text-black dark:text-white">
          Get to know the 
        </span>
        <span class="mr-0 text-base-50 dark:text-base-800"> 
          Fluent Team
        </span>
      </div>
      <div class="
      my-10
      py-0
      mx-1
      px-1
      lg:my-10 
      lg:py-10 
      lg:mx-60 
      lg:px-10 ">
        <P class="
        font-normal
        items-center
        content-center
        text-center
        justify-center
        text-gray-500
        mb-16
        text-md 
        xs:text-lg  
        sm:text-xl 
        md:text-2xl 
        dark:text-gray-400">
          <span class="text-black dark:text-neutral font-semibold font-neuehaas">
            Industry veterans and decisive innovators.
          </span>
          Fluent's core team combines decades of leadership 
          and expertise in banking, legacy finance, compliance, 
          and backend systems with cutting-edge web3 acuity, 
          deep cross-market insight, and seasoned startup know-how.
        </P> 
      </div>
    </TeamHeader>
    <div class="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {#each TeamMembers as { href, src, alt, name, jobTitle, description }}
        <div class="
        bg-white
        rounded-xl
        border
        border-gray-200
        shadow-sm
        dark:bg-gray-800
        dark:border-gray-700">
          <a {href}>
            <div class="
            p-9
            rounded-tl-lg  
            rounded-tr-lg   
            rounded-bl-none
            rounded-br-none">
              <Img {src} {alt} class={imgClass} />
            </div>
          </a>
          <div class="
          font-normal
          items-center
          content-center
          text-center
          justify-center
          px-5 
          pb-5">
            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a {href} class=""> 
                {name}
              </a>
            </h3>
            <span class="text-gray-500">
              {jobTitle} 
            </span>
            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <ul class="
            font-normal
            items-center
            content-center
            text-center
            justify-center
            flex 
            space-x-4 
            sm:mt-0">
              <li>
                <Github href="https://github.com/Fluent-Finance" />
              </li>
              <li>
                <Twitter href="https://x.com/FluentDAO" />
              </li>
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </TeamWrapper>
</Section>
