<script lang="ts">
  import { onDestroy } from 'svelte';

  import { posts } from '../../entities/post';
  import type { IPost } from '../../entities/post'; 
  import Article from '../../components/article';

  const postId = location.pathname.split('/').slice(-1)[0];
  let post: IPost | null = null;

  const unsubscribe = posts.subscribe((posts) => {
    post = posts[postId];
  });

  onDestroy(unsubscribe);
</script>

{#if post !== null}
  <Article articleHref={post.articleHref} />
{/if}
