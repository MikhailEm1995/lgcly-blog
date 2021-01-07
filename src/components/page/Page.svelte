<script lang="ts">
  import { fade } from 'svelte/transition';
  import { circIn } from 'svelte/easing';
  
  const ANIMATION_PARAMS = {
    delay: 100,
    duration: 200,
    easing: circIn,
  };
</script>

<div class="page" transition:fade={ANIMATION_PARAMS}>
  <slot></slot>
</div>

<style>
  .page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>