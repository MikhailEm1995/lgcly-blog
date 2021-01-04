import type { ISearchState } from './types';

export function isTagSearched(state: ISearchState, id: string) {
  return state.tags.includes(id);
}
