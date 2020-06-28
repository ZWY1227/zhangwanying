// 对数据进行操作
let fs = require("fs");
let baseurl = "./data"

/**
 * 保存订单到文件中
 */
exports.save = (shoujihao,cai,callback)=>{
    // 把数据写入文件   一个手机号就存储一个文件  里面保存着这个手机号要吃什么
    fs.writeFile(baseurl+"/"+shoujihao+".txt",cai, callback)
}
/**
 * 获取所有的订单信息（就是获取手机号） let a=b=122;
 */
exports.getAllFilesName = (callback)=>{
    fs.readdir(baseurl,function(err,filenameArray){
        if(err){
            // throw err; 
            throw new Error("读取订单清单错误~")
        }
        // console.log(filenameArray) // [ '000.txt', '666.txt', '888.txt' ]
        let resutlArr = []; // 保存不带txt的手机号
        for(let i=0; i<filenameArray.length; i++){
            // console.log(filenameArray[i])
            // console.log(filenameArray[i].substr(0,filenameArray[i].length-4));
            resutlArr.push(filenameArray[i].substr(0,filenameArray[i].length-4))
        }
        // console.log(resutlArr); // [ '000', '666', '888' ]
        callback(resutlArr)
    })
}
// getAllFIlesName();  // 写好后，先测试一下，测试一个函数，也叫单元测试


/**
 * 读取某个订单的数据
 */
exports.read = (shoujihao,callback)=>{
    fs.readFile(baseurl+"/"+shoujihao+".txt",function(err,data){
        if(err){
            // 这个文件不存在  读取失败了
            callback(-1);
            return ; // 读取失败了 直接使用reutrn结束程序
        }
        callback(data)
    })
}