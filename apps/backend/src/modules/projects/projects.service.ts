import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectEntity } from './projects.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<ProjectEntity> {
  constructor(
    @InjectRepository(ProjectEntity)
    readonly repository: Repository<ProjectEntity>,
  ) {
    super(repository);
  }
}
