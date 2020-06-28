var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入控制器（二级路由）
var indexRouter = require('./controller/index');  // 前台首页面的控制器
var posts = require('./controller/posts'); // 前台详情页面的控制器
var admin = require('./controller/admin'); // 前台详情页面的控制器






var usersRouter = require('./controller/users');

var app = express();

// 设置模板引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine("html",require("ejs").__express);
app.set('view engine', 'html');



// 配置一些中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views/admin')));

// 前台首页面
app.use('/', indexRouter);  // 当访问 /  就交给indexRouter进行处理
// 前台详情页面
app.use("/posts", posts);  // 当访问 /posts 时 就交给post这个控制器
// 后台首页面
app.use("/admin/index",admin); // 当访问admin/index 就交给admin这个控制器








app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
