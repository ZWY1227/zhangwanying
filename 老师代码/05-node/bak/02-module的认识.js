/* 
    模块：
        英文：module[ˈmɒdjuːl]     一个模块指的是js代码（程序）的集合。

        MVVM  MVC  model[ˈmɒdl] 模型

        可以把一个JS文件当成一个模块。

    分类：
        玩node就是玩模块。
            内置模块（系统模块）
            第三方模块
            自定义模块

    =====================================================

    内置模块：NODE安装OK后，就内置很多模块，可以查看文档。
        http 创建一个服务器 
        fs  filesystim  文件系统   操作文件 
        path  路径操作  路径=路径名+查询字符串
        querystirng  对查询字符串的操作
        events 事件相关
        process  进程相关
        util 工具方法 
        .... 

        注意：
        1）引入系统模块时，只需要写系统模块名就OK，不用操作路径，NODE都会帮你处理好
            require("http")
        2）只需要写模块名，不用管后缀，NODE也会帮你处理好 

    =====================================================

    自定义模块:     
        自己创建一个JS文件，就是一个自定义模块。
        导入：使用require导入别人写好的模块（导入系统模块）
        导出：你写的模块需要导出去让别人使用

        导入： require  
            1）只需要写模块名，不用管后缀，NODE也会帮你处理好  写上后缀也是OK的 
                require("./04-自定义模块")   .js后缀不用加 
            2）你require谁，就立即把谁执行了
            3）自定义模块必须以./或../打头  
                require("./04-自定义模块")
            4）require可以循环引用（项目不要这么做） 如果有循环引用 NODE会帮你自动处理、
            5）自定义一个模块  就是一个独立的作用域   天生就有隔离其它模块的功能。  天生自带模块作用域。

        导出：你写的模块需要导出去让别人使用
            就想让别人使用我的模块中的数据，怎么办？----> 导出
            只有你导出去了，别人才可以使用。
            导出方式：
            1）exports.xx = xx    向外导出（暴露）多个东西
                var name = "wangcai";
                var age = 100;
                exports.name = name;  // 把name导出去
                exports.age = age; // 把age导出去

                导入使用：  xx是用来接收两个值  只能使用对象来接收  对象里面可以放多值
                    let xx = require("./04-自定义模块");
                    console.log(xx)  // { name: 'wangcai', age: 100 }

                如果通过 exports.xx = xx 导出  require导入的返回值是一个对象，对象中就包含了你导出的数据。

                如果向外暴露一个类，如下：
                    function Stu(name,age){  
                        this.name = name;
                        this.age = age;
                    }
                    exports.Stu = Stu;

                使用时：
                    let r = require("./04-自定义模块");
                    let obj = new r.Stu("xiaoqiang",888);

                想法：能不能直接导入一个类  直接new Stu  

            1）module.exports = Stu    向外导出（暴露）一个类

            结论：如果一个JS文件（模块）要暴露多个变量，函数，此时使用exports.xx = xx。
                 如果仅仅是暴露一个东西（类（构造函数）），此时使用module.exports = Xx;

    =====================================================

    第三方模块:
        需要使用npm来安装的。也就是别人写好的模块，上传到了npm上面，你要想使用npm install进行安装。

        默认情况下，安装就是下载，npm是国外的，下载的速度非常慢，改变下载源，使用一个工具，叫nrm 

        安装nrm 工具：
            npm install nrm -g   // 全局安装nrm工具  换源


        使用nrm :
            查看下载源：nrm ls 
            换源：nrm use taobao   // 换成国内的淘宝源  

        记录项目中都有哪些第三方模块：
            搞一个文件来记录，通过npm init -y 可以生成一个文件，这个文件可以记录你的项目中都有哪些第三方的依赖
            生成package.json文件

        安装第三方模块（依赖）：
            npm install jquery   // 安装jquery模块  什么也不加默认是生产依赖
            install 可以简写成i    npm i jquery

            安装完毕，默认会把依赖放到node_modules中。这个文件夹会自动创建。
            node_modules不要去，不要管。

            安装完会记录到package.json中，如下：
            "dependencies": {
                "jquery": "^3.4.1"
            }

        卸裁第三方模块：
            npm uninstall jquery  // 卸裁

        第三方模块分成两类：
            开发模块：开发项目时需要的用到的模块  仅仅是开发时需要
            生产模块：项目上线时还需要的用的模块

            development 开发   dev 是简写
            production  生产   pro 是简写

            在安装依赖时，就可以指定你是安装开发依赖还是生产依赖。
            npm i xxx --save-dev   表示把xxx安装成开发依赖
            npm i xxx -D   表示把xxx安装成开发依赖
            在package.json中的记录如下：
                "dependencies": {},
                "devDependencies": {
                    "ejs": "^3.0.1"
                }
            npm i xxx --save   表示把xxx安装成生产依赖
            npm i xxx -S   表示把xxx安装成生产依赖
            在package.json中的记录如下：
                 "dependencies": {
                     "jquery": "^3.4.1"
                  },
                  "devDependencies": {
                     "ejs": "^3.0.1"
                  }

    =====================================================

 */