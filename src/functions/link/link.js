const grabity = require('grabity')
const linky = require('linky')

exports.handler = async (event, context) => {
  try {
    const { url } = event.queryStringParameters
    const metadata = await grabity.grabIt(url)
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
