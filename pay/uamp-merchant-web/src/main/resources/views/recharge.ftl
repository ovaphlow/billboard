<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Title -->
        <title>欢迎使用虹账付系统！</title>

        <!-- Required Meta Tags Always Come First -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <!-- Favicon -->
        <link rel="shortcut icon" href="../favicon.ico">

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
            <#include "layout/header/header.html"/>
            <!--End Header -->

            <section class="g-pt-30">
                <form [formGroup]="urlForm" >
                    <input formControlName="cmdId" hidden>
                    <input formControlName="merCustId" hidden>
                    <input formControlName="version" hidden>
                    <input formControlName="sign" hidden>
                </form>
                <form [formGroup]="submitForm" (ngSubmit)="onSubmit()">
                    <div class="container g-mt-60">
                        <!-- Static Process -->
                        <div class="row">
                            <div class="col-sm-6 col-lg-3 g-mb-60">
                                <!-- Static Process -->
                                <div class="text-center">
                                    <h3 class="h5 g-font-weight-400 g-mb-10 g-color-gray-dark-v4">选择充值方式</h3>
                                    <p class="mb-0">请先选择您的充值方式</p>
                                    <i class="u-dot-line-v1-2 g-brd-transparent--before g-brd-gray-light-v2--after g-mt-20">
                                        <span class="u-dot-line-v1__inner g-bg-primary--before g-brd-gray-light-v2" [ngClass]="{'g-bg-primary' : oneFlag }"></span>
                                    </i>
                                </div>
                                <!-- End Static Process -->
                            </div>

                            <div class="col-sm-6 col-lg-3 g-mb-60">
                                <!-- Static Process -->
                                <div class="text-center">
                                    <h3 class="h5 g-font-weight-400 g-mb-10 g-color-gray-dark-v4">填写金额</h3>
                                    <p class="mb-0">请填写您的充值金额</p>
                                    <i class="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mt-20">
                                        <span class="u-dot-line-v1__inner g-bg-primary--before g-brd-gray-light-v2" [ngClass]="{'g-bg-primary' : oneFlag }"></span>
                                    </i>
                                </div>
                                <!-- End Static Process -->
                            </div>

                            <div class="col-sm-6 col-lg-3 g-mb-60">
                                <!-- Static Process -->
                                <div class="text-center">
                                    <h3 class="h5 g-font-weight-400 g-mb-10 g-color-gray-dark-v4">充值中</h3>
                                    <p class="mb-0">充值中，请等待！</p>
                                    <i class="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mt-20">
                                        <span class="u-dot-line-v1__inner g-bg-primary--before g-brd-gray-light-v2" [ngClass]="{'g-bg-primary' : oneFlag }"></span>
                                    </i>
                                </div>
                                <!-- End Static Process -->
                            </div>

                            <div class="col-sm-6 col-lg-3 g-mb-60">
                                <!-- Static Process -->
                                <div class="text-center">
                                    <h3 class="h5 g-font-weight-400 g-mb-10 g-color-gray-dark-v4">充值结果</h3>
                                    <p class="mb-0">恭喜您，完成充值</p>
                                    <i class="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-transparent--after g-mt-20">
                                        <span class="u-dot-line-v1__inner g-bg-primary--before g-brd-gray-light-v2" [ngClass]="{'g-bg-primary' : oneFlag }"></span>
                                    </i>
                                </div>
                                <!-- End Static Process -->
                            </div>
                        </div>
                        <!-- End Static Process -->
                    </div>
                    <div class="col-md-6 g-mb-60 " style="text-align: center;margin:0 auto">
                        <!-- Accordion v10 -->
                        <section class="g-py-30">


                            <div id="shortcode10">
                                <div class="shortcode-html">
                                    <div id="accordion-10" class="u-accordion u-accordion-color-primary u-accordion-brd-primary" role="tablist" aria-multiselectable="true">
                                        <!-- Card -->
                                        <div class="card rounded-0 g-brd-none">
                                            <div id="accordion-10-heading-01" class="u-accordion__header g-pa-0" role="tab" >
                                                <h5 class="mb-0 g-font-weight-600 g-font-size-default" >
                                                    <a class="d-block g-color-main g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0" href="#accordion-10-body-01"
                                                       data-toggle="collapse"
                                                       data-parent="#accordion-10"
                                                       aria-expanded="true"
                                                       aria-controls="accordion-10-body-01">
                                                        <i class="icon-finance-260 u-line-icon-pro g-valign-middle g-font-size-18 mr-3" style="margin-left: -86.5%"></i>
                                                        <span class="float-right u-accordion__control-icon g-ml-10">
                                          <i class="fa fa-angle-right"></i>
                                          <i class="fa fa-angle-down"></i>
                                        </span>
                                                        <span class="g-valign-middle">微信充值</span>
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="accordion-10-body-01" class="collapse show" role="tabpanel" aria-labelledby="accordion-10-heading-01">
                                                <div class="u-accordion__body g-color-gray-dark-v5 g-pa-15-0">
                                                    <div class="row">
                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">微信账号</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="旧密码">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">充值金额</label>
                                                            <input formControlName="amount" class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="用户名">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">生成二维码</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="password" placeholder="新密码">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Card -->

                                        <!-- Card -->
                                        <div class="card rounded-0 g-brd-none">
                                            <div id="accordion-10-heading-02" class="u-accordion__header g-pa-0" role="tab">
                                                <h5 class="mb-0 g-font-weight-600 g-font-size-default">
                                                    <a class="collapsed d-block g-color-main g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0" href="#accordion-10-body-02"
                                                       data-toggle="collapse"
                                                       data-parent="#accordion-10"
                                                       aria-expanded="false"
                                                       aria-controls="accordion-10-body-02">
                                                        <i class="icon-finance-168 u-line-icon-pro g-valign-middle g-font-size-18 mr-3" style="margin-left: -85%"></i>
                                                        <span class="float-right u-accordion__control-icon g-ml-10">
                                          <i class="fa fa-angle-right"></i>
                                          <i class="fa fa-angle-down"></i>
                                        </span>
                                                        <span class="g-valign-middle">支付宝充值</span>
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="accordion-10-body-02" class="collapse" role="tabpanel" aria-labelledby="accordion-10-heading-02">
                                                <div class="u-accordion__body g-color-gray-dark-v5 g-pa-15-0">
                                                    <div class="row">
                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">微信账号</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="旧密码">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">充值金额</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="用户名">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">生成二维码</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="password" placeholder="新密码">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Card -->

                                        <!-- Card -->
                                        <div class="card rounded-0 g-brd-none">
                                            <div id="accordion-10-heading-03" class="u-accordion__header g-pa-0" role="tab">
                                                <h5 class="mb-0 g-font-weight-600 g-font-size-default">
                                                    <a class="collapsed d-block g-color-main g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0" href="#accordion-10-body-03"
                                                       data-toggle="collapse"
                                                       data-parent="#accordion-10"
                                                       aria-expanded="false"
                                                       aria-controls="accordion-10-body-03">
                                                        <i class="icon-finance-189 u-line-icon-pro g-valign-middle g-font-size-18 mr-3" style="margin-left: -85%"></i>
                                                        <span class="float-right u-accordion__control-icon g-ml-10">
                                          <i class="fa fa-angle-right"></i>
                                          <i class="fa fa-angle-down"></i>
                                        </span>
                                                        <span class="g-valign-middle">银联卡充值</span>
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="accordion-10-body-03" class="collapse" role="tabpanel" aria-labelledby="accordion-10-heading-03">
                                                <div class="u-accordion__body g-color-gray-dark-v5 g-pa-15-0">
                                                    <div class="row">
                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">微信账号</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="旧密码">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">充值金额</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="text" placeholder="用户名">
                                                        </div>

                                                        <div class="col-sm-6 form-group g-mb-20">
                                                            <label class="g-color-text g-font-size-13">生成二维码</label>
                                                            <input class="form-control g-brd-gray-light-v4 g-brd-primary--focus g-color-text rounded g-py-13 g-px-15" type="password" placeholder="新密码">
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <!-- End Card -->

                                    </div>
                                </div>
                            </div>




                            <!-- Show Code -->
                            <div class="g-font-size-12 g-my-30 text-center">
                                <button class="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" type="submit">提交</button>
                            </div>
                            <!-- End Show Code -->

                        </section>
                        <!-- End Accordion v10 -->
                    </div>

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
                </form>
            </section>

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

        <!-- JS Global Compulsory -->
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/jquery-migrate/jquery-migrate.min.js"></script>
        <script src="/vendor/popper.min.js"></script>
        <script src="/vendor/bootstrap/bootstrap.min.js"></script>

        <!-- JS Implementing Plugins -->
        <script src="/vendor/hs-megamenu/src/hs.megamenu.js"></script>
        <script src="/vendor/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

        <!-- JS Unify -->
        <script src="/js/hs.core.js"></script>
        <script src="/js/components/hs.header.js"></script>
        <script src="/js/helpers/hs.hamburgers.js"></script>
        <script src="/js/components/hs.dropdown.js"></script>
        <script src="/js/components/hs.scrollbar.js"></script>
        <script src="/js/components/hs.go-to.js"></script>

        <!-- JS Customization -->
        <script src="/js/custom.js"></script>

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
