<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import throttle from 'lodash/throttle';

  import { DPI } from '../../constants/device';
  import { Sections } from './utils';

  export let height: number = 0;
  export let width: number = 0;
  export let relativeTops: number[] = [];
  export let getRelativeScroll: () => number = () => 0;
  export let onSectionClick: ((index: number) => void) | null = null;

  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let sections: Sections | null = null;
  const THROTTLE_MS = 100;

  $: adjustedWidth = width * DPI;
  $: adjustedHeight = height * DPI;

  onMount(init);

  afterUpdate(init);

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  function init() {
    if (sections || !canvas) {
      return;
    }

    ctx = canvas.getContext('2d');
    sections = new Sections({
      ctx,
      width: adjustedWidth,
      height: adjustedHeight,
      relativeTops,
      getRelativeScroll,
    });
    sections.draw();
    window.addEventListener('scroll', handleScroll);
  }

  const handleScroll = throttle(
    function handleScroll() {
      sections.draw();
    },
    THROTTLE_MS,
  );

  function handleClick({ pageX, pageY }: MouseEvent) {
    const { left, top } = canvas.getBoundingClientRect();
    const index = sections.getSectionIndex({
      x: (pageX - left) * DPI,
      y: (pageY - top - window.scrollY) * DPI,
    });

    if (index === null) {
      return;
    }

    onSectionClick(index);
  }

  const handleMouseMove = throttle(
    function handleMouseMove({ pageX, pageY }: MouseEvent) {
      const { left, top } = canvas.getBoundingClientRect();
      const index = sections.getSectionIndex({
        x: (pageX - left) * DPI,
        y: (pageY - top - window.scrollY) * DPI,
      });

      if (index === null) {
        sections.draw();
        return;
      }

      sections.drawSectionsWithHighlight(index);
    },
    THROTTLE_MS,
  );

  function handleMouseOut() {
    sections.draw();
  }
</script>

<canvas
  class="sections"
  width={adjustedWidth}
  height={adjustedHeight}
  on:click={handleClick}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseOut}
  bind:this={canvas}
></canvas>

<style>
  .sections {
    width: 100%;
    cursor: pointer;
  }
</style>