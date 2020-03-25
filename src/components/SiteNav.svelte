<script>
  export let route = false
  import { link } from 'svelte-routing'
  import Icon from './ui/Icon.svelte'

  let menuActive = true
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
  button,
  ul {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color1);
    margin: 0;
    padding: 0;
  }
  button {
    display: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 40px;
    outline: none;
  }
  ul {
    display: inline-block;
    list-style-type: none;
  }
  li {
    display: inline-block;
    margin-left: 2rem;
    text-transform: uppercase;
  }
  li:first-child {
    margin: 0;
  }
  li .active {
    border-bottom: 2px solid var(--color4);
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
  @media (max-width: 750px) {
    ul {
      top: 100%;
      transform: translateY(0);
      text-align: right;
      background-color: var(--color5);
      padding-top: 1rem;
    }
    li {
      display: block;
      margin: 0;
    }
    li a {
      display: block;
      padding: 0.5rem 1rem;
      font-weight: bold;
    }
    li a.active {
      border: 0;
      color: var(--color4);
    }
    button {
      display: inline-block;
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
    {#if menuActive}
      <ul>
        <li>
          <a href="/" use:link class:active={route === '/'}>News</a>
        </li>
        <li>
          <a
            href="/restaurants"
            use:link
            class:active={route === '/restaurants'}>
            Restaurants
          </a>
        </li>
        <li>
          <a href="/resources" use:link class:active={route === '/resources'}>
            Resources
          </a>
        </li>
        <li>
          <a
            href="/about"
            use:link
            class:active={route === '/about' || route === '/contact'}>
            About
          </a>
        </li>
      </ul>
    {/if}
  </main>
</nav>
