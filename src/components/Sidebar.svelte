<script>
  import LinkSidebar from './links/Sidebar.svelte'
  import RestaurantSidebar from './restaurants/Sidebar.svelte'
  import RestaurantLink from './restaurants/SidebarLink.svelte'
  import ResourcesLink from './resources/SidebarLink.svelte'
  export let route
</script>

{#if route === '/'}
  <LinkSidebar />
{:else if route === '/restaurants'}
  <RestaurantSidebar />
{:else if route === '/resources'}
  <RestaurantLink />
{:else}
  <ResourcesLink />
{/if}
