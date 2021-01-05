<script lang="ts">
  import { highlight } from '../../lib/highlight';
  import { search } from '../../entities/search';

  export let text: string = '';

  let searchQuery: string = '';

  $: innerHtml = !searchQuery.length 
    ? text
    : highlight(text, searchQuery);

  search.subscribe((state) => {
    searchQuery = state.query;
  });
</script>

<p class="paragraph">{@html innerHtml}</p>

<style>
  .paragraph {
    font: 18px/24px Roboto, sans-serif;
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
  }

  :global(.paragraph__queried-text) {
    background-color: var(--color-highlight);
  }
</style>