/* 
    针对session的操作，也有专门的中间件来处理session，叫：express-session。

    使用步骤：
        1）npm install express-session
        2）var session = require('express-session');
        3）使用：
            app.use(session({
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: true,
                cookie: { secure: true }
            }))
        4) 通过req.session来设置或获取session

    
    默认服务器给客户端种植的cookie名字叫connect.sid，就是我们说的session_id。

    session也有有效期：
        session是基于cookie的。设置cookie的有效期，就相当于设置了session的有效期。
        app.use(session({
            secret: 'wangcai',  // 秘密的;保密的; 对数据加密的   随便写
            resave: false,  // 默认就OK
            saveUninitialized: true,    // 默认就OK
            cookie: { maxAge:1000*60 } // cookie的有效期是1分钟
        }))


 */
let express = require("express");
var session = require('express-session')
let app = express();

app.use(session({
    secret: 'wangcai',  // 秘密的;保密的; 对数据加密的   随便写
    resave: false,  // 默认就OK
    saveUninitialized: true,    // 默认就OK
    // cookie: {  } // 写空   因为session是基于cookie
    cookie: { maxAge:10000 } // 10s
}))

app.get("/", (req, res) => {

    // 设置session
    req.session.username = "wangcai"; // 设置session  数据是保存的服务器端的
    console.log(req.session.username);
    res.send("<h1>Hello</h1>")
})
app.listen(3001, () => {
    console.log("服务器在3000端口运行了~")
})