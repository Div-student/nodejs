let http = require('http')
let fs = require('fs')

// 1.创建服务器
let serve = http.createServer()

//2.监听请求
serve.on('request', (req, res) => {
  const url = req.url
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if(url === '/txt'){
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    fs.readFile('../模块化小案例/a.txt', (err, data)=>{
      if(err){
        console.log('读取文件失败')
      }else{
        console.log('读取文件成功',data)
        res.end(data)
      }
    })
  } else if (url === '/html') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    fs.readFile('../模块化小案例/b.html', (err, data)=>{
      if(err){
        console.log('读取文件失败')
      }else{
        res.end(data)
      }
    })
  } else {
    res.setHeader('Content-Type', 'image/jpeg; charset=utf-8')
    fs.readFile('../模块化小案例/IMG_7289的副本.jpg', (err, data)=>{
      if(err){
        console.log('读取文件失败')
      }else{
        res.end(data)
      }
    })
  }
})

//3.开启服务器监听端口
serve.listen(8080, () => {
  console.log('serve is running')
})
