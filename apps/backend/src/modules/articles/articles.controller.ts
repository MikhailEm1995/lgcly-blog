import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { ArticleEntity } from './articles.entity';
import { ArticlesService } from './articles.service';

export const ROUTE = 'articles';

@ApiTags(ROUTE)
@Crud({
  model: {
    type: ArticleEntity,
  },
})
@Controller(ROUTE)
export class ArticlesController {
  constructor(public readonly service: ArticlesService) {}
}
