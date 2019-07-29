var fs = require('fs')
module.exports = {
  findDataAll(callback) {
    fs.readFile('./data/base.json', (error, data) => {
      if (error) {
        callback(error)
      } else {
        let temp = JSON.parse(data.toString())
        callback(null, temp)
      }
    })
  }
}