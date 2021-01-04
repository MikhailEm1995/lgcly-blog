<script lang="ts">
  import uniq from 'lodash/uniq';

  import { search } from '../../entities/search';

  export let text: string = '';

  let searchQuery: string = '';
  const disallowedSymbols = /[^a-zA-Z0-9]+/g;

  function highlightSearchQuery() {
    const words = uniq(searchQuery.split(' '));
    const sanitizedWords = words
      .map(word => word.replaceAll(disallowedSymbols, ''))
      .filter(word => word);
    const re = new RegExp(sanitizedWords.join('|'), 'gi');
    return text.replaceAll(
      re,
      wrapTextWithHighlight('$&'),
    );
  }

  function wrapTextWithHighlight(text: string) {
    return `<span class="paragraph__queried-text">${text}</span>`;
  }

  $: innerHtml = !searchQuery.length 
    ? text
    : highlightSearchQuery();

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