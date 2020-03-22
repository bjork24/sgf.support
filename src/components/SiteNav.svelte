<script>
  import { link } from "svelte-routing";
  import Icon from "svelte-awesome";
  import { bars } from "svelte-awesome/icons";
</script>

<style>
  :root {
    --logo-width: 75px;
  }
  nav {
    background-color: var(--color5);
    padding: 0.5rem 1rem;
  }
  main {
    position: relative;
  }
  a {
    text-decoration: none;
    color: var(--color1);
  }
  a[logo] {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: var(--logo-width);
    border: 2px solid var(--color5);
  }
  a[logo] img {
    width: 100%;
  }
  a[title] {
    margin-left: var(--logo-width);
    display: inline-block;
  }
  a[title] h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  a[title] small {
    font-size: 0.75rem;
    display: block;
    margin-top: -0.25rem;
    font-style: italic;
  }
  button {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color1);
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    text-transform: uppercase;
  }
  li {
    display: inline-block;
  }
  li:not(:first-child) {
    margin-left: 0.5rem;
  }
  @media (max-width: 400px) {
    :root {
      --logo-width: 60px;
    }
    nav {
      padding: 0.5rem;
    }
    a[title] h1 {
      font-size: 1.25rem;
    }
    a[title] small {
      display: none;
    }
  }
</style>

<nav>
  <main>
    <a href="/" logo use:link>
      <img src="./android-chrome-96x96.png" alt="" />
    </a>
    <a href="/" title use:link>
      <h1>SGF.SUPPORT</h1>
      <small>COVID-19 info for Springfield, MO</small>
    </a>
    <button>
      <Icon data={bars} scale="1.5" />
    </button>
    <!-- <ul>
      <li>
        <a href="/" use:link>Resources</a>
      </li>
      <li>
        <a href="/public" use:link>Restaurants</a>
      </li>
    </ul> -->
  </main>
</nav>
