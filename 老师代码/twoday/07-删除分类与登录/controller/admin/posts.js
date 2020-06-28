var express = require('express');
var router = express.Router();

// 渲染后台文章列表页面
router.get('/', function (req, res, next) {
    res.render("admin/article_list")
});

// 渲染后台添加文章页面
router.get('/add', function (req, res, next) {
    res.render("admin/article_add")
});

module.exports = router;
