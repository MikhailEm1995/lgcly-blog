<script lang="ts">
  import ArticleTitle from '../article-title';
  import { TitleType } from '../title';

  export let id: string = Math.random().toString(16);
  export let title: string = 'Section without title';
</script>

<section class="article-section">
  <ArticleTitle data-heading={id} type={TitleType.Secondary}>{title}</ArticleTitle>
  <slot></slot>
</section>
