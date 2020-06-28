/* 
    在express中实现路由有两种方案：
        基于app实现路由：
            app.get("/",(req,res)=>{
                res.send("<h1>首页面</h1>")
            })
            // get表示请求方式  
            // /  pathname  路径名  
            // callback 回调函数  req  res  在原生node中又进行包装  让它变的更强大
                里面还有一个参数，叫next 转移控制权 
        基于router对象实现路由：
            ....
 */
let expres = require("express");
let app = expres();

// 大白话：给一个url  返回相应的结果

// 路由  第一个参数是pathname
app.get("/",(req,res,next)=>{
    res.send("<h1>首页面</h1>") // 只有get请求的/ 再会走这个路由
})  
app.post("/",(req,res,next)=>{
    res.send("<h1>xxx</h1>") // 只有post请求的/ 再会走这个路由
})
app.get("/list",(req,res)=>{
    res.send("<h1>列表页面</h1>")
})
app.post("/dopublish",(req,res,next)=>{
    res.send("...")
})
app.listen(3000);