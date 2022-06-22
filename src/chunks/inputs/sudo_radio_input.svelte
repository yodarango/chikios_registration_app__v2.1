<script lang="ts">
  // svelte
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // types
  type TinputValues = { first: string; second: string };
  type TinputValuesBool = { first: boolean; second: boolean };

  //props
  export let name: string;
  export let label: string = "";
  export let valueLabel: TinputValues = { first: "", second: "" };
  export const action: MouseEvent | null = null;
  export let req: boolean = true;
  export let inputValues: TinputValues;

  // states
  let selectedInput: TinputValues = {
    first: inputValues.first,
    second: "",
  };
  let selectedoptionColor: TinputValues = {
    first: "selected",
    second: "",
  };

  // -------- handle the option choice
  const handleoptionChoice = (option: number) => {
    if (option === 1) {
      selectedoptionColor = { first: "selected", second: "" };
      selectedInput = { first: inputValues.first, second: "" };
    } else {
      selectedoptionColor = { first: "", second: "selected" };
      selectedInput = { first: "", second: inputValues.second };
    }

    dispatch("action", { option });
  };
</script>

<!---------------------------------- Visible input ------------------------------------------>
<div
  class="input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap"
>
  {#if label}
    <p class="option-option-label" for="input-option">
      {label}:
    </p>
  {/if}

  <!--------------first option option --------------->
  <div class="option-option" on:click={() => handleoptionChoice(1)}>
    <span
      class="std-bkg std-icon option-selected {selectedoptionColor.first}"
    />
    {#if req && selectedInput.first !== ""}
      <input
        type="text"
        id="option-one"
        value={selectedInput.first}
        {name}
        class="hidden"
        required
      />
    {:else if !req && selectedInput.first !== ""}
      <input
        type="text"
        id="option-one"
        value={selectedInput.first}
        {name}
        class="hidden"
      />
    {/if}

    <p class="option-letter {selectedoptionColor.first}">
      {valueLabel.first}
    </p>
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
    {#if req && selectedInput.second !== ""}
      <input
        type="text"
        id="option-two"
        value={selectedInput.second}
        {name}
        class="hidden"
      />
    {:else if !req && selectedInput.second !== ""}
      <input
        type="text"
        id="option-two"
        value={selectedInput.second}
        {name}
        class="hidden"
      />
    {/if}
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

  .hidden {
    display: none;
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
    background-image: url("../../../public/images/icons/check_x.png");
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
