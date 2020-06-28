let express=require("express")
var cookieParser=require('cookie-parser')
let app=express()
app.use(cookieParser())
app.get("/",(req,res)=>{
    let last=req.cookies.last;
    res.cookie('last',new Date().toLocaleString(),{maxAge:1000*60*60*24*365});
    if(last){
        res.send(`<h1>您上次访问本网站的时间是${last}</h1>`)
    }else{
        res.send('<h1>这是您第一次访问本网站</h1>')
    }
    // send=res.writeHead+res.write+res.end
})
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了")
}
)