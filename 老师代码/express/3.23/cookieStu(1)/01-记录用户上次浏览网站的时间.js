let express = require("express");
var cookieParser = require('cookie-parser')
let app = express();
app.use(cookieParser())

app.get("/",(req,res)=>{
    // last 
    let last = req.cookies.last;
    res.cookie("last",new Date().toLocaleString(),{maxAge:1000*60*60*24*365});
    if(last){
        res.send(`<h1>你上一次访问本网站的时间是${last}</h1>`)
    }else{
        res.send(`<h1>这是你第一次访问本网站</h1>`)
    }

    // send = res.writeHead + res.write + res.end 
    // send = res.writeHead + res.write + res.end 
    // res.send("<h1>Hello</h1>")
})
app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})