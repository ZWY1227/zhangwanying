var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;  // 得到ObjectId类型
var url = "mongodb://localhost:27017/wc_blog";
// 存储一个学生信息
function insertCats(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        dbo.collection("cats").insertOne(data, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                // callback(err); // 把错误信息返回给上层  
                callback("-1"); // -1代表插入失败了
            };
            // callback('添加数据成功了 <a href="/admin/cats">查看分类列表</a>'); // 1代表插入数据成功了
            callback("1"); // 1代表插入数据成功了
            console.log("文档插入成功");
            db.close();
        });
    });
}

// 获取分类的数据
function getAllCats(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        dbo.collection("cats"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            callback(result); // 数据传给控制器
            // console.log(result)
            db.close();
        });
    });
}

// 根据ID得到分类
function getCatsById(id, callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        dbo.collection("cats"). find({"_id":ObjectId(id)}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            // console.log(result);
            callback(result)
            db.close();
        });
    });
}

// 根据ID完成更新操作
function updateCatsById(data,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        var where = {_id:ObjectId(data.id)}  // 查询条件
        console.log(where)
        console.log(typeof where)
        var updateStr = {$set: { "ctitle" : data.ctitle, "csort":data.csort }};
        dbo.collection("cats").updateOne(where, updateStr, function(err, res) {
            if (err) callback("-1");
            // console.log("文档更新成功");
            callback("1")
            db.close();
        });
    });
}

// 根据ID完成删除操作
function deleteCatsById(id,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
        var whereStr = {"_id":ObjectId(id)};  // 查询条件
        dbo.collection("cats").deleteOne(whereStr, function(err, obj) {
            if (err) callback("-1");
            callback("1")
            console.log("文档删除成功");
            db.close();
        });
    });
}

// 根据用户名和密码在数据库中作对比查询
function findUser(user,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wc_blog");
         var whereStr = user;  // 查询条件
        dbo.collection("users").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
            db.close();
        });
    });
}

// 单元测试
// getAllCats(); // 单元测试  看一下  能否得到分类的数据
// getCatsById("5e7b1b28716bc7466cc184d1");
// updateCatsById({id:"5e7b1b28716bc7466cc184d1",ctitle:"学习类666",csort:11});
// deleteCatsById("5e7c2a3a1442fd1ae4ed19ed");  
// findUser({username:"admin",pwd:"admin"});

exports.insertCats = insertCats;
exports.getAllCats = getAllCats;
exports.getCatsById = getCatsById;
exports.updateCatsById = updateCatsById;
exports.deleteCatsById = deleteCatsById;
exports.findUser = findUser;



