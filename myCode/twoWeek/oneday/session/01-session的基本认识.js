/**
 * 针对session的操作，也有专门的中间件来处理session叫express-session
 * session的使用步骤：
 * 1）npm install express-session
 * 2)var session=require('express-session')
 * 3)使用：
 * app.use(session({
 *      secret:'keybosrd cat',
 *       resave:false,
 *        saveUninitialized:true,
 *         cookie:{
 *          secure:true         
 * }
 * }))
 * 4)通过req.session来设置或者获取session
 * 默认服务器给客户端种植的cookie名字叫connect.sid,就是我们说的session_id
 * session也有有效期：
 *      session是基于cookie的。设置cookie的有效期，就相当于设置了session的有效期
 *  session也有有效期：
        session是基于cookie的。设置cookie的有效期，就相当于设置了session的有效期。
        app.use(session({
            secret: 'wangcai',  // 秘密的;保密的; 对数据加密的   随便写
            resave: false,  // 默认就OK
            saveUninitialized: true,    // 默认就OK
            cookie: { maxAge:1000*60 } // cookie的有效期是1分钟
        }))
 * 
 */
// let express=require("express")
// let session=require("express-session")
// let app=express();

// app.use(session({
//     secret: 'wangcai',  // 秘密的;保密的; 对数据加密的   随便写
//     resave: false,  // 默认就OK
//     saveUninitialized: true,    // 默认就OK
//     // cookie: {  } // 写空   因为session是基于cookie
//     cookie: { maxAge:100000} // 10s
// }))
// app.get("/",(req,res)=>{
//     console.log(req.session.username);
//     req.session.username="wangcai";
//     res.send("<h1>hello</h1>")
// })
// app.listen(3000,()=>{
//     console.log("服务器在3000端口运行了----")
// })