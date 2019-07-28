var express = require('express')


let serve = express()

serve.engine('html', require('express-art-template'))
serve.use('/public/', express.static('public'))

var router = require('./router')
serve.use(router)

serve.listen(5000, () => {
  console.log('serve is running 5000')
})