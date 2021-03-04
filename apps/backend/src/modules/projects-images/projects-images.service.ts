import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectImageEntity } from './projects-images.entity';

@Injectable()
export class ProjectsImagesService extends TypeOrmCrudService<ProjectImageEntity> {
  constructor(
    @InjectRepository(ProjectImageEntity)
    readonly repository: Repository<ProjectImageEntity>,
  ) {
    super(repository);
  }
}
