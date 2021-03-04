import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { TagEntity } from './tags.entity';
import { TagsService } from './tags.service';

export const ROUTE = 'tags';

@ApiTags(ROUTE)
@Crud({
  model: {
    type: TagEntity,
  },
})
@Controller(ROUTE)
export class TagsController {
  constructor(public readonly service: TagsService) {}
}
