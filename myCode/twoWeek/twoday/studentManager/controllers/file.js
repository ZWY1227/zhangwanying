let db = require("../models/db")
let express=require("express")
// 服务端渲染首页
exports.showIndexByEjs = (req, res) => {
    db.getStudents(function (arr) {
        res.render("indexByEjs", {
            "arr": arr
        })
    })
}
//客户端渲染首页
exports.showIndexByAjax = (req, res) => {
    res.render("indexByAjax");
}





// 服务端渲染添加学生页面
exports.addstudent = (req, res) => {
    res.render("add")
}
// 服务端获取添加学生页面的input内容
exports.doaddstudent = (req, res) => {
    // 这个地方得到req.body,然后命令models来操作数据
    // console.log(req.body)
    db.add(req.body, function (re) {
        // 返回结果给ajax
        res.send(re)
    })





}


























// 为客户端开一个api接口使用
exports.allstudent = (req, res) => {
    db.getStudents(function (arr) {
        res.json({ "results": arr })
    })
}
