<script>
  import { onMount } from 'svelte'
  import LinkCard from './Card.svelte'
  import { days } from './data.yml'

  onMount(() => {
    window.scrollTo(0, 0)
  })

  function makeCacheToken(header, idx) {
    const dateToken = header
      .toLowerCase()
      .replace(',', '')
      .split(' ')
      .join('-')
    return dateToken + idx
  }
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div :global(article) {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // COVID-19 info for Springfield, MO</title>
</svelte:head>

<div>
  {#each days as { header, links }, i (i)}
    {#each links as link, idx (header + 'link' + idx)}
      <LinkCard {link} date={header} />
    {/each}
  {/each}
</div>
