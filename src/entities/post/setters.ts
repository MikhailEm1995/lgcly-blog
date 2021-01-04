import type { IPostsState, IPost } from './types';
import { store } from './store';

export function addPosts(newTags: IPost[]) {
  const newState = {} as IPostsState;

  newTags.forEach((tag) => {
    newState[tag.id] = tag;
  });

  store.set(newState);
}
