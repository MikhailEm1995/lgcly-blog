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
    <Route path={Routes.Home}>
      <Page>
        <Home />
      </Page>
    </Route>
    <Route path={Routes.Contacts}>
      <Page>
        <Contacts />
      </Page>
    </Route>
    <Route path={Routes.Projects}>
      <Page>
        <Projects />
      </Page>
    </Route>
    <Route path={Routes.About}>
      <Page>
        <About />
      </Page>
    </Route>
    <Route path={Routes.Post}>
      <Page>
        <Article />
      </Page>
    </Route>
  </Layout>
</Router>
