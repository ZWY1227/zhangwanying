// 管理文章的路由，也叫控制器  二级路由
let express = require("express");
let router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("<h1>显示文章列表</h1>")
})
router.get("/add",(req,res,next)=>{
    res.send("<h1>添加文章</h1>")
})

router.get("/update",(req,res,next)=>{
    res.send("<h1>修改文章</h1>")
})

router.get("/delete",(req,res,next)=>{
    res.send("<h1>删除文章</h1>")
})
// 导出router对象
module.exports = router;





