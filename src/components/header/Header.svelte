<script lang="ts">
  import HeaderLink from '../header-link';
</script>

<header class="header">
  <a href="/" title="Go to Home page">
    <img width="72" height="88" src="/assets/images/logo.png" alt="logo">
  </a>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <HeaderLink href="/" title="Go to Home page">Home</HeaderLink>
      </li>
      <li class="navigation__item">
        <HeaderLink href="/about" title="Go to About page">About</HeaderLink>
      </li>
      <li class="navigation__item">
        <HeaderLink href="/projects" title="Go to Projects page">Projects</HeaderLink>
      </li>
      <li class="navigation__item">
        <HeaderLink href="/contacts" title="Go to Contacts page">Contacts</HeaderLink>
      </li>
    </ul>
  </nav>
</header>

<style>
  .header {
    display: grid;
    grid: auto-flow / repeat(2, 1fr);
    gap: 20px;
  }

  .navigation__list {
    display: grid;
    grid: auto-flow / repeat(4, 1fr);
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navigation__item {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
</style>
