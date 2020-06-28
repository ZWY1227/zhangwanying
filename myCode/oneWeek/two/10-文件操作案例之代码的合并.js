/* 
  为什么合并？
    把多个css或js文件进行合并，可以减少Http请求次数。
      
    在没有webpack之前，自己去网上找一个些工具，进行压缩合并。
    有了webpack，帮我们一键式的进行压缩合并。 webpack

    目标：把src目录下js目录下面的 1.js 和 2.js合并成一个文件，给它放到dist目录下面的main.js中。
        src    项目源码目录  
        dist   代码打包（合并，压缩....）后存放的目录
 */
let fs = require("fs");
let path = require("path");
fs.readdir("./src/js",(err,files)=>{
    if(err) throw err;
    let res = ""; // 容器 存放每一个文件中的内容
    // console.log(files); // [ '1.js', '2.js' ]
    files.forEach(file=>{
        let filename = path.join("src/js",file)
        // console.log(filename)  // src\js\1.js   src\js\2.js
        // fs.readFile(filename,"utf8",(err,data)=>{
        //     if(err) throw err;
        //     res += data;
        // })
        // 同步读取  同步任务是从上向下依次执行
        res += fs.readFileSync(filename,"utf8"); // 同步 靠返回值来获取结果
    })
    // console.log(res) //  function a(){ console.log("a...") }function b(){ console.log("b...") }

    let r = fs.writeFileSync("dist/main.js",res);
    if(!r){
        console.log("合并文件成功了~")
    }
})

// fs.watch  

