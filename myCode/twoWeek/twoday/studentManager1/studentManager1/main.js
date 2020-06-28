let express=require("express")
let bodyParser=require("body-parser")
let app=express()
let student=require("./controllers/files")
app.set("view engine","ejs")

// 配置body-parser,固定的
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 开放node_module和public
app.use(express.static("public"))
// app.use(express.static("node_modules"))

// 服务器使用ejs来渲染首页面
app.get("/byejs",student.showIndex)

// 客户端使用ajax来来渲染首页面
app.get("/byajax",student.ajaxindex)
app.get("/add",student.addstudent)

// 点击添加按钮，通过req.body拿到该学生信息，传给model
//命令model去干活，model得到数据，去操作数据库
// 在数据库中插入该学生文档
// 插入成功与否都返回给俺们
app.post("/add",student.inserstudent)





// 暴漏一个接口让前端来使用
app.get('/allstudent',student.allstudent)
app.listen(3000)