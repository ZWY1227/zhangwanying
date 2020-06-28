// 一般操作数据库  专门放到 models 这个文件夹
let fs = require("fs");
let baseurl = "./data"
// cai 是用户的数据   人家需要你再给我传递一个callback
// callback叫回调函数
exports.save = function(shoujihao, cai, callback){
    // console.log(shoujihao, cai)
    // 保存数据
    fs.writeFile(baseurl+"/"+shoujihao+".txt",cai, callback)
}









