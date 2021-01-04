<script lang="ts">
  import Input from '../../components/input';
  import { setters as searchSetters } from '../../entities/search';

  let value: string = '';

  function handleChange() {
    searchSetters.setQuery(value);
  }
</script>

<Input
  placeholder="Search..."
  bind:value={value}
  onChange={handleChange}
/>
