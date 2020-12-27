<script lang="ts">
  import HeaderLink from '../header-link/HeaderLink.svelte';
</script>

<header class="header">
  <a href="/" title="Go to Home page">
    <img width="72" height="88" src="/assets/images/logo.png" alt="logo">
  </a>
  <HeaderLink href="/" title="Go to Home page" active={true}>Home</HeaderLink>
  <HeaderLink href="/about" title="Go to About page">About</HeaderLink>
  <HeaderLink href="/projects" title="Go to Projects page">Projects</HeaderLink>
  <HeaderLink href="/contacts" title="Go to Contacts page">Contacts</HeaderLink>
</header>

<style>
  .header {
    display: grid;
    grid: auto-flow / 4fr repeat(4, 1fr);
    gap: 20px;
  }
</style>
