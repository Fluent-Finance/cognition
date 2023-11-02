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

  let imgClass = `
    grayscale
    hover:grayscale-0
    min-w-lg
    min-h-lg
    object-fill
    rounded-xl
    shadow-xl
    xs:rounded-full
  `;

  let divClass = ` 
    items-center
    bg-base-300
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
  let members = [
    {
      href: '#',
      src: '/images/team/00_team_member.jpg',
      alt: 'Bradley Allgood',
      name: 'Bradley Allgood',
      jobTitle: 'Chief Executive Officer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/01_team_member.jpg',
      alt: 'Greg Guedel',
      name: 'Greg Guedel',
      jobTitle: 'Chief Legal Officer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/02_team_member.jpg',
      alt: 'John Buckle',
      name: 'John Buckle',
      jobTitle: 'Lead Backend Engineer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/03_team_member.jpg',
      alt: 'Amrita Srivastava',
      name: 'Amrita Srivastava',
      jobTitle: 'Program Advisor',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/04_team_member.jpg',
      alt: 'Anthony Nixon',
      name: 'Anthony Nixon',
      jobTitle: 'Senior Software Engineer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/05_team_member.jpg',
      alt: 'Armin Ranjbar',
      name: 'Armin Ranjbar',
      jobTitle: 'Chief Technology Officer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/06_team_member.jpg',
      alt: 'Khaled Khan',
      name: 'Khaled Khan',
      jobTitle: 'Chief Strategy Officer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/07_team_member.jpg',
      alt: 'Brent Tanner',
      name: 'Brent Tanner',
      jobTitle: 'Chief Operations Officer',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/08_team_member.jpg',
      alt: 'William Hester',
      name: 'William Hester',
      jobTitle: 'Head of Engineering',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/09_team_member.jpg',
      alt: 'anon',
      name: 'K. Poett',
      jobTitle: 'Sr. Lead Engineer',
      description: 'Poet of code words.'
    },
    {
      href: '#',
      src: '/images/team/teammate_unknown.jpg',
      alt: 'future teammate',
      name: 'Future Teammate',
      jobTitle: '?',
      description: ''
    },
    {
      href: '#',
      src: '/images/team/teammate_unknown.jpg',
      alt: 'future teammate',
      name: 'Future Teammate',
      jobTitle: '?',
      description: ''
    }
  ];
</script>

<Section name="team" class='relative py-6 sm:py-10 min-w-full'>
  <TeamWrapper divClass={wrapperClass}> 
    <TeamHeader>
      <svelte:fragment slot="label">Get to know the Fluent Team</svelte:fragment>
      <P class="font-light text-gray-500 lg:mb-16 text-xl md:text-4xl dark:text-gray-400"> 
        Industry veterans and expert builders.
        The team behind Fluent consists of executives, 
        designers and innovators with decades of experience 
        in everything from banking to engineering.
        Before joining Fluent, they took their respective fields to new heights. 
        And now that we’ve gathered them here, they’re doing it again.
      </P> 
    </TeamHeader>
    <TeamBody class='grid grid-cols-2 gap-8 mb-6 lg:mb-16 md:grid-cols-3'>
      {#each members as { href, src, alt, name, jobTitle, description }}
        <TeamItem {href} {src} {alt} {name} {jobTitle} {imgClass} {divClass}>
          <P class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
            {description}
          </P>
          <svelte:fragment slot="social">
            <Github href="https://github.com/" />
            <Twitter href="https://x.com/" />
          </svelte:fragment>
        </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>
