
// 引入http模块，用于建立一个服务器
// 引入url用于获得完整的请求url
// 引入fs用于文件的操作
// 引入path用于获得文件的绝对路径
// 引入qs用于获得查询字符串
// 引入ejs用于获得模板引擎动态绑定html与json文件
let http=require("http")
let url=require("url")
let fs=require("fs")
let path=require("path")
let qs=require("querystring")
let ejs=require("ejs")
// 创建一个服务器
let server=http.createServer((req,res)=>{
    // 定义一个真是的url路径
    let realUrl="http://"+req.headers.host+req.url;
    // 通过url模块parse得到一个url对象
    let urlObj=url.parse(realUrl)
    // 通过url对象的路径名来判断路由信息
    switch(urlObj.pathname){
        // case "/":
        //     fs.readFile("index.html","utf-8",(err,data)=>{
        //         if(err) throw err;
        //         res.end(data)
        //     })
        //     break;
        // 如果请求了/，就去读取index.html文件
        case "/":
            // fs.readFile("index.html","utf-8",(err,data)=>{
            //     if(err) throw err;
            //     res.end(data)
            // })
            // break;
// =======================使用模板引擎把死数据换成真实的数据
// 把服务端的index.html和data.json绑定在一起，把数据渲染好再给浏览器
// 动态绑定html和json数据，渲染好给浏览器。通过renderFile来读取模板，<%%><%%>
/* <%= name %>*/
let arr=[];
if(fs.existsSync("data.json")){
    arr=require("./data.json");
}
ejs.renderFile("index.html",{msgs:arr},(err,data)=>{
    if(err)throw err;
    res.end(data)
})



// 这里是点击提交的时候数据发送的地方

        case "/dopublish":
            // 放一个空容器，用于接收从首页传送过来的数据
            let data="";
            // data参数接收查询字符串
            req.on("data",(thunk)=>{
                data+=thunk
            })
            // end参数当接收完毕后，将接收的查询字符串转成对象
            // 往这个对象上添加一个字段time，后面渲染页面的时候有用。
            // 记得把时间戳转为字符串new Date().toLocaleString()
            // 如果只是按照这个思路会覆盖前一条留言，所以要进行以下思路的判断
            req.on("end",()=>{
                // let msg=qs.parse(data)
                // // console.log(msg)
                // msg.time=new Date().toLocaleString()
                // // console.log(msg)
                // fs.writeFile("data.json",JSON.stringify(msg),"utf-8",(err,data)=>{
                //     if(err) throw err;
                //     console.log("保存留言成功了")
                // })
                // 这样只能保存一条留言，因为每次写入都会覆盖前面的一条留言
                // 所以我们定义一个数组，每次留言存储再数组中，有新的留言就push进去
                let msg=qs.parse(data)
                msg.time=new Date().toLocaleString()
                let arr=[]
                if(fs.existsSync("data.json")){
                    arr=require("./data.json");
                }
                arr.unshift(msg)
                fs.writeFile("data.json",JSON.stringify(arr),"utf-8",(err,data)=>{
                    if(err) throw err;
                    console.log("留言成功")
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
                    res.end("<h1>发表留言成功，<a href='/'>返回首页/查看所有留言</a></h1>")
                })
            })
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
})
server.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})