做一个小DOME  实现留言板

    需求分析：
        发表留言  把数据扔给服务器  服务器保存数据到文件中 
        显示留言  
            1）要么是服务器直接给你渲染好（模板引擎）  服务端渲染
                把data.json中的数据插入到index.html这个模块中   ejs 
            2）Ajax去给服务器要数据（前后端分离开发）  客户端渲染
                index.html文件中也可以写ajax去给服务器要数据 

    要提交表单中的数据给服务器，要确保如下：
        1）input中必须有name字段
        2）action="/dopublish" method="POST"

        以get提交时，数据在url地址上以查询字符串的形成进行传递
        以post提交时，数据以请求正文的形式进行传递

        客户端与服务器之间数据传递最常见的就是字符串。

    难点：数据保存在什么地方，就保存在一个文件中
        现在在服务器端得到了数据，数据保存在什么地方。数据通常都要入库。现我就保存的一个文件中，文件的名字，叫data.json。
        核心代码如下：
            let msg = qs.parse(data);
            msg.time = new Date().toLocaleString();
            let arr = []; 
            if(fs.existsSync("data.json")){
                arr = require("./data.json"); 
            }
            arr.push(msg);
            fs.writeFile("data.json",JSON.stringify(arr),"utf8",(err)=>{
                if(err) throw err; 
                console.log("保存留言成功了~")
            })

    显示留言时，
        1）需要用到模板引擎。  先用它  ejs  非常简单~
        2）前端程序员使用ajax去请求后端api接口要数据，负责渲染。

    学习EJS模板引擎：   node中常用的有ejs  jade
        第一步：下载安装  npm i ejs 
        第二步：使用
            A，在服务器把html和data先绑定在一起  render / renderFile
            B，在html文件，适合的位置，换成真实数据

            ejs模板语法：  把假数据换成真实数据
                执行语句：<% %>
                显示数据：<%= name %>
                包含：<%include 模板文件事 %> 
                如下：
                <% for(var i=0; i<msgs.length; i++){ %>
                    <div class="msg">
                        <h2><%= msgs[i].title %></h2>
                        <p>发表于<a href=""><%= msgs[i].time %></a> 由 <a href=""><%= msgs[i].author %></a></p>
                        <p><%= msgs[i].content %>
                        </p>
                    </div>
                <% } %>

        真实数据在哪里？答：真实数据在服务器端中的data.json中 
        index.html在哪里？答：也是在服务器端







