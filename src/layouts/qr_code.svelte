<script lang="ts">
  // dependencies
  import QRCodeStyling from "qr-code-styling";

  //states
  export let childId: string = "";
  export let width: number = 300;
  export let height: number = 300;
  export let dotGradientOne: string = "#000000";
  export let dotGradientTwo: string = "#000000";
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
    data: `https://chikios.biblescholar.app/aljc/${childId}`,
    image: "",
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
      margin: 20,
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

  const onDownloadClick = () => {
    qrCode.download({
      extension: "png",
    });
  };
  qrCode.append(document.getElementById("canvas"));
</script>

<div class="qrcode" id="canvas" />

<!-- markup (zero or more items) goes here -->
<style>
  .qrcode {
    width: 20px;
    height: 200x;
    margin-top: 15px;
  }
</style>
