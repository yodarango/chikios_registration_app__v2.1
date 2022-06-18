<script>
  // svlete
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div
  class="btn-wrapper std-flex-row std-flex-nowrap std-flex-justify-between std-flex-align-center"
  on:click={() => dispatch("action")}
>
  <span class="std-icon std-bkg button-icon" />
  <button class="button std-button">
    <p class="std-gradient-text">Back</p>
  </button>
</div>

<style>
  .btn-wrapper {
    width: 8rem;
    height: 3rem;
  }

  .btn-wrapper:hover {
    cursor: pointer;
  }

  /* --------- button ------------  */
  .button {
    text-align: center;
    font: var(--secondary-font);
    background-color: transparent;
    margin: 0;
  }

  .btn-wrapper:hover {
    transform: translateX(-1rem);
  }

  .button p {
    margin: 0;
    font: var(--secondary-font);
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding-right: 1rem;
  }

  /* ------ icon ------- */
  .button-icon {
    margin: 0;
    background-image: url("/images/icons/arrow_back.png");
  }
</style>
