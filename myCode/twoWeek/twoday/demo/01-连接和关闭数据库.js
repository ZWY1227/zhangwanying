var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xuexi"; 
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建成功，去可视化工具里面刷新查看哦!");
  // 创建集合，插件文档，CRUD操作.... 

  // 由于没有插入集合  数据库是没有创建OK的

  // 最后一步需要关闭数据库
  db.close();
});
