<script lang="ts">
  // components
  import Home from "./pages/home.svelte";
  import Simple from "./pages/simple.svelte";

  // states
  let bkgImage: string = "./images/bkgs/crumbled-paper_v.png";
  let bkgImage2: string = "./images/bkgs/water_bkg.png";
</script>

<div class="background std-bkg" style="background-image: url('{bkgImage2}')" />
<main class="main-wrapper">
  <!-- <Home /> -->
  <Simple />
</main>

<style>
  /* .main-wrapper {
    width: var(--main-wrapper);
    margin: var(--medium-spacing) auto;
    max-width: var(--max-width-main-wrapper);
  }
  */

  .background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
