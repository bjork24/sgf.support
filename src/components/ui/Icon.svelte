<script>
  import FaConciergeBell from 'svelte-icons/fa/FaConciergeBell.svelte'
  import FaCarSide from 'svelte-icons/fa/FaCarSide.svelte'
  import FaBeer from 'svelte-icons/fa/FaBeer.svelte'
  import FaStoreAlt from 'svelte-icons/fa/FaStoreAlt.svelte'
  import FaKeyboard from 'svelte-icons/fa/FaKeyboard.svelte'
  import FaUtensils from 'svelte-icons/fa/FaUtensils.svelte'
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  import FaCaretRight from 'svelte-icons/fa/FaCaretRight.svelte'
  import FaCaretDown from 'svelte-icons/fa/FaCaretDown.svelte'
  import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte'
  import FaGift from 'svelte-icons/fa/FaGift.svelte'
  import FaCheckSquare from 'svelte-icons/fa/FaCheckSquare.svelte'
  import FaRegSquare from 'svelte-icons/fa/FaRegSquare.svelte'
  export let icon = false
  export let color = 'var(--color-primary)'
  export let scale = '1'
  export let title = false
</script>

<style>
  span {
    width: 16px;
    height: 16px;
    display: inline-block;
  }
</style>

<span
  class="icon"
  style="color: {color}; transform: scale({scale});"
  {title}
  on:click>
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
  {:else if icon === 'caret-down'}
    <FaCaretDown />
  {:else if icon === 'caret-right'}
    <FaCaretRight />
  {:else if icon === 'external-link'}
    <FaExternalLinkAlt />
  {:else if icon === 'gift'}
    <FaGift />
  {:else if icon === 'checkbox-on'}
    <FaCheckSquare />
  {:else if icon === 'checkbox-off'}
    <FaRegSquare />
  {/if}

</span>
