
let file=require("../models/files")
// 处理get请求,当/时让服务器响应index的模板引擎
exports.viewIndex = (req, res) => {
    // res,render发送模板引擎
    res.render("index")
}
// 处理post请求,通过req.body可以接收查询字符串,当没有文件写入成功没有错误的时候,向客户端响应1,
// 这个时候会触发发送请求的地方就是ajax的回调函数,所谓,哪里请求,响应就会到请求的地方
exports.save = (req, res) => {
    // console.log(req.body)
    file.save(req.body.phone,req.body.cooker,function(err,data){
        if(err){
            res.send("-1")
        }else{
            res.send("1")
        }

    })
}
exports.allorder=(req,res)=>{
    file.read(function(arr){
        res.render("allorder",{
            all:arr
        })
    })  
}
exports.oneorder=(req,res)=>{
    let phone=req.params.phone;
    console.log(phone)
    file.readFiles(phone,function(cooker){
        res.render("order",{
            "phone":phone,
            "cooker":cooker
        })
    })
}