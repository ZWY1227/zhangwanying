/* 
    规划出两个一级路由，交给app来管理：
        /article  --->  访问article.js
        /cat --->  访问cat.js
        

    路由对象：  
       let router = express.Router();

       router也叫控制器
 */
let express = require("express");
let app = express();

// 引入二级路由文件
let article = require("./router/article")
let cat = require("./router/cat")

// 一级路由
app.use("/article", article)
app.use("/cat", cat)

app.listen(3000);