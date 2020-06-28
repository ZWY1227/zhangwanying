
// 连接数据库，练级连接表
var MongoClient = require('mongodb').MongoClient;
let ObjectId=require('mongodb').ObjectId
var url = "mongodb://localhost:27017/artical";
// 添加分类
function insert(info,callback){
    console.log(info)
   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
       if (err) throw err;
       var dbase = db.db("artical");
       dbase.collection("cats").insertOne(info,function(err,data){
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
// 分类列表
function save(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        dbase.collection("cats"). find({}).toArray(function(err, dat) { // 返回集合中所有数据
            if (err) throw err;
            callback(dat); // 数据传给控制 
            // console.log(dat)
            db.close();
        });
    });
 }
//编辑分类
function edit(id,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        dbase.collection("cats"). find({"_id":ObjectId(id)}).toArray(function(err, dat) { // 返回集合中所有数据
            if (err) throw err;
            callback(dat); // 数据传给控制 
            // console.log(dat)
            db.close();
        });
    });

}
//更新分类
function doedit(list,callback){
    // console.log(list)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        let where={_id:ObjectId(list.catsId)}
        let updat={$set:{"title":list.catsTitle,"sort":list.catsSort}};
        dbase.collection("cats").updateOne(where,updat,function(err, dat) { // 返回集合中所有数据
            if (err) throw err;
            console.log("更新成功")
            callback("1"); 
            db.close();
        });
    });

}
//删除分类
function del(catlist,callback){
    // console.log(catlist)

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        let where={_id:ObjectId(catlist.id)}
        dbase.collection("cats").deleteOne(where, function(err, obj){ // 返回集合中所有数据
            if (err) throw err;
            console.log("文档删除成功")
            callback("1"); 
            db.close();
        });
    });
}
// 登录信息
function Login(loginlist,callback){
    // console.log(loginlist)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbase = db.db("artical");
        dbase.collection("user").find(loginlist).toArray(function(err, dat) {
            if(err) throw err
          callback(dat)})
    })  
}
// =================================================================
//插入文章
function insertAtical(articalList,callback){
    // console.log(articalList)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbase = db.db("artical");
        dbase.collection("art").insertOne(articalList,function(err,data){
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
// 查询所有文章
function findArt(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        dbase.collection("art"). find({}).toArray(function(err, dat) { // 返回集合中所有数据
            if (err) throw err;
            callback(dat); // 数据传给控制 
            // console.log(dat)
            db.close();
        });
    });
 }
// 按条件查询一个文章信息（前台详情）
function findArtone(id,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        dbase.collection("art"). find({"_id":ObjectId(id)}).toArray(function(err, dat) { // 返回集合中所有数据
            if (err){
                console.log("查询失败");
                callback(err)
            }
            callback(dat); // 数据传给控制 
            // console.log(dat)
            db.close();
        });
    });




}
// 按条件查询一个文章信息（后台编辑）
function findEdit(idE,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        dbase.collection("art"). find({"_id":ObjectId(idE)}).toArray(function(err, datLI) { // 返回集合中所有数据
            if (err){
                console.log("查询失败");
                callback(err)
            }else{
                callback(datLI); // 数据传给控制 
                // console.log(dat)
                db.close();
            }
            
        });
})
}
// 更新文章
function updataEdit(editl,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        let where={_id:ObjectId(editl.id)}
        let updat={$set:{"title":editl.title,"time":editl.time,"summary":editl.summary,"content":editl.content}};
        dbase.collection("art").updateOne(where,updat,function(err) { // 返回集合中所有数据
            if (err) throw err;
            console.log("更新成功")
            callback("1"); 
            db.close();
        });
    });

}
// 删除文章
function artDel(id,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        // console.log("数据库已创建!");
        var dbase = db.db("artical");
        let where={_id:ObjectId(id)}
        dbase.collection("art").deleteOne(where, function(err, obj){ // 返回集合中所有数据
            if (err) throw err;
            console.log("文档删除成功")
            callback("1"); 
            db.close();
        });
    });
}







      







exports.insert=insert;//增加分类
exports.save=save;//所有分类

exports.edit=edit;//查询分类
exports.doedit=doedit;//更新分类

exports.del=del;//删除分类
// =====================================
exports.insertAtical=insertAtical;//增加文章
exports.findArt=findArt;//所有文章
exports.findEdit=findEdit;//根据id查找文章（后台编辑）
exports.updataEdit=updataEdit//更新文章
exports.artDel=artDel//删除文章（id）
exports.findArtone=findArtone;

exports.Login=Login;