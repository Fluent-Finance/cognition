<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  export let active = false
</script>

<style>
  :root {
    --sc-dot-size: 35.74px;
    --sc-dot-width: 15.74px;
    --sc-dot-height: 2.74px;
    --sc-active-dot-size: 37.74px;
    --sc-active-dot-height: 3.74px;
    --sc-dot-size-animation-time: 250ms;
  }

  .sc-carousel-dot__dot {
    background-color: var(--sc-color-rgb-light);
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 30px;
    display: inline-block;
    opacity: 0.5;
    transition:
      opacity 100ms ease,
      height var(--sc-dot-size-animation-time) ease,
      width var(--sc-dot-size-animation-time) ease;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    height: var(--sc-dot-height);
    width: var(--sc-dot-size);
  }
  .sc-carousel-dot__dot:hover {
    opacity: 0.9;
  }
  .sc-carousel-dot__dot_active {
    opacity: 0.9;
    background-color: #6200EE;

    height: var(--sc-active-dot-height);
    width: var(--sc-active-dot-size);
  }
</style>

<button
  class={`sc-carousel-dot__dot`} 
  class:sc-carousel-dot__dot_active={active}
  on:click
></button>
