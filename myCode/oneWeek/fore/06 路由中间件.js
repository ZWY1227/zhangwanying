/**
 * 规划出两个一级路由，交给app来管理
 * /article----》访问artical.js
 * /cat-------===访问cat.js
 * 请开始你的表演。。哈哈哈哈
//  */
 let express=require("express")
 let app=express()
//  固定的格式，不要忘记
// 使用express设置一级路由
let article=require("./router/artical")
let cat = require("./router/cat")

app.use("/artical",article)
app.use("/cat",cat)
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了")
})