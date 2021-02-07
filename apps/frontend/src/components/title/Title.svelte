<script lang="ts">
  import { TitleType } from './constants';

  export let type: TitleType = TitleType.Primary;

  $: typeCssClass = {
    [TitleType.Primary]: 'title',
    [TitleType.Secondary]: 'title title--secondary',
  }[type];

  $: cssClass = $$restProps.class
    ? `${$$restProps.class} ${typeCssClass}`
    : typeCssClass;
</script>

{#if type === TitleType.Primary}
  <h1 {...$$restProps} class={cssClass}>
    <slot></slot>
  </h1>
{:else if type === TitleType.Secondary}
  <h2 {...$$restProps} class={cssClass}>
    <slot></slot>
  </h2>
{/if}

<style>
  :global(.title) {
    font: 900 48px/48px Roboto, sans-serif;
    letter-spacing: 1px;
  }

  :global(.title--secondary) {
    font-size: 38px;
    line-height: 38px;
    font-weight: bold;
  }
</style>