<script>
  export let resource
  const { title, link } = resource
</script>

<style>
  a {
    display: block;
    background-color: var(--color3);
    padding: 1rem;
    color: var(--color5);
    text-decoration: none;
    border-radius: 6px;
  }
</style>

<a href={link} target="_blank" class="resource-button">{title}</a>
