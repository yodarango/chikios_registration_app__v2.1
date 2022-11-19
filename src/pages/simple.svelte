<script lang="ts">
  import { onMount } from "svelte";
  let thirdpartycanpickup = false;
  let thumbnail: any = "assets/images/img_placeholder_uploading.png";

  // DOM Refs
  let imgImput: any;
  // let childFirstNameInput: any;
  // let childLastNameInput: any;
  // let childAge: any;
  // let childFemale: any;
  // let childMale: any;
  // let parentPFN: any;
  // let parentPLN: any;
  // let allowThirdYes: any;
  // let allowThirdNo: any;

  onMount(() => {
    imgImput = document.getElementById("img-input");
    // childFirstNameInput = document.getElementById("child_first_name");
    // childLastNameInput = document.getElementById("child_last_name");
    // childAge = document.getElementById("child_age");
    // childFemale = document.getElementsByClassName("child_f");
    // childMale = document.getElementsByClassName("child_f");
    // parentPFN = document.getElementsByClassName("guardian_first_name");
    // parentPLN = document.getElementsByClassName("guardian_last_name");
    // parentPhone = document.getElementById("guardian_phone_number");
    // allowThirdYes = document.getElementsByClassName("allow_third_yes");
    // allowThirdNo = document.getElementsByClassName("allow_third_yes");
    // allowThirdNo = document.getElementById("guardian_first_name");
    // allowThirdNo = document.getElementById("guardian_last_name");
  });

  const handleThumbnail = async (e) => {
    console.log(e);
    const reader = new FileReader();
    reader.onloadend = () => {
      thumbnail = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
</script>

<form class="card" method="POST" action="/kids/register">
  <h3 class="h3">About the Child</h3>
  <div class="input-field">
    <input
      id="child_first_name"
      type="text"
      name="first_name"
      maxLength={100}
      placeholder="first name"
    />
  </div>
  <div class="input-field">
    <input
      id="child_last_name"
      type="text"
      name="last_name"
      maxLength={100}
      placeholder="last name"
    />
  </div>
  <div class="input-field">
    <input
      id="child_age"
      type="text"
      name="age"
      maxLength={3}
      placeholder="age"
    />
  </div>

  <p>Gender</p>
  <div class="input-field radio">
    <div class="input-radio">
      <p>male</p>
      <input
        type="radio"
        id="gender"
        class="gender_m"
        name="gender"
        value="female"
      />
    </div>
    <div class="input-radio">
      <p>female</p>
      <input
        type="radio"
        id="gender"
        class="gender_f"
        name="gender"
        value="male"
      />
    </div>
  </div>

  <div class="spacer" />

  <h3 class="h3">About the Parent</h3>
  <div class="input-field">
    <input
      type="text"
      id="guardian_first_name"
      name="guardian_first_name"
      maxLength={100}
      placeholder="first name"
    />
  </div>
  <div class="input-field">
    <input
      type="text"
      id="guardian_last_name"
      name="guardian_last_name"
      maxLength={100}
      placeholder="last name"
    />
  </div>
  <div class="input-field">
    <input
      type="text"
      name="guardian_phone_number"
      maxLength={12}
      placeholder="phone number"
    />
  </div>

  <p>can someone else pick up your child?</p>
  <div class="input-field radio">
    <div class="input-radio" on:click={() => (thirdpartycanpickup = false)}>
      <p>no</p>
      <input
        type="radio"
        id="allow_third_party_pick_up"
        class="allow_third_no"
        name="allow_third_party_pick_up"
        value="no"
      />
    </div>
    <div class="input-radio" on:click={() => (thirdpartycanpickup = true)}>
      <p>yes</p>
      <input
        type="radio"
        class="allow_third_yes"
        id="allow_third_party_pick_up"
        name="allow_third_party_pick_up"
        value="yes"
      />
    </div>
  </div>

  {#if thirdpartycanpickup === true}
    <div class="spacer" />
    <h3 class="h3">who else can pick up?</h3>
    <div class="input-field">
      <input
        type="text"
        name="second_guardian_first_name"
        maxLength={100}
        placeholder="first name"
      />
    </div>
    <div class="input-field">
      <input
        type="text"
        name="second_guardian_last_name"
        maxLength={100}
        placeholder="last name"
      />
    </div>
  {/if}

  <div class="image-wrapper">
    <img
      src={thumbnail}
      alt="child thumb"
      class="photo-preview"
      on:click={() => imgImput.click()}
    />
  </div>

  <!------------- hidden inputs ------------>
  <input
    type="file"
    id="img-input"
    accept="image/*"
    on:change={handleThumbnail}
    name="original_image"
  />

  <input type="hidden" value={thumbnail} />
</form>

<style>
  .spacer {
    height: 2rem;
    width: 100%;
  }

  .card {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 90vw;
    margin: auto;
    max-width: 60rem;
    height: 90vh;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid white;
    border-radius: 2em;
  }
  .h3 {
    color: #257cc4;
    font-size: 3rem;
    font-family: var(--fourth-font);
    margin-bottom: 2rem;
  }

  .input-field {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-field input,
  .input-field input::placeholder {
    font-family: var(--fourth-font);
    padding: 1rem 2rem;
    display: block;
    background-color: #257cc4;
    margin-bottom: 1rem;
    border-radius: 2em;
    width: 100%;
    color: white;
  }
  .input-field input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .input-radio {
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .input-field.radio {
    width: 90%;
    justify-content: flex-start;
  }

  .input-field.radio div {
    width: 50%;
  }

  .input-field.radio p,
  p {
    font-size: 2rem;
    font-family: var(--fourth-font);
    display: inline-block;
    width: auto;
    margin: 0 2rem 0 0;
  }

  p {
    width: 90%;
    margin: auto;
  }

  .input-field.radio .input-radio {
    margin-right: 2rem;
  }

  .input-radio input {
    margin-top: 1rem;
    width: 4rem;
    height: 4rem;
  }

  .image-wrapper {
    margin: auto;
    width: 90%;
  }

  .image-wrapper img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: aliceblue;
    cursor: pointer;
  }

  #img-input {
    display: none;
  }
</style>
