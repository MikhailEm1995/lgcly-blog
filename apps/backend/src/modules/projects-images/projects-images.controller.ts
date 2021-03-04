import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { ProjectImageEntity } from './projects-images.entity';
import { ProjectsImagesService } from './projects-images.service';

export const ROUTE = 'projects-images';

@ApiTags(ROUTE)
@Crud({
  model: {
    type: ProjectImageEntity,
  },
})
@Controller(ROUTE)
export class ProjectsImagesController {
  constructor(public readonly service: ProjectsImagesService) {}
}
