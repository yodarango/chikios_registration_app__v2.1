<script lang="ts">
  let headerTitle: string = "child";
  // components
  import RegisterChild from "../layouts/forms/register_child.svelte";
  import Title from "../chunks/typography/title.svelte";
  import Biggest from "../chunks/images/biggest.svelte";
</script>

<!---------- image ------------->
<div class="image-wrapper">
  <Biggest src="/images/logo.png" alt="kidz quest logo" />
</div>
<!---------- title  ------------->
<Title title={headerTitle} />

<!---------- from  ------------->
<RegisterChild bind:currentTitle={headerTitle} />

<style>
  /* ----- image wrapper ----- */
  .image-wrapper {
    width: 100%;
    max-width: 65rem;
  }
</style>
