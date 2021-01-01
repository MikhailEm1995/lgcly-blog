<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Header from './components/header/Header.svelte';
  import Home from './screens/home/Home.svelte';
  import { Routes } from './constants/urls';

  let url = Routes.Home;
</script>

<div class="app">
  <Router url={url}>
    <Header />
    <main>
      <Route path={Routes.Home}>
        <Home />
      </Route>
    </main>
  </Router>
</div>

<style>
  .app {
    margin: 30px 200px 0;
  }
</style>