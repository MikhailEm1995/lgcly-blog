<script lang="ts">
  import HeaderLink from '../header-link';
</script>

<header class="header">
  <div>
    <a href="/" title="Go to Home page">
      <img width="72" height="88" src="/assets/images/logo.png" alt="logo" class="header__logo">
    </a>
  </div>
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
    height: 60px;
    grid: auto-flow / repeat(2, 1fr);
    gap: 20px;
    position: relative;
    overflow: visible;
  }

  .header__logo {
    position: absolute;
    top: 0;
    left: 0;
  }

  .navigation {
    height: 100%;
  }

  .navigation__list {
    display: grid;
    grid: auto-flow / repeat(4, 1fr);
    gap: 20px;
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .navigation__item {
    display: inline-flex;
    margin: 0;
    padding: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
