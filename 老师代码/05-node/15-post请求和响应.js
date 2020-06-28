let http = require("http");
let url = require("url");
let qs = require("querystring");
let fs = require("fs");
let server = http.createServer((req,res)=>{
    let realUrl = "http://"+req.headers.host+req.url;
    let urlObj = url.parse(realUrl);
    switch(urlObj.pathname){
        case "/login":
            fs.readFile("login.html","utf8",(err,data)=>{
                if(err) throw err;
                res.end(data)
            })
            break;
        case "/dologin":
            // console.log("这个case是处理登录的逻辑~")
            let result = "";
            // 需要接收用户提交给后端的用户名和密码
            req.on("data",(chunk)=>{
                result += chunk;
            });
            req.on("end",()=>{
                // console.log(result);// username=wangcai&pwd=123456  字符串
                let resObj = qs.parse(result);
                // console.log(resObj); //  { username: 'wangcai', pwd: '666' }
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                res.end("<h1>登录成功，用户名是"+resObj.username+"</h1>")
            })
            break;
        default:
            res.end();
            break;
    }
});
server.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})










