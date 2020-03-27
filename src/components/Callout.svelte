<script>
  import Icon from './ui/Icon.svelte'

  const infoLink =
    'https://www.springfieldmo.gov/DocumentCenter/View/48364/COVID-19-Stay-At-Home-Order-FAQ'

  const startDate = 'March 26'
  const endDate = 'April 25'

  const start = new Date(startDate + ', 2020')
  const end = new Date(endDate + ', 2020')
  const today = new Date()
  const daysLeft = (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
  const daysElapsed = Math.floor(
    (today.getTime() - start.getTime()) / (1000 * 3600 * 24)
  )
  const percentage = Math.floor((daysElapsed / daysLeft) * 100)
</script>

<style>
  a {
    display: block;
    text-decoration: none;
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: var(--color4);
    padding: 1rem 1.5rem;
    color: var(--color1);
    font-size: 0.9rem;
  }
  header {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }
  header span :global(.icon) {
    position: relative;
    top: -0.25rem;
    margin-right: 0.25rem;
  }
  header small {
    margin-left: auto;
    font-size: 0.75rem;
    font-weight: normal;
    align-self: flex-end;
  }
  p {
    margin: 0;
    display: flex;
  }
  strong:last-child {
    margin-left: auto;
  }
  .progress {
    width: 100%;
    height: 1rem;
    margin: 0.5rem 0;
    border: 1px solid var(--color1);
  }
  .fill {
    height: 100%;
    background-color: var(--color1);
    width: 0%;
  }
</style>

<a href={infoLink} class="callout" target="_blank">
  <header>
    <span>
      <Icon icon="bullhorn" color="var(--color1)" />
      Stay-at-home order
    </span>
    <small>29 days left</small>
  </header>
  <div class="progress">
    <div class="fill" style="width: {percentage}%;" />
  </div>
  <p>
    <strong>{startDate}</strong>
    <strong>{endDate}</strong>
  </p>
</a>
