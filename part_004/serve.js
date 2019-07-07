var http = require('http')
var fs = require('fs')
var temp = require('art-template')

var sever = http.createServer((rep, res)=>{
  console.log('接受客户端请求')
  if(rep.url === '/'){
    fs.readFile('./index.html', (err, data)=>{
      if(err){
        console.log('文件读取失败')
      }else{
        console.log(data.toString())
        let temdate = temp.render(data.toString(), {
          name: '晓波',
          hobbys: ['吃饭睡觉', '打痘痘', '敲代码'],
        })
        res.end(temdate)
      }
    })
  }
})

sever.listen(3000, (err)=>{
  console.log('serve is running')
})