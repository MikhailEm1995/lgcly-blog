import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ArticleEntity } from './articles.entity';

@Injectable()
export class ArticlesService extends TypeOrmCrudService<ArticleEntity> {
  constructor(
    @InjectRepository(ArticleEntity)
    readonly repository: Repository<ArticleEntity>,
  ) {
    super(repository);
  }
}
