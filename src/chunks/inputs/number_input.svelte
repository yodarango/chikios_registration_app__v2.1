<script lang="ts">
  // props
  export let startAt: number = 0;
  export let endAt: number = 0;
  export let req: boolean = true;
  export let name: string;

  // states
  let currAge: string = "age";
  let ageValue: null | number = null;
  let ageDPdisplay: string = "";
  let currAgeisSelected: string = "";

  //----------- display the dropdown
  const handleDisplayDP = () => {
    ageDPdisplay = "age-dropdown-display";
  };

  // ---------- check the input is a number
  const handleSelectAge = (age: number) => {
    ageDPdisplay = " ";
    ageValue = age;
    currAgeisSelected = "selected";
    currAge = age.toString();
  };
</script>

<div class="main-wrapper">
  <div class="input-wrapper">
    <!-- hidden input -->
    {#if req}
      <input
        type="number"
        maxlength="3"
        class="std-input hidden"
        id="hidden-input"
        placeholder=""
        value={ageValue}
        {name}
        required
      />
    {:else}
      <input
        type="number"
        maxlength="3"
        class="std-input hidden"
        id="hidden-input"
        placeholder=""
        value={ageValue}
      />
    {/if}

    <!---------- age dropdown --------->
    <div class="age-dropdown {ageDPdisplay}">
      {#each new Array(endAt) as age, i}
        <p class="std-flex-row" on:click={() => handleSelectAge(i + 1)}>
          {i + startAt}
        </p>
      {/each}
    </div>

    <!---------- current age --------->
    <p class="std-input currAge {currAgeisSelected}" on:click={handleDisplayDP}>
      {currAge}
    </p>

    <!---------- svg wrapper --------->
    <div class="svg-wrapper">
      <svg viewBox="0 0 356 9">
        <path
          d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3"
          stroke="#5B7FFF"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</div>

<style>
  .main-wrapper {
    width: 50%;
    height: 5rem;
  }
  .input-wrapper {
    margin: var(--small-spacing) 0;
    width: 100%;
    height: 2rem;
    position: relative;
    cursor: pointer;
  }

  .input-wrapper input {
    display: none;
    margin: 0;
  }

  .currAge {
    width: 100%;
    height: 100%;
    color: var(--secondary-color);
    margin: 0;
    text-align: left;
    height: 2em;
  }

  .currAge.selected {
    color: var(--primary-color);
  }

  /* ------ drop down ----- */
  .age-dropdown {
    display: none;
    width: 100%;
    height: 20rem;
    position: absolute;
    overflow-y: scroll;
    background-color: var(--accent-color);
    border-radius: 1rem;
    z-index: 2;
    top: 0;
    left: 0;
  }

  .age-dropdown:hover {
    cursor: pointer;
  }

  .age-dropdown p {
    margin: 0;
    height: 5rem;
    border-bottom: 0.2rem solid #f2f2f2;
  }

  .age-dropdown p:hover {
    background-color: #f2f2f2;
  }

  .age-dropdown-display {
    display: block;
  }

  /* ------ svg ----- */
  .svg-wrapper {
    width: 100%;
    margin: 0;
    transform: translateY(-1.5rem);
  }

  .svg-wrapper svg {
    width: 100%;
  }
</style>
