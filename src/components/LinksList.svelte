<script>
  import LinkCard from './LinkCard.svelte'
  import { days } from '../data/links.yml'
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div :global(article) {
    /* flex-basis: calc(50% - 1rem); */
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // COVID-19 info for Springfield, MO</title>
</svelte:head>

<div>
  {#each days as { header, links }, i (i)}
    {#each links as link, i (header + 'link' + i)}
      <LinkCard {link} date={header} />
    {/each}
  {/each}
</div>
