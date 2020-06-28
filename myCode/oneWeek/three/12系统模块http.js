/**
 * HTTP:客户端与服务器交流工具
 * HTTP请求：请求分get和post
 *      请求行：请求地址url，请求方法method
 *      请求头：请求时带了一些信息以xx:xx格式显示  （客户端与服务器之间约束的一些规则~）
 *      请求正文：给服务器传递的数据  get请求没有请求正文
 * HTTP响应：不分get和post
 * 相应行（状态行）：
 *      1）协议版本，通常是HTTP/1.1
 *      2）响应的状态码和响应的描述（和状态码是对应）
 * 响应头：
 *      告诉浏览器一些信息，如你应该以什么样的编码解析我给你的内容
        响应正文：把数据返回给浏览器
常用的状态码：
200 OK 表示数据回来了  一切正常
304 Not Modified 使用缓存  
404 Not Found 找不到
403 For  没有权限
500 服务器内部出错了
 ....  

            1XX 
            2XX
            3XX
            4XX
            5XX
 * HTTP请求之GET请求：
        1）浏览器地址栏只能发出GET请求。
        2）基于SRC，HREF也能发出请求，也是GET请求
        3）AJax也可以发出get请求
        4）表单可以发出GET请求 
     HTTP请求之POST请求：
        1）表单可以发出POST请求  如果不写method="POST"  
        2）AJax也可以发出post请求
        3）postman 工具 也可以发出post请求 
 * http模块 创建Server 里面的核心方法：
 listen（）监听端口
 on()request事件
 server对象有两个事件：
  request事件   当浏览器发起Http请求时触发request事件
  listening事件   当调用listen方法触发了



   绑定事件：
                btn.onclick = function(ev){}  
                btn.addEventListener("click",(ev)=>{})
                btn.bind("click",(ev)=>{})
                btn.on("click",(ev)=>{})
   安装nodemon:
   监听文件变化，如果文件变化了，他会自己帮你重启服务器
   npm i nodemon -g全局安装（所有项目都可以使用） 
   开启服务器：nodemon .\12系统模块http.js
 */
// ===========初步体验http模块==========================
let http=require("http")
let server=http.createServer()
server.on("request",(req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    // res.write("<h1>你好啊，我是brown~ddddd---mememme</h1>")
    res.end("<p>你好啊，我是brown~ddddd---mememme</p>")
})
server.listen(3001)