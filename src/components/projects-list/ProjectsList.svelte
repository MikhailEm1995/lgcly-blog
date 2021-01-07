<script lang="ts">
  import Post from '../../containers/post';
  import { projectsPics } from '../../entities/project-pics';
  import type { IProjectsPicsState } from '../../entities/project-pics';

  export let projects: string[] = [];

  let pics: IProjectsPicsState = {};

  projectsPics.subscribe((state) => {
    pics = state;
  });
</script>

<ul class="projects-list">
  {#each projects as project}
    <li class="projects-list__item">
      <div class="projects-list__pics">
        <img src={pics[project][0]} alt="No pic" class="projects-list__img">
      </div>
      <div class="projects-list__post">
        <Post id={project} />
      </div>
    </li>
  {/each}
</ul>

<style>
  .projects-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .projects-list__item {
    display: grid;
    grid: auto-flow / repeat(8, 1fr);
  }
</style>