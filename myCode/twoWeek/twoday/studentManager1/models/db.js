
// 连接数据库，练级连接表
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xuesheng";
// 从数据库中拿到数据然后渲染到页面上
 function show(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("xuesheng");
        dbase.collection("hs1111"). find({}).toArray(function(err, dat) { // 返回集合中所有数据
            if (err) throw err;
            callback(dat); // 数据传给控制 
            // console.log(dat)
            db.close();
        });
    });
 }
 function insert(info,callback){
     console.log(info)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbase = db.db("xuesheng");
        dbase.collection("hs1111").insertOne(info,function(err,data){
            if(err){
                console.log("插入数据失败")
                callback("-1")
            }else{
                console.log("插入数据成功")
                callback("1")
                db.close();
            }
        })
            
        });
   
 }
exports.show=show;
exports.insert=insert;