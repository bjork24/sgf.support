<script>
  import FaConciergeBell from 'svelte-icons/fa/FaConciergeBell.svelte'
  import FaCarSide from 'svelte-icons/fa/FaCarSide.svelte'
  import FaBeer from 'svelte-icons/fa/FaBeer.svelte'
  import FaStoreAlt from 'svelte-icons/fa/FaStoreAlt.svelte'
  import FaKeyboard from 'svelte-icons/fa/FaKeyboard.svelte'
  import FaUtensils from 'svelte-icons/fa/FaUtensils.svelte'
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  export let icon = false
  export let color = 'var(--color-primary)'
  export let scale = '1'
</script>

<style>
  span {
    width: 24px;
    height: 24px;
    display: inline-block;
  }
</style>

<span style="color: {color}; transform: scale({scale});">
  {#if icon === 'bell'}
    <FaConciergeBell />
  {:else if icon === 'car'}
    <FaCarSide />
  {:else if icon === 'beer'}
    <FaBeer />
  {:else if icon === 'store'}
    <FaStoreAlt />
  {:else if icon === 'keyboard'}
    <FaKeyboard />
  {:else if icon === 'utensils'}
    <FaUtensils />
  {:else if icon === 'menu'}
    <FaBars />
  {/if}
</span>
