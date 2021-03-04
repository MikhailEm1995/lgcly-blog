import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectImageEntity } from './projects-images.entity';
import { ProjectsImagesService } from './projects-images.service';
import { ProjectsImagesController } from './projects-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectImageEntity])],
  exports: [ProjectsImagesService],
  providers: [ProjectsImagesService],
  controllers: [ProjectsImagesController],
})
export class ProjectsImagesModule {}
