<script lang="ts">
  import cn from 'classnames';

  export let href: string;
  export let active: boolean;
  export let title: string;

  const classList = cn(
    'link',
    {
      'link--active': active,
    }
  );
</script>

<a href={href} title={title} class={classList}>
  <slot></slot>
</a>

<style>
  .link {
    font: 100 18px/18px 'Domine', serif;
    color: var(--color-link);
    text-decoration: none;
  }

  .link:active,
  .link:visited {
    color: var(--color-link);
  }

  .link--active {
    color: var(--color-link-active);
  }

  .link--active:active,
  .link--active:visited {
    color: var(--color-link-active);
  }
</style>