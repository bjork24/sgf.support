<script>
  import { link } from 'svelte-routing'
</script>

<style>
  a {
    display: block;
    text-decoration: none;
  }
  figure {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
    border-radius: 6px;
    overflow: hidden;
    height: 300px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    background-color: var(--color-success);
    background-image: url(/takeout.jpg);
    background-size: cover;
    background-position: bottom;
    background-blend-mode: luminosity;
  }
  h3 {
    color: var(--color-success);
    margin: 1.25rem 0 0.5rem;
  }
  p {
    color: var(--color5);
    font-size: 0.9rem;
    margin: 0;
  }
</style>

<a href="/restaurants" use:link>
  <figure />
  <h3>Springfield restaurants</h3>
  <p>
    Filterable list of restaurants to help you find and support local
    establishments
  </p>
</a>
