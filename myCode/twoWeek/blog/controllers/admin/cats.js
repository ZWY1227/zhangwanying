var express = require('express');
let db = require("../../models/db")
var router = express.Router();

/* GET home page. */
// 渲染分类列表
router.get('/', function (req, res, next) {
  db.save(function (arr) {
    res.render('admin/category_list', {
      "arr": arr
    });
  })
});

// 添加分类
router.get('/add', function (req, res, next) {
    res.render('admin/category_add')
});
// 获得添加分类页面提交后的提交信息
router.post('/add', function (req, res, next) {
  //  console.log(req.body)
  db.insert(req.body, function (result) {
    // res.send(result)
    if (result == "1") {
      res.send('<h1>添加分类成功 <a href="/admin/cats">查看分类列表</a></h1>')
    } else {
      res.send('<h1>添加分类失败 <a href="/admin/cats">查看分类列表</a></h1>')
    }
  })
});



// 编辑分类
router.get('/edit', function (req, res, next) {
  // console.log(req.query.id)
  let id=req.query.id
  db.edit(id,function(data){
    console.log(data)
      res.render('admin/category_edit',{
        data:data
      });
  })
  
});
// 提交编辑分类内容
router.post("/doedit",function(req,res,next){
  // console.log(req.body)
  db.doedit(req.body,function(result){
    // console.log(req.body)
    console.log(result)
    if(result=="1"){
      res.send('<h1>编辑分类成功 <a href="/admin/cats">查看分类列表</a></h1>')
    }else{
      res.send('<h1>编辑分类失败了 <a href="/admin/cats">查看分类列表</a></h1>')

    }
 

  })
})


// 删除分类
router.get("/delete/:id",function(req,res,next){
  // console.log(req.params)
  db.del(req.params,function(dat){
    console.log(dat)
    if(dat=="1"){
      res.redirect("/admin/cats")
    }else{
     return ;
    }
  })

})









module.exports = router;
