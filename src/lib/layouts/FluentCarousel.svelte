<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import _            from 'lodash';
  import { Img }      from 'flowbite-svelte'
  import { browser }  from '$app/environment';
  import Carousel     from 'svelte-carousel';
  import CarouselDot  from '$lib/atoms/CarouselDot.svelte';

  import IM from '$lib/data/CarouselImage';
  import FS from '$lib/styles/FluentStyles';

  let flexCol     = FS.processStyles('global.flex');
  let gridCols    = FS.processStyles('global.grid');
  let center      = FS.processStyles('global.center');
  let textBreaks  = FS.processStyles('global.text.breaks');

  let h1Headers     = `my-0 py-0 mx-4 px-4 md:mt-10 mb-0 text-black font-medium font-basier leading-9`;
  let indicatorBase = `absolute w-[35.74px] h-1 top-[-20px] md:top-[4px] rounded-3xl bg-base-300`;
  let placeholder   = `w-[271px] h-[104px] inset-0 object-center bg-neutral-50 rounded-[10px] shadow`;
  let neuehaasCopy  = `text-[16px] xs:text-[22px] font-normal font-neuehaas leading-loose`;
  let spaceCopy     = `my-1 mx-5 py-0 px-5 md:my-20 md:mx-10 md:px-20`;

  let divPanel = `
    flex
    object-top
    h-[80vh]
    min-h-[50vh]
    md:min-h-[50vh]
    md:max-h-[60vh]
    bg-neutral
    rounded-3xl
    ${textBreaks}
    ${center}
  `;

  let anchorClasses = `
    ${flexCol}

    xs:rounded-3xl
    max-w-full    
    text-center
    xs:my-5
    py-0
    px-8
    mx-0
    xs:py-8
    xs:px-8
    xs:mx-8
    sm:py-8
    sm:px-8
    sm:mx-8
    md:mx-20
    lg:mx-40
  `;

  let wrapperClasses = `
    ${anchorClasses} 
    bg-neutral
  `;

  let imgClass = `
    mx-auto
    max-w-sm
    max-h-[104px]
  `;

  let imageClass = `
    mx-auto
    px-7
    py-7
    items-center
    content-center
  `;

  let size = 'max-w-full';

  let carousel: any; 
</script>

{#if browser}
  <div class={wrapperClasses}>
    <Carousel 
    let:currentPageIndex
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
          ${h1Headers}
          ${textBreaks}`}>
            High-Quality Assets and Managers
          </div>

          <div class={`${spaceCopy} text-center text-gray-500 ${neuehaasCopy}`}>
            Fluent’s deposit token infrastructure directly plugs into core banking APIs.
          </div>

          <div class={`mx-auto ${center} ${gridCols}`}> 
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={ _.get(IM, '0') } {imgClass} {size} class={imageClass} />
              </div>
            </div>
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '1')} {imgClass} {size} class={imageClass} />
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

          <div class={`
          ${h1Headers}
          ${textBreaks}`}>
            Elite Enterprise Service Providers
          </div>

          <div class={`${spaceCopy} text-center text-gray-500 ${neuehaasCopy}`}>
            Fluent’s tech stack integrates elite distributed 
            ledger technology solutions and service providers.
          </div>

          <div class={`mx-auto ${center} ${gridCols}`}> 
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '2')} {imgClass} {size} class={imageClass} />

              </div>
            </div>
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '3')} {imgClass} {size} class={imageClass} />
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

          <div class={`
          ${h1Headers}
          ${textBreaks}`}>
            Third-Party Audits
          </div>

          <div class={`${spaceCopy} text-center text-gray-500 ${neuehaasCopy}`}>
            <span class={`text-gray-500 ${neuehaasCopy}`}>
              In addition to earning a SOC 2 Type 1 certification, all of Fluent’s
            </span>
            <span class={`text-base-50 underline ${neuehaasCopy}`}>
              smart contracts have passed security audits
            </span>
            <span class={`text-gray-500 ${neuehaasCopy}`}> 
              and remain open source.
            </span>
          </div>

          <div class={`mx-auto ${center}`}> 
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '4')} {imgClass} {size} class={imageClass} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id={`panel-${currentPageIndex}`} class={divPanel}>
        <div class={`
        my-0
        xs:my-10
        py-0
        xs:py-20
        mt-20
        xs:mt-60
        md:py-3
        mx-auto
        gap-14
        ${flexCol}`}>

          <div class={`
          ${h1Headers}
          ${textBreaks}`}>
            Industry Experts and Agile Innovators
          </div>

          <div class={`
          my-0
          py-0
          mx-5
          px-5
          md:my-10
          md:mx-10
          md:px-40
          lg:mx-40
          text-center
          text-gray-500
          ${neuehaasCopy}`}>
            Fluent’s core team includes seasoned executives, 
            system architects, innovators, and entrepreneurs with 
            deep backgrounds in global banking, traditional finance, 
            digital assets, and core engineering.
          </div>

          <div class={`my-0 md:my-10 mx-auto ${center} ${gridCols} md:grid-cols-4`}> 
            <div class="">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '5')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '6')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '7')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '8')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '9')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '10')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '11')} {imgClass} {size} class={imageClass} />
              </div>
            </div>

            <div class="hidden invisible xs:block xs:visible">
              <div class={`${placeholder}`}>
                <Img src={_.get(IM, '12')} {imgClass} {size} class={imageClass} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
      slot="dots"
      let:showPage 
      let:currentPageIndex 
      let:pagesCount
      class="relative mt-0 sm:mt-20 h-[12px]">
        <div class="w-[172.25px] h-1 relative">
          {#each Array(pagesCount) as _, pageIndex (pageIndex)}
            <CarouselDot
              active={currentPageIndex === pageIndex}
              on:click={() => showPage(pageIndex)}
            ></CarouselDot>
          {/each}
        </div>
      </div>
    </Carousel>
  </div>
{/if}
