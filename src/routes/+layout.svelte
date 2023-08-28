<script>
  import '@fontsource/righteous';
  import '@fontsource/marvel';
  import '@fontsource/kalam';
  import '@fontsource/material-icons';

  import { MetaTags } from 'svelte-meta-tags';
</script>


<style>
  div.layout {
    font-family: 'Righteous', sans-serif;
    background-color: rgba(23,23,23, 0.9);
  }

  div.wrapper {
    background-color: rgba(205,243,255, 0.9);
  }

  main {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  main > h1 {
    color: rgb(33,40,33);
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  
  main > h4 {
    color: rgba(209,209,209,1);
    font-size: 1.0em;
    font-weight: 400;
  }
</style>

<MetaTags 
  title='Cognition'
  description='Fluent Finance Data Charts.' 
  openGraph={{
    url: `${import.meta.env.VITE_URL}`,
    title: 'Cognition: Fluent Finance',
    description: 'Data Charts for Fluent Stablecoins.',
    images: [
      {
        url: 'https://kod3.nyc3.cdn.digitaloceanspaces.com/Fluent/fluent.logo.dark.png',
        width: 1920,
        height: 430,
        alt: 'Fluent Og Image Alt'
      },
      {
        url: 'https://kod3.nyc3.cdn.digitaloceanspaces.com/Fluent/fluent.logo.png',
        width: 1920,
        height: 424,
        alt: 'Fluent Og Image Alt Second'
      },
    ],
    siteName: 'Fluent: Cognition'
  }}
/> 
<div class='layout'>  
  <div class='wrapper'> 
    <main>
      <h1>Cognition</h1>
      <h4>by: Fluent Finance</h4> 


    </main>
  </div> 
  <slot /> 
</div> 

