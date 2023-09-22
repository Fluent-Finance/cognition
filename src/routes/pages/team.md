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
    Facebook, 
    Github, 
    Twitter
  } from 'flowbite-svelte-blocks';

  let imgClass = `
    grayscale
    hover:grayscale-0
    object-cover
    w-25
    rounded-xl
    shadow-xl
    xs:rounded-full
    sm:rounded-none
  `;

  let members = [
    {
      href: '/',
      src: '/images/team/00_team_member.jpg',
      alt: 'Bradley Allgood',
      name: 'Bradley Allgood',
      jobTitle: 'Chief Executive Officer',
      description: 'Bradley drives the technical strategy of the fluent platform and brand.'
    },
    {
      href: '/',
      src: '/images/team/01_team_member.jpg',
      alt: 'Greg Guedel',
      name: 'Greg Guedel',
      jobTitle: 'Chief Legal Officer',
      description: ''
    },
    {
      href: '/',
      src: '/images/team/02_team_member.jpg',
      alt: 'John Buckle',
      name: 'John Buckle',
      jobTitle: 'Lead Backend Engineer',
      description: 'John drives the technical strategy'
    },
    {
      href: '/',
      src: '/images/team/03_team_member.jpg',
      alt: 'Amrita Srivastava',
      name: 'Amrita Srivastava',
      jobTitle: 'Program Advisor',
      description: 'Amrita drives the program strategy.'
    },
    {
      href: '/',
      src: '/images/team/04_team_member.jpg',
      alt: 'Anthony Nixon',
      name: 'Anthony Nixon',
      jobTitle: 'Senior Software Engineer',
      description: ''
    },
    {
      href: '/',
      src: '/images/team/05_team_member.jpg',
      alt: 'Armin Ranjbar',
      name: 'Armin Ranjbar',
      jobTitle: 'Chief Technology Officer',
      description: 'Armin guides the technical strategy'
    },
    {
      href: '/',
      src: '/images/team/06_team_member.jpg',
      alt: 'Khaled Khan',
      name: 'Khaled Khan',
      jobTitle: 'Chief Strategy Officer',
      description: 'Khaled drives the strategy.'
    },
    {
      href: '/',
      src: '/images/team/07_team_member.jpg',
      alt: 'Brent Tanner',
      name: 'Brent Tanner',
      jobTitle: 'Chief Operations Officer',
      description: 'Brent guides the operations'
    },
    {
      href: '/',
      src: '/images/team/08_team_member.jpg',
      alt: 'William Hester',
      name: 'William Hester',
      jobTitle: 'Head of Engineering',
      description: 'William heads up engineering.'
    },
    {
      href: '/',
      src: '/images/team/09_team_member.jpg',
      alt: 'anon',
      name: 'K. Poett',
      jobTitle: 'Sr. Lead Engineer',
      description: 'Poet of code, not words.'
    }
  ];
</script>

<Section name="team">
  <TeamWrapper>
    <TeamHeader>
      <svelte:fragment slot="label">Get to know the Fluent Team</svelte:fragment>
      <P class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"> 
        Industry veterans and expert builders.
        The team behind Fluent consists of executives, 
        designers and innovators with decades of experience 
        in everything from banking to engineering.
        Before joining Fluent, they took their respective fields to new heights. 
        And now that we’ve gathered them here, they’re doing it again.
      </P> 
    </TeamHeader>
    <TeamBody>
      {#each members as { href, src, alt, name, jobTitle, description }}
      <TeamItem {href} {src} {alt} {name} {jobTitle} {imgClass}>
        <P class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </P>
        <svelte:fragment slot="social">
          <Facebook href="https://www.facebook.com/" />
          <Github href="https://github.com/" />
          <Twitter href="https://twitter.com/" />
        </svelte:fragment>
      </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>
