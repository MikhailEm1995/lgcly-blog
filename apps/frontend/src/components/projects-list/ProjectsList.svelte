<script lang="ts">
  import { onDestroy } from 'svelte';

  import Post from '../../containers/post';
  import { projectsPics } from '../../entities/project-pics';
  import type { IProjectsPicsState } from '../../entities/project-pics';
  import Carousel from '../../components/carousel';

  export let projects: string[] = [];

  let pics: IProjectsPicsState = {};

  const unsubscribe = projectsPics.subscribe((state) => {
    pics = state;
  });

  onDestroy(unsubscribe);
</script>

<ul class="projects-list">
  {#each projects as project}
    <li class="projects-list__item">
      <div class="projects-list__pics">
        <Carousel urls={pics[project].pictures} />
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
    grid: auto-flow / 1fr 1fr;
    margin-bottom: 40px;
  }

  .projects-list__pics {
    height: 300px;
    padding-right: 40px;
  }

  .projects-list__post {
    transition: transform 0.3s ease-in;
  }

  .projects-list__post:hover {
    transform: translateX(1%);
  }
</style>