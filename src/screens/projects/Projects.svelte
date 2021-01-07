<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  import ProjectsList from '../../components/projects-list';
</script>

<div class="projects" in:fade out:fly>
  <ProjectsList projects={['a', 'b']} />
</div>

<style>
  .projects {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
