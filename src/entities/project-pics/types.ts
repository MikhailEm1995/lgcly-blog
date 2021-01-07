export interface IProjectPics {
  id: string;
  pictures: string[];
}

export interface IProjectsPicsState {
  [id: string]: IProjectPics;
}
