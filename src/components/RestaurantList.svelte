<script>
  import RestaurantCard from './RestaurantCard.svelte'
  import restaurants from '../data/restaurants.yml'
</script>

<style>

</style>

<svelte:head>
  <title>SGF.SUPPORT // Local Restaurant List</title>
</svelte:head>

<div>
  {#each restaurants as restaurant, i (i + restaurant.name)}
    <RestaurantCard {restaurant} />
  {/each}
</div>
