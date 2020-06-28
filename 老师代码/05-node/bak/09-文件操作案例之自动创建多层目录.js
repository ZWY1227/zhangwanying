/*
    现在的前端项目大部分都是基于自动化构建工具构建的，也叫脚手架，可以快递帮我们搭建一个项目结构。
    如：
        vue-cli
        create-react-app
        express-generator

    上面的工具都是基于node开发的，它们生成的目录结构是固定的。

    现在要生成一个目录，叫myapp，里面有css, js, imgs文件夹，还有index.html。

    补充：
        JSON： js对象  1）键必须使用引号包起来   2）里面不能放函数
            对象形式的JSON: {"name":"wangcai","age":100}
            数组形式的JSON：[{},{},{}]

        JSON对象 和 JSON字符串：
            ' {"name":"wangcai","age":100}'     字符串
             {"name":"wangcai","age":100}   对象

             JSON.parse(字符串)  ===>  把JSON字符串转化成JSON对象  
             JSON.stringfy(对象)  ===>  把JSON对象转化成JSON字符串

        默认从文件中读取出来的都是字符串。  
 */
let fs = require("fs");
let path = require("path");
let config = fs.readFileSync("./config.json","utf-8");
// console.log(typeof config);   // string
// 把字符串转成对象，然后.name 得到name属性
config = JSON.parse(config);  // object
// console.log(typeof config);
// 基于config创建目录

// console.log(config.name)
if(config.name){
    // 异步靠回调函数  函数什么时候调用  不用我们操作
    fs.mkdir(config.name, (err)=>{
        if(err) throw err;
        config.item.forEach(item=>{
            // item表示数组中每一个元素 
            let file = path.join(config.name, item.name);
            switch(item.type){
                case "dir":
                    fs.mkdir(file,(err)=>{
                        if(err) throw err;
                        console.log(`创建目录${file}成功了~`)
                    })
                    break;
                case "file":
                    fs.writeFile(file,item.content,"utf8",(err)=>{
                        if(err) throw err;
                        console.log(`创建文件${file}成功了~`)
                    })
                    break;
                default:
                    break;
            }
        });
    })
}


