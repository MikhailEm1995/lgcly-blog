<script lang="ts">
  import { TitleType } from './constants';

  export let type: TitleType = TitleType.Primary;
</script>

{#if type === TitleType.Primary}
  <h1 class="title">
    <slot></slot>
  </h1>
{:else if type === TitleType.Secondary}
  <h2 class="title title--secondary">
    <slot></slot>
  </h2>
{/if}

<style>
  .title {
    font: 900 48px/48px Roboto, sans-serif;
    letter-spacing: 1px;
  }

  .title--secondary {
    font-size: 38px;
    line-height: 38px;
    font-weight: bold;
  }
</style>