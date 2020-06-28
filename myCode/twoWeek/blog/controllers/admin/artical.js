var express = require('express');
var router = express.Router();
var db = require("../../models/db")

/* GET home page. */

// 渲染文章列表页面（变成真实数据，哈哈哈哈）
router.get('/', function (req, res, next) {
  db.findArt(function (data) {
    console.log(data)
      res.render('admin/article_list',{
      data:data
      })
  })

});
// 渲染添加文章页面
router.get('/add', function (req, res, next) {
  db.save(function (data) {
    res.render('admin/article_add', {
      data: data
    });
  })
  // 获得添加文章表单信息，插入到数据库中
router.post('/add', function (req, res, next) {
    let cat = req.body.cat;
    let summary = req.body.summary;
    let content = req.body.content;
    let title = req.body.title;
    let time = new Date();
    // console.log(cat,summary,content,title,time)
    let dat = {
      cat: cat,
      title: title,
      time: time,
      summary: summary,
      content: content
    }
    //添加文章
    db.insertAtical(dat, function (result) {
      console.log(result)
      if (result == "1") {
        // console.log("插入文章成功")
        res.redirect("/admin/artical")
      } else {
        console.log("未得到数据")
      }
    })

  })
});
// =========================================
// 渲染编辑文章页面
router.get("/edit",function(req,res,next){
  let id=req.query.id
  db.findEdit(id,function(editData){
    console.log(editData[0])
    res.render("admin/artical_edit",{
      data:editData[0]
    })
  })
  
})
router.post("/edit",function(req,res,next){
  // console.log(req.body)
    let cat = req.body.cat;
    let summary = req.body.summary;
    let content = req.body.content;
    let title = req.body.title;
    let time = new Date();
    let id=req.body.id
    // console.log(cat,summary,content,title,time,id)
    let dat = {
      id: id,
      cat: cat,
      title: title,
      time: time,
      summary: summary,
      content: content
    }
    db.updataEdit(dat,function(ress){
      // console.log(ress)
      if(ress=="1"){
        res.send("<h1>编辑更新成功</h1><a href='/admin/artical'>点击返回文章列表</a>")
      }else{
        res.send("<h1>编辑更新失败</h1><a href='/admin/artical'>点击返回文章列表</a>")
      }

    })
})
// 删除文章
router.get("/delete/:id",function(req,res,next){
  // console.log(req.params.id)
  let id=req.params.id
  db.artDel(id,function(data){
    // console.log(data)
    if(data=="1"){
      res.send("<h1>删除成功</h1><a href='/admin/artical'>点击返回文章列表</a>")
    }else{
      res.send("<h1>删除失败</h1><a href='/admin/artical'>点击返回文章列表</a>")
    }
  })
})

module.exports = router;
