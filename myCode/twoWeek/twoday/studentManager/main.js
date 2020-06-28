let express=require("express");
let bodyParser=require("body-parser")
let student=require("./controllers/file")
let app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine","ejs")

// 服务端渲染，
app.get("/",student.showIndexByEjs)
// 客户端渲染  这个请求是ajax渲染页面
app.get("/byajax",student.showIndexByAjax);
//自己写的api接口
app.get("/allstudent",student.allstudent)


//=======================添加保存学生

app.get("/add",student.addstudent)
// 获得表单学生页面的信息
app.post("/add",student.doaddstudent)

app.listen(3000,()=>{
    console.log("服务器在3000端口启动成功了")
})