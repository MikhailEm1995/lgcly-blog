import type { IPostsState, IPost } from './types';

export function getPostById(state: IPostsState, id: string): IPost | null {
  return state.hasOwnProperty(id) ? state[id] : null;
}
