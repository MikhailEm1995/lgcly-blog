import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { PostEntity } from '../posts/posts.entity';
import { IPostEntity } from '../posts/types';
import { ProjectImageEntity } from '../projects-images/projects-images.entity';
import { IProjectImageEntity } from '../projects-images/types';

import { IProjectEntity } from './types';

@Entity('projects')
export class ProjectEntity implements IProjectEntity {
  @ApiProperty({
    type: 'number',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'number',
    nullable: false,
    required: true,
  })
  @OneToOne(() => PostEntity)
  @JoinColumn()
  post: IPostEntity;

  @OneToMany(() => ProjectImageEntity, (projectImage) => projectImage.project)
  images: IProjectImageEntity[];
}
