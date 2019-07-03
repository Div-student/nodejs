const http = require('http')

var serve = http.createServer()

serve.on('request', (req, res)=>{
  console.log('接受到了客户端的请求'+'，请求路径是'+ req.url)
  res.write('请求路径是：'+ req.url)
  res.write('hello node 我是nodejs哦哦哦')
  res.end()
})

serve.listen('3000', ()=>{
  console.log('服务器启动成功，可以通过 192.168.0.1:3000 访问')
})