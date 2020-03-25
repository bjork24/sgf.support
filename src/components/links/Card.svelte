<script>
  import { onMount } from 'svelte'
  export let obj = false

  const { date, link } = obj

  let article = false

  onMount(async () => {
    const res = await fetch(
      '/.netlify/functions/link/' + encodeURIComponent(link)
    )
    article = await res.json()
    const matches = link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
    article.domain = matches && matches[1].toLowerCase().replace('www.', '')
  })

  function openLink() {
    window.open(link, '_blank')
  }
</script>

<style>
  article {
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #eee;
    padding: 1.5rem;
    overflow: hidden;
    color: var(--color-info);
    position: relative;
    padding-right: calc(40% + 1rem);
  }
  p :global(a) {
    color: var(--color-success);
  }
  figure {
    width: 40%;
    margin: 0;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @media (max-width: 500px) {
    article {
      padding-right: 1.5rem;
    }
    figure {
      display: none;
    }
  }
  h5 {
    font-size: 0.75rem;
    font-weight: normal;
    margin: 0 0 0.5rem;
    cursor: pointer;
    color: var(--color-success);
  }
  h2 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
  }
  p {
    font-size: 0.9rem;
  }
  small {
    color: var(--color2);
    font-size: 0.75rem;
  }
  .loading {
    padding-right: 1rem;
  }
  .loading a {
    display: block;
    text-align: center;
    color: var(--color-success);
  }
</style>

<article class:loading={!article}>
  {#if article}
    {#if article.image}
      <figure
        on:click={openLink}
        style="background-image: url({article.image});" />
    {/if}
    {#if article.publisher !== 'Twitter'}
      <h5 on:click={openLink}>{article.publisher}</h5>
    {/if}
    <h2 on:click={openLink}>{article.title}</h2>
    <p>
      {@html article.description}
    </p>
    <small>{date}</small>
  {:else}
    <a href={link} target="_blank">{link}</a>
  {/if}
</article>
