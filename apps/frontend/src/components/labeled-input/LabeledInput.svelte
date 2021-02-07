<script lang="ts">
  import Input, { InputType } from '../input';

  export let placeholder: string = '';
  export let value: string = '';
  export let onChange: (() => void) | null = null;
  export let type: InputType = InputType.Simple;
</script>

<label class="label">
  <span class="label__text">
    <slot></slot>
  </span>
  <Input type={type} placeholder={placeholder} bind:value={value} onChange={onChange} />
</label>

<style>
  .label {
    display: block;
  }

  .label__text {
    font: 500 18px/36px Domine, serif;
    cursor: pointer;
  }
</style>