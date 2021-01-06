<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Layout from './components/layout/';
  import Home from './screens/home';
  import Contacts from './screens/contacts';
  import { Routes } from './constants/urls';

  let url = Routes.Home;
</script>

<Router url={url}>
  <Layout>
    <Route path={Routes.Home}>
      <Home />
    </Route>
    <Route path={Routes.Contacts}>
      <Contacts />
    </Route>
  </Layout>
</Router>
