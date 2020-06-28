/* 
 文件系统：
    使用JS在服务器端操作文件。  百度网盘：上传文件，下载文件，新建文件，打开文件夹，删除文件....

    任何服务器语言，对文件的操作是最常用最基本的操作。

    操作：增删改查

    文件：
        文件：创建，读取，写入，删除，获取文件信息
        目录：创建，读取，删除

    node中提出一个核心模块，叫fs。专门用来针对文件进行操作的。
        fs中封装了很多的方法：
            最基础（最底层）方法：open  close  read   write
            高级方法:readFile  writeFile  appendFile  stat  unlink  exists

            开发时，基本上使用的都是高级方法

            synchronization 同步的意思    sync 简写
            asynchronous  异步  async  简写

            高级方法又分两类：
                同步的方法：readFileSync  writeFileSync  appendFileSync  statSync unlinkSync  existsSync
                异步的方法：readFile  writeFile  appendFile  stat  unlink  exists(被废弃了)

    路径的处理：
        相对路径：css ./ ../ 用的比较多
        绝对路径：在服务端使用绝对路径比较多 __dirname

        node中提供了一个模块，对路径进行处理，叫path   也是一个系统核心模块

    目录操作：
        创建：mkdir   mk 是make的简写  制造  每一次只能创建一个目录
        读取：readdir  读取目录  读取文件夹和文件的名称然后放到数组中
        删除：rmdir  rm 是remove的简写  每一次只能删除一个空的目录

    api:
        代表一个方法  node中的api   代表node中的常用的方法
        后端api  api接口  url */
// 开始对文件的操作=============================================
/**
 * 读文件readFile
 * 写文件writeFile
 * 添加文件appendFile
 * 查看文件状态stat
 * 删除文件unlink
 * 查看文件是否存在existsSync
 */
//读文件readFile=========异步
// let fs=require("fs")
// fs.readFile("./zwy.txt","utf-8",function(err,data){
//     console.log(err)
//     console.log(data)
// })
// 读取成功data返回真实数据，err返回null
// 读取失败data返回undefined，err返回错误对象
//读文件readFile=========同步
// let fs=require("fs")
// let file=fs.readFileSync("./zwy.txt","utf-8");
// console.log(file)
// 正确返回数据，错误返回错误对象
//写文件readFile=================异步
// let fs=require("fs")
// fs.writeFile("./zy.txt","zhangyi",function(err,data){
//     console.log(err)
//     console.log(data)
//     //写入成功后，data返回undefined，err返回null
//     // 写入失败,data返回undefined，err返回错误对象
// })
//写文件readFile==================同步
// let fs=require("fs")
// let file=fs.writeFileSync("./zwy.txt","zhang")
//     console.log(file)
// 返回undefined表示写入成功
// 返回错误对象表示写入失败

// //追加文件appendFile=================异步
// let fs=require("fs")
// fs.appendFile("./zwy.txt","1314",function(err,data){
//     if(err){
//         console.log("追加失败")
//     }else{
//         console.log("追加成功")
//     }
// })
//追加文件appendFile=================同步
// console.log("asdf")
// let fs=require("fs")
// let file=fs.appendFileSync("./zy.txt","1314")
// console.log(file)
// console.log("zwy123")

//查看文件状态=================异步
// let fs=require("fs")
// fs.stat("./zwy.txt",function(err,data){
//     if(err){
//         console.log("查看失败",err)
//     }else{
//         console.log("查看成功",data)
//     }
// })
// 查看文件状态================同步
// let fs=require("fs")
// let file=fs.statSync("./zwy.txt")
// console.log(file)
//删除文件=================异步
// let fs=require("fs")
// fs.unlink("./zk.txt",function(err,data){
//     if(err){
//         console.log("删除失败",err)
//     }else{
//         console.log("删除成功",data)
//     }
// })
// 查看文件是否存在====================异步
// let fs = require("fs")
// fs.exists("./zy.txt", function (data) {
//     if (data) {
//         console.log(data)
//     }
// })
// 查看文件是否存在=====================同步
// let fs=require("fs")
// let file=fs.existsSync("./zy.txt")
// console.log(file)





// 开始对目录的操作=================== 
// 创建一个目录
// 删除一个目录
// 读取一文件夹以数组的形式展示出来
// 创建一个目录===========创建一个目录mkdir
// let fs=require("fs")
// fs.mkdir("myapp",(err,data)=>{
//         if(err){
//             console.log("创建目录失败",err)
//         }else{
//             console.log("创建目录成功",data)
//         }
// })
// let fs=require("fs")
// fs.mkdir("myapp/plugin",(err,data)=>{
//         if(err){
//             console.log("创建目录失败",err)
//         }else{
//             console.log("创建目录成功",data)
//         }
// })
// let fs=require("fs")
// fs.mkdir("myapp/css/common.css",(err,data)=>{
//         if(err){
//             console.log("创建目录失败",err)
//         }else{
//             console.log("创建目录成功",data)
//         }
// })
// let fs=require("fs")
// fs.mkdir("my/app",(err,data)=>{
//         if(err){
//             console.log("创建目录失败",err)
//         }else{
//             console.log("创建目录成功",data)
//         }
// })
// 不能一下子创建两层，只能一层一层的创建
// 删除一个目录=======================rmdir
// let fs=require("fs")
// fs.rmdir("app",(err,data)=>{
//     if(err){
//         console.log(err,"删除目录失败")
//     }else{
//         console.log(data,"删除目录成功")
//     }
// })
// 读取一个文件夹========================readir
// let fs=require("fs")
// fs.readdir("myapp/css",(err,data)=>{
//     if(err){
//         console.log(err,"读取失败")
//     }else{
//         console.log(data,"读取成功")}
// })
// 查看文件是否存在========相对路径==！！！！！！！！！！！！！！！！！
// let fs=require("fs")
// let file=fs.existsSync("./zwy.txt")
// console.log(file)
// 查看文件是否存在========绝对路径==！！！！！！！！！！！！
// let fs=require("fs")
// // let filename=__dirname+"\\zwy.txt"
// let file=fs.existsSync(__dirname+"\\zwy.txt")
// // console.log(filename)
// console.log(file)
// 查看文件是否存在========绝对路径==！！接用path的path.resolve(__dirname,"./zwy.txt")！！！！！！！！！！
// let fs=require("fs")
// let path=require("path")
// let filename=path.resolve(__dirname,"./zwy.txt")
// console.log(filename)
// let file=fs.existsSync("./zwy.txt")
// console.log(file)