<script>
  import RestaurantCard from './Card.svelte'
  import { activeFilters, restaurants } from './store.js'
</script>

<style>
  div > :global(article:last-child) {
    border-bottom-width: 0;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // Local Restaurant List</title>
</svelte:head>

<div>
  {#each $restaurants as restaurant, i (i + restaurant.name)}
    <RestaurantCard {restaurant} />
  {/each}
</div>
