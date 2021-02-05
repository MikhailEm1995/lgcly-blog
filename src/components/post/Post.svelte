<script lang="ts">
  import { Link } from 'svelte-routing';
  import { onDestroy } from 'svelte';

  import Title, { TitleType } from '../title';
  import PostDate from '../post-date';
  import { TagType } from '../tag';
  import SearcheableParagraph from '../../containers/searcheable-paragraph';
  import TagsList from '../tags-list';
  import { search } from '../../entities/search';
  import { highlight } from '../../lib/highlight';

  export let href: string = '#';
  export let timestamp: number | null = null;
  export let tags: string[] = [];
  export let title: string = '';
  export let brief: string = '';

  let searchQuery: string = '';

  $: titleHtml = !searchQuery.length
    ? title
    : highlight(title, searchQuery);

  function getProps() {
    return {
      class: 'post__link',
      title: `Read the post. Go to ${window.location.host}${href}`,
    };
  }

  const unsubscribe = search.subscribe((state) => {
    searchQuery = state.query;
  });

  onDestroy(unsubscribe);
</script>

<div class="post">
  <Link to={href} getProps={getProps}>
    <div class="post__header">
      <Title type={TitleType.Secondary}>{@html titleHtml}</Title>
      {#if Number.isFinite(timestamp)}
        <PostDate timestamp={timestamp} />
      {/if}
    </div>
    <SearcheableParagraph text={brief} />
  </Link>
  <div class="post__footer">
    <TagsList tags={tags} defaultType={TagType.NoBorder} />
  </div>
</div>

<style>
  :global(.post__link) {
    text-decoration: none;
    color: unset;
  }

  :global(.post__header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  :global(.post__footer) {
    margin-top: 20px;
  }
</style>