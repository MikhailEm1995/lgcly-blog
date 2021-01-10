<script lang="ts">
  import { onDestroy } from 'svelte';

  import { posts } from '../../entities/post';
  import type { IPost } from '../../entities/post'; 

  const postId = location.pathname.split('/').slice(-1)[0];
  let post: IPost | null = null;
  let articleHtml: string | null = null;

  const unsubscribe = posts.subscribe((posts) => {
    post = posts[postId];

    if (articleHtml === null) {
      fetchArticle();
    }
  });

  onDestroy(unsubscribe);

  async function fetchArticle() {
    const response = await fetch(post.articleHref);
    const html = await response.text();
    articleHtml = html;
  }
</script>

<div class="article">
  {#if post !== null && articleHtml !== null}
    <div class="article__text">{@html articleHtml}</div>
    <div class="article__sections"></div>
  {/if}
</div>

<style>
  .article {
    display: grid;
    grid: auto-flow / 6fr 2fr;
  }
</style>