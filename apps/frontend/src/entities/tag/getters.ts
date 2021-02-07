import type { ITag, ITagsState } from './types';

export function getTagById(state: ITagsState, id: string): ITag | null {
  return state.hasOwnProperty(id) ? state[id] : null;
}