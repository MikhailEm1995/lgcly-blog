<script lang="ts">
  import Post from '../../containers/post';
  import Tag from '../../containers/tag';

  import TagsList from '../../components/tags-list';
</script>

<div>
  <Post id="a" />
  <Post id="b" />
</div>
<aside>
  <TagsList tags={['a', 'b']} />
</aside>

<style></style>