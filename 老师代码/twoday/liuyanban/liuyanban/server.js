let http = require("http");
let url = require("url");
let fs = require("fs");
let path = require("path");
let qs = require("querystring")
let ejs = require("ejs"); 
let server = http.createServer((req,res)=>{
    let realUrl = "http://"+req.headers.host+req.url;
    let urlObj = url.parse(realUrl);
    switch(urlObj.pathname){
        case "/":
            /* // ================ 下面代码仅仅是返回index.html 里面的数据是死数据
            fs.readFile("index.html","utf8",(err,data)=>{
                if(err) throw err;
                res.end(data)
            })
            break; */

            // ================ 使用模板引擎把死数据换成真实数据 
            // 把服务器端的index.html和data.json绑定在一起，把数据渲染好再给浏览器
            // 服务湍渲染：在服务器端把页面先渲染好（把假数据换成真数据） 再返回给浏览器  ejs
            // 客户端渲染：浏览器/Ajax 向 服务器要数据 然后自己渲染

            // 把数据得到
            let arr = []; 
            if(fs.existsSync("data.json")){
                arr = require("./data.json");
            }
            // arr此时就是数据了 index.html和data.json绑定在一起
            // 第1上参数是html文件  第2个参数是对象里面可以放多个不同的类型的数据
            ejs.renderFile("index.html",{msgs:arr},(err,html)=>{
                // err表示出错的信息  html就是两者绑定后的模板（有html也有数据）
                if(err) throw err; 
                res.end(html)  // 给浏览器返回模板    返回之前把假数据换成真数据
            })
            
            break;
        case "/dopublish":
            // 得到客户端提交过来的数据   data  end
            let data = ""; // 装客户端传递过来的数据的
            req.on("data",(chunk)=>{
                data += chunk;
            })
            req.on("end",()=>{
                /* // ========================== 下面的代码 可以实现写入 但是后面写入的内容会覆盖前面的
                let msg = qs.parse(data);
                // console.log(msg)
                // 给msg添加一个时间的字段
                msg.time = new Date().toLocaleString();
                // console.log(msg);
                // 想一下，数据应该保存什么地方   data.json   wirteFile
                // 如果要想往文件中写数据，数据一定要是一个字符串  现在还需要把msg转成字符串
                // writeFile 有覆盖性
                fs.writeFile("data.json",JSON.stringify(msg),"utf8",(err)=>{
                    if(err) throw err; 
                    console.log("保存留言成功了~")
                }) */

                // ========================== 
                let msg = qs.parse(data); // 是每一次新的留言
                msg.time = new Date().toLocaleString();
                let arr = [];  // [{},{},{},{}]
                // 先把data.json删除了  第1次就不会走if了  直接把新的数据推送到arr
                // arr中就新数据  然后把arr写入到data.json中  此时data.json就存在了

                // 当你又一次发表留言，此时data.json已经存在，把data.json中的数据require进来给arr
                // arr中就有老数据了  此时msg是新数据  把新数据推送到arr 然后又把arr写入到data.josn
                if(fs.existsSync("data.json")){
                    arr = require("./data.json"); // arr里面就保存之前的留言
                }
                arr.unshift(msg); // arr中有老的留言和新的留言
                fs.writeFile("data.json",JSON.stringify(arr),"utf8",(err)=>{
                    if(err) throw err; 
                    // console.log("保存留言成功了~")
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end("<h1>发表留言成功了，<a href='/'>返回/查看所有留言</a></h1>")
                })
            })

            


            // 如果把数据渲染到页面中  ejs 模板引擎   
            break;
        default:
            let filename = path.join(__dirname, urlObj.pathname)
            if(fs.existsSync(filename)){
                fs.readFile(filename,(err,data)=>{
                    if(err) throw err;
                    res.end(data);
                })
            }else{
                res.end();
            }
            break;
    }
});
server.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})