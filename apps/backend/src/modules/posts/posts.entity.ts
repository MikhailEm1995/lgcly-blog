import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { ArticleEntity } from '../articles/articles.entity';
import { IArticleEntity } from '../articles/types';
import { TagEntity } from '../tags/tags.entity';
import { ITagEntity } from '../tags/types';

import { IPostEntity } from './types';

@Entity('posts')
export class PostEntity implements IPostEntity {
  @ApiProperty({
    readOnly: true,
    type: 'number',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    nullable: false,
    required: true,
  })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @ApiProperty({
    type: 'string',
  })
  @Column({ type: 'varchar' })
  brief: string;

  @ApiProperty({
    type: 'number',
    nullable: false,
    required: true,
  })
  @OneToOne(() => ArticleEntity)
  @JoinColumn({ name: 'articleId' })
  article: IArticleEntity;

  @ManyToMany(() => TagEntity, (tag) => tag.posts)
  @JoinTable({
    name: 'posts-tags',
    joinColumn: {
      name: 'postId',
    },
    inverseJoinColumn: {
      name: 'tagId',
    },
  })
  tags: ITagEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: number;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: number;
}
