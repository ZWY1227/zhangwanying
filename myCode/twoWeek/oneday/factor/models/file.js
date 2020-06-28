let fs=require("fs")
// 封装一个读文件的readAPI。
function read(number,callback){
    fs.readFile("./data/"+number+".txt",function(err,data){
        if(err){
            callback(-1);
            return;
        }
        var data=JSON.parse(data);
        callback(data);
    })
}
// 封装一个写入文件的api
function write(number,arr){
    let data=JSON.stringify(arr);
    fs.writeFile("./data/"+number+".txt",data,function(err,data){
        if(err)throw err;
        console.log("写入成功")
    })

}
exports.write=write;
exports.read=read;