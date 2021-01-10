import { writable } from 'svelte/store';

import type { IPostsState } from './types';

let state: IPostsState = {
  a: {
    id: 'a',
    title: 'Lorem Ipsum',
    brief: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    timestamp: Date.now(),
    tags: ['a'],
    articleHref: '/articles/posts/first.html',
  },
  b: {
    id: 'b',
    title: 'Lorem Ipsum',
    brief: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    timestamp: Date.now(),
    tags: ['b'],
    articleHref: '/articles/posts/first.html',
  },
};

export const store = writable(state);

store.update((newState: IPostsState) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
});
