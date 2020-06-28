var express = require('express');
var db = require("../../models/db")
var router = express.Router();

// 渲染后台分类列表页面
router.get('/', function (req, res, next) {
    db.getAllCats(function(result){  // 命令M得到数据
        // console.log(result)
        res.render("admin/category_list",{data:result})
    });  
});

// 渲染后台添加分类页面
router.get('/add', function (req, res, next) {
    res.render("admin/category_add")
});

// 渲染后台修改分类页面
router.get('/edit', function (req, res, next) {
    // 得到查询字符串
    let id = req.query.id;
    // console.log(id)

    // 命令M根据ID查找对应的分类  result就是M给你返回的数据
    db.getCatsById(id,function(result){
        // console.log(result)  // result[0] 得到的是数组中第1个元素
        res.render("admin/category_edit",{"data":result[0]})
    })
});

// 处理添加分类请求
router.post('/add', function (req, res, next) {
    // 1) 得到数据 
    // let ctitle = req.body.ctitle;
    // let csort = req.body.csort;

    // 2) 验证数据的合法性 

    // 3）向数据库插入数据
    db.insertCats(req.body,function(result){
        if(result == 1){
            res.send('添加分类成功了 <a href="/admin/cats">查看分类列表</a>')
        }else{
            res.send('添加分类失败了 <a href="/admin/cats">查看分类列表</a>')
        }
    });
});

// 处理编辑分类请求
router.post('/edit', function (req, res, next) {
    // console.log(req.body)
    // 命令M完成更新操作
    db.updateCatsById(req.body,function(result){
        if(result == "1"){
            res.send("更新成功了 <a href='/admin/cats'>返回列表</a>")
        }else{
            res.send("更新失败了 <a href='/admin/cats'>返回列表</a>")
        }
    });
});
module.exports = router;
