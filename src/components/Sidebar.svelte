<script>
  import LinkSidebar from './links/Sidebar.svelte'
  import RestaurantSidebar from './restaurants/Sidebar.svelte'
  export let route
</script>

{#if route === '/'}
  <LinkSidebar />
{:else if route === '/restaurants'}
  <RestaurantSidebar />
{/if}
