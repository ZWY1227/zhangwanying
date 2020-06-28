var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 创建集合
  var dbase = db.db("student");
  let where = {"语文":89};
  dbase.collection("score").find(where).toArray(function (err, result) { // 返回集合中所有数据
    if (err) throw err;
    console.log(result); // [ { _id: 5e7970c37f867b0e08284506, '语文': 89 } ]
    db.close();
  });
});







