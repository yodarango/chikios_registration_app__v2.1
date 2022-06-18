<script lang="ts">
  // svelte
  import { onMount } from "svelte";

  // types
  type TdisplayStatus = {
    first: string;
    second: string;
    third: string;
  };

  // props
  export let currentTitle: string = "child";

  // components
  import RadioInput from "../../chunks/inputs/radio_input.svelte";
  import NumberInput from "../../chunks/inputs/number_input.svelte";
  import TextInput from "../../chunks/inputs/text_input.svelte";
  import Primary from "../../chunks/buttons/primary.svelte";
  import Back from "../..//chunks/buttons/back.svelte";
  import Parragraph from "../../chunks/typography/parragraph.svelte";
  import ImageInput from "../../chunks/inputs/image_input.svelte";

  // states
  let currentSection: number = 0;
  let currenstSectionClass: string = "";
  let allowOtherPickUpParty: boolean = false;
  let displaySubmitForm: boolean = false;
  let displayStatus: TdisplayStatus = {
    first: "display",
    second: "",
    third: "",
  };

  // DOM Refs
  let inputs: any;

  onMount(() => {
    inputs = document.getElementsByTagName("input");
  });

  // --------- chnage the title of the current form section
  const handleTitleChange = (chosenOption) => {
    switch (chosenOption) {
      case 0:
        currentTitle = "child";
        break;
      case 1:
        currentTitle = "guardian";
        break;
      case 2:
        currentTitle = "child";
        break;
    }
  };
  // --------- serve the next portion of the form
  const handleNextFormSection = () => {
    handleTitleChange(currentSection + 1);
    currentSection += 1;
    currenstSectionClass = "swapfwd";
    switch (currentSection) {
      case 0:
        displayStatus = { first: "display", second: "", third: "" };
        break;
      case 1:
        displayStatus = { first: "", second: "display", third: "" };
        break;
      case 2:
        displayStatus = { first: "", second: "", third: "display" };
        break;
    }
  };

  // --------- serve the previos portion of the form only if teh currentSeciton is greater than 0
  const handlePrevFormSection = () => {
    handleTitleChange(currentSection - 1);
    currentSection -= 1;
    currenstSectionClass = "swapbkwd";
    switch (currentSection) {
      case 0:
        displayStatus = { first: "display", second: "", third: "" };
        break;
      case 1:
        displayStatus = { first: "", second: "display", third: "" };
        break;
      case 2:
        displayStatus = { first: "", second: "", third: "display" };
        break;
    }
  };

  // ------------ handle the pick up child option
  const handlePickupChildOption = (evt) => {
    const chosenOption = evt.detail.option;

    chosenOption === 1
      ? (allowOtherPickUpParty = true)
      : (allowOtherPickUpParty = false);
  };

  // ----------- handle form submission and child registration
  const handleFormSubmission = () => {
    const formData = {};
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        alert(`${inputs[i].placeholder} is required`);
        return;
      }
      formData[inputs[i].name] = inputs[i].value;
    }
  };
</script>

<div class="form-wrapper">
  <!------- from  ---------->
  <form class="registration-form std-flex-justify-start" id="form">
    <!----- first section  -->
    <div
      class="form-section-wrapper initial {currenstSectionClass} {displayStatus.first}"
    >
      <TextInput placeholder="first name" req={true} name="child_fn" />
      <TextInput placeholder="last name" req={true} name="child_ln" />
      <NumberInput startAt={4} endAt={11} name="age" />
      <RadioInput
        value={{ first: "male", second: "female" }}
        valueLabel={{ first: "m", second: "f" }}
        label="gender"
      />
    </div>

    <!----- second section  -->
    <div
      class="form-section-wrapper {currenstSectionClass} {displayStatus.second}"
    >
      <TextInput placeholder="first name" req={true} name="guardian_fn" />
      <TextInput placeholder="last name" req={true} name="guardian_ln" />
      <TextInput placeholder="phone number" type="phone" name="phone" />
      <Parragraph
        text="is someone else allowed to pick up your child?"
        font="f-secondary"
        color="c-primary"
        align="left"
      />
      <RadioInput
        value={{ first: "yes", second: "no" }}
        valueLabel={{ first: "y", second: "n" }}
        on:action={handlePickupChildOption}
      />

      <!-- allow other pick up -->
      {#if allowOtherPickUpParty}
        <Parragraph
          text="who?"
          font="f-secondary"
          color="c-primary"
          align="left"
        />
        <TextInput
          placeholder="first name"
          req={true}
          name="second_guardia_fn"
        />
        <TextInput
          placeholder="last name"
          req={true}
          name="second_guardia_ln"
        />
      {/if}
    </div>

    <!------- third section  -------->
    <div
      class="form-section-wrapper {currenstSectionClass} {displayStatus.third}"
    >
      <div class="input-image-wrapper">
        <ImageInput
          on:uploadDone={() => (displaySubmitForm = true)}
          defaultImgSource="images/icons/profile.png"
          btnText="submit photo"
          name="child_photo"
        />
      </div>
    </div>

    {#if displaySubmitForm && currentSection === 2}
      <div class="button-wrapper_fwd">
        <Primary text="Done" type="submit" on:action={handleFormSubmission} />
      </div>
    {/if}
  </form>

  <div class="std-spacer-xl" />
  <div class="std-spacer-xl" />

  <!------- buttons ---------->
  {#if currentSection < 2}
    <div class="button-wrapper_fwd">
      <Primary on:action={handleNextFormSection} text="Next" />
    </div>
  {/if}

  {#if currentSection > 0}
    <div class="button-wrapper_bkwd">
      <Back on:action={handlePrevFormSection} />
    </div>
  {/if}
</div>

<style>
  /* --------- wrapper -----------  */
  .form-wrapper {
    width: 100%;
    margin: auto;
    position: relative;
  }

  /* ------- form -------- */

  .registration-form {
    width: 100%;
    max-width: 50rem;
    margin: auto;
  }

  /* --------- sections --------- */
  .form-section-wrapper {
    display: none;
    opacity: 0;
    width: 80%;
    margin: auto;
  }

  .form-section-wrapper.display {
    display: block;
  }

  .initial {
    opacity: 1;
  }

  .form-section-wrapper.swapfwd {
    opacity: 1;
    animation: swapFwd 500ms ease-in;
  }

  .form-section-wrapper.swapbkwd {
    opacity: 1;
    animation: swapBkwd 500ms ease-in;
  }

  @keyframes swapFwd {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }

    99% {
      transform: translateX(0);
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes swapBkwd {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    99% {
      transform: translateX(0);
    }

    100% {
      opacity: 1;
    }
  }

  /* --------- button --------------  */
  .button-wrapper_fwd {
    position: absolute;
    right: 2rem;
    bottom: 0rem;
  }

  .button-wrapper_bkwd {
    position: absolute;
    left: 2rem;
    bottom: 0rem;
  }
  .input-image-wrapper {
    margin: var(--medium-spacing) auto 0;
  }
</style>
