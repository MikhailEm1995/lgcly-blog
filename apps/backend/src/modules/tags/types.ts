import { IPostEntity } from '../posts/types';

export interface ITagEntity {
  id: number;
  title: string;
  posts: IPostEntity[];
}
