import { promises as fs } from 'fs';
import { join } from 'path';

import articles from './articles';

const tempDir = join(process.cwd(), 'src', 'dist');
const outputDir = join(process.cwd(), 'public', 'articles', 'posts');
const htmls = articles.map(([title, Article]) => ([
  title,
  Article.render().html,
]));

(async () => {
  await Promise.all(
    htmls.map(([title, html]) => fs.writeFile(
      join(outputDir, `${title}.html`),
      html,
      { encoding: 'utf-8' }
    ))
  );

  await fs.rmdir(tempDir, { recursive: true });
})();
