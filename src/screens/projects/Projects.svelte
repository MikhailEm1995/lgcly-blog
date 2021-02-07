<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  import ProjectsList from '../../components/projects-list';
</script>

<div class="projects">
  <ProjectsList projects={['a', 'b']} />
</div>
