<script lang="ts">
  import { MONTHS } from './constants';

  export let timestamp: number;

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
</script>

<span class="post-date">
  <span class="post-date__day">{day}</span>
  <span class="post-date__month-year">{month}, {year}</span>
</span>

<style>
  .post-date {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .post-date__day {
    font: 1000 24px/24px Domine, sans-serif;
    margin-bottom: 5px;
  }

  .post-date__month-year {
    font: 500 14px/14px Domine, sans-serif;
    text-align: right;
  }
</style>