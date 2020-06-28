/**
 *  在手册中，发现req里面有很多的属性和方法，如下：
        Properties
            req.app
            req.baseUrl
            req.body
            req.cookies
            req.fresh
            req.hostname
            req.ip
            req.ips
            req.method
            req.originalUrl
            req.params
            req.path
            req.protocol
            req.query
            req.route
            req.secure
            req.signedCookies
            req.stale
            req.subdomains
            req.xhr
        Methods
            req.accepts()
            req.acceptsCharsets()
            req.acceptsEncodings()
            req.acceptsLanguages()
            req.get()
            req.is()
            req.param()
            req.range()
 * 最最常用的请求的属性和方法
  1）这里的req是比原生的req更加强大了  包装了请求相关的信息  
  2.常用属性和方法，如下：
  req.protocol 获取请求的协议
  req.hostname 获取主机名
  req.path 获取请求的路径
  req.ip 获取请求的ip地址
  req.method 获取请求的方法
  req.query 获取请求的查询字符串
  req.headers 获取请求头信息 是原生req上面的，还可以继续使用哦

   
 */
let express=require("express");
let app=express();
app.get("/",(req,res,next)=>{
    console.log(req.protocol)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.ip)
    console.log( req.method)
    console.log(req.query)
    console.log(req.headers)
    res.send("<h1>学习req</h1>")
    // 
    //     http
    // 127.0.0.1
    // /
    // ::ffff:127.0.0.1
    // GET
    // {}
})
app.listen(3000)