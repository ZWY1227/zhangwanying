let epxress = require("express");
var bodyParser = require('body-parser')

let student = require("./controller/student")
let app = epxress();

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置静态服务
app.use(epxress.static("public"))

// 配置模板引擎
app.set("view engine","ejs");


// 服务端渲染
app.get("/byejs",student.showIndexByEjs);

// 客户端渲染  这个请求是学渲染页面
// localhost:3000 渲染页面
app.get("/byajax",student.showIndexByAjax);

// 服务器也可以提供api接口  就是返回json数据  让客户端渲染
app.get("/allstudent",student.allstudent);


// 渲染添加学生的页面
app.get("/add",student.add);

// 处理添加学生
app.post("/add",student.doadd)




app.listen(3000,()=>{
    console.log("服务器在3000端口运行起来了...")
})

// http://runoob.com/nodejs/nodejs-mongodb.html

