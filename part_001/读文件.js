const fs = require('fs')
fs.readFile('./test.text', (erro, data)=>{
  console.log(data.toString())
})
fs.writeFile('./%*.txt', '我是用node写的文件哦哦哦哦', (erro)=>{
  if(erro){
    console.log('文件写入失败')
    return
  }
  console.log('写入文件成功')
})