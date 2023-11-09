<script lang='ts'>

  import { Section, } from 'flowbite-svelte-blocks';
  import { browser }  from '$app/environment';
  import Carousel     from 'svelte-carousel';

  let carousel; 
  
  const handleNextClick = () => { carousel.goToNext() }
</script>

<Section class="flex h-40 h-[100vh] bg-white dark:bg-base-100">

  {#if browser}
    <Carousel bind:this={carousel}>
      <div class="
      w-full
      h-[70vh]
      grid
      grid-cols-1
      gap-4
      bg-neutral
      rounded-2xl
      align-middle
      content-center
      items-center">
        <div class="align-middle justify-center content-center items-center mx-auto py-3">
          <div class="h-[395px] flex-col items-center gap-14 inline-flex">

            <div class="mt-20 text-center text-black text-5xl font-medium font-basier leading-9">
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

      <div>2</div>

      <div>3</div>

    </Carousel>
  {/if}

</Section>
