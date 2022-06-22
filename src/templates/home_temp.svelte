<script lang="ts">
  let headerTitle: string;
  let childId: string = "";

  // components
  import RegisterChild from "../layouts/forms/register_child.svelte";
  import Title from "../chunks/typography/title.svelte";
  import Biggest from "../chunks/images/biggest.svelte";
  import QrCode from "../layouts/qr_code.svelte";

  // states
  let currentSection: number = 0;

  // ----------- load the QR code
  const loadQRCode = (evt) => {
    childId = evt.detail.id;
    currentSection = 1;
  };
</script>

<!---------- image ------------->
<div class="image-wrapper">
  <Biggest src="/images/logo.png" alt="kidz quest logo" />
</div>
<!---------- title  ------------->
<Title title={headerTitle} />

<!---------- form  ------------->
{#if currentSection === 0}
  <RegisterChild
    bind:currentTitle={headerTitle}
    on:registration_success={loadQRCode}
  />
  <!------------ QR code ---------->
{:else if currentSection === 1 && childId}
  <QrCode
    {childId}
    organizationId={"ALJC"}
    image="images/logo.png"
    dotGradientOne="#04fed1"
    dotGradientTwo="#1400ff"
    cornerDotColor="#04fed1"
    cornerSqColor="#1400ff"
  />
{/if}

<style>
  /* ----- image wrapper ----- */
  .image-wrapper {
    width: 100%;
    max-width: 65rem;
  }
</style>
