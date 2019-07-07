const http = require('http')
const fs = require('fs')

const serve = http.createServer((rep, res)=>{
  console.log('接受到了服务端的请求')
  if(rep.url === '/'){
    fs.readFile('/Users/mac/myproject/nodejs/nodejs/part_003/文件读取操作/index.html',(err,data)=>{
      if(err){
        console.log('文件读取失败')
      }else{
        res.end(data)
      }
    })
  }
  fs.readdir('/Users/mac/myproject/nodejs/nodejs/part_003/文件读取操作/test', (err, data)=>{
    if(err){
      console.log('读取文件失败')
    }else{
      res.end(data)
    }
  })
})

serve.listen(3000, (err)=>{
  console.log('服务器已开启.....')
})