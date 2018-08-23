package com.ch.uamp.merchant.util;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by sd on 2018/1/20.
 */
public class PayUtil {

    /**
     * 取出一个指定长度大小的随机正整数
     *
     * @param length
     * @return
     */
    public static int buildRandom(int length) {
        int num = 1;
        double random = Math.random();
        if (random < 0.1) {
            random = random + 0.1;
        }
        for (int i = 0; i < length; i++) {
            num = num * 10;
        }
        return (int) ((random * num));
    }

    /**
     * 获得随机字符串
     *
     * @return
     */
    public static String createNonceStr() {
        Random random = new Random();
        return MD5Util.MD5Encode(String.valueOf(random.nextInt(10000)),"utf-8");
    }

    /**
     * 生成商户订单号
     *
     * @return
     */
    public static String createOutTradeNo() {
        DateFormat df = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        return df.format(new Date()) + UUID.randomUUID().toString().hashCode();
    }

    /**
     * 生成时间戳
     *
     * @return
     */
    public static String createTimeStamp() {
        return String.valueOf(System.currentTimeMillis() / 1000);
    }

    /**
     * 生成支付二维码URL
     *
     * @param params
     * @return
     */
    public static String createPayImageUrl(SortedMap<Object, Object> params) {
        StringBuffer buffer = new StringBuffer();
        for (Map.Entry<Object, Object> entry : params.entrySet()) {
            if (entry.getValue() != null) {
                buffer.append("&" + entry.getKey() + "=" + entry.getValue());
            }
        }
        return buffer.toString();
    }

}
