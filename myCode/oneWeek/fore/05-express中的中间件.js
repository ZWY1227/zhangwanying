/* 
    中间件：
        在express中有很多的中间件，不同的中间件，做不同的事情。
        可以把之前说的路由当成一个特殊的中间件。
    postman:
    因为浏览器只能发出get请求，你想要发出post请求，你可以写表单，发出去。
    post慢可以模拟浏览器向服务器发出请求，功能比较强大。
    下载这个工具，当然谷歌浏览器也有一个postman的插件。
       postman:https://blog.csdn.net/fxbin123/article/details/80428216
 中间件：
     在express中有很多的中间件，不同的中间件做不同的事情
     可以把之前说的路由当作一个特殊的中间件。
     在express中内置的中间件：
     用来托管静态资源：express.static是内置的中间件
     app.use(express.static(path.join(_dirname,'public')));
     路由级别的中间件
     如果实现下面的路由：
     文章管理：
         http：127.0.0.1：3000/article 显示文章
          http://localhost:3000/article/add    添加文章
        http://localhost:3000/article/update    修改文章
        http://localhost:3000/article/delete    删除文章
    分类管理：
        http://localhost:3000/cat    显示分类列表
        http://localhost:3000/cat/add    添加分类
        http://localhost:3000/cat/update    修改分类
        http://localhost:3000/cat/delete    删除
    使用应用级别的路由，所有路由都写在了一起，不好维护。所以我们把路由分为一级路由和二级路由
    如：
    对于文章的管理，把http://localhost:3000/articl规划成一级路由，交给app来管理。
    其它的规划成二级路由，交给路由中间件来处理。
     第三方中间件：
     别人开发好的中间件，如：body-parse   
 */
// 中间件举例
let express=require('express');
let app=express();
// 相当于把客服端与服务器之间的通信一刀砍断喽
//设置中间件1
// app.get("/a",(req,res,next)=>{
//     console.log("中间件11111")
//     next()
// })
// // 设置中间件2
// app.get("/a",(req,res,next)=>{
//     console.log("中间件2222")
//     next()
// })
// 如果设置为*则不只是阻断/a的，还阻断其他的，就是所有的
// app.get("*",(req,res,next)=>{
//     console.log("我会阻断所有url的通信，作为所有人的中间件")
//     next()
// })
// app.get("/a",(req,res)=>{
//     res.json({
//         "name":"ZWY",
//         "age":"18"
//     })
// })
// app.get("/b",(req,res)=>{
//     res.json({
//         "name":"ZWY",
//         "age":"18"
//     })
// })
// app.listen(3000,()=>{
//     console.log("服务器在3000端口启动了")
// })