let express=require("express")
let app=express()
let bodyParser=require("body-parser")
let order=require("./controllers/order")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.get("/",order.index)
app.post("/save",order.save)
app.get("/allorder",order.read)
app.get("/order/:phone",order.readOneFile)
app.use(express.static("public"))
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了")
})