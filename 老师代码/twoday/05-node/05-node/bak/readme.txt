客户端与服务器的交互模型
    客户端：可以向服务器发出请求，接收服务器的响应并作出处理。
        如：浏览器，App，PC端的软件
    服务器端：能够接收客户端，并把资源返回给客户端。
        web服务器：提供web服务，网页服务器
        数据库服务器：提供数据服务的
        资源服务器：图片，视频...
        ....

    HTTP请求：
        request 请求  简写：req
    HTTP响应：
        response 响应  简写：res

    客户端与服务器之间的交互（通信）：
        客户端传递数据给服务器
        服务器响应数据给客户器
        数据在客户端与服务器之间的进行流动（上网的本质）。

    https://yuanfang1024.github.io:443/taobao/index.html
    先请求index.html文件，如果index.html文件中有连接了其它的资源，会发起二次请求，当把所有的资源请求加来后，渲染显示。

=====================

URL / URN / URI :
    URI: Uniform Resource Identifier  统一资源标志符
    URL：Uniform Resource Locator 统一资源定位符  ****
        互联网每一个资源都可以通过定位符找到。URL也是一种特殊的URI。

        真实的：file:///C:/Users/Administrator/Desktop/node/index.html
        虚拟的：在内存中生成的（通常我们说的URL都是虚拟的）

    URN：Uniform Resource Name 统一资源名称

=====================

一个完整的URL如下：
    协议：http  https  ftp ...  ://
    域名：顶级域名（一级域名）
         二级域名
         三级域名 
    端口：80   443  3306  21 ...
    路径名：/taobao/css/index.css
    问号传参（查询字符串）： 可以传递多个 中间使用&隔开
    HASH值： hash路由  锚点链接 #fsadfadsf  以#开头

    路径 = 路径名+查询字符串

    如下：
    https://search.jd.com:443/Search?keyword=%E5%8D%8E%E4%B8%BA&enc=utf-8&wq=%E5%8D%8E%E4%B8%BA&pvid=9d86603afe4c47e882a50d530123d05d
    协议：https://
    域名：search.jd.com  二级域名
    端口：:443
    路径名：/Search  以/打头
    问号传参：?keyword=%E5%8D%8E%E4%B8%BA & enc=utf-8 & wq=%E5%8D%8E%E4%B8%BA
    路径：/Search ? keyword=%E5%8D%8E%E4%B8%BA & enc=utf-8 & wq=%E5%8D%8E%E4%B8%BA

=====================

URL每部分的细节：
    协议： 
        HTTP:  HyperText Transfer Protocol  
            超文本（文本，样式，视频，音频，程序，链接...）
            传输：通信   数据流动 
            协议：规则，工具，语言

            人与人之间交流：汉语  工具
            HTTP是客户端与服务器之间交流的语言（协议）

            明文传输的

        HTTPS:
            HyperText Transfer Protocol over SecureSocket Layer
            S: SSL   进行安全通信  传输通道设置了加密算法  
            还有支付的网站都是HTTPS协议   https://www.jd.com/

        FTP:
            File Transfer Protocol 文件传输协议   把本机电脑的文件上传到服务器走FTP协议

    域名： 
        服务器都是IP地址，IP地址不好记，使用域名来标记它。

        baidu.com 是域名  www仅仅是前缀 
        购买来的 
            万网
            新网
            ..... 
        顶级域名（一级域名）：zhangwanying.com   购买一般都是顶级域名
        二级域名：
            www.zhangwanying.com  万维网WWW是World Wide Web的简称
            news.zhangwanying.com
        三级域名：sport.news.zhangwanying.com  
            买服务器  可能会送三级域名
        
        后缀：不同的后缀有不同的含义
            .com 国际域名 
            .cn 中文域名
            .edu 教育
            .gov 政府
            .io 博客 
            .org  组织 
            .net  系统类
            ...

    端口号：
        范围：0~65535  0~1024端口一般不用，系统它要用  使用的话都是1024之后的

        利用端口可以发布很多项目，只需要把不同的项目发布到不同的端口。

        不同的协议有自己默认的端口号：
            ftp:21
            http:80
            https:443
            SMTP：25    简单邮件传输服务
        经典的端口：
            mysql:3306
            Oracle:1521
            mongodb:27017
            redis:6379
            ... 

        当项目项目时，也是需要开启某一个端口，如www.taobao.com:8080，当别人去访问时，必须加上80端口。
        如果布署到80,443，这样不需要加端口，浏览器会帮你加。

    路径名：
        /taobao  后面可以不加你要请求的资源，如果不加它默认会找index.html或default.html文件中有连接了其它的资源，会发起二次请求，当把所有的资源请求加来后，渲染显示。
        当然默认请求什么资源，可以配置，但是一般一个项目的首页面就是index.html 
        /taobao/css/index.css
        当请求服务时，在服务器上找不到你要的资源，此时服务器返回404。

        伪URL：主要是用来进行SEO（搜索引擎优化）
            https://item.jd.com/100011199522.html
            此时并不是说item.jd.com 服务器下面有100011199522.html一个资源。

        路径 = 路径名 + 查询字符串（问号传参）

    问号传参(查询字符串)：
        ?name="wangcai"&age=100   要把数据传递给服务器 

        参数的编码与解码：
            1）encodeURI() 进行编码   decodeURI 进行解码 "%E6%97%BA%E8%B4%A2"
                如果 旺财 会编码成：%E6%97%BA%E8%B4%A2   是浏览器给你进行编码的 不需要我们写代码
                decodeURI（"%E6%97%BA%E8%B4%A2"）
                如果传递中文 浏览器会进行编码处理 服务器得到的数据也是经过编码之后的 服务器就需要进行一个解码处理
                如果是encodeURI进行编码的，需要使用decodeURI进行解码  
                默认会针对整个URL进行编码。

                只能对空格/中文内容进行编码或解码，会处理整个URL。

            2）encodeURIComponent / decodeURIComponent 和上面不同的是，上面针对整个URL的，encodeURIComponent / decodeURIComponent
               是针对URL中某一个部分，一般都是针对查询字符串的。

               针对所有的特殊字符进行编码和解码，一般不会用在整个URL上，会用到查询字符串上。

            通常进行传参时，都会有编解码问题，一般都上基于上面的两个方案，服务器也存上上面的两种方案。

            3）escape、unescape 
                主要不是在URL上进行编码和解码的，主要针对客户端数据进行编码和解码，如把数据存储在cookie中，存的时候进行编码，用的时候，再进行解码。

        客户端把数据传递给服务器：
            1）地址栏中写查询字符串 
                www.xxx.com:8080/taobao/index.js?name="wangcai"&age=100
            2）通过请求报文
                请求头  
                请求主体

    HASH值： 
        通过#打头   
        锚点链接：不常用了
        HASH路由：vue / react 
        清缓存 

=====================

在浏览器端也生成虚拟URL（在客户端开启一个服务）：
    1）安装一个插件 Live Server

    http://127.0.0.1:5500/index.html  

    插件会在vscode中开启一个小的服务器（前端服务器）。
    每个人电脑的都有一个特殊的IP地址是，127.0.0.1，这个特殊的IP地址对应了一个特殊的域名：localhost

    插件开始前端服务器的端口是5500  

    托管当面目录下面的资源了

https://yuanfang1024.github.io:443/taobao/index.html

=====================
DNS解析：
    要访问一个网站，先向DNS服务器发出请求，是TCP请求，DSN服务器会返回给你IP地址，使用IP地址就可以
    访问真实的服务器，向服务器要数据。当我们发出TCP请求后，浏览器都会缓存解析记录，缓存时间约为1分钟左右，
    如果后面访问的还是同样的域名，直接跳过DNS解析，直接访问真实服务器，要数据。

    一般大型项目，它里面的资源都是分不同的服务器的进行存储，
        如web服务器存储静态资源，就是html/css/js等等。
        如数据服务器，处理数据请求（json）。
        如图片服务器，存储项目中所用到的图片。
        ...
        这样就导致DNS解析进行了很多次。每一次DNS解析都是时间消耗。优化小技巧：DNS预获取。

        rel="dns-prefetch"  DNS预获取
        <link rel="dns-prefetch" href="//static.360buyimg.com"/>
        <link rel="dns-prefetch" href="//misc.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img10.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img11.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img12.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img13.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img14.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img20.360buyimg.com"/>
        <link rel="dns-prefetch" href="//img30.360buyimg.com"/>
        
        <link rel="dns-prefetch" href="//g.alicdn.com" />
        <link rel="dns-prefetch" href="//img.alicdn.com" />
        <link rel="dns-prefetch" href="//tce.alicdn.com" />
        <link rel="dns-prefetch" href="//gm.mmstat.com" />
        <link ref="dns-prefetch" href="//tce.taobao.com" />
        <link rel="dns-prefetch" href="//log.mmstat.com" />
        <link rel="dns-prefetch" href="//tui.taobao.com" />
        <link rel="dns-prefetch" href="//ald.taobao.com" />
        <link rel="dns-prefetch" href="//gw.alicdn.com" />
        <link rel="dns-prefetch" href="//atanx.alicdn.com"/>
        <link rel="dns-prefetch" href="//dfhs.tanx.com"/>
        <link rel="dns-prefetch" href="//ecpm.tanx.com" />
        <link rel="dns-prefetch" href="//res.mmstat.com" />

=====================

网络的七层模型：   
    应用层：http   http协议是基于tcp协议
    表示层
    会话层
    传输层: tcp
    网络层
    数据链路层
    物理层

所以在发送http请求之前，一定要先建立tcp连接。

建立TCP链接：
    三次握手
    第一次握手：由浏览器发起，告诉浏览器我就要发送请求的了。
    第二次握手：由服务器发起，告诉浏览器我准备好了，你开始请求吧。
    第三次握手：由浏览器发起，告诉服务器，我马上就给发了，你开始接收吧。

进行数据通信:~~~~~~~~~~~~~

断开TCP链接：
    四次挥手
    第一次挥手：浏览器告诉服务器，我请求报文发完了，你准备断开连接吧。
    第二次挥手：服务器告诉浏览器，我接收完了，我准备断开连接了，你也开始准备吧。
    第三次挥手：服务器告诉浏览器，我的响应数据发送完毕了，你准备断开连接吧。
    第四次挥手：浏览器告诉服务器，我接收完了，我准备断开连接了，你也开始准备吧。

    https://juejin.im/post/5b29d2c4e51d4558b80b1d8c



=====================

经典面试题：
    当你在浏览器的地址栏输入一个网址，到你看到一张网页，经历了什么？
    1）URL地址解析
        URL进行剖析
    2）DNS解析  
    3）建立TCP连接 （三次握手）
    4）数据数据通信 （两者之间进行交流）
    5）断开TCP连接 （四次挥手）

=====================

前端性能优化(仅仅为了面试准备)：
    减少HTTP请求次数和请求资源的大小：
        1）合并压缩JS和CSS  把多个文件合并成一个文件  压缩html/css/js   webpack
        2）使用雪碧图（精灵图）大图  减少HTTP请求次数
        3）图片的base64  把图片转成类似于字符串的东西  不好管理  要慎用  一般把比较小的图片转成base64  webapck 
        4）图片的懒加载  数据懒加载  webpack
        5）服务器gzip压缩  浏览器会自动进行解压 
        .....

    缓存机制
        1）减少DNS请求次数 / DNS预获取
        2）把请求回来的资源进行缓存   再次请求时  先去缓存中获取 
        3）把数据持久化  存储在localstroge  cookie中
        4）离线存储  PWA
        ....  

    代码上的优化：
        减少对DOM的操作  造成重绘和回流  讲到浏览器的渲染机制时说
        尽可能少的使用闭包 （造成内存泄露） 
        不要有死循环
        .....

        https://www.cnblogs.com/lanxiansen/p/10972802.html

=====================
都谁可以请求服务器：
    浏览器地址栏输入一个网址 然后回车   href  src
    App （postman 就是一个软件 ）
    
    ------
    Ajax 可以向服务器发出请求  在浏览器内部有一个Ajax引擎  这个引擎也可以向服务器发出请求  服务器也可以把数据交给Ajax引擎
        基于Ajax，有人封装了更好的请求库：
            axios 
        需要写代码发出请求 

    Fetch  也可以向服务器发出请求  服务器给fetch响应 
        需要写代码发出请求

=====================

最最最常用请求方式有哪些：
    向服务器请求的方式比较多，其中两个种方式用的是相当多。
    不管是什么样的请求，客户端都可以向服务器扔数据，服务器可以响应数据给客户端。
    get请求和Post请求都是规定死的。

    GET请求：GET请求偏重于向服务器要数据，当然它也可以给服务器数据。多拿少给。

    POST请求：POST请求偏重于向服务器提交大量数据

    其它不常用的：
        HEAD请求：只获取请求头信息，不会获取响应体内容 
        DELETE请求：删除一个资源
        OPTIONS请求：试控性请求 
        PUT请求：新增数据 
        ....

哪些是GET请求：
    1）浏览器地址栏只能发出GET请求。
    2）基于SRC，HREF也能发出请求，也是GET请求
    3）AJax也可以发出get请求
    4）表单可以发出GET请求  如果不写method="GET"  默认就是get请求
        <form action="http://www.baidu.com" method="GET">
            <input type="text">
            <input type="submit">
        </form>

哪些是POST请求：
    1）表单可以发出POST请求  如果不写method="POST"  
        <form action="http://www.baidu.com" method="POST">
            <input type="text">
            <input type="submit">
        </form>
    2）AJax也可以发出post请求
    3）postman 工具 也可以发出post请求 
    ....

=====================
服务器可以给浏览器返回两种资源：
    1）网页资源 
    2）JSON数据 

跨域(了解)：
    跨域是浏览器限定的，但是没有限制死。Andoird,IOS开发中没有跨域问题，只有浏览器中的。

    现在写项目基本上都是前后端分离开发。前端是一个项目，后端是一个项目，后端给前端提供API接口。

    前端向后端要json数据，前端的项目如果和后端的项目发布同一个服务器下的同一个端口下，是不存在跨域问题。
    如果发布的时候，协议，域名，端口一个不一样，就请求不到数据

    http://xxx.com  ----->   https://xxx.com   跨域问题 
    http://xxx.com  ----->   http://yyy.com   跨域问题 
    http://xxx.com:3000  ----->   http://xxx.com:8080   跨域问题 

    跨域的前提：
        1）必须是AJax发出的请求
        2）必须是在浏览器中（小程序）

    如果通过Ajax去请求服务器

出现了跨域问题，肯定是前端得到不到后端的数据，如何解决：
1）JSONP  靠 script标签中的src    src发出的请求是没有跨域问题的  src仅仅发出get请求
2）在前端开启一个前端服务器，让服务器去请求服务器是没有跨域问题  webpack 解决跨域
3）后端配置允许谁来访问 cors 
..... 
=====================
