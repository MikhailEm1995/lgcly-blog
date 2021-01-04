<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Header from './components/header/';
  import Home from './screens/home';
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