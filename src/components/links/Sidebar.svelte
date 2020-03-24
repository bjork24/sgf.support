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
  .sourcing {
    margin: 3rem 0 0;
    padding-top: 3rem;
    border-top: 1px solid var(--color-primary);
    font-size: 0.9rem;
  }
  .sourcing a {
    color: var(--color-success);
  }
</style>

<div class="resources">
  {#each sidebarResources as resource}
    <ResourceSidebarLink {resource} />
  {/each}
  <a href="/resources" use:link>More resources...</a>
</div>

<RestaurantSidebarLink />

<div class="sourcing">
  This site is unaffiliated and open sourced. For corrections and additions,
  please
  <a href="/contact" use:link>contact us</a>
  or create a
  <a href="https://github.com/bjork24/sgf.support/issues" target="_blank">
    Github issue.
  </a>
</div>
