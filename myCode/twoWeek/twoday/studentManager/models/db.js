var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xuesheng";



function getStudents(callback) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbase = db.db("xuesheng")
    dbase.collection("hs1111").find({}).toArray(function (err, data) {
      if (err) throw err;
      callback(data)
      db.close();
    });
  });
};

function add(ddd, callback) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbase = db.db("xuesheng")
    dbase.collection("hs1111").insertOne(ddd, function (err, data) {
      if (err) {
        console.log("插入数据成功")
        callback("-1")
      }else{
        console.log("插入成功")
        callback("1")
      }
    })
    db.close();

  });
}







exports.getStudents = getStudents
exports.add = add







// 首先创建数据库，创建集合，插入数据，
// 在封装的api里查看是否拿到数据库里的数据，如果拿到了，就通过回电函数传给控制器
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/xuesheng";

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
// //   创建数据库成功
// var dbase=db.db("xuesheng")
// let data = [
//         {"name":"彭万里","age":28, "sex":"男", "provice":"河南"},
//         {"name":"高大山","age":24, "sex":"男", "provice":"北京"},
//         {"name":"谢大海","age":26, "sex":"男", "provice":"上海"},
//         {"name":"马继祖","age":21, "sex":"男", "provice":"河北"},
//         {"name":"程孝先","age":26, "sex":"男", "provice":"广州"},
//         {"name":"马宏宇","age":24, "sex":"男", "provice":"石家庄"},
//         {"name":"范长江","age":28, "sex":"男", "provice":"天津"},
//         {"name":"林君雄","age":29, "sex":"男", "provice":"河南"},
//         {"name":"李四光","age":20, "sex":"男", "provice":"河南"},
//       ];
// dbase.collection("hs1111").insertMany(data,function(err,data){
//     if(err){
//         console.log("插入数据失败")
//     }
//     console.log(data)
//     db.close()
// })
// });
// ;
