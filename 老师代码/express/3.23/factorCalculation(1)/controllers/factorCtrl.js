let file = require("../models/file");
let math = require("../models/math");

exports.showIndex = (req,res)=>{
    res.render("index")
}

exports.showResult = (req,res)=>{
    // 记录开始时间  t1
    let t1 = new Date(); 

    let number = parseInt(req.params.number); // 得到路径上的动态参数
    // console.log(number) 
    // 后端也需要判断number的合法性 
    if(isNaN(number)){
        res.send("请输入合法的数字~");
        return;
    }
    if(number>100000){
        res.send("数字太大了~");
        return; // 结束程序
    }

    // =========== 查看data下面的有这个数字没有  有就读  没有就写
    file.read(number,function(result){
        if(result == -1){
            // 读取失败了

            // 写  写啥
            // 写之前肯定要先计算number的因数
            let result = math.factorComputed(number);
            file.write(number,result)
        }
        let t2 = new Date(); // 结束时间
        // console.log(result)
        res.render("result",{
            "result":result,
            "number":number,
            "during":t2-t1
        })

        // res.json({
        //     "result":result,
        //     "number":number,
        //     "during":t2-t1
        // })
    });
}






