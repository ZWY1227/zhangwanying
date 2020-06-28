let express = require("express");
let factorCtrl = require("./controllers/factorCtrl");
let app = express();
app.use(express.static("public"));

app.set("view engine","ejs");

// 前端给我们的是页面（Html+css+js）
// html叫视图  css+js叫静态资源

// 当访问/ 渲染视图
app.get("/", factorCtrl.showIndex);
app.get("/:number",factorCtrl.showResult)

app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})



// “因数是指整数a除以整数b(b≠0) 的商正好是整数而没有余数，我们就说b是a的因数。
//  10   ==>  1、2、5、10




















