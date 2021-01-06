<script lang="ts">
  import cn from 'classnames';

  export let disabled = false;
  export let loading = false;
  export let onClick: (() => void) | null = null;

  $: classList = cn(
    'button',
    {
      ['button__loading']: loading,
    },
  );
</script>

<button
  class={classList}
  disabled={disabled || loading}
  on:click|preventDefault={onClick}
>
  {#if loading}
    wait...
  {:else}
    <slot></slot>
  {/if}
</button>

<style>
  .button {
    display: inline-block;
    border: none;
    padding: 15px 20px;
    min-width: 250px;
    background-color: var(--color-button);
    font: 500 18px/18px Domine, sans-serif;
    color: white;
    cursor: pointer;
  }

  .button:disabled {
    opacity: .7;
    cursor: not-allowed;
  }

  .button__loading,
  .button.button__loading:disabled {
    cursor: wait;
  }
</style>