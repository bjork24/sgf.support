<script>
  export let route = false
  import { link } from 'svelte-routing'
  import Icon from './ui/Icon.svelte'

  let menuActive = false
  function toggleMenu() {
    menuActive = !menuActive
  }
</script>

<style>
  :root {
    --logo-width: 75px;
  }
  nav {
    background-color: var(--color5);
    padding: 0 1rem;
    position: relative;
  }
  main {
    position: relative;
    padding: 0.5rem 0;
    z-index: 10;
  }
  footer {
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    padding: 0 1rem;
    background-color: white;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid var(--color5);
  }
  footer main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: calc(var(--max-page-width) - 10rem);
  }
  a {
    text-decoration: none;
  }
  nav > main a {
    color: var(--color1);
  }
  footer a {
    color: var(--color-primary);
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  footer a:hover {
    color: var(--color-success);
  }
  footer a.active {
    color: var(--color5);
    font-weight: bold;
  }
  [logo] {
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
  [logo] img {
    width: 100%;
  }
  [title] {
    margin-left: calc(var(--logo-width) + 0.75rem);
    display: inline-block;
  }
  [title] h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  [title] small {
    font-size: 0.75rem;
    display: block;
    margin-top: -0.25rem;
    font-style: italic;
  }
  button {
    display: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color1);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 40px;
    outline: none;
  }
  @media (max-width: 400px) {
    :root {
      --logo-width: 60px;
    }
    nav {
      padding: 0.25rem;
    }
    [title] {
      margin-left: calc(var(--logo-width) + 0.5rem);
    }
    [title] h1 {
      font-size: 1.25rem;
    }
    [title] small {
      display: none;
    }
    button {
      right: 0.25rem;
    }
  }
  @media (max-width: 700px) {
    button {
      display: inline-block;
    }
    footer {
      display: none;
      position: absolute;
      right: 0;
      top: 100%;
      padding: 0;
      margin: 0;
    }
    footer.active {
      display: inline-block;
    }
    footer main {
      flex-direction: column;
      align-items: flex-end;
      padding: 0.5rem 1.5rem;
      margin: 0;
      width: 100%;
    }
    footer main a {
      padding: 0.5rem 0;
      white-space: nowrap;
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
    <button on:click={toggleMenu}>
      <Icon icon="menu" color="var(--color1)" scale="1.5" />
    </button>
  </main>
  <footer class:active={menuActive}>
    <main on:click={toggleMenu}>
      <a href="/" class:active={route === '/'} use:link>News</a>
      <a href="/restaurants" use:link class:active={route === '/restaurants'}>
        Restaurants
      </a>
      <a href="/non-profits" use:link class:active={route === '/non-profits'}>
        Charities & Non-profits
      </a>
      <a href="/retail" use:link class:active={route === '/retail'}>Retail</a>
      <a href="/resources" use:link class:active={route === '/resources'}>
        Resources
      </a>
      <a href="/events" use:link class:active={route === '/events'}>Events</a>
      <a
        href="/about"
        use:link
        class:active={route === '/about' || route === '/contact'}>
        About
      </a>
    </main>
  </footer>
</nav>
