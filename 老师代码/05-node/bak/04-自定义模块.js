// require("./05-使用自定义模块")
// console.log("04的自定义模块~");

// ==============

// var name = "wangcai";
// console.log("我是04-自定义模块，我有一个名字："+name);

// ==============

var name = "wangcai";
var age = 100;
// exports.a = name;  // 把name导出去
// exports.b = age; // 把age导出去

// 原来是什么名字， 就导出什么名字
// exports.name = name;  // 把name导出去
// exports.age = age; // 把age导出去


// =============== 使用 exports.Stu = Stu; 向外暴露一个类 
// function Stu(name,age){  // 类   目标就去new 能创建出对象
//     this.name = name;
//     this.age = age;
// }
// exports.Stu = Stu;
// // new Stu() 得到一个对象
// // let s = new Stu("wangcai",666); // new 类()  ====》对象   s是一个对象
// // console.log(s.name);  // wangcai

// exports.Stu = Stu;

// =============== 使用module.exports = Stu 向外暴露一个类
function Stu(name,age){ 
    this.name = name;
    this.age = age;
}
module.exports = Stu; 