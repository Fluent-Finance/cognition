<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏-⚡️--->
<script lang='ts'>
  import { onMount } from "svelte";
  import { Section } from 'flowbite-svelte-blocks';
  import url         from "$lib/assets/Fluent_Whitepaper.pdf";
  import pdfViewer   from "$lib/components/PdfViewer.svelte";

  export const prerender = true;

  let PdfViewer;

  export let width: number;

  $: scale = (width >= 1920) ? 1.5 : 1.7;

  const showBorder  = true;
  const showButtons = ['navigation', 'timeInfo', 'pageInfo', 'download'];
  const downloadFileName = '/Fluent_Whitepaper.pdf';

  onMount(async () => {
    try { PdfViewer = pdfViewer; } 
    catch (error) { console.log(error); }
  });
</script>

<Section class="relative bg-white dark:bg-base-100 min-h-[100vh]">
  <svelte:component this={PdfViewer} {scale} {url} {downloadFileName} {showBorder} {showButtons} />
</Section>
