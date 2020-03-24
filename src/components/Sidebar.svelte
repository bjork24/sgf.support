<script>
  import LinkSidebar from './links/Sidebar.svelte'
  import RestaurantSidebar from './restaurants/Sidebar.svelte'
  export let route
  console.log('route = ' + route)
</script>

{#if route === '/' || route === '/contact'}
  <LinkSidebar />
{:else if route === '/restaurants'}
  <RestaurantSidebar />
{/if}
