var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
var templateart = require('art-template')
let commemt = [
  {
    name: '申小博',
    content: "我爱你申晓波"
  },
  {
    name: '网小刚',
    content: '哎做唉'
  }
]
let serve = http.createServer()
serve.on('request', (req, res) => {
  let pathObject = url.parse(req.url, true)
  let getUrl = pathObject.pathname
  console.log('recieved request')
  if (getUrl === '/') {
    fs.readFile('pages/index.html', (err, data) => {
      if (err) {
        res.end('cannot get' + req.url)
      } else {
        let aa = templateart.render(data.toString(), {'commemt':commemt})
        res.end(aa)
      }
    })
  } else if (getUrl === '/post') {
    fs.readFile('pages/post.html', (err, data) => {
      if (err) {
        console.log('readfiel is failed')
      } else {
        res.end(data)
      }
    })
  } else if (getUrl === '/pinglun') {
    tempObject = JSON.parse(JSON.stringify(pathObject.query))
    commemt.push(tempObject)
    console.log(commemt)
    res.statusCode = '302'
    res.setHeader('location', '/')
    res.end('')
  } else {
    res.end('404 not find')
  }
})

serve.listen(3000, () => {
  console.log('serve is running')
})