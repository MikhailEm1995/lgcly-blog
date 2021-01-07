import { writable } from 'svelte/store';

import type { IProjectsPicsState } from './types';

let state: IProjectsPicsState = {
  a: {
    id: 'a',
    pictures: ['https://picsum.photos/200', 'https://picsum.photos/200'],
  },
  b: {
    id: 'b',
    pictures: ['https://picsum.photos/200', 'https://picsum.photos/200'],
  },
};

export const store = writable(state);

store.update((newState: IProjectsPicsState) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
});
