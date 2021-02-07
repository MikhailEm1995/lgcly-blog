import type { ITagsState, ITag } from './types';
import { store } from './store';

export function addTags(newTags: ITag[]) {
  const newState = {} as ITagsState;

  newTags.forEach((tag) => {
    newState[tag.id] = tag;
  });

  store.set(newState);
}
