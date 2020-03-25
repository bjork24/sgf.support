<script>
  import { link } from 'svelte-routing'
  import RestaurantSidebarLink from '../restaurants/SidebarLink.svelte'
  import SidebarNotice from '../SidebarNotice.svelte'
</script>

<style>
  div :global(.resources + a) {
    margin-bottom: 3rem;
  }
</style>

<div>
  <RestaurantSidebarLink />

  <SidebarNotice>
    This site is unaffiliated and open sourced. For corrections and additions,
    please
    <a href="/contact" use:link>contact us</a>
    or create a
    <a href="https://github.com/bjork24/sgf.support/issues" target="_blank">
      Github issue.
    </a>
  </SidebarNotice>
</div>
