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
    <title>付款</title>
<#--<link rel="stylesheet" href="css/common.css">-->



    <!-- CSS Global Compulsory -->
    <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
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

        .spinner {
            margin: 100px auto 0;
            width: 150px;
            text-align: center;
        }

        .spinner > div {
            width: 30px;
            height: 30px;
            background-color: #67CF22;

            border-radius: 100%;
            display: inline-block;
            -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
            animation: bouncedelay 1.4s infinite ease-in-out;
            /* Prevent first frame from flickering when animation starts */
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }

        .spinner .bounce1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .spinner .bounce2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0.0)
            }
            40% {
                -webkit-transform: scale(1.0)
            }
        }

        @keyframes bouncedelay {
            0%, 80%, 100% {
                transform: scale(0.0);
                -webkit-transform: scale(0.0);
            }
            40% {
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }
        }


    </style>

    <style>
        body {
            margin: 0px;
            padding: 0px;
            text-align: center;
        }

        #hidebg {
            position: absolute;
            left: 0px;
            top: 0px;
            background-color: #efefef;
            width: 100%; /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
            filter: alpha(opacity=60); /*设置透明度为60%*/
            opacity: 0.6; /*非IE浏览器下设置透明度为60%*/
            display: none; /* http://www.jb51.net */
            z-Index: 2;
        }

        #hidebox {
            position: absolute;
            width: 400px;
            height: 300px;
            top: 200px;
            left: 30%;
            display: none;
            cursor: pointer;
            z-Index: 3;
        }

        #content {
            text-align: center;
            cursor: pointer;
            z-Index: 1;
        }
    </style>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body ontouchstart="return true;">
<script src="js/H5Pay.js"></script>
<!--头部-->
<#--<header>-->
<#--<div>-->
<#--<h1>付款</h1>-->
<#--<a href="pay.html" class="return"><i></i></a>-->
<#--</div>-->
<#--</header>-->
<!--内容区-->
<div id="content" >
    <form name="frmLogin" action='' id="payfrom" method="post">
        <div class="mx-auto g-width-40x--md" style="margin-top: 5%" style="margin-bottom: 20%">
            <div class="card card-outline-success rounded-0" id="hong">
                <h3 class="card-header text-center h5 text-white bg-success g-brd-transparent rounded-0">
                    确认订单
                </h3>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">订单号：</span>
                        </h5>
                    </div>
                    <div class="align-self-center ml-auto">
                        <span>${orderNo?if_exists}</span>
                        <input type="hidden" id="orderNo" name="orderNo" value=${orderNo?if_exists}>
                    </div>
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">订单金额：</span>
                        </h5>
                    </div>
                    <div class="align-self-center ml-auto">
                        <span>${orderAmount?if_exists}</span>
                        <input type="hidden" name="orderAmount" id="orderAmount" value=${orderAmount?if_exists}>
                        <input type="hidden" name="terminalNo" value="3">
                    </div>
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">备注：</span>
                        </h5>
                    </div>
                    <div class="align-self-center ml-auto">
                        <span>${orderDesc?if_exists}</span>
                        <input type=hidden name=orderDesc id="orderDesc" value=${orderDesc?if_exists}>
                    </div>
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-10 g-mb-minus-1">

                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">选择付款方式</span>
                        </h5>
                    </div>
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">支付宝</span>
                        </h5>
                    </div>
                    <input class="align-self-center ml-auto " onclick="submitByAliPay()" type="radio" name="payType"
                           value="W01">
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">微信</span>
                        </h5>
                    </div>
                    <input class="align-self-center ml-auto " onclick="submitByWx()" type="radio" name="payType"
                           value="A01">
                </li>
                <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1">
                    <div class="align-self-center g-px-10">
                        <h5 class="h6 g-font-weight-600 g-color-black g-mb-3">
                            <span class="g-mr-5">虹账户快捷支付</span>
                        </h5>
                    </div>
                    <span class="u-label u-label--sm g-bg-cyan g-rounded-20 g-px-10">优惠</span>
                    <input class="align-self-center ml-auto " onclick="submitFrom()" id="hongPay" type="radio"
                           name="payType" value="3">
                </li>
            </div>
        </div>
        <br>
        <div class="text-center" style="margin-bottom: 20%">
            <input class="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" type="button" value="确认付款"
                   onclick="quickPayTwo()"/>
        </div>
        <input type="hidden" name="param" value=${param?if_exists}>
    <#--<h3>手机型号：<label type="hidden" id="apptype"> </label></h3>-->
    </form>
</div>
<div id="hidebg"></div>
<div id="hidebox">
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</div>

</body>


</html>