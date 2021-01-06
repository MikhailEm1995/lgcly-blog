<script lang="ts">
  import cn from 'classnames';
  import { Link } from 'svelte-routing';

  export let href: string;
  export let title: string;

  function getProps({ isCurrent }) {
    const classList = cn(
      'header-link',
      {
        'header-link--active': isCurrent,
      }
    );

    return { 
      class: classList,
      title,
    };
  }
</script>

<Link to={href} getProps={getProps}>
  <slot></slot>
</Link>

<style>
  :global(.header-link) {
    font: 100 18px/18px 'Domine', serif;
    color: var(--color-link);
    text-decoration: none;
    transition: transform 0.3s ease-in;
  }

  :global(.header-link:hover) {
    transform: translateY(-4px);
  }

  :global(.header-link:active),
  :global(.header-link:visited) {
    color: var(--color-link);
  }

  :global(.header-link--active) {
    color: var(--color-link-active);
  }

  :global(.header-link--active:active),
  :global(.header-link--active:visited) {
    color: var(--color-link-active);
  }
</style>