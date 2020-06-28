let file=require("../models/file");
let math=require("../models/math")

exports.showIndex=(req,res)=>{
    res.render("index")
}
exports.showResult=(req,res)=>{
    let t1=new Date();
    let number=parseInt(req.params.number);
    if(isNaN(number)){
        res.send("请输入合法的数字");
        return;
    }
    if(number>100000){
        res.send("数字太大了--")
        return
    }
    file.read(number,function(result){
        if(result==-1){
            let result = math.factorComputed(number);
            file.write(number,result)
        }
        let t2=new Date();
        res.render("results",{
            "result":result,
            "number":number,
            "during":t2-t1
        })
    })
}