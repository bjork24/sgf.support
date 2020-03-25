<script>
  import { onMount } from 'svelte'
  import resources from './data.yml'

  const local = resources.filter(f => f.local)
  const notLocal = resources.filter(f => !f.local)

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  a {
    color: var(--color-success);
  }
  a:visited {
    color: var(--color-primary);
  }
  ul {
    padding-left: 1.5rem;
  }
  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // COVID-19 resources</title>
</svelte:head>

<div>
  <h1>Local resources</h1>
  <ul>
    {#each local as { title, link }}
      <li>
        <a href={link} target="_blank">{title}</a>
      </li>
    {/each}
  </ul>
  <h1>National resources</h1>
  <ul>
    {#each notLocal as { title, link }}
      <li>
        <a href={link} target="_blank">{title}</a>
      </li>
    {/each}
  </ul>
</div>
