// 删除多个目录操作，一般都会统一使用同步的api，因为是从上往下执行代码不会有错
// 此个案例会牵扯到递归，没事复习一个递归操作。
// 思路:
/**
 * 首先fs.stat查看该目录中的所有信息,无论是文件还是二目录
 * 然后经过上一步的操作会返回给我们一个数组
 * 利用数组的foreEach方法,循环遍历每一个文件
 * 得到每一个文件后,首先查看该文件的状态,
 * stat有一个isFile()方法就是一个文件,否则就是一个目录
 * 如果是一个文件就删除它,如果不是就接着递归查询它的下一级是不是文件,知道查询完毕
 * PS:最后如果目录内全部文件删除完毕,就剩下一个空目录
 * 就用rmdir的方式删除这个空目录
 */
// let fs=require("fs")
// let path=require("path")
// function removedir(dir){
//     let filess=fs.readdirSync(dir)
//     // console.log(file)
//     filess.forEach(file=>{
//         // console.log(file)
//         let filename=path.join(dir,file)
//         // console.log(filename)
//         let stat=fs.statSync(filename)
//         // console.log(stat)
//         if(stat.isFile()){
//             fs.unlinkSync(filename)
//             console.log(`删除文件${filename}成功`)
//         }else{
//             removedir(filename)
//         }
//     })
//     fs.rmdirSync(dir)
//     console.log(`删除${dir}成功`)
// }
// removedir("myapp")
// ===============================使用同步的方式删除多层目录===================================================
// let fs=require("fs")
// let path=require("path")
// function removedir(dir){
//     let files=fs.readdirSync(dir)
//     // console.log(files)
//     files.forEach(file=>{
//         // console.log(file)
//         let filename=path.join(dir,file)
//         // console.log(filename)
//         let stat=fs.statSync(filename)
//         // console.log(stat)
//         if(stat.isFile()){
//             fs.unlinkSync(filename)
//             console.log(`删除文件${filename}成功`)
//         }else{
//             removedir(filename)
//         }
//     })
//     fs.rmdirSync(dir)
//     console.log(`删除文件${dir}成功`)
// }
// removedir("myapp1")
// ===============================使用异步的方式删除多层目录===================================================
let fs=require("fs")
let path=require("path")
function removedir(dir){
   fs.readdir(dir,(err,data)=>{
        if(err){
            console.log(err,"读取文件失败")
        }else{
            // console.log(data,"读取文件成功")
            data.forEach(item=>{
                // console.log(item)
                let filename=path.join(dir,item)
                // console.log(filename)
                fs.stat(filename,(err,stats)=>{
                    if(err){
                        console.log(err,"查看文件状态失败")
                    }else{
                        // console.log(data,"查看文件状态成功")
                        if(stats.isFile()){
                            fs.unlink(filename,(err,data)=>{
                                if(err){
                                    console.log(err,"删除文件失败")
                                }else{
                                    console.log(data,"删除文件成功")
                                }
                        })
                    }
                }
                })
                  
                
            })
            // 原因：上面的api是异步api  肯定不会立即执行 扔到异步任务队列 继续向下执行 fs.rmdir 发现并不目录就报错了
             // 删除空目录
            fs.rmdir(dir,(err)=>{
                if(err) throw err;
                console.log(`删除目录${dir}成功`)
            })
        }
   })
}
removedir("myapp2")
// 报错信息
// [Error: ENOTEMPTY: directory not empty, rmdir 'd:\node\myCode\two\myapp2'] {
//     errno: -4051,
//     code: 'ENOTEMPTY',
//     syscall: 'rmdir',
//     path: 'd:\\node\\myCode\\two\\myapp2'
//   }