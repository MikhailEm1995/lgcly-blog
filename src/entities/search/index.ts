export { store as search } from './store';
export * as setters from './setters';
export * as getters from './getters';
export * from './types';

import subscribers from './subscribers';
import type { ISearchState } from './types';
import { store } from './store';

subscribers.forEach(
  (subscriber: (state: ISearchState) => void) => {
    store.subscribe(subscriber);
  }
);
