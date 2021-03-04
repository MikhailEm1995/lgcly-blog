import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostEntity } from './posts.entity';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  exports: [PostsService],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
