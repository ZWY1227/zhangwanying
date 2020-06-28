let fs=require("fs")
let url="./data"
exports.save=(phone,cook,callback)=>{
fs.writeFile(url+"/"+phone+".txt",cook,callback)
}
exports.readFiles=(callback)=>{
    fs.readdir(url,function(err,data){
        let arr=[]
        for(let i=0;i<data.length;i++){
            let a=data[i].substr(0,data[i].length-4)
            arr.push(a)
        }
        callback(arr)
    })
  
}
exports.readOneFile=(phone,callback)=>{
    fs.readFile(url+"/"+phone+".txt",function(err,data){
        // if(err)throw err;
        callback(data)
    })

}

