import { writable } from 'svelte/store';

import type { IPostsState } from './types';

let state: IPostsState = {};

export const store = writable(state);

store.update((newState: IPostsState) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
});
