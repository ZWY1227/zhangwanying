//使用require来引入模块 使用变量来接收模块
//变量名和模块名会一样
/**
 * 引入系统模块时，只需要写系统模块名就ok，不需要操作路径，node会帮你处理好
 * 一般情况下，模块叫什么名字，接收时也叫什么名字
 */
let http=require('http');
// createServer 用来创建一台服务器
// 所谓回调函数：把一个函数传到另一个函数中，里面的函数叫回调函数
let server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.write("hello,我是服务器做出的响应")
    // res.write("<p>hahahahha哈哈哈哈</p>")
    // let pro="hello,我是服务器做出的响应"
    res.end()
})
// server.on('request',function(){
//     console.log("收到客户端的请求了")
// })
server.listen(3001,function(){
    console.log("服务器在3000端口启动了！")
})