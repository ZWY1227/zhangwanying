var express = require('express');
var db = require("../../models/db")
var router = express.Router();

// 渲染后台文章列表页面
router.get('/', function (req, res, next) {
    // 这里不能仅仅渲染文章列表了，还需要从数据库得到数据

    // 命令M去数据库中得到数据
    db.getAllArticles(function(result){
        res.render("admin/article_list",{data:result})
    });
});

// 渲染后台添加文章页面
router.get('/add', function (req, res, next) {
    // res.render("admin/article_add")
    // 命令M去数据库得到分类的数据
    db.getAllCats(function(result){
        // console.log(result)
        res.render("admin/article_add",{data:result})
    });
});

// 处理添加文章的逻辑
router.post('/add', function (req, res, next) {
    // 得到文章数据  body-parser 
    // console.log(req.body)
    var cat = req.body.cat;
    var title = req.body.ctitle;
    var summary = req.body.summary;
    var content = req.body.content;
    var time = new Date();
    var post = {  // post表示当前的文章
        "cat":cat,
        "title":title,
        "summary":summary,
        "content":content,
        "time":time,
    }

    db.saveArticle(post, function(result){
        if(result == 1){
            res.send('添加文章成功了 <a href="/admin/posts">查看分类列表</a>')
        }else{
            res.send('添加文章失败了 <a href="/admin/posts">查看分类列表</a>')
        }
    });

});

module.exports = router;
