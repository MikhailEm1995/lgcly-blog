export interface ITag {
  id: string;
  value: string;
  color: string;
}

export interface ITagsState {
  [key: string]: ITag;
}