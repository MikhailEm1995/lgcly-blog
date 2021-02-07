<script lang="ts">
  import cn from 'classnames';

  import { InputType } from './types';
  import { TEXTAREA_ROWS } from './constants';

  export let value: string = '';
  export let onChange: (() => void) | null = null;
  export let placeholder: string = '';
  export let type: InputType = InputType.Simple;

  $: classList = cn(
    'input',
    {
      ['input--textarea']: type === InputType.Textarea,
    },
  );
</script>

{#if type === InputType.Simple}
  <input
    type="text"
    class={classList}
    placeholder={placeholder}
    bind:value={value}
    on:input={onChange}
  />
{:else if type === InputType.Textarea}
  <textarea 
    class={classList}
    placeholder={placeholder}
    rows={TEXTAREA_ROWS}
    bind:value={value}
    on:input={onChange}
  ></textarea>
{/if}

<style>
  .input {
    display: block;
    height: 50px;
    width: 100%;
    border: 1px solid var(--color-primary);
    padding: 10px 20px;
    box-sizing: border-box;
    font: 100 16px/16px Domine, serif;
    color: var(--color-primary);
    letter-spacing: 1px;
  }

  .input::placeholder {
    color: #e1e1e1;
  }

  .input--textarea {
    height: 150px;
    padding: 20px;
    resize: none;
  }
</style>
