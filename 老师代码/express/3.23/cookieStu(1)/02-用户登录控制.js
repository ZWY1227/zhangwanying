/* 
    /       首页面
    /list    列表页面
    /user    用户中心
    /login   登录页面（渲染登录页面）
    /dologin   处理登录逻辑

    一般用户中心都是登录后才能访问，如果没有登录需要重定向到登录页面。
    如果登录登录OK了，需要把用户的信息保存下来，然后可以跳到用户中心。
    下一次，你再访问用户心时，先看一下，你是否保存了用户信息。

    使用cookie来实现

    使用cookie来实现用户登录控制，不安全，因为cookie存储在浏览器端，不安全，容易被篡改。

 */
let express = require("express");
let cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
let app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.get("/list",(req,res)=>{
    res.send("<h2>列表页面</h2>")
})
app.get("/user",(req,res)=>{
    if(req.cookies.isLogin){
        res.send("<h2>用户中心 <a href='/logout'>退出登录</a></h2>")
    }else{
        res.redirect("/login");
    }
    
})
app.get("/logout",(req,res)=>{
    // 使用cookie来实现登录控制，想退出登录，只需要让cookie失败就行
    res.cookie("isLogin",true,{maxAge:-1});
    res.redirect("/");
})
app.post("/dologin",(req,res)=>{
    let username = req.body.username.trim();
    let password = req.body.password.trim();
    // console.log(username,password)
    if(username == "admin" && password == "admin"){
        res.cookie("isLogin",true);
        res.redirect("/user")
    }else{
        res.redirect("/login")
    }
})
app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})





