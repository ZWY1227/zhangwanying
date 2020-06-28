let http=require("http")
let url=require("url")
let qs=require("querystring")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    let realUrl="http://"+req.headers.host+req.url;
    let urlObj=url.parse(realUrl)
    switch(urlObj.pathname){
        case "/login":
            fs.readFile("login.html","utf-8",(err,data)=>{
                if(err)throw err;
                res.end(data)
            })
            break;
        case "/dologin":
            let result="";
            req.on("data",(chunk)=>{
                result+=chunk
            });
            req.on("end",()=>{
                let resObj=qs.parse(result)
                res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
                res.end("<h1>你已登录成功"+resObj.username+"</h1>")
            })
    }
})
server.listen(3001,()=>{
    console.log("浏览器在3001端口启动成功了")
})