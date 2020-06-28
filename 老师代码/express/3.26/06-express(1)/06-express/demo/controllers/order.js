let files = require("../models/files")
/**
 * 显示首页面
 */
exports.showIndex = (req,res)=>{
    // 当访问/ 把index.ejs返回
    // path must be absolute or specify root to res.sendFile
    // let filename = path.join(__dirname, "./views/index.html");
    // console.log(filename);
    // sendFile  仅仅是发送一个页面给浏览器
    // res.sendFile(filename);  // 使用sendFile可以发送一个访问给浏览器

    // 上面的方式好使，我们用的更多的是res.render() 渲染一个页面给浏览器
    // res.render()  render可以把页面和数据进行绑定  把真实数据融合到页面返回给浏览器
    // views这个文件夹名字是固定死的   使用render它会自动去views下面的找index文件
    res.render("index"); // 模板引擎可以把页面和数据进行绑定   ejs
}

/**
 * 保存订单信息
 */
exports.save = (req,res)=>{
    // 得到客户端提交过来的数据  
    // console.log(req.body);
    // 进行保存 保存到文件  fs.wrieFile  对数据的操作，通常也不放控制器中，放在model中
    files.save(req.body.shoujihao, req.body.cai,function(err){
        if(err){
            res.send("-1");
        }else{
            res.send("1"); // 成功
        }
    });
}

/**
 * 查看所有的订单
 */
exports.allorder = (req,res)=>{
    files.getAllFilesName(function(arr){
        // 把模板和数据进行绑定 把数据融合到模板中
        res.render("allorder",{
            "all":arr
        });
    })
}

/**
 * 查看某个用户的订单
 */
exports.oneorder = (req,res)=>{
    // 得到get请求携带的数据
    let shoujihao = req.params.shoujihao;
    // console.log(shoujihao)

    // 根据手机号去data中找数据  对是对data的操作  models
    files.read(shoujihao,function(cai){
        if(cai == -1){
            cai = "没有找到~"
        }
        res.render("oneorder",{
            "shoujihao":shoujihao,
            "cai":cai
        })
    });
}



























