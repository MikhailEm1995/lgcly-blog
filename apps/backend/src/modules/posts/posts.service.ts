import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostEntity } from './posts.entity';

@Injectable()
export class PostsService extends TypeOrmCrudService<PostEntity> {
  constructor(
    @InjectRepository(PostEntity)
    readonly repository: Repository<PostEntity>,
  ) {
    super(repository);
  }
}
