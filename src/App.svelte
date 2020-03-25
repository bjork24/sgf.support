<script>
  import { Router, Route, link } from 'svelte-routing'
  import LinkList from './components/links/List.svelte'
  import RestaurantList from './components/restaurants/List.svelte'
  import ResourcesList from './components/resources/List.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import HotlineHeader from './components/HotlineHeader.svelte'
  import SiteNav from './components/SiteNav.svelte'
  import Callout from './components/Callout.svelte'
  import About from './components/About.svelte'
</script>

<style>
  main {
    padding: 2rem 1rem;
    display: flex;
    flex-flow: row-reverse;
  }
  aside {
    flex-basis: 30%;
    min-width: 250px;
  }
  section {
    flex-grow: 1;
    margin: 0 0 0 2rem;
    flex-basis: 70%;
  }
  :global(.callout) {
    margin-bottom: 2rem;
  }
  @media (max-width: 700px) {
    main {
      flex-flow: column;
    }
    section {
      margin: 0 0 1rem 0;
    }
  }
</style>

<Router let:route>
  <HotlineHeader />
  <SiteNav {route} />
  <main>
    <section>
      <Callout />
      <Route path="/" component={LinkList} />
      <Route path="/restaurants" component={RestaurantList} />
      <Route path="/resources" component={ResourcesList} />
      <Route path="/about" component={About} {route} />
      <Route path="/contact" component={About} {route} />
    </section>
    <aside>
      <Sidebar {route} />
    </aside>
  </main>
</Router>
