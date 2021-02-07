<script lang="ts">
  import cn from 'classnames';
  import { TagType, DEFAULT_COLOR } from './constants';

  export let type: TagType = TagType.Empty;
  export let color: string = DEFAULT_COLOR;
  export let onClick: ((event: MouseEvent) => void) | null = null;

  $: cssVarStyles = `--color-tag: ${color}`;
  const typeColorMap = {
    [TagType.Empty]: '',
    [TagType.Filled]: 'filled',
    [TagType.NoBorder]: 'noborder',
  };
  $: tagClassList = cn(
    'tag',
    {
      [`tag--${typeColorMap[type]}`]: type !== TagType.Empty,
    },
  );
  $: textClassList = cn(
    'tag__text',
    {
      'tag__text--light': type === TagType.Filled,
    },
  );
</script>

<button class={tagClassList} on:click={onClick} style={cssVarStyles}>
  <span class={textClassList}>#<slot></slot></span>
</button>

<style>
  .tag {
    border: 1px solid var(--color-tag);
    padding: 5px 10px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    background: none;
  }

  .tag:focus {
    outline: none;
  }

  .tag--filled {
    background: var(--color-tag);
  }

  .tag--noborder {
    border-color: transparent;
  }

  .tag__text {
    font: normal 14px/14px Roboto, serif;
    color: var(--color-tag);
  }

  .tag__text--light {
    color: white;
  }
</style>