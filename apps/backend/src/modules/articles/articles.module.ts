import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleEntity } from './articles.entity';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  exports: [ArticlesService],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
