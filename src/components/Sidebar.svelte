<script>
  import LinkSidebar from './links/Sidebar.svelte'
  import RestaurantSidebar from './restaurants/Sidebar.svelte'
  import ResourcesSidebar from './resources/Sidebar.svelte'
  import ResourcesLink from './resources/SidebarLink.svelte'
  export let route
</script>

{#if route === '/'}
  <LinkSidebar />
{:else if route === '/restaurants'}
  <RestaurantSidebar />
{:else if route === '/resources'}
  <ResourcesSidebar />
{:else}
  <ResourcesLink />
{/if}
