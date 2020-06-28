let file = require("../models/file")
exports.showIndex = (req, res) => {
    res.render("index");
}
exports.save = (req, res) => {
    // console.log(req.body)
    // console.log(req.body.phone)
    // console.log(req.body.cooker)
    file.save(req.body.phone, req.body.cooker, function (err, data) {
        if (err) {
            res.send("-1") // 保存数据失败
            // 谁发起了/save请求  -1这个数据就返回给谁
        }else{
            res.send("1")// 表示写入数据成功了 
        }
    })
}
exports.allorder=(req,res)=>{
    file.getAllFilesName(function(arr){
        res.render("allorder",{
            "all":arr
        })
    })
}



exports.oneorder=(req,res)=>{
    // console.log(req.params.phone)
    let phone=req.params.phone;
    file.read(phone,function(cooker){
      res.render("oneorder",{
          "phone":phone,
          "cooker":cooker
      })
    })
}