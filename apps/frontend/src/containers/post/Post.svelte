<script lang="ts">
  import { onDestroy } from 'svelte';

  import Post from '../../components/post';
  import { Routes } from '../../constants/urls';
  import { posts, getters } from '../../entities/post';
  import type { IPost } from '../../entities/post';
  
  export let id: string | null = null;

  const href = Routes.Post.replace(':id', id);
  let post: IPost | null = null

  const unsubscribe = posts.subscribe((state) => {
    post = getters.getPostById(state, id);
  });

  onDestroy(unsubscribe);
</script>

{#if post !== null}
  <Post
    href={href}
    timestamp={post.timestamp}
    title={post.title}
    brief={post.brief}
    tags={post.tags}
  />
{/if}