<script>
  import Card from "../components/ui/Card.svelte";
</script>

<style>
  [hero] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  [grid] {
    flex-basis: 30%;
  }
  @media (max-width: 500px) {
    [grid] {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>
<div hero>
  <div grid>
    <Card pic="https://www.bjork.fr/IMG/jpg/bjork-1997-david-harrison-03b.jpg">
      What up world
    </Card>
  </div>
  <div grid>
    <Card pic="https://www.bjork.fr/IMG/jpg/bjork-1997-david-harrison-03b.jpg">
      What up world
    </Card>
  </div>
  <div grid>
    <Card pic="https://www.bjork.fr/IMG/jpg/bjork-1997-david-harrison-03b.jpg">
      What up world
    </Card>
  </div>
</div>
