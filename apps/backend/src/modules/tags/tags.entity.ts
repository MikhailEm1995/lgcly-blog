import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { PostEntity } from '../posts/posts.entity';
import { IPostEntity } from '../posts/types';

import { ITagEntity } from './types';

@Entity('tags')
export class TagEntity implements ITagEntity {
  @ApiProperty({
    readOnly: true,
    type: 'number',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    required: true,
    nullable: false,
  })
  @Column({ type: 'varchar' })
  title: string;

  @ManyToMany(() => PostEntity, (post) => post.tags)
  posts: IPostEntity[];
}
