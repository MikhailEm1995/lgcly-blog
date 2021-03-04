import { IArticleEntity } from '../articles/types';
import { ITagEntity } from '../tags/types';

export interface IPostEntity {
  id: number;
  title: string;
  brief: string;
  article: IArticleEntity;
  tags: ITagEntity[];
}
