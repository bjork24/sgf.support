<script>
  import { link } from 'svelte-routing'
  import resources from './data.yml'
  const sidebarResources = resources.filter(r => r.sidebar)
</script>

<style>
  a {
    display: block;
    color: var(--color5);
    text-decoration: none;
  }
  .resources a {
    background-color: var(--color3);
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    border: 1px solid transparent;
  }
  .resources a:hover {
    border: 1px solid var(--color-primary);
  }
  .resources + a {
    text-align: right;
  }
</style>

<div class="resources">
  {#each sidebarResources as resource}
    <a href={resource.link} target="_blank">{resource.sidebar}</a>
  {/each}
</div>
<a href="/resources" use:link>More resources...</a>
