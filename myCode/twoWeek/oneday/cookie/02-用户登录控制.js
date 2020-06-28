/**
 * / 首页面
 * /list 列表页面
 * /user 用户中心
 * /login 登录页面（渲染登录页面）
 * /dologin 处理登录逻辑
 * 
 * 一般用户中心都是登陆后才能访问，如果没有登录需要重定向到登陆页面
 * 如果登录了就ok了，需要把用户的信息保存下来，然后可以跳到用户中心
 * 下一次，你再访问用户中心时，先看一下你是否保存了用户信息
 * 使用cookie来实现
 * 使用cookie来实现用户登录，不安全，因为cookie存储在浏览器端，不安全容易被篡改
 * 
 */
let express = require("express")
let cookieParser=require("cookie-parser")
let bodyParser=require("body-parser")
let app = express()
app.set("view engine", "ejs")

// 配置bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置cookieParser
app.use(cookieParser())




app.get("/", (req, res) => {
    res.render("home")
})
app.get("/list", (req, res) => {
    res.send("<h1>我是列表</h1>")
})
app.get("/login", (req, res) => {
    res.render("login")
})





app.get("/user", (req, res) => {
    if(req.cookies.isLogin){
        res.send("<h1>我是用户中心的页面</h1>")
    }else{
        res.redirect("/login")
    }
})

app.post("/dologin",(req,res)=>{
  let username=req.body.username.trim()
  let password=req.body.password.trim()
  if(username=='admin'&&password=='admin'){
    //   缓存10秒
        res.cookie("isLogin",true,{maxAge:10000})
        res.redirect("/user")
  }else{
    res.redirect("/login")
  }

})







app.listen(3000, () => {
    console.log("服务器在3000端口启动了")
})