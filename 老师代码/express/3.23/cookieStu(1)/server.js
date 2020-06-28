/* 
    种植（设置）cookie:
        res.setHeader("set-cookie","username=wnagcai");
        res.cookie("username","xiaoqiang")

    获取cookie:
        浏览器端：
            document.cookie  缺点有很多   现在逐渐被localStoreage代替了。

        服务器端：第1次是种植，后面每一个次请求都会带相cookie，在服务器端就获取浏览器携带的cookie
            去拿cookie的话，得到的是没有经过解析的cookie，正好有一个第三方的中间件，可以帮我们解析cookie。
            说白了，使用这个中间件就非常容易得到的浏览器携带的cookie。
            cookie-parser 

    使用cookie-parser中间件：
        1）安装  npm i cookie-parser
        2）引入  let cookieParser = require("cookie-parser");
        3）使用  app.use(cookieParser())    req.cookies

    
    cookie的有效期：
        服务器给你种植的cookie并不是永久有效的，它可以通过服务器设置它的有效期。

        1）如果服务器没有设置cookie的有效期，那么当会话结束（关闭了浏览器）后，cookie就死了


 */
let express = require("express");
var cookieParser = require('cookie-parser')

let app = express();
app.use(cookieParser())

app.get("/",(req,res)=>{
    // 再请求时浏览器会携带cookie  就可以通过req.cookies就可以得到的了
    console.log(req.cookies)

    // 服务器通过响应头向客户端种植一个cookie
    // res.setHeader() 设置响应头
    // res.setHeader("set-cookie","username=wnagcai");

    // 在express中专门封装了一个方法，用来给客户端种植cookie
    // res.cookie("username","xiaoqiang"); // 服务器向客户端种植


    // 种植cookie 并设置cookie的有效期
    if(!req.cookies.username){
        res.cookie("username","wc",{maxAge:1000 * 60 * 60});  // 有效期是10s
    }

    res.send("<h1>Hello</h1>")
})
app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})