/**
 *第三方中间件就是人家开发好的中间件，需要我们npm来下载，use使用
 使用步骤：
 安装，引入，app.use使用 ,直接使用中间件中的方法或者属性
 我们要怎么知道中间件的使用方法的
 有两中方式查看一个第三方的中间件是如何使用的
 进入npm官网https://www.npmjs.com/   直接百度npm  进入npm 官网  直接搜索第三方模块的名字
 github官网 直接github官网    直接搜索第三方模块的名字
 来来来，我们来学习一个第三方中间件来联系联系
 使用body-parse可以非常方便的处理post接收过来的数据
 下载，引入，app.use使用
 

 * 
 * 
 * 
 * 
 */
let express=require("express")
let app=express()
let bodyParser=require("body-parser")
// 安装，引入已经完毕，开始使用,记得先配置
app.use(bodyParser.urlencoded({ extended: false })); 
// 处理以表示表单形式提交给服务器的数据
app.use(bodyParser.json()); 
// 处理以Josn的形式提交给服务器的数据
app.post("/dopublish",(req,res)=>{
    console.log(req.body)
    // 通过req.body就可以直接获取数据
    res.end("111")
})
app.listen(3000,()=>{
    console.log('服务器在3000端口启动了')
})