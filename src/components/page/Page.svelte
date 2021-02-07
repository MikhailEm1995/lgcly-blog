<script lang="ts">
  import { fade } from 'svelte/transition';
  import { circIn } from 'svelte/easing';
  
  const ANIMATION_PARAMS = {
    delay: 10,
    duration: 200,
    easing: circIn,
  };
</script>

<div class="page" in:fade={ANIMATION_PARAMS}>
  <slot></slot>
</div>
