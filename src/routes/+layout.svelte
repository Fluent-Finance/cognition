<script>
  import '@fontsource/righteous';
  import '@fontsource/marvel';
  import '@fontsource/kalam';
  import '@fontsource/material-icons';
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

<div class='layout'>  
  <div class='wrapper'> 
    <main>
      <h1>Cognition</h1>
      <h4>by: Fluent Finance</h4> 


    </main>
  </div> 
  <slot /> 
</div> 

