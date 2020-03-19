<script>
  import { Router, Route, Link, navigate } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Public from "./pages/Public.svelte";
  import NotFound from "./pages/NotFound.svelte";
</script>

<style>

</style>

<main>

  <img src="./android-chrome-96x96.png" alt="" />

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
