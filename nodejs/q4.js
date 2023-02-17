const fs = require('fs')

const getImage = async (url = '') => {
  try {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const parFolder = './images'
    let filePath = ''
    let imageIndex = 1

    fs.readdir(parFolder, (e, parFiles) => {
      if (parFiles.length === 0) {
        const dir = `${parFolder}/folder1`
        fs.mkdirSync(dir)
        imageIndex = 1
      } else {
        fs.readdir(
          `${parFolder}/${parFiles[parFiles.length - 1]}`,
          (e, files) => {
            if (files.length === 5) {
              const dir = `${parFolder}/folder${parFiles.length + 1}`
              fs.mkdirSync(dir)
              imageIndex = 1
            } else {
              imageIndex = files.length + 1
            }
          }
        )
      }

      filePath = `${parFolder}/${
        parFiles[parFiles.length - 1]
      }/image${imageIndex}.jpg`
      fs.createWriteStream(filePath).write(buffer)
    })
  } catch (e) {
    throw new Error(e)
  }
}

const saveImage = async (url) => {
  await getImage(url)
}

saveImage(
  'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg'
)
