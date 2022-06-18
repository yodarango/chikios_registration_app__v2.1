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
    <svg viewBox="0 0 191 35">
      <path
        d="M4 22C14.7653 21.8634 25.1907 20.1563 35.8958 19.5041C54.9562 18.3428 73.8543 17.0602 93.0115 17.0081C122.189 16.9288 150.937 17.427 180 18.6721"
        stroke="url(#paint0_linear_132_202)"
        stroke-width="7"
        stroke-linecap="round"
        fill="none"
      />
      <path
        d="M164.688 4C171.006 9.97648 178.82 15.2879 186.002 20.1614C188.733 22.0144 181.609 22.9838 180.927 23.1282C174.088 24.5758 168.588 27.2683 162.58 30.7014"
        stroke="url(#paint1_linear_132_202)"
        stroke-width="7"
        stroke-linecap="round"
        fill="none"
      />
      <defs>
        <linearGradient
          id="paint0_linear_132_202"
          x1="4"
          y1="22"
          x2="242.5"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#04FED1" />
          <stop offset="1" stop-color="#1400FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_132_202"
          x1="183.5"
          y1="19"
          x2="156.5"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#04FED1" />
          <stop offset="1" stop-color="#0E5CEE" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>

<style>
  /* ------- button ---------- */
  .btn-wrapper {
    display: block;
    width: 10rem;
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
    bottom: -1.2rem;
    left: 0;
  }

  .svg-wrapper svg {
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
  }
</style>
