import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TagEntity } from './tags.entity';

@Injectable()
export class TagsService extends TypeOrmCrudService<TagEntity> {
  constructor(
    @InjectRepository(TagEntity)
    readonly repository: Repository<TagEntity>,
  ) {
    super(repository);
  }
}
