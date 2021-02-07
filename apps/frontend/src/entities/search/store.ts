import { writable, derived } from 'svelte/store';

export const queryStore = writable('');

export const tagsStore = writable<string[]>([]);

export const store = derived([queryStore, tagsStore], ([query, tags]) => ({
  query,
  tags,
}));
