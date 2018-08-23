package com.ch.uamp.merchant.controller;

import com.ch.uamp.merchant.model.PayParams;
import com.ch.uamp.merchant.service.PayService;
import com.ch.uamp.merchant.util.Http;
import com.ch.uamp.merchant.util.WeChatPayUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;


@Controller
public class H5PayController {

    @Autowired
    PayService payService;

    @PostMapping("/test")
    public Object test(@RequestBody PayParams payParams, HttpServletRequest request, HttpServletResponse response){
        payParams.setIp(Http.getRemortIP(request));
        return WeChatPayUtil.toPay(payParams);
    }

}
