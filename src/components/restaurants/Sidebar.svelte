<script>
  import Icon from '../ui/Icon.svelte'
  import RestaurantSidebarButton from './SidebarButton.svelte'
  import { filters } from './filters.js'
</script>

<style>
  div {
    position: sticky;
    top: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  :global(button) {
    margin-bottom: 1rem;
  }
</style>

<div>
  <h1>Filters:</h1>
  {#each filters as filter}
    <RestaurantSidebarButton {filter} on:click />
  {/each}
</div>
