/* 
    第三方中间件就是别人开发好的中间件，需要下载，use。

    使用步骤：
        1）下载安装  npm i body-parser 
        2）引入  require() 
        3) app.use()   使用第三方中间件 
        4）使用中间件中方法或属性

    我们怎么知道一个中是件如何使用呢？ 如下两种方式可以查看一个第三方模块如何使用
        npm  https://www.npmjs.com/   直接百度npm  进入npm 官网  直接搜索第三方模块的名字
        github   直接github官网    直接搜索第三方模块的名字

 */

// body-parser 非常方便地处理post接收过来的数据  
let express = require("express");
let bodyParser = require("body-parser");  // 引入第三方中间件
let app = express();

// 从npm上面copy的代码基本上都没有问题
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // 处理以表示表单形式提交给服务器的数据
// parse application/json
app.use(bodyParser.json()); // 处理以Josn的形式提交给服务器的数据

// 向服务器post提交数据：1）写表单   2）postman   3）ajax
// 写路由接收数据
app.post("/dopublish",(req,res)=>{
    // req.on("data",(chunk)=>{})
    // req.on("end",(chunk)=>{})
    console.log(req.body); // 通过req.body就可以直接获取数据
});


app.listen(3000);


/* let express = require("express");
let bodyParser = require("body-parser");  
let app = express();
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.post("/dopublish",(req,res)=>{
    console.log(req.body);
});
app.listen(3000); */