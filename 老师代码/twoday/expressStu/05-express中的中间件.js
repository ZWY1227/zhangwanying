/* 
    postman:
        因为浏览器只能发出get请求，你要想发出post请求，你可以写表单，发出去。
        postman可以模拟浏览器向服务器发出请求，功能比较强大。

        下载这个工具，当然谷歌浏览器也有一个postman的插件。

    postman:https://blog.csdn.net/fxbin123/article/details/80428216

    中间件：
        在express中有很多的中间件，不同的中间件，做不同的事情。
        可以把之前说的路由当成一个特殊的中间件。

    在epxress中 中间件 分类如下：
        应用级别的中间件   
            app.use(pathname,middleware)   pathname 可以为 * 表示拦截所有的请求  *可以不写~
            app.get(pathname,middleware)
            app.post(pathname,middleware)
        express中内置的中间件：
            用来托管静态资源：  express.static 是内置的中间件
                app.use(express.static(path.join(__dirname, 'public'))); 
        路由级别的中间件
            如果实现下面的路由：
                文章管理：
                    http://localhost:3000/article    显示文章
                    http://localhost:3000/article/add    添加文章
                    http://localhost:3000/article/update    修改文章
                    http://localhost:3000/article/delete    删除文章
                分类管理：
                    http://localhost:3000/cat    显示分类列表
                    http://localhost:3000/cat/add    添加分类
                    http://localhost:3000/cat/update    修改分类
                    http://localhost:3000/cat/delete    删除分类
                使用应用级别的路由，所有路由都写在了一起，不好维护。把路由分成二级或多级。分成二级路由和二级路由。

            如对于文章的管理，把http://localhost:3000/articl规划成一级路由，交给app来管理。
                其它的规划成二级路由，交给路由中间件来处理。
        第三方中间件：
            别人开始好的中间件， 如body-parse

 */
let express = require("express");
let app = express();
/* // ================== 如果是/shop 仅仅是拦截/shop请求  其它的请求不会拦截
// 中间件1
app.use("/shop",(req,res,next)=>{
    console.log("中间件1");
    next();  // 将控制权交给下一个中间件
})
// 中间件2
app.use("/shop",(req,res,next)=>{
    console.log("中间件2")
    next();
})
app.get("/shop",(req,res)=>{
    res.json({
        "shop":"666"
    })
}) */

/* // ================== 使用中间件拦截所有的请求
// app.use("*",(req,res,next)=>{
//     console.log("*表示拦截所有的请求~")
//     next();
// })
// * 可以不写
app.use((req,res,next)=>{
    console.log("*表示拦截所有的请求~");
    next();
})
app.get("/",(req,res)=>{
    res.json({
        "首页":"666"
    })
})
app.get("/order",(req,res)=>{
    res.json({
        "订单":"666"
    })
}) */

/* // ====================== 实现文章管理和分类管理的路由
app.get("/article",(req,res)=>{ res.send("<h1>文章列表</h1>") })
app.get("/article/add",(req,res)=>{ res.send("<h1>添加文章</h1>") })
app.get("/article/update",(req,res)=>{ res.send("<h1>修改文章</h1>") })
app.get("/article/delete",(req,res)=>{ res.send("<h1>删除文章</h1>") })

app.get("/cat",(req,res)=>{ res.send("<h1>分类列表</h1>") })
app.get("/cat/add",(req,res)=>{ res.send("<h1>添加分类</h1>") })
app.get("/cat/update",(req,res)=>{ res.send("<h1>修改分类</h1>") })
app.get("/cat/delete",(req,res)=>{ res.send("<h1>删除分类</h1>") }) */

app.listen(3000);