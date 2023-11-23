<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>

  let PdfViewer;

  import type { PageData } from '$types';

  import { Section } from 'flowbite-svelte-blocks';
  import { onMount } from "svelte";
  import url         from "$lib/assets/FluentWhitepaper.pdf";

  const showBorder  = true;
  const showButtons = ['navigation', 'timeInfo', 'pageInfo'];

  export let data: PageData; 
  let width: number;

  $: scale = (width >= 1920) ? 1.5 : 1.7;

  onMount(async () => {
    const module = await import("$lib/components/PdfViewer.svelte");
    PdfViewer = module.default;
  });
</script>

<Section class="relative bg-white dark:bg-base-100 min-h-[100vh]">
  <svelte:component this={PdfViewer} {scale} {url} {showBorder} {showButtons} />
</Section>
