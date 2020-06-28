let express = require("express")
let db = require("../../models/db")
let router = express.Router()
// 登录
router.use("/login",logined)
router.get("/login", (req, res, next) => {
    res.render("admin/login")
})
// 退出登录
router.get("/logined",(req,res,next)=>{
    req.session.isLogin=null;
    res.redirect("/admin/user/login")
})
// 提交登录
router.post("/dologin", (req, res, next) => {
    db.Login(req.body, function(data) {
        if(data.length){
            req.session.isLogin=true;
            res.redirect("/admin/index")
        }else{
            res.redirect("/admin/user")
        }
    })
})



//------写一个约束不能访问login页面的中间件（如果已经登陆）------------------------------------
// 定义一个中间件，检测用户是否登录
function logined(req,res,next){
    if(req.session.isLogin){
     res.redirect("/admin/index")
    // res.redirect("back")
    }
    next()
  }
  
module.exports = router;
