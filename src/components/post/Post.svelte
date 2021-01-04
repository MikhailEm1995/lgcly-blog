<script lang="ts">
  import { Link } from 'svelte-routing';

  import Title, { TitleType } from '../title';
  import PostDate from '../post-date';
  import { TagType } from '../tag';
  import Paragraph from '../paragraph';
  import TagsList from '../tags-list';

  export let href: string = '#';
  export let timestamp: number | null = null;
  export let tags: string[] = [];
  export let title: string = '';
  export let brief: string = '';

  function getProps() {
    return {
      class: 'post__link',
      title: `Read the post. Go to ${window.location.host}${href}`,
    };
  }
</script>

<div class="post">
  <Link to={href} getProps={getProps}>
    <div class="post__header">
      <Title type={TitleType.Secondary}>{title}</Title>
      {#if Number.isFinite(timestamp)}
        <PostDate timestamp={timestamp} />
      {/if}
    </div>
    <div class="post__brief">
      <Paragraph text={brief} />
    </div>
  </Link>
  <div class="post__footer">
    <TagsList tags={tags} defaultType={TagType.NoBorder} />
  </div>
</div>

<style>
  :global(.post) {
    padding-bottom: 30px;
  }

  :global(.post):hover {
    box-shadow: 0 30px 39px -50px rgba(0, 0, 0, 0.3);
  }

  :global(.post__link) {
    text-decoration: none;
    color: unset;
  }

  :global(.post__header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(.post__brief) {}
</style>