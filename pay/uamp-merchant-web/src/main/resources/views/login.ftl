<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Title -->
    <title>虹账付</title>

    <!-- Required Meta Tags Always Come First -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="shortcut icon" href="/img/logo/logo.png">
    <!-- Favicon -->

    <!-- CSS Global Compulsory -->
    <link rel="stylesheet" href="/vendor/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="/vendor/icon-line/css/simple-line-icons.css">

    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="/vendor/icon-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/vendor/icon-line-pro/style.css">
    <link rel="stylesheet" href="/vendor/icon-hs/style.css">
    <link rel="stylesheet" href="/vendor/animate.css">
    <link rel="stylesheet" href="/vendor/hamburgers/hamburgers.min.css">
    <link rel="stylesheet" href="/vendor/hs-megamenu/src/hs.megamenu.css">
    <link rel="stylesheet" href="/vendor/malihu-scrollbar/jquery.mCustomScrollbar.min.css">

    <!-- CSS Unify Theme -->
    <link rel="stylesheet" href="/css/styles.e-commerce.css">

    <!-- CSS Customization -->
    <link rel="stylesheet" href="/css/custom.css">
</head>

<body>
<main>
    <!-- Header -->
    <header id="js-header" class="u-header u-header--static u-shadow-v19">
        <!-- Top Bar -->
        <div class="u-header__section g-brd-bottom g-brd-gray-light-v4 g-bg-black g-transition-0_3">
            <div class="container">
                <div class="row justify-content-between align-items-center g-mx-0--lg">
                    <div class="col-auto g-hidden-xs-down g-color-white-opacity-0_6 g-font-weight-400 g-pl-15 g-pl-0--sm g-py-14">
                        <i class="icon-communication-163 u-line-icon-pro g-font-size-18 g-valign-middle g-color-white-opacity-0_8 g-mr-10 g-mt-minus-2"></i>
                        服务热线：800 1234 4321
                    </div>

                    <div class="col-auto g-pr-15 g-pr-0--sm">
                        <!-- List -->
                        <ul class="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">
                            <li class="list-inline-item g-mx-4">
                                <a class="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover" href="#">平台网站</a>
                            </li>

                            <li class="list-inline-item g-color-white-opacity-0_3 g-mx-4">|</li>
                            <li class="list-inline-item g-mx-4">
                                <a class="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover" href="#">个人门户</a>
                            </li>

                            <li class="list-inline-item g-color-white-opacity-0_3 g-mx-4">|</li>
                            <!-- Account -->
                            <li class="list-inline-item g-mx-4">
                                <a class="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover" href="#">商户门户</a>
                            </li>
                            <!-- End Account -->
                        </ul>
                        <!-- End List -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Top Bar -->

        <div class="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
            <nav class="js-mega-menu navbar navbar-expand-lg">
                <div class="container">
                    <!-- Responsive Toggle Button -->
                    <button class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0" type="button"
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            aria-controls="navBar"
                            data-toggle="collapse"
                            data-target="#navBar">
                <span class="hamburger hamburger--slider g-pr-0">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </span>
                    </button>
                    <!-- End Responsive Toggle Button -->

                    <!-- Logo -->
                    <a class="">
                        <img src="/img/logo/logo.png" width="50px" height="50px">
                        <span class="h4">虹账付</span>
                    </a>
                    <!-- End Logo -->
                </div>
            </nav>
        </div>

    </header>
    <!-- End Header -->

    <!-- Login -->
    <form name="loginForm" [formGroup]="loginForm" (submit)="doLogin($event, loginForm.value)">
        <section class="container g-pt-100 g-pb-20">
            <div class="row justify-content-between">
                <div class="col-md-6 col-lg-5 order-lg-2 g-mb-80">
                    <div class="g-brd-around g-brd-gray-light-v3 g-bg-white rounded g-px-30 g-py-50 mb-4">
                        <header class="text-center mb-4">
                            <!--<img src="assets/img/logo/logo.png" width="60px" height="60px" alt="Image Description">-->
                            <h5 class="g-color-gray-dark-v4">登录</h5>
                            <!--<div class="g-color-gray-dark-v4">v1.0</div>-->

                        </header>

                        <!-- Form -->
                        <div class="g-py-15">
                            <div class="mb-4">
                                <div class="input-group g-rounded-left-3">
                    <span class="input-group-addon g-width-45 g-brd-gray-light-v3 g-color-gray-dark-v5">
                      <i class="icon-finance-067 u-line-icon-pro"></i>
                    </span>
                                    <input formControlName="accountNo" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-rounded-left-0 g-rounded-right-3 g-py-15 g-px-15" type="email" placeholder="输入登录邮箱">
                                </div>
                            </div>

                            <div class="mb-4">
                                <div class="input-group g-rounded-left-3 mb-4">
                    <span class="input-group-addon g-width-45 g-brd-gray-light-v3 g-color-gray-dark-v5">
                      <i class="icon-media-094 u-line-icon-pro"></i>
                    </span>
                                    <input formControlName="password" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 g-rounded-left-0 g-rounded-right-3 g-py-15 g-px-15" type="password" placeholder="输入登录密码">
                                </div>
                            </div>

                            <div class="row justify-content-between mb-5">
                                <div class="col align-self-center">
                                    <div class="red" style="color: red"> <h6>{{returnInfo}}</h6></div>
                                </div>
                                <div class="col align-self-center text-right">
                                    <a class="g-font-size-13" routerLinkActive="true" routerLink="/password/modify">忘记密码?</a>
                                </div>
                            </div>

                            <div class="mb-5">
                                <button class="btn btn-block u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" type="submit">进入</button>
                            </div>
                        </div>
                        <!-- End Form -->
                    </div>

                    <div class="text-center">
                        <p class="g-color-gray-dark-v5 mb-0">入住成为长虹商户?
                            <a class="g-font-weight-600"  href="/signup">注册</a></p>
                    </div>
                </div>

                <div class="col-md-6 order-lg-1 g-mb-80">
                    <div class="mb-5">
                        <h2 class="h4 g-font-weight-400 mb-3 g-color-gray-dark-v4">长虹商户特权</h2>
                        <p class="g-color-gray-dark-v4">The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-9">
                            <!-- Icon Blocks -->
                            <div class="media mb-5">
                                <div class="d-flex mr-3">
                    <span class="align-self-center u-icon-v1 u-icon-size--lg g-color-primary">
                      <i class="icon-finance-168 u-line-icon-pro"></i>
                    </span>
                                </div>
                                <div class="media-body align-self-center">
                                    <h3 class="h5 g-font-weight-400 g-color-gray-dark-v4">面对面收款</h3>
                                    <p class="g-color-gray-dark-v5 mb-0">Reliable contracts, multifanctionality &amp; best usage of Unify template</p>
                                </div>
                            </div>
                            <!-- End Icon Blocks -->

                            <!-- Icon Blocks -->
                            <div class="media mb-5">
                                <div class="d-flex mr-3">
                    <span class="align-self-center u-icon-v1 u-icon-size--lg g-color-primary">
                      <i class="icon-finance-193 u-line-icon-pro"></i>
                    </span>
                                </div>
                                <div class="media-body align-self-center">
                                    <h3 class="h5 g-font-weight-400 g-color-gray-dark-v4">商城收款</h3>
                                    <p class="g-color-gray-dark-v5 mb-0">Secure &amp; integrated options to create individual &amp; business websites</p>
                                </div>
                            </div>
                            <!-- End Icon Blocks -->

                            <!-- Icon Blocks -->
                            <div class="media">
                                <div class="d-flex mr-3">
                    <span class="align-self-center u-icon-v1 u-icon-size--lg g-color-primary">
                      <i class="icon-finance-122 u-line-icon-pro"></i>
                    </span>
                                </div>
                                <div class="media-body align-self-center">
                                    <h3 class="h5 g-font-weight-400 g-color-gray-dark-v4">智能POS收款</h3>
                                    <p class="g-color-gray-dark-v5 mb-0">We get it, you're busy and it's important that someone keeps up with marketing</p>
                                </div>
                            </div>
                            <!-- End Icon Blocks -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Login -->
    </form>
    <!-- Call to Action -->
    <div class="g-bg-primary">
        <div class="container g-py-20">
            <div class="row justify-content-center">
                <div class="col-md-4 mx-auto g-py-20">
                    <!-- Media -->
                    <div class="media g-px-50--lg">
                        <i class="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-real-estate-048 u-line-icon-pro"></i>
                        <div class="media-body">
                            <span class="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">支付安全</span>
                            <span class="d-block g-color-white-opacity-0_8">In 2-3 Days</span>
                        </div>
                    </div>
                    <!-- End Media -->
                </div>

                <div class="col-md-4 mx-auto g-brd-x--md g-brd-white-opacity-0_3 g-py-20">
                    <!-- Media -->
                    <div class="media g-px-50--lg">
                        <i class="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-real-estate-040 u-line-icon-pro"></i>
                        <div class="media-body">
                            <span class="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">稳定运维</span>
                            <span class="d-block g-color-white-opacity-0_8">No Questions Asked</span>
                        </div>
                    </div>
                    <!-- End Media -->
                </div>

                <div class="col-md-4 mx-auto g-py-20">
                    <!-- Media -->
                    <div class="media g-px-50--lg">
                        <i class="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-hotel-restaurant-062 u-line-icon-pro"></i>
                        <div class="media-body text-left">
                            <span class="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">低成本</span>
                            <span class="d-block g-color-white-opacity-0_8">Days Storage</span>
                        </div>
                    </div>
                    <!-- End Media -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Call to Action -->

    <!-- Footer -->
    <footer class="g-bg-main-light-v1">

        <!-- Copyright -->
        <div class="container g-pt-30 g-pb-10">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6 g-mb-20">
                    <p class="g-font-size-13 mb-0">2017 © 四川长虹电器股份有限公司，版权所有！</p>
                </div>
            </div>
        </div>
        <!-- End Copyright -->
    </footer>
    <!-- End Footer -->

    <a class="js-go-to u-go-to-v2" href="#"
       data-type="fixed"
       data-position='{
           "bottom": 15,
           "right": 15
         }'
       data-offset-top="400"
       data-compensation="#js-header"
       data-show-effect="zoomIn">
        <i class="hs-icon hs-icon-arrow-top"></i>
    </a>
</main>

<div class="u-outer-spaces-helper"></div>
<script type="text/javascript" src="inline.bundle.js"></script>
<script type="text/javascript" src="polyfills.bundle.js"></script>
<script type="text/javascript" src="styles.bundle.js"></script>
<script type="text/javascript" src="vendor.bundle.js"></script>
<script type="text/javascript" src="main.bundle.js"></script>
<!-- JS Plugins Init. -->
<script>
    $(document).on('ready', function () {
        // initialization of header
        $.HSCore.components.HSHeader.init($('#js-header'));
        $.HSCore.helpers.HSHamburgers.init('.hamburger');

        // initialization of HSMegaMenu component
        $('.js-mega-menu').HSMegaMenu({
            event: 'hover',
            pageContainer: $('.container'),
            breakpoint: 991
        });

        // initialization of HSDropdown component
        $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
            afterOpen: function () {
                $(this).find('input[type="search"]').focus();
            }
        });

        // initialization of HSScrollBar component
        $.HSCore.components.HSScrollBar.init($('.js-scrollbar'));

        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
    });
</script>
</body>
</html>
