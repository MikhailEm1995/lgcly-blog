import { writable } from 'svelte/store';

import type { IProjectsPicsState } from './types';

let state: IProjectsPicsState = {
  a: {
    id: 'a',
    pictures: ['https://picsum.photos/id/300/300', 'https://picsum.photos/id/301/300'],
  },
  b: {
    id: 'b',
    pictures: ['https://picsum.photos/id/300/300', 'https://picsum.photos/id/301/300'],
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
