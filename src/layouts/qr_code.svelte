<script lang="ts">
  // dependencies
  import QRCodeStyling from "qr-code-styling";
  import Parragraph from "../chunks/typography/parragraph.svelte";
  import { onMount } from "svelte";
  import Secondary from "../chunks/buttons/secondary.svelte";
  import Primary from "../chunks/buttons/primary.svelte";

  //states
  export let childId: string;
  export let organizationId: string;
  export let width: number = 300;
  export let height: number = 300;
  export let dotGradientOne: string = "#000000";
  export let dotGradientTwo: string = "#000000";
  export let image: string = "";
  export let bkgColor: string = "#FFFFFF";
  export let dotType: any = "rounded";
  export let cornerSqColor: string = "rounded";
  export let cornerSqType: any = "rounded";
  export let cornerDotColor: string = "rounded";
  export let cornerDotType: any = "rounded";

  const qrCode = new QRCodeStyling({
    width,
    height,
    type: "svg",
    //data: `https://chikios.biblescholar.app/${organizationId}/${childId}`,
    data: `https://chikios.biblescholar.app/admin/${childId}`,
    image,
    dotsOptions: {
      // color: dotColor,
      gradient: {
        type: "linear",
        rotation: 70,
        colorStops: [
          { offset: 0, color: dotGradientOne },
          { offset: 1, color: dotGradientTwo },
        ],
      },
      type: dotType,
    },
    backgroundOptions: {
      color: bkgColor,
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5,
    },
    cornersSquareOptions: {
      color: cornerSqColor,
      type: cornerSqType,
    },
    cornersDotOptions: {
      color: cornerDotColor,
      type: cornerDotType,
    },
  });

  const downloadQRCode = () => {
    qrCode.download({
      extension: "png",
    });
  };
  onMount(() => {
    qrCode.append(document.getElementById("canvas"));
  });
</script>

<div class="qrcode-wrapper">
  <div class="qrcode std-flex-column" id="canvas" />
  <Parragraph
    font="f-secondary"
    text="Your child has been successfully registered. 
    Please show us this code at the entrance. 
    You can either take a screenshot of this page or download it by pressing the button below."
  />
  <div class="donload-btn-wrapper">
    <Secondary text="download" on:action={downloadQRCode} />
  </div>
  <div class="next-btn-wrapper">
    <Primary
      text="Done"
      on:action={() => {
        location.href = location.href;
      }}
    />
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  .qrcode {
    margin: var(--medium-spacing) auto;
  }
  .donload-btn-wrapper,
  .next-btn-wrapper {
    position: relative;
    width: 15rem;
    margin: var(--medium-spacing) auto;
  }
</style>
