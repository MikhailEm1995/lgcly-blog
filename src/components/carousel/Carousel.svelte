<script lang="ts">
  import cn from 'classnames';

  export let urls: string[] = [];

  let activeUrl: string | null = urls.length ? urls[0] : null;

  $: getItemClassNames = (url: string) => {
    return cn('carousel__item', {
      ['carousel__item--active']: activeUrl === url,
    });
  }

  $: getButtonClassNames = (url: string) => {
    return cn('carousel__button', {
      ['carousel__button--active']: activeUrl === url,
    });
  }

  function handleButtonClick(url: string) {
    return () => {
      activeUrl = url;
    };
  }
</script>

<div class="carousel">
  <ul class="carousel__list">
    {#each urls as url}
      <li class={getItemClassNames(url)}>
        <img src={url} alt="No picture" class="carousel__image">
      </li>
    {/each}
  </ul>
  <ul class="carousel__dots">
    {#each urls as url}
      <li class="carousel__dot">
        <button
          class={getButtonClassNames(url)}
          on:click={handleButtonClick(url)}
        ></button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .carousel {
    height: 100%;
    width: 100%;
    position: relative;
    background: var(--color-primary);
  }

  .carousel__list {
    width: 100%;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .carousel__item {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  .carousel__item--active {
    z-index: 1;
  }

  .carousel__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .carousel__dots {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .carousel__dot {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-right: 10px;
  }

  .carousel__button {
    display: inline-block;
    width: 12px;
    height: 12px;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: white;
    cursor: pointer;
  }

  .carousel__button:focus {
    outline: none;
  }

  .carousel__button--active {
    background: var(--color-secondary);
  }
</style>
