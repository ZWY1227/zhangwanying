let db=require("../models/db")
// 服务器使用ejs来渲染首页面
exports.showIndex=(req,res)=>{
    db.show(function(arr){
        res.render("indexByEjs",{
            "arr":arr
        })
    })
}
exports.ajaxindex=(req,res)=>{
    res.render("indexByAjax")
}
exports.addstudent=(req,res)=>{
    res.render("add")
}
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