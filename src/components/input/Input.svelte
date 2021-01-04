<script lang="ts">
  export let value: string = '';
  export let onChange: (() => void) | null = null;
  export let placeholder: string = '';
</script>

<input
  type="text"
  class="input"
  placeholder={placeholder}
  bind:value={value}
  on:input={onChange}
/>

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
</style>
