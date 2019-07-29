var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var router = express.Router()
var api = require('./api/api.js')
router.get('/', (req, res) => {
  api.findDataAll((erro, data)=>{
    if(erro){
      res.status('500').send('serve is fail')
    }else{
      res.render('index.html', data)
    }
  })
})

router.post('/post', urlencodedParser, (req, res) => {
  fs.readFile('data/base.json', (err, data) => {
    if (err) {
      res.status('500').send('serve is erro')
    } else {
      let tempdata = JSON.parse(data.toString())
      tempdata.comment.unshift(req.body)
      tempdata = JSON.stringify(tempdata)
      fs.writeFile('data/base.json', tempdata, (err) => {
        if(err) {
          res.status('500').send('serve is failed')
        } else {
          res.statusCode = '302'
          res.setHeader('location','/')
          res.end()
        }
      })
    }
  })
})

router.get('/post', (req, res) => {
  fs.readFile('views/post.html', (err, data) => {
    if (err) {
      res.status('500').send('serve is error')
    } else {
      res.render('post.html')
    }
  })
})
module.exports = router
