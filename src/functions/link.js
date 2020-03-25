const { grabIt } = require('grabity')
const linky = require('linky')

exports.handler = async (event, context) => {
  const url = event.path.replace(/\.netlify\/functions\/[^/]+\//, '').substr(1)
  try {
    const metadata = await grabIt(url)
    metadata.description = linky(metadata.description, { target: '_blank' })
    return {
      statusCode: 200,
      // headers: { 'Cache-Control': 'public, s-maxage=31536000' },
      headers: { 'Cache-Control': 'public, s-maxage=0' },
      body: JSON.stringify(metadata)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
