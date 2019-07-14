var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


let commemt = require('./dataBase/base')
let serve = express()
serve.use('/public/', express.static('public'))
serve.engine('html', require('express-art-template'))
// serve.set('views', './pages')
serve.get('/', (req, res)=>{
  console.log('express is requested ^_^')
  fs.readFile('dataBase/base.json', (err, data)=>{
    if(err){
      res.status(500).end('serve is error')
    }else{
      let tempData = JSON.parse(data.toString())
      res.render('index.html', tempData)
    }
  })
})
serve.get('/post', (req, res)=>{
  res.render('post.html')
})
serve.get('/pinglun', (req, res)=>{
  res.statusCode = '302'
  res.setHeader('location', '/')
  commemt.unshift(req.query)
  res.end()
})
serve.post('/post', urlencodedParser, (req, res)=>{
  // commemt.unshift(req.body)
  fs.readFile('dataBase/base.json', (err, data)=>{
    if(err){
      console.log('read file is failed')
    }else{
     let formatdata = JSON.parse(data.toString()) 
     formatdata.commemt.push(req.body)
      fs.writeFile('dataBase/base.json',JSON.stringify(formatdata), (err)=>{
        if(err){
          console.log('write file is failed', err)
        }
      })
    }
  })
  res.statusCode = '302'
  res.setHeader('location', '/')
  res.end()
})

serve.listen(8080, ()=>{
  console.log('serve is running at 8080')
})