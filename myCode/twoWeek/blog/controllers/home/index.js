var express = require('express');
var router = express.Router();
let db=require("../../models/db")

// 前台首页面
router.get('/', function(req, res, next) {
  db.findArt(function(data){
    // console.log(data)
     res.render('home/index',{
       data:data
     });

  })
 

});

module.exports = router;
