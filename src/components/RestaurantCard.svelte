<script>
  import Icon from './ui/Icon.svelte'
  export let restaurant = false

  const {
    name,
    driveThru,
    curbside,
    takeout,
    delivery,
    onlineOrdering,
    alcohol,
    phone,
    website,
    facebook,
    twitter,
    instagram,
    info
  } = restaurant

  function openLink() {
    window.open(link, '_blank')
  }
</script>

<style>

</style>

<article>
  <h1>{name}</h1>
  {#if delivery}
    <Icon icon="car" />
  {/if}
  {#if curbside}
    <Icon icon="bell" />
  {/if}
  {#if driveThru}
    <Icon icon="store" />
  {/if}
  {#if onlineOrdering}
    <Icon icon="keyboard" />
  {/if}
  {#if takeout}
    <Icon icon="utensils" />
  {/if}
  {#if alcohol}
    <Icon icon="beer" />
  {/if}
</article>
