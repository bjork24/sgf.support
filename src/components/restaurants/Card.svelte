<script>
  import Icon from '../ui/Icon.svelte'
  import { filters } from './filters.js'
  export let restaurant = false

  const {
    alcohol,
    curbside,
    delivery,
    driveThru,
    facebook,
    giftCard,
    info,
    instagram,
    name,
    onlineOrdering,
    phone,
    takeout,
    twitter,
    website
  } = restaurant

  function openLink() {
    window.open(website, '_blank')
  }

  let showInfo = false
  const toggleInfo = () => (showInfo = !showInfo)

  const filterInfo = filter => filters.filter(f => f.property === filter)[0]
</script>

<style>
  article {
    border-bottom: 1px solid var(--color2);
    padding: 1rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  article > :global(.icon) {
    position: absolute;
    top: 0.9rem;
    left: 0;
    cursor: pointer;
  }
  h1 {
    margin: 0;
    font-size: 1rem;
  }
  h1[linked] {
    cursor: pointer;
  }
  h1[linked] span {
    color: var(--color-success);
  }
  aside {
    margin-left: auto;
  }
  aside > :global(span) {
    margin: 0 0.25rem;
  }
  section {
    flex-basis: 100%;
    margin: 0.5rem 0 0;
  }
  section a {
    color: var(--color-success);
    text-decoration: none;
  }
</style>

<article on:click={toggleInfo}>
  <Icon icon={showInfo ? 'caret-down' : 'caret-right'} />
  {#if website}
    <h1 linked on:click|stopPropagation={openLink} title="Visit site">
      <span>{name}</span>
      <Icon icon="external-link" scale=".75" />
    </h1>
  {:else}
    <h1>{name}</h1>
  {/if}
  <aside>
    {#each filters as { property, icon, altText }}
      {#if restaurant[property]}
        <Icon {icon} title={altText} />
      {/if}
    {/each}
  </aside>
  {#if showInfo}
    <section>
      {#if info}
        <p>{info}</p>
      {/if}
      {#if phone}
        <p>
          <strong>Phone:</strong>
          <a href="tel:{phone}">{phone}</a>
        </p>
      {/if}
      {#if delivery}
        <p>
          <strong>Delivery available from:</strong>
          {delivery.join(', ')}
        </p>
      {/if}
    </section>
  {/if}
</article>
