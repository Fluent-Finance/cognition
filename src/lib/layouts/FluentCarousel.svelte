<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>

  import { Section, } from 'flowbite-svelte-blocks';
  import { browser }  from '$app/environment';
  import Carousel     from 'svelte-carousel';

  let carousel; 
  
  const handleNextClick = () => { carousel.goToNext() }

  let divPanel = `
    w-full  
    min-h-[40vh]
    grid
    grid-cols-1
    gap-4
    bg-neutral
    rounded-2xl
    align-middle
    content-center
    items-center
  `;

  let anchorClasses = `
    flex
    flex-col 
    rounded-3xl
    min-h-fit
    max-w-full    
    text-center
    my-0
    py-0
    px-3
    mx-3
    xs:py-8
    xs:px-8
    xs:mx-8
    sm:py-8
    sm:px-8
    sm:mx-8
  `;

  let lowerAnchorClasses = `
    ${anchorClasses} 
    bg-neutral
    dark:bg-white
  `;
</script>

<Section class="flex bg-white dark:bg-base-100">

  {#if browser}
  <div class={lowerAnchorClasses}>
    <Carousel 
    let:currentPageIndex
    let:pagesCount
    let:showPage
    arrows={false}
    autoplay={true}
    bind:this={carousel}>

      <div id={`panel-${currentPageIndex}`} class={divPanel}>
        <div class="align-middle justify-center content-center items-center mx-auto py-3">
          <div class="h-[395px] flex-col items-center gap-14 inline-flex">

            <div class="mt-1 text-center text-black text-5xl font-medium font-basier leading-9">
              High-Quality Assets and Managers
            </div>

            <div class="h-[43px] text-center text-slate-900 text-[22px] font-normal font-neuehaas leading-loose">
              Fluent’s deposit token infrastructure directly plugs into core banking APIs.
            </div>

            <div class="justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
                <div class="w-[210px] h-[43px] relative"></div>
              </div>

              <div class="flex-col justify-center items-center gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
        
      <div id={`panel-${currentPageIndex}`} class={divPanel}>
        <div class="align-middle justify-center content-center items-center mx-auto py-3">
          <div class="h-[395px] flex-col items-center gap-14 inline-flex">

            <div class="mt-1 text-center text-black text-5xl font-medium font-basier leading-9">
              Elite Enterprise Service Providers
            </div>

            <div class="h-[43px] text-center text-slate-900 text-[22px] font-normal font-neuehaas leading-loose">
              Fluent’s tech stack integrates elite distributed ledger technology solutions and service providers.
            </div>

            <div class="justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
                <div class="w-[210px] h-[43px] relative"></div>
              </div>

              <div class="flex-col justify-center items-center gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id={`panel-${currentPageIndex}`} class={divPanel}>
        <div class="align-middle justify-center content-center items-center mx-auto py-3">
          <div class="h-[395px] flex-col items-center gap-14 inline-flex">

            <div class="mt-1 text-center text-black text-5xl font-medium font-basier leading-9">
              Third-Party Audits
            </div>

            <div class="px-20 h-[43px] text-center text-slate-900 text-[22px] font-normal font-neuehaas leading-loose">

              <span class="text-slate-900 text-[22px] font-normal font-neuehaas leading-loose">
                In addition to earning a SOC 2 Type 1 certification, all of Fluent’s
              </span>
              <span class="text-base-50 text-[22px] font-normal font-neuehaas underline leading-loose">
                smart contracts have passed security audits
              </span>
              <span class="text-slate-900 text-[22px] font-normal font-neuehaas leading-loose"> 
                and remain open source.
              </span>
            </div>

            <div class="justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
                <div class="w-[210px] h-[43px] relative"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id={`panel-${currentPageIndex}`} class={divPanel}>
        <div class="align-middle justify-center content-center items-center mx-auto py-3">
          <div class="h-[395px] flex-col items-center gap-14 inline-flex">


            <div class="mt-1 text-center text-black text-5xl font-medium font-basier leading-9">
              Industry Experts and Agile Innovators
            </div>

            <div class="mb-10 mx-40 px-40 w-lg h-[43px] text-center text-slate-900 text-[22px] font-normal font-neuehaas leading-loose">
              Fluent’s core team includes seasoned executives, 
              system architects, innovators, and entrepreneurs with 
              deep backgrounds in global banking, traditional finance, 
              digital assets, and core engineering.
            </div>

            <div class="justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
            </div>

            <div class="justify-start items-start gap-6 inline-flex">
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="relative h-[12px]" slot="dots">
        <div class="w-[172.25px] h-1 relative">
          <div class="w-[35.74px] h-1 left-0 top-[4px] absolute bg-base-50 rounded-3xl"></div>
          <div class="w-[35.74px] h-1 left-[45.70px] top-[4px] absolute bg-base-300 rounded-3xl"></div>
          <div class="w-[35.74px] h-1 left-[90.81px] top-[4px] absolute bg-base-300 rounded-3xl"></div>
          <div class="w-[35.74px] h-1 left-[136.51px] top-[4px] absolute bg-base-300 rounded-3xl"></div>
        </div>
      </div>
    </Carousel>
  </div>
  {/if}

</Section>
