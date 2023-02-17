const request = require('request')
const fs = require('fs')
const EventEmitter = require('events')
const eventEmmiter = new EventEmitter()

const func = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      throw Error('Unable to connect')
    }
    fs.writeFileSync('q3file.html', body)
  })
}

eventEmmiter.on('start', () => {
  func('http://www.google.com')
})

eventEmmiter.emit('start')
