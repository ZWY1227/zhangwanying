/* 
    需要知道：
        1）这里的res是比原生的res更加强大了  包装了请求相关的信息  
        2）常用属性或方法，如下：
            res.send();  发送各种类型的响应    send方法只能写一个
            res.sendFiel();   发送文件 
            res.sendStatus  设置响应的状态码（是程序员写的）
            res.render();  渲染模板使用  ejs   
            res.json()  发送JSON格式的响应（api接口）
            res.redirect()  重定向  重定向到登录页面 
            res.download  以下载的方式响应
 */
let expres = require("express");
let app = expres();
app.get("/",(req,res,next)=>{
    // 如果没有express  res.writeHead()  res.write();  res.end()
    // res.send("<h1>学习res</h1>") // 只有get请求的/ 再会走这个路由
    // res.send("<h1>学习res</h1>") // 只有get请求的/ 再会走这个路由

    // res.send("<h1>学习res</h1>")  相当写了   res.writeHead()  res.write();  res.end()
    // 第二次send时，又相当于写了 res.writeHead()  res.write();  res.end()
    // 在发送完响应正文后，不能再设置响应头

    res.json({
        "name":"wangcai",
        "age":100
    })
})  
app.listen(3000);




