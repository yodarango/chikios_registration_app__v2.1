<script lang="ts">
  export let title: string = "";
</script>

<div class="title-wrapper">
  {#if title}
    <h1>{title.toUpperCase()}</h1>
  {/if}

  <div class="svg-wrapper">
    <svg viewBox="0 0 276 13">
      <path
        d="M3 9.84148C49.0795 9.84148 95.0854 7.94865 141.138 6.68027C184.608 5.48299 228.464 6.59909 271.85 3.26175C279.217 2.69508 257.073 3.22499 249.685 3.22499C216.222 3.22499 182.76 3.22499 149.298 3.22499C115.269 3.22499 81.2036 3.04069 47.1834 3.96015C40.0086 4.15407 32.8123 4.40673 25.7166 5.57752C23.8476 5.88591 22.6842 6.03683 21.5262 7.19488"
        stroke="url(#paint0_linear_132_110)"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"
      />
      <defs>
        <linearGradient
          id="paint0_linear_132_110"
          x1="22.5"
          y1="5.99992"
          x2="292.5"
          y2="14.4999"
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
  .title-wrapper {
    width: 100%;
    font: var(--primary-font);
  }

  .title-wrapper h1 {
    text-align: center;
    font-size: 4rem;
    margin: 0 auto;
  }

  .svg-wrapper {
    width: 100%;
  }
  .svg-wrapper svg {
    width: 50%;
    margin: auto;
    display: block;
  }
</style>
