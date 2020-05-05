<script>
  import { Router, Route, link } from 'svelte-routing'
  import LinkList from './components/links/List.svelte'
  import RestaurantList from './components/restaurants/List.svelte'
  import ResourcesList from './components/resources/List.svelte'
  import EventsList from './components/events/List.svelte'
  import NonprofitsList from './components/nonprofits/List.svelte'
  import RetailList from './components/retail/List.svelte'
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
    position: relative;
    z-index: 0;
  }
  aside {
    flex-basis: 30%;
    min-width: 250px;
    margin: 0 2rem 0 0;
  }
  section {
    flex-grow: 1;
    flex-basis: 70%;
  }
  :global(.callout) {
    margin-bottom: 2rem;
  }
  footer {
    background-color: var(--color5);
    color: var(--color1);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  footer a {
    color: var(--color1);
  }
  @media (max-width: 700px) {
    main {
      flex-flow: column;
    }
    aside {
      margin: 2rem 0 0 0;
    }
  }
</style>

<Router let:route>
  <HotlineHeader />
  <SiteNav {route} />
  <main>
    <section>
      <!-- <Callout /> //-->
      <Route path="/" component={LinkList} />
      <Route path="/restaurants" component={RestaurantList} />
      <Route path="/resources" component={ResourcesList} />
      <Route path="/events" component={EventsList} />
      <Route path="/nonprofits" component={NonprofitsList} />
      <Route path="/retail" component={RetailList} />
      <Route path="/about" component={About} {route} />
      <Route path="/contact" component={About} {route} />
    </section>
    <aside>
      <Sidebar {route} />
    </aside>
  </main>
  <footer>
    Help make the site better by
    <a href="https://github.com/bjork24/sgf.support" target="_blank">
      contributing on Github
    </a>
  </footer>
</Router>
