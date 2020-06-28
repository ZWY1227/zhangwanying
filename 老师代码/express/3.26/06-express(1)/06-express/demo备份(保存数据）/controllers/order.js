// 在order中可能要写要很多对数据库或文件的操作，就导致了order这个文件非常大
// 不好维护  对数据库或文件的操作 专门放到其它的文件中 

let file = require("../models/file");

// 向外暴露一个函数  控制器
exports.showIndex = (req,res)=>{  // 渲染首页面
    // 渲染的话是渲染一个模板   ejs  
    // 这里的xxx它默认会找views下面的xxx.ejs这个文件
    res.render("index");  // 可以渲染xxx.ejs这个页面
}

// 接收并保存客户端传递过来的数据
exports.save = (req,res)=>{  
    // console.log(req.body); // 获取客户端提交过来的数据
    // 保存数据  
    file.save(req.body.shoujihao, req.body.cai,function(err){
        if(err){
            // 谁发起了/save请求  -1这个数据就返回给谁
            res.send("-1");   // 保存数据失败
        }else{
            res.send("1"); // 表示写入数据成功了    
        }
    });
}

// 还可以向外暴露很多东西   exports.xx = xx