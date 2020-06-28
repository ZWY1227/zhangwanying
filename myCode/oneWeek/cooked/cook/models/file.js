let fs=require("fs")
let url="./data"
exports.save=(phone,cooker,callback)=>{
    fs.writeFile(url+"/"+phone+".txt",cooker,callback)
}
exports.getAllFilesName=(callback)=>{
    fs.readdir(url,function(err,data){
        if(err)throw err;
        let arr=[]
        for(let i=0;i<data.length;i++){
            arr.push(data[i].substr(0,data[i].length-4))
        }
        callback(arr)
    })
}
exports.read=(phone,callback)=>{
    fs.readFile(url+"/"+phone+".txt",function(err,data){
        if(err)throw err;
        callback(data)
    })
}
