<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>

  import _            from 'lodash';
  import { Section, } from 'flowbite-svelte-blocks';
  import { browser }  from '$app/environment';
  import Carousel     from 'svelte-carousel';

  import FS from '$lib/styles/FluentStyles';

  let carousel: any; 
  const handleNextClick = () => { carousel.goToNext() }


  let textBreaks  = FS.processStyles('global.text.breaks');
  let center      = FS.processStyles('global.center');
  let flexCol     = FS.processStyles('global.flex');
  let gridCols    = FS.processStyles('global.grid');
  let backgrounds = FS.processStyles('global.color');

  let indicatorBase = `absolute w-[35.74px] h-1 top-[4px] rounded-3xl bg-base-300`;
  let placeholder   = `w-[271px] h-[104px] bg-neutral-50 rounded-[10px] shadow`;
  let neuehaasCopy  = `text-[22px] font-normal font-neuehaas leading-loose`;

  let divPanel = `
    flex
    min-h-[50vh]
    bg-neutral
    rounded-3xl
    ${textBreaks}
    ${center}
  `;

  console.log(gridCols);
  let anchorClasses = `
    ${flexCol}
    rounded-3xl
    min-h-[50vh]
    max-w-full    
    text-center
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

  let wrapperClasses = `
    ${anchorClasses} 
    bg-neutral
    dark:bg-white
  `;

</script>

<Section class={`flex ${backgrounds}`}>

  {#if browser}
    <div class={wrapperClasses}>
      <Carousel 
      let:currentPageIndex
      let:pagesCount
      let:showPage
      arrows={false}
      autoplay={true}
      bind:this={carousel}>

        <div id={`panel-${currentPageIndex}`} class={divPanel}>
          <div class={`
          py-3
          mx-auto
          gap-14
          ${flexCol}`}>

            <div class={`
            mt-1
            text-black
            font-medium
            font-basier
            leading-9
            ${textBreaks}`}>
              High-Quality Assets and Managers
            </div>

            <div class={`h-[43px] text-center text-slate-900 ${neuehaasCopy}`}>
              Fluent’s deposit token infrastructure directly plugs into core banking APIs.
            </div>

            <div class={`mx-auto ${center} ${gridCols}`}> 
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
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

              <div class={`h-[43px] text-center text-slate-900 ${neuehaasCopy}`}>
                Fluent’s tech stack integrates elite distributed ledger technology solutions and service providers.
              </div>

              <div class={`mx-auto ${center} ${gridCols}`}> 
                <div class="">
                  <div class={`${placeholder}`}></div>
                </div>
                <div class="">
                  <div class={`${placeholder}`}></div>
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

              <div class={`px-20 h-[43px] text-center text-slate-900 ${neuehaasCopy}`}>

                <span class={`text-slate-900 ${neuehaasCopy}`}>
                  In addition to earning a SOC 2 Type 1 certification, all of Fluent’s
                </span>
                <span class={`text-base-50 underline ${neuehaasCopy}`}>
                  smart contracts have passed security audits
                </span>
                <span class={`text-slate-900 ${neuehaasCopy}`}> 
                  and remain open source.
                </span>
              </div>

              <div class={`mx-auto ${center} ${gridCols} xs:grid-cols-1`}> 
                <div class="">
                  <div class={`${placeholder}`}></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div id={`panel-${currentPageIndex}`} class={divPanel}>
          <div class={`
          py-3
          mx-auto
          gap-14
          ${flexCol}`}>

            <div class="mt-1 text-center text-black text-5xl font-medium font-basier leading-9">
              Industry Experts and Agile Innovators
            </div>

            <div class={`mb-10 mx-40 px-40 w-lg h-[43px] text-center text-slate-900 ${neuehaasCopy}`}>
              Fluent’s core team includes seasoned executives, 
              system architects, innovators, and entrepreneurs with 
              deep backgrounds in global banking, traditional finance, 
              digital assets, and core engineering.
            </div>

            <div class={`mx-auto ${center} ${gridCols} md:grid-cols-4`}> 
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
            </div>

            <div class={`mx-auto ${center} ${gridCols} md:grid-cols-4`}> 
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
              <div class="">
                <div class={`${placeholder}`}></div>
              </div>
            </div>

          </div>
        </div>

        <div class="relative h-[12px]" slot="dots">
          <div class="w-[172.25px] h-1 relative">
            <div class={`${indicatorBase} left-0 bg-base-50`}></div>
            <div class={`${indicatorBase} left-[45.70px]`}></div>
            <div class={`${indicatorBase} left-[90.81px]`}></div>
            <div class={`${indicatorBase} left-[136.51px]`}></div>
          </div>
        </div>
      </Carousel>
    </div>
  {/if}

</Section>
