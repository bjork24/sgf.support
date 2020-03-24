<script>
  import Icon from '../ui/Icon.svelte'
  import { activeFilters } from './store.js'
  export let filter = false

  $: active = $activeFilters.includes(filter.property)
  $: color = active ? 'var(--color1)' : 'var(--color-primary)'

  function toggleFilter() {
    if (active) {
      activeFilters.set($activeFilters.filter(f => f !== filter.property))
    } else {
      activeFilters.set([...$activeFilters, filter.property])
    }
  }
</script>

<style>
  button {
    width: 100%;
    display: flex;
    border: 1px solid var(--color2);
    border-radius: 5px;
    padding: 0.75rem 1rem;
    color: var(--color-primary);
    cursor: pointer;
    background: var(--color1);
    font-size: 0.8rem;
  }
  span {
    position: relative;
    bottom: -1px;
  }
  button:hover {
    background: #fff;
  }
  button.active {
    background: var(--color5);
    color: var(--color1);
  }
  button > :global(.icon:last-child) {
    margin-left: auto;
  }
  span {
    margin-left: 0.5rem;
  }
</style>

<button class:active on:click={toggleFilter}>
  <Icon icon={active ? 'checkbox-on' : 'checkbox-off'} {color} />
  <span>{filter.altText}</span>
  <Icon icon={filter.icon} title={filter.altText} {color} />
</button>
