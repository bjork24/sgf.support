<script>
  import { Router, Route, Link, navigate } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Public from "./pages/Public.svelte";
  import NotFound from "./pages/NotFound.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    color: #2c3e50;
  }
  :global(a, a:visited) {
    color: #ff3e00;
  }
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul > * + * {
    margin-left: 1rem;
  }
  .center {
    text-align: center;
  }
</style>

<main>

  <h1>sgf.support</h1>

  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/public">Public</Link>
      </li>
    </ul>
  </Router>

  <Router>
    <Route path="/public" component={Public} />
    <Route path="/" component={Home} />
  </Router>

</main>
