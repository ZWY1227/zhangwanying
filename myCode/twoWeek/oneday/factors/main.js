let express=require("express")
let app=express()
let factorCtrl=require("./controllers/factorCtrl")
app.set("view engine","ejs")
app.use(express.static("public"))
app.use("/node_modules",express.static("./node_modules"))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/:number", factorCtrl.showResult)
app.listen(3000,()=>{
    console.log("服务器再3000端口启动了")
})