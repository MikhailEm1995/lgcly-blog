<p class="paragraph" {...$$restProps}>
  <slot></slot>
</p>

<style>
  :global(.paragraph) {
    font: 18px/28px Roboto, sans-serif;
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
  }

  :global(.paragraph__queried-text) {
    background-color: var(--color-highlight);
  }
</style>