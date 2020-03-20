<script>
  export let pic = false;
</script>

<style>
  [card] {
    width: 100%;
  }
  [photo] {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
  }
</style>

<div card>
  <div photo style="background-image: url({pic});" />
  <slot />
</div>
