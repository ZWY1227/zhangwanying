let express=require("express")
let app=express()
let factorCtrl=require("./controllers/factorCtrl")
// 前端给我们的是html加css加js，视图和静态资源，
// 先把静态资源给加载了
app.use("public",express.static("./public"))
app.use("node_modules",express.static("./node_modules"))
app.set("view engine","ejs")
//根据模板引擎拿到首页面（get“/”）
app.get("/", factorCtrl.showIndex)
app.get("/:number", factorCtrl.showResult)

app.listen(3000,()=>{
    console.log("服务器在3000端口启动了")
})