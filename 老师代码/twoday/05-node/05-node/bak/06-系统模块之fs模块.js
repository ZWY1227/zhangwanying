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
        后端api  api接口  url

 */

//  =================================================  以下是对目录的操作
/* //  =============== mkdir 创建目录
// let fs = require("fs");
// fs.mkdir("src",(err)=>{  // 创建一层
//     // throw 表示抛出去一个错误
//     if(err) throw err;
//     console.log("创建目录OK~")
// })
// -------
// fs.mkdir("src/app",err=>{  // 不能一次性创建多层目录
//     if(err) throw err;
//     console.log("创建目录OK~") // no such file or directory
// })
// ------先创建src  然后创建app目录
fs.mkdir("src/app",err=>{  // 
    if(err) throw err;
    console.log("创建目录OK~") // 
}) */

/* //  =============== mkdir 创建目录
let fs = require("fs");
fs.rmdir("src",(err)=>{  // 创建一层
    // throw 表示抛出去一个错误
    if(err) throw err;
    console.log("删除目录OK~")
}) */

/* //  =============== mkdir 创建目录
let fs = require("fs");
fs.readdir("taobao",(err,data)=>{  
    if(err) throw err;
    console.log(data); // 读取成功后的数据
    // 读取文件夹和文件的名称然后放到数组中
    // [ 'css', 'imgs', 'index.html', 'js' ]
})
 */


//  =================================================  以下是对文件的操作
/* //  =============== readFile 异步读取
let fs = require("fs");  // node 中的 api 是错误优先的
console.log("任务x");
// 最早之前，异步使用回调函数实现
fs.readFile("./name.txt","utf-8",(err,data)=>{
    console.log(data); // data就是读取到的数据  wangcai  <Buffer 77 61 6e 67 63 61 69>
});
console.log("任务y"); */

/* //  =============== readFileSync  同步读取
let fs = require("fs");   
console.log("任务x");
let data = fs.readFileSync("./name.txt","utf-8");
console.log(data)
console.log("任务y"); */

/* //  =============== writeFile  覆盖式写文件  异步
let fs = require("fs");   
console.log("任务x");
fs.writeFile("./name.txt","heiheihei",(err,data)=>{  // 如果没有name.txt，会自动创建这个name.txt
    // console.log(data); // undefined  表示文件写法成功
    if(err){
        console.log(err,"写入文件失败~")
    }else{
        console.log("写入文件成功了~")
    }
})
console.log("任务y");
// while(true){  // 同步任务
// } */

/* // =============== appendFile  追加式写文件  异步
let fs = require("fs");   
// 异步靠回调函数
fs.appendFile("./name.txt","xixixi",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("写入文件成功了~")
    }
})
 */

/* // =============== stat  查看文件状态（属性）
let fs = require("fs");   
// 异步靠回调函数
fs.stat("./bak",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
// mode: 33206 表示是一个普通的文件   16822 表示是一个目录 */

/* // =============== unlink  删除文件
let fs = require("fs");   
fs.unlink("./age.txt",(err,data)=>{
    if(err) console.log(err)
    console.log("删除文件成功了~")
}) */

/* // =============== exists  判断文件是否存在
let fs = require("fs");   
let r = fs.existsSync("./name.txt");
console.log(r);  // false 表示不存在  true表示存在 */



/* // =============== 使用绝对路径 
let fs = require("fs");  
let path = require("path");
// \n  当成换行了 
// let filename = __dirname+"\name.txt"; // 直接拼接容易出问题
// console.log(filename)
console.log(path.resolve(__dirname, "name.txt"))
let r = fs.existsSync(path.resolve(__dirname, "name.txt"));
console.log(r); */
// console.log(__dirname); // c:\Users\Administrator\Desktop\200211JS-\05-node








