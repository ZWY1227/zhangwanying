// require("../two/05使用自定义模块")
// console.log("040404")
// =======================================导出
// var name="zhangwanying"
// var age=18
// exports.name=name
// exports.age=age
// ====================================导出计算和的函数
// function Str(a,b){
//     return a+b
// }
// exports.Str=Str
// =================================导出一个类,需要new出来
// function SS(a, b) {
//     this.a = a;
//     this.b = b
// }
// exports.SS=SS
// =================================直接暴漏一个类，那边直接new
function SS(a, b) {
        this.a = a;
        this.b = b
    }
    module.exports=SS