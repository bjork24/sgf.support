const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])
const linky = require('linky')
const got = require('got')

exports.handler = async (event, context) => {
  const encodedUrl = event.path.replace(/\.netlify\/functions\/[^/]+\//, '').substr(1)
  const decodedUrl = decodeURIComponent(encodedUrl)
  const { body: html, url } = await got(decodedUrl)
  try {
    const metadata = await metascraper({ html, url })
    metadata.description = linky(metadata.description, { target: '_blank' })
    return {
      statusCode: 200,
      headers: { 'Cache-Control': 'public, s-maxage=31536000' },
      body: JSON.stringify(metadata)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
