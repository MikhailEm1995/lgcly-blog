import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { ProjectEntity } from './projects.entity';
import { ProjectsService } from './projects.service';

export const ROUTE = 'projects';

@ApiTags(ROUTE)
@Crud({
  model: {
    type: ProjectEntity,
  },
})
@Controller(ROUTE)
export class ProjectsController {
  constructor(public readonly service: ProjectsService) {}
}
