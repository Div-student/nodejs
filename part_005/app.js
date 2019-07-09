var http = require('http')
var fs = require('fs')

let serve = http.createServer()
serve.on('request', (req, res) => {
  console.log('recieved request')
  if (req.url === '/') {
    fs.readFile('pages/index.html', (err, data) => {
      if (err) {
        res.end('cannot get' + req.url)
      } else {
        res.end(data)
      }
    })
  } else if (req.url === '/post') {
    fs.readFile('pages/post.html', (err, data)=>{
      if(err){
        console.log('readfiel is failed')
      }else{
        res.end(data)
      }
    })
  }
})

serve.listen(3000, () => {
  console.log('serve is running')
})