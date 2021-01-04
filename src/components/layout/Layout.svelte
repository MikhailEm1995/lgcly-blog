<script lang="ts">
  import Header from '../header';
</script>

<div class="layout">
  <Header />
  <main class="layout__content">
    <slot></slot>
  </main>
</div>

<style>
  .layout {
    padding: 30px 200px 0;
  }

  .layout__content {
    margin-top: 150px;
  }
</style>