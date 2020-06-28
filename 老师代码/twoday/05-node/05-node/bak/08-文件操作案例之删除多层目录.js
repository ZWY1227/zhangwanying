// 针对删除多层目录操作  一般都会统一使用同步的api

/* let fs = require("fs");
let path = require("path")
// 删除多层目录
function removeDir(dir){
    let files = fs.readdirSync(dir);
    // console.log(files); // [ 'css', 'imgs', 'index.html', 'js' ]
    files.forEach(file=>{
        let filename = path.join(dir,file);
        // console.log(filename)
        let stats = fs.statSync(filename); // 使用同步的方法获取文件状态  晚上测试使用异步会有什么样问题
        if(stats.isFile()){
            // console.log("是文件~")
            // 删除文件 
            fs.unlinkSync(filename); 
            console.log(`删除文件${filename}成功~`)
        }else{
            // 是目录  递归调用removeDir
            removeDir(filename)
        }
    })
    fs.rmdirSync(dir); // 删除空目录
    console.log(`删除目录${dir}成功~`)
}
removeDir("myapp") */


// ============================ 使用异步
let fs = require("fs");
let path = require("path")
function removeDir(dir){
    fs.readdir(dir,(err,files)=>{
        if(err) throw err;
        // console.log(files) // [ 'css', 'index.html', 'js' ]
        files.forEach(file=>{
            let filename = path.join(dir,file);
            /* console.log(filename)
            myapp\css
            myapp\index.html
            myapp\js */
            fs.stat(filename,(err,stats)=>{
                if(err) throw err;
                // console.log(stats)
                if(stats.isFile()){
                    console.log(`${filename}是文件~`); // myapp\index.html是文件~
                    fs.unlink(filename,(err)=>{
                        if(err) throw err;
                        console.log(`删除${filename}成功了~`)
                    });
                }else{
                    // 是目录
                    removeDir(filename);
                }
            })
        })
        // 原因：上面的api是异步api  肯定不会立即执行 扔到异步任务队列 继续向下执行 fs.rmdir 发现并不目录就报错了
        // 删除空目录
        fs.rmdir(dir,(err)=>{
            if(err) throw err;
            console.log(`删除目录${dir}成功~`)
        })
    }) // : directory not empty, rmdir
}
removeDir("myapp");




