<script>
  import { link } from 'svelte-routing'
  import resources from '../resources/data.yml'
  import ResourceSidebarLink from '../resources/SidebarLink.svelte'
  import RestaurantSidebarLink from '../restaurants/SidebarLink.svelte'

  const sidebarResources = resources.filter(r => r.sidebar)
</script>

<style>
  .resources {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
  .resources a {
    display: block;
    text-align: right;
    color: var(--color5);
  }
  .resources :global(.resource-button) {
    margin-bottom: 1rem;
  }
</style>

<div class="resources">
  {#each sidebarResources as resource}
    <ResourceSidebarLink {resource} />
  {/each}
  <a href="/resources" use:link>More resources...</a>
</div>

<RestaurantSidebarLink />
