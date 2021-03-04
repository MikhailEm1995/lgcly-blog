import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { PostEntity } from './posts.entity';
import { PostsService } from './posts.service';

export const ROUTE = 'posts';

@ApiTags(ROUTE)
@Crud({
  model: {
    type: PostEntity,
  },
})
@Controller(ROUTE)
export class PostsController {
  constructor(public readonly service: PostsService) {}
}
