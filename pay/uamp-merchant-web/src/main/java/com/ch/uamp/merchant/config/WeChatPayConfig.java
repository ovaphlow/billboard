package com.ch.uamp.merchant.config;

/**
 * Created by sd on 2018/1/20.
 */
public class WeChatPayConfig {

    public static final String APP_ID = "wx9a881bf8802512fb";
    public static final String APP_SECRET = "3ff25e5e156308ece76877506eb8ea9f";
    public static final String WECHAT_TOKEN = "iemsoft";

    public static final String MCH_ID = "10024716";// 商户号
    public static final String API_KEY = "e06b3e54e4e95fe4d1578df184f198f3";// API密钥

    // 异步通知URL
    public static final String NOTIFY_URL = "http://www.baidu.com";

    // 微信支付统一接口(POST)
    public static final String UNIFIED_ORDER_URL = "https://api.mch.weixin.qq.com/pay/unifiedorder";
    // 微信退款接口(POST)
    public static final String REFUND_URL = "https://api.mch.weixin.qq.com/secapi/pay/refund";
    // 订单查询接口(POST)
    public static final String CHECK_ORDER_URL = "https://api.mch.weixin.qq.com/pay/orderquery";
    // 关闭订单接口(POST)
    public static final String CLOSE_ORDER_URL = "https://api.mch.weixin.qq.com/pay/closeorder";
    // 退款查询接口(POST)
    public static final String CHECK_REFUND_URL = "https://api.mch.weixin.qq.com/pay/refundquery";
    // 对账单接口(POST)
    public static final String DOWNLOAD_BILL_URL = "https://api.mch.weixin.qq.com/pay/downloadbill";
    // 短链接转换接口(POST)
    public static final String PAY_SHORT_URL = "https://api.mch.weixin.qq.com/tools/shorturl";
    // 接口调用上报接口(POST)
    public static final String REPORT_URL = "https://api.mch.weixin.qq.com/payitil/report";
    // Token
    public static final String TOKEN_PATH = "https://api.weixin.qq.com/cgi-bin/token";

    // 授权链接
    public static final String AUTHORIZE_URL = "https://open.weixin.qq.com/connect/oauth2/authorize";
    // 获取token的链接
    public static final String ACCESS_TOKEN_URL = "https://api.weixin.qq.com/sns/oauth2/access_token";
    // 刷新token
    public static final String REFRESH_TOKEN_URL = "https://api.weixin.qq.com/sns/oauth2/refresh_token";
    // 获取授权用户信息
    public static final String USERINFO_URL = "https://api.weixin.qq.com/sns/userinfo";
    // 判断用户accessToken是否有效
    public static final String SNS_AUTH_URL = "https://api.weixin.qq.com/sns/auth";
    // 授权登陆链接
    public static final String QRCONNECT_PATH = "https://open.weixin.qq.com/connect/qrconnect";

}
