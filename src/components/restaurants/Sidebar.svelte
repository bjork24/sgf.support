<script>
  import Icon from '../ui/Icon.svelte'
  import { link } from 'svelte-routing'
  import RestaurantSidebarButton from './SidebarButton.svelte'
  import { filters } from './filters.js'
</script>

<style>
  .sources {
    margin: 0 0 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--color-primary);
    font-size: 0.9rem;
  }
  .sources a {
    color: var(--color-success);
  }
  .filters {
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

<div class="sources">
  Restaurant information is being sourced from
  <a
    href="https://docs.google.com/document/d/1gK9HD_oUu9QMAmMDlM6oZFXfxrhw0roiD31bta9-sZ4/edit?fbclid=IwAR3m8_WdMjjDWestMxMVxewy-cEcWrGsvws1_UiAfCjD6mPciVetjl-lgYg"
    target="_blank">
    this fantastic spreadsheet
  </a>
  . If you find inaccurate information, please
  <a href="/contact" use:link>contact us</a>
  or create a
  <a href="https://github.com/bjork24/sgf.support/issues" target="_blank">
    Github issue.
  </a>
</div>

<div class="filters">
  <h1>Filters:</h1>
  {#each filters as filter}
    <RestaurantSidebarButton {filter} on:click />
  {/each}
</div>
