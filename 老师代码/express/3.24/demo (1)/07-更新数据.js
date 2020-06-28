var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 创建集合
  var dbase = db.db("student");
  // 目标把语文成绩变成100
  let where = { "语文": 89 };
  var updateStr = { $set: { "语文": 100 } };
  dbase.collection("score").updateOne(where, updateStr, function (err, res) {
    if (err) throw err;
    console.log("文档更新成功");
    db.close();
  })
});







