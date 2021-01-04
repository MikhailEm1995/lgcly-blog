<script lang="ts">
  import Post from '../../containers/post';

  export let posts: string[] = [];
</script>

<ul class="posts-list">
  {#each posts as post}
    <li class="posts-list__item">
      <Post id={post} />
    </li>
  {/each}
</ul>

<style>
  .posts-list {
    margin: 0;
    padding: 0;
  }

  .posts-list__item {
    display: block;
    margin-bottom: 40px;
  }
</style>
