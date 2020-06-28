let db = require("../models/db")

// 服务器把真实渲染好的页面返回给浏览器
exports.showIndexByEjs = (req,res)=>{
    // 得到数据库中真实数据，把页面和数据进行绑定后渲染
    db.getStudents(function(arr){
        res.render("indexByEjs",{
            "arr":arr
        })
    });
}

// 渲染显示学生页面
exports.showIndexByAjax = (req,res)=>{
    res.render("indexByAjax");
}

// 显示添加学生页面
exports.add = (req,res)=>{
    res.render("add");
}

// 处理添加学生逻辑
exports.doadd = (req,res)=>{
    // 得到数据  req.body
    // 命令M去写数据
    db.save(req.body,function(info){
        res.send(info)
    })
}

// 开一个接口  所有学生的
exports.allstudent = (req,res)=>{
    db.getStudents(function(arr){
        res.json({"results":arr})
    });
}









