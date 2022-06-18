<script lang="ts">
  // svelte
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // props
  export let btnText: string = "";
  export let defaultImgSource: string = "";
  export let req: boolean = true;
  export let name: string;

  // components
  import Secondary from "../buttons/secondary.svelte";

  // states
  let blobImage: string = defaultImgSource;
  let alt: string = "content";
  let imageBlobInput: string = "";

  // DOM Elements
  let canvas: any;
  let imgInput: any;

  onMount(() => {
    canvas = document.getElementById("canvas");
    imgInput = document.getElementById("img-input");
  });

  // --------- hanlde image input submission
  const handleImageConvertion = async (e) => {
    /* convert the orignal image to blob to set it as preview */
    const blob = URL.createObjectURL(e.target.files[0]);
    blobImage = blob;
  };

  //----------- resize the image to 400 X 400
  const handleImageCompression = (e) => {
    const imagePath = e.path[0].currentSrc;
    // get the size of the blob image loaded on the img element
    // and resize it to the desired pixels
    const scaleSize = 400 / e.target.width;
    canvas.width = 400;
    canvas.height = e.target.height * scaleSize;

    // paint the image on the canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

    // convert the compressed canvas to base64
    const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpg");
    imageBlobInput = srcEncoded;

    // call the action function you want to trigger once the upload is done
    if (!imagePath.includes(defaultImgSource)) {
      dispatch("uploadDone");
    }
  };

  //  ----------- trigger the input upload
  const triggerUpload = () => {
    imgInput.click();
  };
</script>

<div class="input-wrapper">
  <div class="image-wrapper">
    <img
      src={blobImage}
      {alt}
      class="photo-preview"
      on:load={handleImageCompression}
    />
  </div>

  <div class="button-wrapper">
    <Secondary text={btnText} on:action={triggerUpload} />
  </div>

  <!------------- hidden inputs ------------>
  <input
    type="file"
    id="img-input"
    accept="image/*"
    on:change={handleImageConvertion}
    class="idden-input"
    name="original_image"
  />
  {#if req}
    <input
      type="text"
      class="hidden-input"
      value={imageBlobInput}
      {name}
      required
    />
  {:else}
    <input type="text" class="hidden-input" value={imageBlobInput} {name} />
  {/if}

  <canvas id="canvas" class="hidden" />
</div>

<style>
  .input-wrapper {
    width: 100%;
  }

  /* ------ image ------ */
  .image-wrapper {
    width: 100%;
    max-width: 30rem;
    height: 30rem;
    margin: auto;
  }

  .image-wrapper img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 0.5rem solid var(--primary-color);
    margin: auto;
  }

  /* -------- hidden inputs ------- */
  .hidden-input {
    display: none;
  }

  /* ------- button -------- */
  .button-wrapper {
    width: 15rem;
    margin: var(--medium-spacing) auto;
  }
</style>
