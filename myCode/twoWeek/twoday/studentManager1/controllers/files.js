let db=require("../models/db")
// 服务器使用ejs来渲染首页面
exports.showIndex=(req,res)=>{
    db.show(function(arr){
        res.render("indexByEjs",{
            "arr":arr
        })
    })
}
// 服务器通过ejs来渲染页面，此时渲染还没数据库的数据，
//要等ajax发出二次请求去数据库拿数据
exports.ajaxindex=(req,res)=>{
    res.render("indexByAjax")
}
// 渲染添加学生的页面
exports.addstudent=(req,res)=>{
    res.render("add")
}
// 点击添加按钮得到input的数据
exports.inserstudent=(req,res)=>{
    db.insert(req.body,function(dat){
        res.send(dat)
    })
    console.log(req.body)
}
// 向外暴漏一个接口，所有的学生信息
exports.allstudent=(req,res)=>{
    db.show(function(arr){
        res.json({"allStudent":arr})
        // console.log(arr)
    })
}