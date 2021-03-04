import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { IArticleEntity } from './types';

@Entity('articles')
export class ArticleEntity implements IArticleEntity {
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
  link: string;
}
