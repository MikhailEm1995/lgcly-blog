<script lang="ts">
  import { onMount } from 'svelte';
  import SimpleBar from 'simplebar';
  import 'simplebar/dist/simplebar.min.css';

  import Header from '../header';
  import Footer from '../footer';

  let container: HTMLElement;

  onMount(() => {
    const scrollBar = new SimpleBar(container, {
      autoHide: false,
    });

    window.__SCROLLBAR__ = scrollBar;

    return () => {
      scrollBar.unMount();
    };
  });
</script>

<div class="container" bind:this={container}>
  <div class="layout">
    <Header />
    <main class="layout__content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</div>

<style>
  .container {
    height: 100vh;
  }

  .layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 200px 0;
    box-sizing: border-box;
  }

  .layout__content {
    margin-top: 150px;
    position: relative;
  }
</style>