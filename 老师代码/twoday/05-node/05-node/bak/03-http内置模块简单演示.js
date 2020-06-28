// 使用require来引入模块  使用变量来接收模块
// 通过变量名和模块名会一样
// 引入系统模块时，只需要写系统模块名就OK，不用操作路径，NODE都会帮你处理好
// 一般情况下，模块叫什么名字，接收时，也叫什么名字
let http = require("http");

// createServer 用来创建一台服务器  把一个函数传到另一个函数中，里面的函数叫回调函数
// req 包装请求相关的信息  res包装了响应相关的信息
let server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello Brower~"); // 响应数据给客户端（浏览器）
    res.end(); // 结束响应
});

// 监听3000端口
server.listen(3000,()=>{
    console.log("服务器在3000端口启动了....")
})

// 如果改变了服务器代码，一定要重启服务器

