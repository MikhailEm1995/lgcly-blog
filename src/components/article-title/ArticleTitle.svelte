<script lang="ts">
  import Title, { TitleType } from '../title';

  export let type: TitleType = TitleType.Primary;

  $: cssClass = {
    [TitleType.Primary]: 'article-title-primary',
    [TitleType.Secondary]: 'article-title-secondary',
  }[type];
</script>

<Title type={type} class={cssClass} {...$$restProps}>
  <slot></slot>
</Title>
