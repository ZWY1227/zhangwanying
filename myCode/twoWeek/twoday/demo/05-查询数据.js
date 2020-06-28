var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 创建集合
  var dbase = db.db("student");
  dbase.collection("score").find({}).toArray(function(err,res){
      if(err){
          console.log("查询失败")
      }else(
          console.log(res)
      )
      db.close();
  })
//   数据库已创建!
// [
//   { _id: 5e798e22d58c9845c48212aa, '英语': 99 },
//   { _id: 5e798e6e0007122588ef4772, '语文': 89 },
//   { _id: 5e798e6e0007122588ef4773, '数字': 80 },
//   { _id: 5e798e6e0007122588ef4774, '计算机': 100 }
// ]







 
});
;