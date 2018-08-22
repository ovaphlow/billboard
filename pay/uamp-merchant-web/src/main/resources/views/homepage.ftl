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
    <#--<#include "/views/layout/header/header.html">-->
<section class="g-bg-primary g-py-25 g-mb-20">
    <div class="container">
        <div class="d-sm-flex text-left g-mt-17">
            <div class="g-pos-rel g-mr-20">
                <img class="g-width-50 g-height-50 rounded-circle" src="/img/merchant.png">
            </div>

            <div class="align-self-center">
                <h5 class="h5 g-font-weight-600 g-color-white">
                    <span class="g-mr-5">{accountName?if_exists}</span>
                </h5>
                <ul class="list-inline">
                    <li class="list-inline-item align-middle g-brd-right g-brd-gray-light-v4 g-pr-20 g-mr-20">
                        <h5 class="h6 g-font-weight-400 g-color-white g-mt-7">
                            <span class="g-mr-5">账号：${accountNo?if_exists}</span>
                        </h5>
                    </li>
                    <li class="list-inline-item align-middle">
                        <h5 class="h6 g-font-weight-400 g-color-white g-mt-7">
                            <span class="g-mr-5">上次登录时间：2017-11-06</span>
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <!-- Basic example -->
            <div class="col-lg">
                <!-- Banners -->
                <div class="row align-items-stretch">
                    <div class="col-lg-4">
                        <!-- Article -->
                        <article class="h-100 text-left g-overflow-hidden">
                            <ul class="list-unstyled">
                                <li class="d-flex justify-content-start g-brd-around g-rounded-3 g-brd-gray-light-v4 g-pa-20 g-mb-7">
                                    <div class="g-pos-rel g-mr-5 g-mt-3">
                                        <img class="g-width-40 g-height-40 rounded" src="/img/account.png">
                                    </div>

                                    <div class="align-self-center g-px-10">
                                        <h5 class="h6 g-font-weight-400 g-color-gray-dark-v4 g-mb-3">
                                            <span class="g-mr-5">今日交易金额</span>
                                        </h5>
                                        <h5 class="g-color-money g-mt-10"><span class="h5 g-font-weight-400">{tasks['totalTotalAmount']}</span><span class="h6 g-font-weight-400 g-ml-7">元</span></h5>
                                    </div>
                                </li>
                            </ul>
                        </article>
                        <!-- End Article -->
                    </div>

                    <div class="col-lg-4">
                        <!-- Article -->
                        <article class="h-100 text-left g-overflow-hidden">
                            <ul class="list-unstyled">
                                <li class="d-flex justify-content-start g-brd-around g-rounded-3 g-brd-gray-light-v4 g-pa-20 g-mb-7">
                                    <div class="g-pos-rel g-mr-5 g-mt-3">
                                        <img class="g-width-40 g-height-40 rounded" src="/img/count.png">
                                    </div>

                                    <div class="align-self-center g-px-10">
                                        <h5 class="h6 g-font-weight-400 g-color-gray-dark-v4 g-mb-3">
                                            <span class="g-mr-5">今日交易笔数</span>
                                        </h5>
                                        <h5 class="g-color-money g-mt-10"><span class="h5 g-font-weight-400">{tasks['todayTotalCount']}</span><span class="h6 g-font-weight-400 g-ml-7">笔</span></h5>
                                    </div>
                                </li>
                            </ul>
                        </article>
                        <!-- End Article -->
                    </div>

                    <div class="col-lg-4">
                        <!-- Article -->
                        <article class="h-100 text-left g-overflow-hidden">
                            <ul class="list-unstyled">
                                <li class="d-flex justify-content-start g-brd-around g-rounded-3 g-brd-gray-light-v4 g-pa-20 g-mb-7">
                                    <div class="g-pos-rel g-mr-5 g-mt-3">
                                        <img class="g-width-40 g-height-40 rounded" src="/img/yesterday.png">
                                    </div>

                                    <div class="align-self-center g-px-10">
                                        <h5 class="h6 g-font-weight-400 g-color-gray-dark-v4 g-mb-3">
                                            <span class="g-mr-5">昨日交易金额</span>
                                        </h5>
                                        <h5 class="g-color-money g-mt-10"><span class="h5 g-font-weight-400">{taskss['yestotalTotalAmount']}</span><span class="h6 g-font-weight-400 g-ml-7">元</span></h5>
                                    </div>
                                </li>
                            </ul>
                        </article>
                        <!-- End Article -->
                    </div>
                </div>
                <!-- End Banners -->
                <!-- Default Outline Panel-->
                <div class="card rounded-3 g-mb-7 g-mt-3">
                    <h5 class="card-header h6 g-font-weight-400 rounded-0 g-color-gray-dark-v4">
                        数据统计
                    </h5>
                    <!-- Banners -->
                    <div class="row align-items-stretch">
                        <div class="col-lg-4">
                            <!-- Article -->
                            <article class="h-100 text-left g-overflow-hidden g-mt-3 g-mb-30 g-ml-20 g-mr-10">
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计充值金额</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计充值笔数</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计提现金额</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计提现笔数</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                            </article>
                            <!-- End Article -->
                        </div>

                        <div class="col-lg-4">
                            <!-- Article -->
                            <article class="h-100 text-left g-overflow-hidden  g-ml-10 g-mr-10">
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计转账金额</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计转账笔数</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计退款金额</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计退款笔数</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                            </article>
                            <!-- End Article -->
                        </div>

                        <div class="col-lg-4">
                            <!-- Article -->
                            <article class="h-100 text-left g-overflow-hidden g-ml-10 g-mr-20">
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计收款金额</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                                <!-- Card -->
                                <div class="card rounded-0 g-brd-none">
                                    <div class="u-accordion__header g-pa-0" role="tab">
                                        <h5 class="mb-0 g-font-weight-400 g-font-size-default">
                                            <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                                <div class="d-flex justify-content-between g-mt-12">
                                                    <span class="g-color-gray-dark-v4">累计收款笔数</span>
                                                    <span class="g-color-gray-dark-v4">（10）</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                                <!-- End Card -->
                            </article>
                            <!-- End Article -->
                        </div>
                    </div>
                </div>
                <!-- End Default Outline Panel-->
            </div>
            <!-- End Basic example -->

            <!-- Basic example -->
            <div class="col-lg-auto">
                <ul class="list-unstyled">
                    <li class="d-flex justify-content-start g-brd-around g-rounded-3 g-brd-gray-light-v4 g-pa-20 g-mb-7">
                        <div class="align-self-center g-px-10">
                            <h5 class="h6 g-font-weight-600 g-color-gray-dark-v4 g-mb-3"><span class="g-mr-5">账户余额</span></h5>
                            <h5 class="g-color-money g-mt-10"><span class="h4 g-font-weight-400">{balance}</span><span class="h6 g-font-weight-400 g-ml-7">元</span></h5>
                            <a routerLinkActive="true" routerLink="/home/recharge" class="btn btn-sm u-btn-primary g-mr-10 g-width-70 g-mt-7">充值</a>
                            <a routerLinkActive="true" routerLink="/home/transfer" class="btn btn-sm u-btn-primary g-mr-10 g-width-70 g-mt-7">提现</a>
                            <a routerLinkActive="true" routerLink="/home/withdrawals" class="btn btn-sm u-btn-outline-primary g-mr-10 g-width-70 g-mt-7">转账</a>
                            <a href="#" class="btn btn-sm u-btn-outline-primary g-width-70 g-mt-7">退款</a>

                            <!-- Card -->
                            <div class="card rounded-0 g-brd-none g-mt-20">
                                <div class="u-accordion__header g-pa-0" role="tab">
                                    <h5 class="mb-0 g-font-weight-600 g-font-size-default">
                                        <div class="collapsed d-block g-color-gray-dark-v4 g-text-underline--none--hover g-brd-bottom g-brd-gray-light-v4 g-pa-15-0">
                                            <span class="g-valign-middle">支付渠道开通情况</span>
                                        </div>
                                    </h5>
                                </div>
                            </div>
                            <!-- End Card -->
                            <div class="d-flex justify-content-between g-mt-12" *ngFor="let item of itemList;let i = index">
                                <span class="g-color-gray-dark-v4">{i + 1} { item['channelName'] }</span>
                                <label class="form-check-inline u-check mx-0 mb-0">
                                    <input class="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="radGroup1_1" type="checkbox" [checked]="item['openStatus']" disabled>
                                    <div class="u-check-icon-radio-v7">
                                        <i class="fa" data-check-icon=""></i>
                                    </div>
                                </label>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
            <!-- End Basic example -->
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-lg">
                <!-- Default Outline Panel-->
                <div class="card rounded-3 g-mb-20 g-mt-3">
                    <h5 class="card-header h6 g-font-weight-400 rounded-0 g-color-gray-dark-v4">
                        当月交易金额走势
                    </h5>

                    <div class="card-block">
                        <h5 class="h5"></h5>
                        <ngx-charts-line-chart
                                [view]="view"
                                [scheme]="colorScheme"
                                [results]="multi"
                                [gradient]="gradient"
                                [xAxis]="showXAxis"
                                [yAxis]="showYAxis"
                                [legend]="showLegend"
                                [showXAxisLabel]="showXAxisLabel"
                                [showYAxisLabel]="showYAxisLabel"
                                [xAxisLabel]="xAxisLabel"
                                [yAxisLabel]="yAxisLabel"
                                [autoScale]="autoScale"
                                (select)="onSelect($event)">
                        </ngx-charts-line-chart>
                    </div>
                </div>
                <!-- End Default Outline Panel-->
            </div>
        </div>

        <div class="row" style="margin-bottom: 10%">
            <div class="col-lg">
                <!-- Default Outline Panel-->
                <div class="card rounded-3 g-mb-20">
                    <h5 class="card-header h6 g-font-weight-400 rounded-0 g-color-gray-dark-v4">
                        当月交易笔数走势
                    </h5>

                    <div class="card-block">
                        <h5 class="h5"></h5>
                        <ngx-charts-line-chart
                                [view]="view"
                                [scheme]="colorScheme"
                                [results]="multi1"
                                [gradient]="gradient"
                                [xAxis]="showXAxis"
                                [yAxis]="showYAxis"
                                [legend]="showLegend"
                                [showXAxisLabel]="showXAxisLabel"
                                [showYAxisLabel]="showYAxisLabel"
                                [xAxisLabel]="xAxisLabel"
                                [yAxisLabel]="yAxisLabe2"
                                [autoScale]="autoScale"
                                (select)="onSelect($event)">
                        </ngx-charts-line-chart>
                    </div>
                </div>
                <!-- End Default Outline Panel-->
            </div>
        </div>
    </div>

</section>
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
