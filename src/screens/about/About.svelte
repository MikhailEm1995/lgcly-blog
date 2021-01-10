<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';

  import Sections from '../../components/sections';
  import { getMaxScroll } from '../../lib/client';

  let articleHtml: string | null = null;
  let article: HTMLElement | null = null;
  let sections: HTMLElement | null = null;
  let headings: NodeListOf<Element> | null = null;
  let sectionsProps: {
    height: number;
    width: number;
    relativeTops: number[];
  } | null = null;
  let maxScroll: number | null = null;

  onMount(async () => {
    const response = await fetch('/articles/about.html');
    const html = await response.text();
    articleHtml = html;

    maxScroll = getMaxScroll();
  });

  afterUpdate(() => {
    if (article === null || headings !== null) {
      return;
    }

    headings = article.querySelectorAll('[data-heading]');

    const props: Partial<Exclude<typeof sectionsProps, null>> = {};
    const { height, width } = sections.getBoundingClientRect();
    const { top, height: articleHeight } = article.getBoundingClientRect();

    props.height = height;
    props.width = width / 2;
    props.relativeTops = Array.prototype.map.call(headings, (heading) => {
      const { top: headingTop } = heading.getBoundingClientRect();
      return (headingTop - top) / articleHeight;
    });

    sectionsProps = props as Exclude<typeof sectionsProps, null>;
  });

  $: getRelativeScroll = () => {
    if (maxScroll === null || maxScroll === 0) {
      maxScroll = getMaxScroll();
      return 0;
    }

    const { scrollY } = window;

    return scrollY / (maxScroll || 1);
  }

  function scrollTo(index: number) {
    const heading = headings[index];

    if (!heading) {
      return;
    }

    heading.scrollIntoView();
  }
</script>

<div class="about">
  {#if articleHtml !== null}
    <div class="about__text" bind:this={article}>{@html articleHtml}</div>
    <div class="about__sections" bind:this={sections}>
      {#if sectionsProps !== null}
        <Sections
          height={sectionsProps.height}
          width={sectionsProps.width}
          relativeTops={sectionsProps.relativeTops}
          getRelativeScroll={getRelativeScroll}
          onSectionClick={scrollTo}
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .about {
    display: grid;
    grid: auto-flow / 6fr 2fr;
  }

  .about__sections {
    display: grid;
    grid: auto-flow / 1fr 1fr;
    height: 50vh;
    direction: rtl;
    position: sticky;
    top: 100px;
  }
</style>