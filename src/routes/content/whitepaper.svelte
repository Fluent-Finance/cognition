<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { Section } from 'flowbite-svelte-blocks';
  import { onMount } from "svelte";
  import url         from "$lib/assets/FluentWhitepaper.pdf";

  let PdfViewer;

  export let width: number;

  $: scale = (width >= 1920) ? 1.5 : 1.7;

  const showBorder  = true;
  const showButtons = ['navigation', 'timeInfo', 'pageInfo'];

  onMount(async () => {
    try {
      const module = await import("$lib/components/PdfViewer.svelte");
      PdfViewer = module.default;
    } catch (error) { console.log(error); }
  });
</script>

<Section class="relative bg-white dark:bg-base-100 min-h-[100vh]">
  <svelte:component this={PdfViewer} {scale} {url} {showBorder} {showButtons} />
</Section>
