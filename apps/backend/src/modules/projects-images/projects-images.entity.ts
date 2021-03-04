import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { ProjectEntity } from '../projects/projects.entity';
import { IProjectEntity } from '../projects/types';

import { IProjectImageEntity } from './types';

@Entity('projects-images')
export class ProjectImageEntity implements IProjectImageEntity {
  @ApiProperty({
    type: 'number',
    readOnly: true,
  })
  @PrimaryColumn()
  id: number;

  @ApiProperty({
    type: 'number',
    required: true,
    nullable: false,
  })
  @ManyToOne(() => ProjectEntity, (project) => project.images)
  project: IProjectEntity;

  @ApiProperty({
    type: 'string',
    required: true,
    nullable: false,
  })
  @Column({ type: 'varchar' })
  link: string;
}
