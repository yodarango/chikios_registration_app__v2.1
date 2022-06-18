<script lang="ts">
  // props
  export let text: string = "";
  export let font: string = "";
  export let align: string = "";
  export let color: string = "";
</script>

<div class="text-wrapper">
  <p class="std-text {align} {font} {color}">{text}</p>
</div>

<style>
  .text-wrapper {
    width: 100%;
  }
  .f-primary {
    font: var(--primary-font);
  }

  .f-secondary {
    font: var(--secondary-font);
  }

  .c-primary {
    color: var(--primary-color);
  }

  .c-secondary {
    color: var(--secondary-color);
  }

  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .justify {
    text-align: justify;
  }
</style>
