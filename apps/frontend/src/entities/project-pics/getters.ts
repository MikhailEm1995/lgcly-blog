import type { IProjectsPicsState, IProjectPics } from './types';

export function getProjectPicsById(
  state: IProjectsPicsState,
  id: string,
): IProjectPics | null {
  return state.hasOwnProperty(id) ? state[id] : null;
}