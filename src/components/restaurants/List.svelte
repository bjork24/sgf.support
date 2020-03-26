<script>
  import { onMount } from 'svelte'
  import RestaurantCard from './Card.svelte'
  import { restaurants } from './store.js'

  onMount(() => {
    window.scrollTo(0, 0)
  })

  function jumpToFilter() {
    document.getElementById('filters').scrollIntoView()
  }
</script>

<style>
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  div {
    position: relative;
  }
  div > :global(article:last-child) {
    border-bottom-width: 0;
  }
  button {
    display: none;
    background-color: var(--color5);
    color: var(--color1);
    cursor: pointer;
    border: 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media (max-width: 700px) {
    button {
      display: inline-block;
    }
  }
  @media (max-width: 400px) {
    button {
      display: block;
      width: 100%;
      position: relative;
      margin-top: 1rem;
    }
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // Local Restaurant List</title>
</svelte:head>

<div>
  <h1>
    {$restaurants.length} local {$restaurants.length > 1 || !$restaurants.length ? 'restaurants' : 'restaurant'}
  </h1>
  <button on:click={jumpToFilter}>Show filters</button>
  {#each $restaurants as restaurant, i (i + restaurant.name)}
    <RestaurantCard {restaurant} />
  {/each}
</div>
