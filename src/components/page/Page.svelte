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
