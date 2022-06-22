<script lang="ts">
  // components
  import ScholarPromo from "../chunks/displays/scholar_promo.svelte";
  import HomeTemp from "../templates/home_temp.svelte";
</script>

<HomeTemp />
<div class="promo">
  <ScholarPromo />
</div>

<style>
  .promo {
    margin: var(--large-spacing) auto;
    width: 100%;
    max-width: 30rem;
  }
</style>
