/* 
  dos命令操作：
    cls 清屏
    cd 切换目录   cd c:/  切换到c目录
    dir 列表当前目录下都有哪些文件或目录
    ... 

  =================================== res
  res:
    writeHead  把一个响应头写入请求  
    write  把数据写入响应正文
    end    完成响应，也可以写入响应正文
    setHeader  设置特定的HTTP头信息

    可以根据http响应的三个组成部分来写代码：
        响应行（状态行），使用statusCode属性
        响应头，可以使用setHeader或者writeHead
        响应正文，使用write方法或者end方法
 */
/* let http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html;charset=utf-8"});
    res.write("<h1>hello 你好~</h1>");
    res.end("lalala");
}).listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})
 */

/*
  =================================== req
  req:
    httpVersion  请求的HTTP版本  
    headers  请求头信息
    method    请求方式
    rawHeaders  原始请求头信息
    url   请求的URL   非常重要~~~~

    事件：
        data事件   数据流动时触发
        end事件  数据流动完毕后触发
        表示提交与post请求时用到。

 */

/* let http = require("http");
http.createServer((req, res) => {
    // console.log(req.httpVersion);
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url); // / 默认的req.url并不是一个完事的url
    let data = "";
    // 先不要管查询字符串   先研究路径名
    switch (req.url) {
        case "/":
            data = "<h1>首页面</h1>";
            break;
        case "/shop":
            data = "<h1>购物车页面</h1>";
            break;
        case "/order":
            data = "<h1>订单页面</h1>";
            break;
        default:
            data = "你的页面飞了~"
    }
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
    res.write(data);
    res.end();
}).listen(3000, () => {
    console.log("服务器在3000端口启动了~")
}) */

// =================================== url模块  querystring模块
let http = require("http");
// node中提供了一个url模板，解析url
let url = require("url");  // url.parse()
let qs = require("querystring"); // 解析查询字符串
// 利用Url模块解析url得到一个对象，如下：
/* Url {
    protocol: null,   // 协议
    slashes: null,
    auth: null,  // 身份校验
    host: null,   // 域名（主机）
    port: null,  // 端口
    hostname: null,  // 主机名
    hash: null,  // hash值
    search: null,  // 查询字符串  多了一个?
    query: null,    // 查询字符串
    pathname: '/',  // 路径名
    path: '/',   // 路径 
    href: '/'
  } */
// 再看
/* Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?name=%22wangcai%22&age=100',
    query: 'name=%22wangcai%22&age=100',   用的比较多
    pathname: '/shop/list',   用的也比较多
    path: '/shop/list?name=%22wangcai%22&age=100',
    href: '/shop/list?name=%22wangcai%22&age=100'
  } */
  
  
http.createServer((req, res) => {
    // console.log(req.url); // /  /shop   /list
    let urlObj = url.parse(req.url);
    // console.log(urlObj)

    // 解析查询字符串  urlObj.query
    let qObj = qs.parse(urlObj.query); // 解析查询字符串
    // console.log(qObj); // { a: '123' }  qObj.a 

    let data = "";
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
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
    res.write(data);
    res.end();
}).listen(3000, () => {
    console.log("服务器在3000端口启动了~")
})

// fs  http  path  url  querystirng   最基本的模块



