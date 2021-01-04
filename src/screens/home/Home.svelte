<script lang="ts">
  import TagsList from '../../components/tags-list';
  import PostsList from '../../components/posts-list';
</script>

<div class="home">
  <div class="home__posts">
    <PostsList posts={['a', 'b']} />
  </div>
  <aside class="home__aside">
    <TagsList tags={['a', 'b']} />
  </aside>
</div>

<style>
  .home {
    display: grid;
    grid: auto-flow / 6fr 2fr;
  }

  .home__posts {
    display: grid;
    grid: auto-flow / 5fr 1fr;
  }

  .home__aside {
    position: sticky;
    top: 0;
  }
</style>