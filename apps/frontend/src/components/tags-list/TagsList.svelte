<script lang="ts">
  import Tag from '../../containers/tag';
  import { TagType } from '../tag';

  export let tags: string[] = [];
  export let defaultType: TagType = TagType.Empty;
</script>

<ul class="tags-list">
  {#each tags as tag}
    <li class="tags-list__item">
      <Tag id={tag} defaultType={defaultType} />
    </li>
  {/each}
</ul>

<style>
  .tags-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tags-list__item {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-right: 10px;
  }
</style>