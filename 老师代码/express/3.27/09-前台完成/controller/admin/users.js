var express = require('express');
var db = require("../../models/db")
var router = express.Router();

// 渲染登录页面
router.use("/login", checkNotLogin);
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

// 处理退出登录
router.get('/logout', function(req, res, next) {
  // 清除session 
  req.session.isLogin = null;
  res.redirect("/admin/index")
});


// 判断用户是否已经登录了 
function checkNotLogin(req, res, next){
  if(req.session.isLogin){
    // 表示已经登录，假如你已经处于后台首页面，你再访问登录页面，直接让它跳到后台首页面（原来的页面）
    res.redirect("/admin/index")

    // back 后面查一下怎么用？？？？
  }
  next();
}

module.exports = router;
