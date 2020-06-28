let fs = require("fs")
let path = require("path")
let src = "./src/js"
let main = "dist/main.js"
fs.watch(src, (type, name) => { // watch 一直监听   程序不断
    let res = "";
    fs.readdir(src, (err, files) => {
        if (err) throw err;
        files.forEach(file =>{
            let filename = path.join(src, file)
            res += fs.readFileSync(filename, "utf-8")
        })
        let r = fs.writeFileSync(main, res)
        if (!r) {
            console.log("合并文件成功")
        }
    })
})
