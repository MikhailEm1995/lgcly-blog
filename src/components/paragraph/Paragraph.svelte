<script lang="ts">
  import { search } from '../../entities/search';

  export let text: string = '';

  let searchQuery: string = '';

  function getInnerHtml() {
    if (!searchQuery.length) {
      return text;
    }

    return text.replaceAll(
      searchQuery,
      `<span class="paragraph__queried-text">${searchQuery}</span>`,
    );
  }

  $: innerHtml = getInnerHtml();

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
    display: inline-block;
    padding: 0 4px;
    font-size: 16px;
    background-color: var(--color-highlight);
  }
</style>