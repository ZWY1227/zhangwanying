let express=require("express")
let app=express()
let session=require("express-session")
let bodyParser=require("body-parser")

app.set("view engine","ejs")
app.use(session({
    secret: 'admin',  
    resave: false,  
    saveUninitialized: true,    
    cookie: { maxAge:100000 } 
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/list",(req,res)=>{
 res.send("<h1>用户列表页面</h1>")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/user",(req,res)=>{
    if(req.session.isLogin){
        res.send("<h1>用户页面<a href='/logod'>退出登录</a></h1>")
    }else{
        res.redirect("/login")
    }})
app.get("/logod",(req,res)=>{
        req.session.destroy((err)=>{
            if (err) throw err;
            res.redirect("/")
        });
})
app.post("/dologin",(req,res)=>{
    let username=req.body.username.trim()
    let password=req.body.password.trim()
    if(username=='admin'&&password=='admin'){
        req.session.isLogin=true;
        // req.session.useranme = "admin";
        res.redirect("/user")
    }else{
        res.redirect("/login")
    }
    
})

app.listen(3000,()=>{
    console.log("浏览器在3000端口启动成功了")
})