<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Page from './components/page';
  import Layout from './components/layout/';
  import Home from './screens/home';
  import Contacts from './screens/contacts';
  import Projects from './screens/projects';
  import Article from './screens/article';
  import About from './screens/about';
  import { Routes } from './constants/urls';

  let url = Routes.Home;
</script>

<Router url={url}>
  <Layout>
    <Page>
      <Route path={Routes.Home}>
        <Home />
      </Route>
      <Route path={Routes.Contacts}>
        <Contacts />
      </Route>
      <Route path={Routes.Projects}>
        <Projects />
      </Route>
      <Route path={Routes.About}>
        <About />
      </Route>
      <Route path={Routes.Post}>
        <Article />
      </Route>
    </Page>
  </Layout>
</Router>
