<script>
  const formData = {
    name: 'Dan Chilton',
    email: 'dan.chilton@gmail.com',
    action: '/restaurants'
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function handleSubmit() {
    console.log(formData, encode({ 'form-name': 'contact', ...formData }))
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
  }
</script>

<form name="contact" on:submit|preventDefault={handleSubmit}>
  <p>
    <label>
      Name
      <input type="text" name="name" bind:value={formData.name} />
    </label>
  </p>
  <p>
    <label>
      Email
      <input type="email" name="email" bind:value={formData.email} />
    </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
