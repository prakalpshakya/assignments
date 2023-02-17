const fs = require('fs')
const parse = require('xml-parser')

try {
  const xml = fs.readFileSync('./files/sample.xml', 'utf8')

  const obj = parse(xml)

  console.log(obj)
} catch (e) {
  if (e.code === 'ENOENT') {
    console.log('File not found!')
  } else {
    throw e
  }
}
