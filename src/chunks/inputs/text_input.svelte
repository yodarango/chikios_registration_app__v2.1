<script lang="ts">
  // props
  export let type: string = "text";
  export let maxLength: number = 140;
  export let req: boolean = true;
  export let placeholder: string = "";
  export let name: string;
</script>

<div class="input-wrapper">
  <!-- check if the field isrequired to render appropiately -->
  {#if req}
    <input
      {type}
      maxlength={maxLength}
      class="std-input"
      {placeholder}
      {name}
      required
    />
  {:else}
    <input {type} maxlength={maxLength} class="std-input" {placeholder} />
  {/if}

  <div class="svg-wrapper">
    <svg viewBox="0 0 356 9">
      <path
        d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3"
        stroke="#5B7FFF"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</div>

<style>
  .input-wrapper {
    margin: var(--medium-spacing) auto;
    width: 100%;
    height: 5rem;
  }

  .input-wrapper input {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    padding-bottom: 0;
    color: var(--font-color);
    background-color: transparent;
  }

  .input-wrapper input::placeholder {
    color: var(--secondary-color);
  }

  .svg-wrapper {
    width: 100%;
    margin: 0;
    transform: translateY(-2rem);
  }
</style>
