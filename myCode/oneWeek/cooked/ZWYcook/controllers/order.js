let files=require("../models/files")
exports.index=(req,res)=>{
    res.render("index")
}
exports.save=(req,res)=>{
    let phone=req.body.phone;
    let cook=req.body.cook
    files.save(phone,cook,function(err,data){
        if(err){
            res.send("-1")
        }else{
            res.send("1")
        }
    })
}
exports.read=(req,res)=>{
    files.readFiles(function(arr){
        res.render("allorder",{"all":arr })
    })
}
exports.readOneFile=(req,res)=>{
    let phone=req.params.phone
    files.readOneFile(phone,function(cook){
        res.render("order",{
           "phone":phone,
           "cook":cook 
        })
    })
}