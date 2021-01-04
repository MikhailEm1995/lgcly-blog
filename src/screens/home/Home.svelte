<script lang="ts">
  import TagsList from '../../components/tags-list';
  import PostsList from '../../components/posts-list';
  import Search from '../../containers/search';
</script>

<div class="home">
  <div class="home__posts">
    <PostsList posts={['a', 'b']} />
  </div>
  <aside class="home__aside">
    <Search />
    <div class="home__tags">
      <span class="home__tags-title">Tags</span>
      <TagsList tags={['a', 'b']} />
    </div>
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

  .home__tags {
    margin-top: 50px;
  }

  .home__tags-title {
    display: block;
    margin-bottom: 20px;
    font: 400 18px/18px Roboto, sans-serif;
    color: var(--color-primary);
  }
</style>