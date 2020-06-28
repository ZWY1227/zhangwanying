/* 
    刚才写了如下代码：
        switch (urlObj.pathname) {
            case "/":
                data = "<h1>首页面</h1>";
                break;
            case "/shop":
                data = "<h1>购物车页面</h1>";
                break;
            case "/order":
                data = `<h1>订单页面，名字是${qObj.name}</h1>`;
                break;
            default:
                data = "你的页面飞了~"
        }
    前端开始好的页面是由Html+CSS+JS构成的，也叫静态资源。
    作为后端，如何让别人访问静态资源呢？
     之前方式 使用github托管   所有人都可以访问 
     现在，学习了node，如何使用node来托管静态资源呢？
        如：localhost:3000/index.html  -----> html文件

    对于状态码和状态描述术是程序自己写的。
 */
// ============================  下面的代码，要有的浏览器中不能实现效果，原因，我们写的代码不完善
let http = require("http");
let url = require("url");
let fs = require("fs");
let path = require("path");
let server = http.createServer((req,res)=>{
    let realUrl = "http://"+req.headers.host+req.url;
    let urlObj = url.parse(realUrl);
    // 告诉浏览器响应的内容是html  什么也不告诉浏览器  让浏览器自己去识别
    // 有的浏览器不能识别你是什么类型的文件，可以效果显示不出来
    // res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    switch(urlObj.pathname){
        case "/":
            fs.readFile("index.html","utf8",(err,data)=>{
                if(err) throw err;
                res.end(data)
            })
            break;
        default:
            // 最好判断文件的后缀  如果是css 告诉浏览器它是css  如果是图片 告诉浏览器它是图片
            // console.log(urlObj.pathname)
            let filename = path.join(__dirname, urlObj.pathname)
            // console.log(filename)
            if(fs.existsSync(filename)){
                // console.log(`${urlObj.pathname}这个文件存在~`)
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