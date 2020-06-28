var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 创建集合
  var dbase = db.db("student");
  let data = [
    {"语文":89},
    {"数字":80},
    {"计算机":100},
  ];
  dbase.collection("score").insertMany(data,function(err, res){
    if (err) throw err;
    console.log("文档插入成功");
    db.close();
  })
});







