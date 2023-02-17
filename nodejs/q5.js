const BitlyClient = require('bitly').BitlyClient
const bitly = new BitlyClient('71efd7a6b76fcd0bbfd5d26e4e0320fb77e5fb70')
const fs = require('fs')

const urlShortner = async (urlArray) => {
  for (const url of urlArray) {
    const shortenedUrl = await bitly.shorten(url)
    fs.appendFileSync('q5file.csv', `${shortenedUrl.link}`)
    fs.appendFileSync('q5file.csv', `,${shortenedUrl.long_url}\n`)
  }
}

const urlArray = [
  'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg',
  'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
]

urlShortner(urlArray)
  .then((data) => {
    console.log('Done!')
  })
  .catch((e) => {
    throw Error(e)
  })
