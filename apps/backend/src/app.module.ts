import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesModule } from './modules/articles/articles.module';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProjectsImagesModule } from './modules/projects-images/projects-images.module';

import * as OrmConfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ArticlesModule,
    PostsModule,
    TagsModule,
    ProjectsModule,
    ProjectsImagesModule,
  ],
})
export class AppModule {}
