<script lang="ts">
  // props
  export let text: string = "";
  export let type: string = "button";

  // svlete
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="btn-wrapper" on:click={() => dispatch("action")}>
  <!------------- button ----------------------->
  <button class="std-button button" {type}>
    <p class="std-gradient-text">{text}</p>
  </button>

  <!------------- svg arrow ----------------------->
  <div class="svg-wrapper">
    <svg viewBox="0 0 360 23" fill="none">
      <path
        d="M5.05737 11.8052C15.8539 11.8052 26.6505 11.8052 37.447 11.8052C46.2264 11.8052 54.6199 14.5048 63.1682 14.6631C79.0741 14.9577 94.9942 13.8239 110.8 15.8275C123.986 17.499 140.758 18.3589 153.457 14.4514C168.671 9.77022 182.26 6.74168 198.442 6.14234C233.438 4.84623 268.69 6.08942 303.709 6.08942C314.311 6.08942 324.914 6.08942 335.516 6.08942C338.642 6.08942 341.221 7.8294 344.196 7.99469C347.577 8.18255 351.033 8.94733 354.675 8.94733"
        stroke="url(#paint0_linear_156_9)"
        stroke-width="10"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_156_9"
          x1="-22"
          y1="16.9998"
          x2="422"
          y2="5.99987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#04FED1" />
          <stop offset="1" stop-color="#1400FF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>

<style>
  /* ------- button ---------- */
  .btn-wrapper {
    display: block;
    width: 100%;
    position: relative;
  }

  .btn-wrapper:hover {
    cursor: pointer;
  }

  .button {
    text-align: left;
    font: var(--secondary-font);
    background-color: transparent;
  }

  .btn-wrapper:hover .button,
  .btn-wrapper:hover .svg-wrapper {
    transform: translateX(1rem);
  }

  .button p {
    font: var(--secondary-font);
    font-weight: 700;
    padding-left: 1rem;
  }

  /* ------- svg line ---------- */
  .svg-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -2rem;
    left: 0;
  }

  .svg-wrapper svg {
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
  }
</style>
