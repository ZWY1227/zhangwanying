/* 
    基于session实现登录控制  isLogin表示是否登录

    后面，如果我们要做一个系统，要使用登录的控制，使用cookie还是session?
    答：session 
 */
let express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
let app = express();
app.use(session({
    secret: 'wangcai',  
    resave: false,  
    saveUninitialized: true,    
    cookie: { maxAge:100000 } 
}))
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
    if(req.session.isLogin){
        res.send("<h2>用户中心 <a href='/logout'>退出登录</a></h2>")
    }else{
        res.redirect("/login")
    }
})

app.get("/logout",(req,res)=>{
    // 让session失效
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect("/")
    });
})

app.post("/dologin",(req,res)=>{
    let username = req.body.username.trim();
    let password = req.body.password.trim();
    // console.log(username,password)
    if(username == "admin" && password == "admin"){
        // 设置session  session的数据是保存的服务器端
        req.session.isLogin = true;
        req.session.useranme = "admin";
        res.redirect("/user")
    }else{
        res.redirect("/login")
    }
})
app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})