<script>
  export let top = false
</script>

<style>
  .notice {
    margin: 3rem 0 0;
    padding: 3rem 0 0;
    border: 0 solid var(--color5);
    border-top-width: 1px;
    font-size: 0.9rem;
  }
  .notice.top {
    margin: 0 0 3rem;
    padding: 0 0 3rem;
    border-top-width: 0;
    border-bottom-width: 1px;
  }
  .notice :global(a) {
    color: var(--color-success);
  }
</style>

<div class="notice" class:top>
  <slot />
</div>
