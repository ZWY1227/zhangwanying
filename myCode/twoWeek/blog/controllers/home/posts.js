var express = require('express');
var router = express.Router();
let db=require("../../models/db")
/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.query)
  let id=req.query.id
  db.findArtone(id,function(result){
    // console.log(result)
      res.render('home/article',{
        data:result[0]
      });
  })

});


module.exports = router;
