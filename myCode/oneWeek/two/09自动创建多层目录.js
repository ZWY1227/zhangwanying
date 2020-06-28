// var fs = require("fs");  
// var path = require("path");  
// function mkdir(dirname){
//     if(fs.existsSync(dirname)){
//         return true;
//     }else{
//         if(mkdir(path.dirname(dirname))){
//             fs.mkdirSync(dirname);
//             return true;
//         }
//     }
// }
// mkdir('app/html')
// mkdir('app/css')
// mkdir('app/imgs')
// mkdir('app/index.html')
// var fs = require("fs");  
// var path = require("path");  
  
// // 递归创建目录 异步方法  
// function mkdirs(dirname, callback) {  
//     fs.exists(dirname, function (exists) {  
//         if (exists) {  
//             callback();  
//         } else {  
//             // console.log(path.dirname(dirname));  
//             mkdirs(path.dirname(dirname), function () {  
//                 fs.mkdir(dirname, callback);  
//                 console.log('在' + path.dirname(dirname) + '目录创建好' + dirname  +'目录');
//             });  
//         }  
//     });  
// }  
// // 递归创建目录 同步方法
// function mkdirsSync(dirname) {
//     if (fs.existsSync(dirname)) {
//       return true;
//     } else {
//       if (mkdirsSync(path.dirname(dirname))) {
//         fs.mkdirSync(dirname);
//         return true;
//       }
//     }
//   }

// mkdirs('hello/a/b/c',() => {
//     console.log('done');
// })

// // mkdirsSync('hello/a/b/c');
// =========================================正式开始=======
// let fs=require("fs")
// let path=require("path")
// let json1=fs.readFileSync("./config.json",'utf-8')
// let json=JSON.parse(json1)
// fs.mkdir(json.name,(err)=>{
//     if(err) throw err;
//     json.item.forEach(item=>{
//         let file=path.resolve(json.name,item.name)
//         if(item.type=='dir'){
//             fs.mkdir(file,(err)=>{
//                 if(err)throw err;
//                 console.log(`创建目录${file}成功`)
//             })
//         }else if(item.type=='file'){
//             fs.writeFile(file,item.content,'utf-8',(err)=>{
//                 if(err) throw err;
//                 console.log(`创建文件${file}成功`)
//             })
//         }
//     })
// })
// ==========================创建多层文件第二遍============================
let fs=require("fs")
let path=require("path")
let json=fs.readFileSync("./config.json",'utf-8')
let config=JSON.parse(json)

if(config.name){
   file= fs.mkdirSync(config.name)
   config.item.forEach(item=>{
    let file=path.resolve(config.name,item.name)
    if(item.type=="dir"){
        fs.mkdirSync(file)
    }else if(item.type=="file"){
        fs.writeFileSync(file,item.content,'utf-8')
    }
})
}