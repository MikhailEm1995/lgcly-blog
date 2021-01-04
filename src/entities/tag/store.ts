import { writable } from 'svelte/store';

import type { ITagsState } from './types';

let state: ITagsState = {};

export const store = writable(state);

store.update((newState: ITagsState) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
});
