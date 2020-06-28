let express = require("express");
let bodyParser = require("body-parser");
let order = require("./controllers/order")
let path = require("path");

let app = express();
// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 告诉express，此项目我们使用的模块引擎是ejs
app.set("view engine","ejs"); // 需要把html文件的后缀改成ejs

app.get("/", order.showIndex); // 一级路由  显示首页面
app.post("/save",order.save); // 二级路由 保存订单信息
app.get("/allorder",order.allorder);  // 查看所有的订单信息
// /order/000  :shoujihao 表示动态参数  就是get请求给服务器传递的数据
app.get("/order/:shoujihao", order.oneorder)
app.use(express.static("public")); // 托管的是public，访问时不要带public  
app.listen(3000,()=>{
    console.log("服务器在3000端口运行了~")
})

