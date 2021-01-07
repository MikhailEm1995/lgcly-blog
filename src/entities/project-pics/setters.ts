import type { IProjectsPicsState, IProjectPics } from './types';
import { store } from './store';

export function addProjectsPics(newTags: IProjectPics[]) {
  const newState = {} as IProjectsPicsState;

  newTags.forEach((tag) => {
    newState[tag.id] = tag;
  });

  store.set(newState);
}
