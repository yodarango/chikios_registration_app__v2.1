<script lang="ts">
  export let alt: string = "";
  export let src: string = "";
</script>

<div class="image-wrapper">
  <img {src} {alt} class="std-img" />
</div>

<style>
  .image-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
