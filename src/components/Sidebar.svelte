<script>
  import LinkSidebar from './links/Sidebar.svelte'
  import RestaurantSidebar from './restaurants/Sidebar.svelte'
  import RestaurantLink from './restaurants/SidebarLink.svelte'
  export let route
  console.log('route = ' + route)
</script>

{#if route === '/'}
  <LinkSidebar />
{:else if route === '/restaurants'}
  <RestaurantSidebar />
{:else if route === '/about' || route === '/contact'}
  <RestaurantLink />
{/if}
