<!DOCTYPE html>
<html>
<head>
    <!-- 声明文档使用的字符编码 -->
    <meta charset="utf-8">
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符">
    <!-- 页面关键词 -->
    <meta name="keywords" content="">
    <!-- 网页作者 -->
    <meta name="author" content="guo,1057540638@qq.com">
    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow">
    <!-- 为移动设备添加 viewport -->
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=3,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->

    <!-- iOS 设备 begin -->
    <meta name="apple-mobile-web-app-title" content="标题">
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->

    <!--meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" -->
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- 设置苹果工具栏颜色 -->
    <meta name="format-detection" content="telphone=no, email=no">
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->

    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 不让百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
    <!-- iOS 图标 begin -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
    <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png">
    <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png">
    <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
    <!-- iOS 图标 end -->

    <!-- iOS 启动画面 begin -->
    <link rel="apple-touch-startup-image" sizes="768x1004" href="img/App-ios-logo-152x152.png">
    <!-- iPad 竖屏 768 x 1004（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="1536x2008" href="img/App-ios-logo-152x152.png">
    <!-- iPad 竖屏 1536x2008（Retina） -->
    <link rel="apple-touch-startup-image" sizes="1024x748" href="img/App-ios-logo-152x152.png">
    <!-- iPad 横屏 1024x748（标准分辨率） -->
    <link rel="apple-touch-startup-image" sizes="2048x1496" href="img/App-ios-logo-152x152.png">
    <!-- iPad 横屏 2048x1496（Retina） -->

    <link rel="apple-touch-startup-image" href="img/App-ios-logo-152x152.png">
    <!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
    <link rel="apple-touch-startup-image" sizes="640x960" href="img/App-ios-logo-152x152.png">
    <!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
    <link rel="apple-touch-startup-image" sizes="640x1136" href="img/App-ios-logo-152x152.png">
    <!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
    <!-- iOS 启动画面 end -->

    <!-- iOS 设备 end -->
    <meta name="msapplication-TileColor" content="#000">
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileImage" content="icon.png">
    <!-- Windows 8 磁贴图标 -->

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml">
    <!-- 添加 RSS 订阅 -->
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico">
    <!-- 添加 favicon icon -->
    <!-- sns 社交标签 begin -->
    <!-- 参考微博API -->
    <meta property="og:type" content="类型">
    <meta property="og:url" content="URL地址">
    <meta property="og:title" content="标题">
    <meta property="og:image" content="图片">
    <meta property="og:description" content="描述">
    <!-- sns 社交标签 end -->
    <title>交易结果</title>
<#--<link rel="stylesheet" href="css/common.css">-->


    <!-- CSS Global Compulsory -->
    <#--<link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">-->
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="vendor/icon-line/css/simple-line-icons.css">
    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="vendor/icon-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="vendor/icon-line-pro/style.css">
    <link rel="stylesheet" href="vendor/icon-hs/style.css">
    <link rel="stylesheet" href="vendor/animate.css">
    <link rel="stylesheet" href="vendor/hamburgers/hamburgers.min.css">
    <link rel="stylesheet" href="vendor/hs-megamenu/src/hs.megamenu.css">
    <link rel="stylesheet" href="vendor/malihu-scrollbar/jquery.mCustomScrollbar.min.css">







    <!-- CSS Unify Theme -->
    <link rel="stylesheet" href="css/styles.e-commerce.css">

    <!-- CSS Customization -->
    <link rel="stylesheet" href="css/custom.css">

    <style type="text/css">

        input[type="date"]:after {
            content: attr(placeholder);
            position: absolute;
            left: .15rem;
            color: rgba(0, 0, 0, .3);
        }

        input[type="time"]:after {
            content: attr(placeholder);
            position: absolute;
            left: .15rem;
            color: rgba(0, 0, 0, .3);
        }

        #box{
            width: 110px;
            height:50px;
            position: absolute;
            top:0;
            left:0;
            bottom:0;
            right: 0;
            margin: auto;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
        }
        #box img{
            display: block;
            width: 30px;
            height: 30px;
            align-self: center
        }
        #box span{
            color: #3BB18F;
            align-self: center
        }
    </style>
    <script src="http://www.jq22.com/jquery/jquery-1.6.2.js"></script>
</head>

<body ontouchstart="return true;">

<!--头部-->
<#--<header>-->
<#--<div>-->
<#--<h1>付款</h1>-->
<#--<a href="pay.html" class="return"><i></i></a>-->
<#--</div>-->
<#--</header>-->
<!--内容区-->
<div id="box">
    <img src="img/success.png" alt="">
    <span>交易成功</span>
</div>
<script type="text/javascript">
    function fBrowserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad) {
            var sUrl = location.href;
            if (!bForcepc) {
                window.location.href = "http://m.jb51.net/?ipad";
            }
        }
        if (bIsAndroid) {
            var sUrl = location.href;
            if (!bForcepc) {
                var h = document.getElementById("apptype");
                h.innerHTML = "Android";
            }
        }
        if (bIsIphoneOs) {
            var sUrl = location.href;
            if (!bForcepc) {
                var h = document.getElementById("apptype");
                h.innerHTML = "iOS";
            }
        }
        if (bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM) {
            var sUrl = location.href;
            if (!bForcepc) {
                var apptype = 5;
                //window.location.href = "http://m.jb51.net/";
            }
        }
    }
    function fGetQuery(name) {//获取参数值
        var sUrl = window.location.search.substr(1);
        var r = sUrl.match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
        return (r == null ? null : unescape(r[2]));
    }
    function fShowVerBlock() {
        if (bForcepc) {
            document.getElementById("dv_block").style.display = "block";
        }
        else {
            document.getElementById("ad_block").style.display = "block";
        }
    }
    fBrowserRedirect();
</script>
</body>


</html>