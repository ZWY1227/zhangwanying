/**代码：
 * 
 * // switch (urlObj.pathname) {
//     case "/":
//         data = "<h1>首页面</h1>";
//         break;
//     case "/shop":
//         data = "<h1>购物车页面</h1>";
//         break;
//     case "/order":
//         data = `<h1>订单页面，名字是${qObj.name}</h1>`;
//         break;
//     default:
//         data = "你的页面飞了~"
// }
前端写好的页面是由html和css和js构成的，也叫静态资源
作为后端，如何让别人访问静态资源呢？
之前方式 使用github托管   所有人都可以访问 
现在，学习了node，如何使用node来托管静态资源呢？
        如：localhost:3000/index.html  -----> html文件
 */
// ============================  下面的代码，要有的浏览器中不能实现效果，原因，我们写的代码不完善
// let http=require("http");
// let url=require("url");
// let fs = require("fs");
// // let qs=require("querystring")
// let path=require("path")
// let server=http.createServer((req,res)=>{
//     let realUrl="http://"+req.headers.host+req.url;
//     let urlObj=url.parse(realUrl)
//     switch(urlObj.pathname){
//         case  "/":
//             fs.readFile("index.html","utf-8",(err,data)=>{
//                 if(err) throw err;
//                 res.end(data)
//             })
//             break;
//         default:
//             let filename=path.join(__dirname,urlObj.pathname)
//             if(fs.existsSync(filename)){
//                 fs.readFile(filename,(err,data)=>{
//                     if(err)throw err;
//                     res.end(data)
//                 })
//             }else{
//                 res.end()
//             }
//             break;
//     }
// })
// server.listen(3001, () => {
//     console.log("服务器在3001端口启动了~")
//   })

// http.createServer((req,res)=>{
//   let urlObj=url.parse(req.url)
//   let qsObj=qs.parse(urlObj.query)
//   let data="";
// if(urlObj.pathname=="/"){
//    data='<h1>首页面</h1>'
// }else if(urlObj.pathname=="/a"){
//   data= "<h1>购物车页面</h1>";
// }else if(urlObj.pathname=="/b"){
//   data = `<h1>订单页面，名字是${qsObj.zwy}</h1>`;
//   console.log(qsObj.zwy)
// }else{
//   data = "你的页面飞了~"
// }
// res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
// res.end(data);})
// .listen(3001, () => {
//   console.log("服务器在3001端口启动了~")
// })
// ===============================静态资源托管第二遍===============================
// let http = require("http")
// let path = require("path")
// let fs = require("fs")
// let url = require("url")
// let server = http.createServer((req, res) => {
//     let realUrl = "http://" + req.headers.host + req.url;
//     let urlObj = url.parse(realUrl)
//     switch (urlObj.pathname) {
//         case "/":
//             fs.readFile("index.html","utf-8", (err, data) => {
//                 if (err) throw err;
//                 res.end(data)
//             })
//             break;
//         default:
//             let filename = path.join(__dirname,urlObj.pathname)
//             if (fs.existsSync(filename)) {
//                 fs.readFile(filename, (err, data) => {
//                     if (err) throw err;
//                     res.end(data)
//                 })
//             } else {
//                 res.end()
//             }
//             break;
//         }
//     })
// server.listen(3001, () => {
//     console.log("服务在3001端口启动了")
// })