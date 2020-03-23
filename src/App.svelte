<script>
  import { Router, Route, link } from 'svelte-routing'
  import LinksList from './components/LinksList.svelte'
  import RestaurantList from './components/RestaurantList.svelte'
  import HotlineHeader from './components/HotlineHeader.svelte'
  import SiteNav from './components/SiteNav.svelte'
</script>

<style>
  main {
    padding: 2rem 1rem;
    display: flex;
    flex-flow: row-reverse;
  }
  aside {
    background-color: pink;
    flex-basis: 30%;
    min-width: 250px;
  }
  section {
    /* background-color: yellow; */
    flex-grow: 1;
    margin: 0 0 0 2rem;
    flex-basis: 70%;
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
      <Route path="/restaurants" component={RestaurantList} />
      <Route path="/" component={LinksList} />
    </section>
    <aside>
      <a href="/restaurants" use:link>Restaurants</a>
    </aside>
  </main>
</Router>
