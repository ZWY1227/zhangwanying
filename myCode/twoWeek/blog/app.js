var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let bodyParser=require("body-parser")
let session=require("express-session")
// 引入前台控制器
var indexRouter = require('./controllers/home/index');
let posts=require('./controllers/home/posts')
// 引入后台控制器
let admin=require("./controllers/admin/admin")
let cats=require("./controllers/admin/cats")
let artical=require("./controllers/admin/artical")
let user=require("./controllers/admin/user")

var app = express();

// 设置模板引擎为html后缀==
app.engine('html',require("ejs").__express);
app.set('view engine', 'html');
// 各种配置===================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// session
app.use(session({
  secret: 'username',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
// 静态资源托管，托管前台的所有静态资源，就是托管public==
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views/admin')));
// **************************************设置一级路由*********************************************************
// 前台的俩页面，（首页面和详情页面）
// index控制器
// posts控制器
app.use('/', indexRouter);
app.use('/posts',posts);
//后台(一级路由=========（后台首页，后台分类列表，后台文章列表）)
// admin控制器（后台首页）
//cats控制器（后台分类）
// artical控制器（后台文章）
// app.use('/admin/admin',nologin);
app.use('/admin/index',admin);
// app.use("/admin/cats",nologin)
app.use("/admin/cats",cats)
// app.use("/admin/artical",nologin)
app.use("/admin/artical",artical)

app.use("/admin/user",user)// 登录页面控制器（登录页面）
// ---------------------------写一个登录约束的中间件------------------------------------
// 定义一个中间件，检测用户是否登录
function nologin(req,res,next){
  if(!req.session.isLogin){
   res.redirect("/admin/user")
  }
  next()
}
// 当我们访问一个不存在的页面是就显示404
app.use('*',(req,res)=>{
  res.render("admin/404")
});

// ---------------------------- 错误处理中间件
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
