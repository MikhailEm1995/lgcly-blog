import type { ISearchState } from './types';

export function isTagSearched(state: ISearchState, id: string) {
  return state.tags.includes(id);
}

export function getSearchQuery(state: ISearchState) {
  return state.query;
}
