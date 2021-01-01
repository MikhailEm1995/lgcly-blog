<script lang="ts">
  import cn from 'classnames';
  import { TagTypes, DEFAULT_COLOR } from './constants';

  export let type: TagTypes = TagTypes.Empty;
  export let color: string = DEFAULT_COLOR;
  export let onClick: () => void = () => {};

  $: cssVarStyles = `--color-tag: ${color}`;

  const typeColorMap = {
    [TagTypes.Empty]: '',
    [TagTypes.Filled]: 'filled',
    [TagTypes.NoBorder]: 'noborder',
  };
  const tagClassList = cn(
    'tag',
    {
      [`tag--${typeColorMap[type]}`]: type !== TagTypes.Empty,
    },
  );
  const textClassList = cn(
    'tag__text',
    {
      'tag__text--light': type === TagTypes.Filled,
    },
  );
</script>

<button class={tagClassList} onClick={onClick} style={cssVarStyles}>
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

  .tag--filled {
    background: var(--color-tag);
  }

  .tag--noborder {
    border: none;
  }

  .tag__text {
    font: normal 14px/14px Roboto, serif;
    color: var(--color-tag);
  }

  .tag__text--light {
    color: white;
  }
</style>