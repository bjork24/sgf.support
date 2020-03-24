<script>
  import serializer from 'form-serialize'
  function submitForm(e) {
    console.log(serializer(e.target))
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: serializer(e.target)
    })
      .then(data => console.log(data))
      .catch(error => alert(error))
  }
</script>

<form netlify on:submit|preventDefault={submitForm}>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="action" value="/restaurants" />
  <p>
    <label>
      Name
      <input type="text" name="name" value="dan chilton" />
    </label>
  </p>
  <p>
    <label>
      Email
      <input type="email" name="email" value="dan@dan.com" />
    </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
