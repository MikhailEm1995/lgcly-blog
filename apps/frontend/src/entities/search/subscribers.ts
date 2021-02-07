import isEmpty from 'lodash/isEmpty';
import { navigate } from 'svelte-routing';

import type { ISearchState } from './types';
import { Routes } from '../../constants/urls';

export function requestSearchResults(state: ISearchState) {
  // Do request search results and update appropriate stores
}

export function navigateToSearchPageOnSearch({ query, tags }: ISearchState) {
  if (isEmpty(query) && isEmpty(tags)) {
    return;
  }

  if (window.location.pathname === Routes.Home) {
    return;
  }

  navigate(Routes.Home);
}

export default [
  requestSearchResults,
  navigateToSearchPageOnSearch,
];
