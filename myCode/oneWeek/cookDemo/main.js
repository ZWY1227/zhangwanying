//引入express,app=express(),这是使用express的固定写法
let express=require("express")
let app=express()
// body-parse用来接收post请求的查询字符串,直接就是一个对象可以通过点来获取查询字符串的内容
var bodyParser=require("body-parser");
// 引入order页面,用于做路由处理,也就是处理二级路由,响应请求数据等等
let order=require("./controllers/order")
// 这里是使用接收查询字符串,必须要先配置,处理表单请求,和处理json的请求
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 这里是设置用的是ejs的模板引擎  app.set("view engine","ejs")
app.set("view engine","ejs")
// 第一次的get请求,请求的是首页,这里请求的是ejs模板index.html
app.get("/",order.viewIndex)
// 第二次的post请求,请求的是通过ajax发送的post请求,这里需要通过body-parse来进行处理
app.post("/save",order.save)
// 第三次的get请求，请求的是,allorder页面,要读文件，把手机号读取出来进行模板渲染
app.get("/allorder",order.allorder)
// 第四次的get请求需要根据手机号来读取该文件里面的内容
app.get("/order/:phone",order.oneorder)
// 实现托管静态资源,托管public下面的所有资源
app.use(express.static("public"))
// 监听端口
app.listen(3001,()=>{
    console.log("浏览器在3001端口启动了")
})