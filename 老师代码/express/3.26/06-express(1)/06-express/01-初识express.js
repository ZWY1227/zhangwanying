let express = require("express");  // 引入express
let path = require("path");
let app = express(); // 创建一个应用  

app.use(express.static(path.join(__dirname, 'public')));  // 托管静态资源 

// 处理路由
app.get("/",(req,res)=>{
    res.send("<h1>hello 浏览器 第一个epxress应用</h1>")
})
app.get("/shop",(req,res)=>{
    res.send("<h1>这是购物车</h1>")
})
app.get("/order",(req,res)=>{
    res.send("<h1>这是订单</h1>")
})
app.listen(3000); // 监听端口









