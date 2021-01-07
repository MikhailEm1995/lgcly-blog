<script lang="ts">
  import Header from '../header';
  import Footer from '../footer';
</script>

<div class="layout">
  <Header />
  <main class="layout__content">
    <slot></slot>
  </main>
  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 30px 200px 0;
    box-sizing: border-box;
  }

  .layout__content {
    margin-top: 150px;
    position: relative;
  }
</style>