package com.ch.uamp.merchant.service;


import com.ch.uamp.merchant.model.WeChatPayResult;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by sd on 2018/1/20.
 */


public interface PayService {

    WeChatPayResult getWechatData(HttpServletRequest request, String openId);

}
