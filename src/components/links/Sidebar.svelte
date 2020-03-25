<script>
  import { link } from 'svelte-routing'

  import ResourceSidebarLink from '../resources/SidebarLink.svelte'
  import RestaurantSidebarLink from '../restaurants/SidebarLink.svelte'
</script>

<style>
  div :global(.resources + a) {
    margin-bottom: 3rem;
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

<div>
  <ResourceSidebarLink />
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
</div>
