// require("./04-自定义模块")
// console.log("05的自定义模块~")

// ==============

// console.log("我是05-使用自定义模块，我有一个名字："+name);  // name is not defined

// ==============
// let test = require("./04-自定义模块");
// console.log(test)  // { name: 'wangcai', age: 100 }
// console.log(test.name)

// ============ 使用计算两个数的和
// xx是一个对象
// let xx = require("./mathTool");
// console.log(xx)
// console.log(xx.sum(1,2))

// ============ 导入类
// let r = require("./04-自定义模块");  // 得到的r肯定是对象
// // console.log(r) // { Stu: [Function: Stu] }
// // r.Stu  ===>  类
// let obj = new r.Stu("xiaoqiang",888);
// console.log(obj.name) // xiaoqiang


// ============ 导入类
// 如果使用module.exports暴露一个类，接收时，一般和暴露的类型一样
let Stu = require("./04-自定义模块");
// console.log(Stu) // [Function: Stu]
let obj = new Stu("xiaoqiang",888);
console.log(obj.name) // xiaoqiang


