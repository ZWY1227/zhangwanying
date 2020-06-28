/* 
    入口文件，一般叫main.js / app.js / index.js 
        入口文件不写那么多代码 

    不同的功能交给不同的路由来处理。

    在express中使用ejs，需要把前端的写好的页面放到的views这个目录下面。
    此时views里面放的叫视图--->暂时就给它当成前端写好的页面。

    一般main.js是入口js，不能放太多的代码，一般一级路由放到main.js
    
 */
let express = require("express");
let order = require("./controllers/order")
var bodyParser = require('body-parser') //引入body-parser
let app = express(); 

// 配置body-parser  直接去官网上copy代码
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 告诉express，我们使用什么样的模板引擎
app.set("view engine","ejs");

// 功能一：当有人访问localhost:3000/  
app.get("/", order.showIndex); // 显示首页面  一级路由
app.post("/save", order.save);  // 一级路由

// 在express中有一个内置的中间件，可以托管静态资源
app.use(express.static("public")); // 实现托管静态资源

app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})