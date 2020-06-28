/**
 * 入口文件，一般叫main.js,app.js,index.js
 * 把不同的功能交给不同的路由来处理
 * 在express中使用ejs，需要把前端写好的页面放到view这个目录下面
 * public是托管静态资源的
 * 此时的vew里面放的叫视图---》暂时咱们就把它当作前端写好的页面
 * 一般main.js是入口文件，里面是不能放太多的代码的，所以一般一级路由放到main.js
中
 */

// 首先写规定的格式
let express=require("express");
// 把处理路由的代码存放在controllers文件夹中
// 把处理数据库和文件的操作代码存放在models文件夹中
// 把处理试图模板放在views中，就是mvc了
// models views controllers===>mvc
let order=require("./controllers/order");
// 用来处理post请求的查询字符串的
var bodyParser=require("body-parser");
let app=express();
// 使用body前要先配置它
// 第一个处理表单的post,第二个是处理json的post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 现在要静态资源托管,一般都是托管public
// 现在暂时使用模板引擎ejs
// 首先配置ejs,就是告诉浏览器我们要用什么样的模板引擎
// 实现第一个功能,就是当访问/的时候,显示首页面
app.set("view engine","ejs")
app.get("/", order.showIndex); // 显示首页面  一级路由
app.post("/save",order.save)
app.get("/allorder",order.allorder)
app.get("/order/:phone",order.oneorder)
app.use(express.static("public")); // 实现托管静态资源
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})
