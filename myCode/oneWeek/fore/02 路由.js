// /**
//  * 在express中实现路由有两种方案：
//  * 基于app实现路由：
//  *  app.get("/",(req,res)=>{
//                 res.send("<h1>首页面</h1>")
//             })
//             // get表示请求方式  
//             // /  pathname  路径名  
//             // callback 回调函数  req  res  在原生node中又进行包装  让它变的更强大
//                 里面还有一个参数，叫next 转移控制权 
// 基于router对象实现路由：
//             ....
//  * 
//  * 
//  * 
//  * 
//  */
// let express=require("express");
// let app=express()
// // 什么是路由：就是给一个url 返回响应的结果·
// // 路由 第一个参数是pathname
// app.get("/",(req,res,next)=>{
//     res.send("<h1>首页面</h1>")
//     // get请求的/才会走这个
// })
// app.post("/",(req,res,next)=>{
//     res.send("<h1>postpost</h1>")
//     // post请求的/才会走这个
// })
// app.get("/list",(req,res)=>{
//     res.send("<h1>列表页面</h1>")
// })
// // 熟悉吧，就是上次表单的那个post数据返回的地方
// app.post("/dopublish",(req,res,next)=>{
//     res.send("...")
// })
// app.listen(3000,(req,res,next)=>{
//     console.log("浏览器在3000端口启动了")
// });