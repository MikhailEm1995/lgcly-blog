<script lang="ts">
  import { onDestroy } from 'svelte';
  import { get } from 'svelte/store';

  import Tag, { TagType } from '../../components/tag';
  import { tags, getters as tagGetters } from '../../entities/tag';
  import type { ITag } from '../../entities/tag';
  import {
    search,
    getters as searchGetters, 
    setters as searchSetters,
  } from '../../entities/search';

  export let id: string | null = null;
  export let defaultType: TagType = TagType.Empty;

  let tag: ITag | null = null;
  let isSearched = false;
  $: type = isSearched ? TagType.Filled : defaultType;
  const handleClick = () => {
    if (!id) {
      return;
    }

    const searchState = get(search);

    if (searchGetters.isTagSearched(searchState, id)) {
      searchSetters.removeTags([id]);
    } else {
      searchSetters.addTags([id]);
    }
  };

  const unsubscribeTags = tags.subscribe((state) => {
    tag = tagGetters.getTagById(state, id);
  });

  const unsubscribeSearch = search.subscribe((state) => {
    isSearched = searchGetters.isTagSearched(state, id);
  });

  onDestroy(() => {
    unsubscribeTags();
    unsubscribeSearch();
  });
</script>

{#if tag !== null}
  <Tag type={type} color={tag.color} onClick={handleClick}>{tag.value}</Tag>
{/if}
