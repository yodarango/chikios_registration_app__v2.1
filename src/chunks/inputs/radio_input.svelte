<script lang="ts">
  // svelte
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // types
  type TselectedInputColor = { first: string; second: string };
  type TselectedInput = { first: boolean; second: boolean };
  type TinputValues = { first: string; second: string };

  //props
  export let value: TinputValues = { first: "", second: "" };
  export let label: string = "";
  export let valueLabel: TinputValues = { first: "", second: "" };
  export const action: MouseEvent | null = null;
  export let req: boolean = true;

  // states
  let selectedInput: TselectedInput = {
    first: false,
    second: false,
  };
  let selectedoptionColor: TselectedInputColor = {
    first: "",
    second: "",
  };

  // -------- handle the option choice
  const handleoptionChoice = (option: number) => {
    option === 1
      ? ((selectedoptionColor = { first: "selected", second: "" }),
        (selectedInput = { first: true, second: false }))
      : ((selectedoptionColor = { first: "", second: "selected" }),
        (selectedInput = { first: false, second: true }));

    dispatch("action", { option });
  };
</script>

<!-------------- hidden input --------------->
<div class="input-wrapper">
  {#if req}
    <input
      type="radio"
      id="input-option"
      name="input-option"
      value={value.first}
      checked={selectedInput.first}
      required
    />
    <input
      type="radio"
      id="input-option"
      name="input-option"
      value={value.second}
      checked={selectedInput.second}
      required
    />
  {:else}
    <input
      type="radio"
      id="input-option"
      name="input-option"
      value={value.first}
      checked={selectedInput.first}
    />
    <input
      type="radio"
      id="input-option"
      name="input-option"
      value={value.second}
      checked={selectedInput.second}
    />
  {/if}
</div>

<!-------------- Visible input--------------->
<div
  class="input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap"
>
  {#if label}
    <p class="option-option-label">{label}:</p>
  {/if}

  <!--------------first option option --------------->
  <div class="option-option" on:click={() => handleoptionChoice(1)}>
    <span
      class="std-bkg std-icon option-selected {selectedoptionColor.first}"
    />
    <p class="option-letter {selectedoptionColor.first}">{valueLabel.first}</p>
    <div class="svg-wrapper">
      <svg>
        <path
          d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3"
          stroke="#5B7FFF"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>

  <!-------------- second option option --------------->
  <div class="option-option" on:click={() => handleoptionChoice(2)}>
    <span
      class="std-bkg std-icon option-selected {selectedoptionColor.second}"
    />
    <p class="option-letter {selectedoptionColor.second}">
      {valueLabel.second}
    </p>
    <div class="svg-wrapper">
      <svg>
        <path
          d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3"
          stroke="#5B7FFF"
          stroke-width="3"
          stroke-linecap="round"
          width="100%"
          height="100%"
        />
      </svg>
    </div>
  </div>
</div>

<style>
  .input-wrapper {
    width: 100%;
    display: none;
    height: 5rem;
  }

  /* -------- visisble wrapper --------- */
  .input-interface-wrapper {
    width: 100%;
    margin: var(--medium-spacing) auto;
  }

  .option-option-label {
    text-align: left;
    margin: 0;
    width: 30%;
  }

  /* --------- option option -------- */
  .option-option {
    margin: 0 var(--medium-spacing) 0 var(--xsmall-spacing);
    position: relative;
    width: 30%;
    cursor: pointer;
  }

  .svg-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0.5rem;
    left: 0;
    width: 5rem;
    height: 1rem;
    padding: 0;
  }
  .svg-wrapper svg {
    width: 100%;
    height: 100%;
  }

  /* ----- seclection "X" icon  -------*/
  .option-selected {
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: contain;
    background-image: url("images/icons/check_x.png");
    display: none;
  }

  .option-selected.selected {
    display: block;
  }
  /* ----------- option letter ------- */
  .option-letter {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    width: 5rem;
    color: var(--secondary-color);
  }

  .option-letter:hover {
    color: var(--primary-color);
  }

  .option-letter.selected {
    color: var(--primary-color);
  }
</style>
