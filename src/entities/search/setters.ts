import { get } from 'svelte/store';

import { queryStore, tagsStore } from './store';

export function setQuery(query: string) {
  queryStore.set(query);
}

export function addTags(newTags: string[]) {
  const tags = get(tagsStore);
  const newValue = tags.concat(newTags);

  tagsStore.set(newValue);
}

export function removeTags(tagsToRemove: string[]) {
  const tags = get(tagsStore);
  const newValue = tags.filter(tag => !tagsToRemove.includes(tag));

  tagsStore.set(newValue);
}

export function resetSearch() {
  queryStore.set('');
  tagsStore.set([]);
}
