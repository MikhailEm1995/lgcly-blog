<script lang="ts">
  import Paragraph from '../../components/paragraph';
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

<Paragraph>{@html innerHtml}</Paragraph>
