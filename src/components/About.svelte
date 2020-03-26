<script>
  import { onMount } from 'svelte'
  export let route

  const contact = route === '/contact'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  a {
    color: var(--color-success);
  }
</style>

<svelte:head>
  <title>SGF.SUPPORT // About + Contact</title>
</svelte:head>

<p class:contact>
  <strong>SGF.SUPPORT</strong>
  is an unaffiliated, open-source website. The underlying code and data can be
  found on
  <a href="https://github.com/bjork24/sgf.support" target="_blank">Github</a>
  , and we encourage you to contribute however you see fit. If you're unfamiliar
  with Github, you can simply send us
  <a href="mailto:sgfsupport@fire.fundersclub.com">an email</a>
  and an issue will be automatically logged to the public repositories issue
  tracker. Sending an email guarantees your request will be seen, but it does
  not guarantee it will be fulfilled.
</p>

<p>
  We will make every effort to ensure the data provided on this site is as
  up-to-date and accurate as possible. These are unprecedented times we're
  living through, and we hope this site can offer an ad-free and
  simple-to-remember destination for information.
</p>

<p>
  <strong>Stay safe, stay hydrated, stay home</strong>
</p>

<h3>Credits</h3>

<p>
  The photo of the takeout bag was taken by
  <a href="https://www.facebook.com/417foodist/" target="_blank">417 Foodist</a>
</p>
