var express = require('express');
var db = require("../../models/db")
var router = express.Router();

// 渲染登录页面
router.get('/login', function(req, res, next) {
  res.render("admin/login")
});

// 处理登录的逻辑  
router.post('/signin', function(req, res, next) {
  // console.log(req.body)

  // 命令M，做一个对比查询
  db.findUser(req.body,function(result){
    if(result.length){
      // 表示数据库中有这个人
      // 设置sesssion
      req.session.isLogin = true;
      res.redirect("/admin/index")
    }else{ 
      res.redirect("/admin/users/login")
    }
  });
});

module.exports = router;
