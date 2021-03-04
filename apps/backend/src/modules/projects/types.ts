import { IPostEntity } from '../posts/types';
import { IProjectImageEntity } from '../projects-images/types';

export interface IProjectEntity {
  id: number;
  post: IPostEntity;
  images: IProjectImageEntity[];
}
