// 我们现在没有数据库,只有找个文件进行存储,存储的文件名称为查询字符串的第一个:手机号:文件内容就是所点的菜cooker
// 这个时候callback就是写入成功还是写入失败来触发order里面的1,或者-1,哈哈哈哈,搞定了,结束
let fs=require("fs")
let url="./data"
exports.save=(phone,cooker,callback)=>{
    fs.writeFile(url+"/"+phone+".txt",cooker,callback)
}
exports.read=(callback)=>{
    fs.readdir(url,(err,data)=>{
        if(err)throw err;
        let arr=[];
        for(let i=0;i<data.length;i++){
            dat=data[i].substr(0,data[i].length-4)
            arr.push(dat)
        }
        callback(arr)
    })
}
exports.readFiles=(phone,callback)=>{
    fs.readFile(url+"/"+phone+".txt",function(err,data){
        if(err)throw err;
        callback(data)
        // console.log(data)
    })

}