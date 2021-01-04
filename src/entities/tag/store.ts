import { writable } from 'svelte/store';

import type { ITagsState } from './types';

let state: ITagsState = {
  a: {
    id: 'a',
    value: 'tag',
    color: '#dd3',
  },
  b: {
    id: 'b',
    value: 'second',
    color: '#c75612',
  },
};

export const store = writable(state);

store.update((newState: ITagsState) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
});
