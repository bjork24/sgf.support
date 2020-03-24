<script>
  import { onMount } from 'svelte'
  import RestaurantCard from './Card.svelte'
  import { restaurants } from './store.js'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  div > :global(article:last-child) {
    border-bottom-width: 0;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // Local Restaurant List</title>
</svelte:head>

<div>
  <h1>
    {$restaurants.length} local {$restaurants.length > 1 || !$restaurants.length ? 'restaurants' : 'restaurant'}
  </h1>
  {#each $restaurants as restaurant, i (i + restaurant.name)}
    <RestaurantCard {restaurant} />
  {/each}
</div>
