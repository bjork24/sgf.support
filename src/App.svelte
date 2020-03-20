<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Public from "./pages/Public.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import HotlineHeader from "./components/HotlineHeader.svelte";
  import SiteNav from "./components/SiteNav.svelte";
</script>

<style>
  main {
    padding: 2rem 1rem;
  }
</style>

<HotlineHeader />
<SiteNav />
<main>

  <Router>
    <Route path="/public" component={Public} />
    <Route path="/" component={Home} />
  </Router>

</main>
