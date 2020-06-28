let fs = require("fs");
function read(number,callback){
    fs.readFile("./data/"+number+".txt",function(err,data){
        if(err){
            callback(-1);  // 返回给上层
            return;
        }
        var data = JSON.parse(data);
        callback(data); // 在控制器就可以得到数据  // 返回给上层
    })
}
function write(number,arr){
    let data = JSON.stringify(arr);
    fs.writeFile("./data/"+number+".txt",data, function(){
        // .... 
    })
}

exports.write = write;
exports.read = read;






