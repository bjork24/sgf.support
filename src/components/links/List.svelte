<script>
  import { onMount } from 'svelte'
  import LinkCard from './Card.svelte'
  import links from './data.yml'

  const loadLinkChunk = 7
  let visibleLinks = loadLinkChunk
  let showLoadMoreButton = true
  const linksList = []

  links.forEach(({ date, links }) => {
    links.forEach(link => {
      linksList.push({ date, link })
    })
  })

  let visibleLinksArray = [...linksList].splice(0, visibleLinks)

  function loadMore() {
    visibleLinks += loadLinkChunk
    if (visibleLinks >= linksList.length) {
      showLoadMoreButton = false
      visibleLinks = linksList.length
    }
    visibleLinksArray = [...linksList].splice(0, visibleLinks)
  }

  onMount(() => {
    window.scrollTo(0, 0)
  })
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
  button {
    background-color: var(--color5);
    color: var(--color1);
    cursor: pointer;
    border: 0;
    margin: 1rem auto 0;
    padding: 1rem 1.25rem;
    border-radius: 6px;
    font-size: 1rem;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // COVID-19 info for Springfield, MO</title>
</svelte:head>

<div>
  {#each visibleLinksArray as link}
    <LinkCard obj={link} />
  {/each}
  {#if showLoadMoreButton}
    <button on:click={loadMore}>Load more</button>
  {/if}
</div>
