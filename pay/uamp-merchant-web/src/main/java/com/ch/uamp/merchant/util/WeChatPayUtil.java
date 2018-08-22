package com.ch.uamp.merchant.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ch.uamp.merchant.config.SystemConfig;
import com.ch.uamp.merchant.config.WeChatPayConfig;
import com.ch.uamp.merchant.enums.TradeType;
import com.ch.uamp.merchant.model.*;

import org.dom4j.DocumentException;
import org.jdom2.JDOMException;
import org.xml.sax.SAXException;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.Map;
import java.util.function.Function;

/**
 * Created by sd on 2018/8/4.
 */
public class WeChatPayUtil {

    // 调起统一下单接口
    // map 传入参数
    // function 回调函数
    public static WeChatPayResult toPay(PayParams payParams) {
        try {
            return creatingParams(getUnifiedOrderParams(payParams));
        } catch (JDOMException | IOException | SAXException | DocumentException | ParserConfigurationException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static UnifiedOrderParams getUnifiedOrderParams(PayParams payParams){
        UnifiedOrderParams unifiedOrderParams = new UnifiedOrderParams();
        unifiedOrderParams.setAppid(WeChatPayConfig.APP_ID);
        unifiedOrderParams.setMch_id(WeChatPayConfig.MCH_ID);
        unifiedOrderParams.setOut_trade_no(PayUtil.createOutTradeNo());
        unifiedOrderParams.setNonce_str(PayUtil.createNonceStr()); // 必须
        unifiedOrderParams.setBody(payParams.getDescription());// 必须
        unifiedOrderParams.setTotal_fee(payParams.getAmount()); // 必须
        unifiedOrderParams.setOpenid(payParams.getOpenId()); //此参数为公众号支付必须参数
        //这里必须真实外网ip
        unifiedOrderParams.setSpbill_create_ip(payParams.getIp());
        unifiedOrderParams.setTrade_type(TradeType.JSAPI.toString()); // 必须 公众号支付类型为 JSAPI
        //unifiedOrderParams.setScene_info(SceneInfoEntity.toJsonString());
        unifiedOrderParams.setNotify_url(WeChatPayConfig.NOTIFY_URL);// 异步通知url
        return unifiedOrderParams;
    }

    //生成请求参数
    private static WeChatPayResult creatingParams(UnifiedOrderParams unifiedOrderParams) throws JDOMException, IOException, DocumentException, SAXException, ParserConfigurationException {
        WeChatPayResult result = new WeChatPayResult();
        String unifiedXmL = abstractPayToXml(unifiedOrderParams);////签名并入service
        // 返回<![CDATA[SUCCESS]]>格式的XML
        String unifiedOrderResultXmL = Http.HttpsDefaultExecute(Http.POST_METHOD,WeChatPayConfig.UNIFIED_ORDER_URL, null, unifiedXmL);
        if (SignatureUtil.checkIsSignValidFromWeiXin(unifiedOrderResultXmL)) {
            String timeStamp = PayUtil.createTimeStamp();
            //Map map =XmlUtil.getObjectFromXML(unifiedOrderResultXmL,Map.class);
            JSONObject json= XmlUtil.xml2JSON(unifiedOrderResultXmL.getBytes()).getJSONObject("xml");
            for(String key : json.keySet()){
                String str = json.get(key).toString().replace("[","").replace("]","");
                json.put(key,str);
            }
            UnifiedOrderResult unifiedOrderResult= JSON.toJavaObject(json, UnifiedOrderResult.class) ;
                //统一下单响应
            result.setAppId(WeChatPayConfig.APP_ID);
            result.setTimeStamp(timeStamp);
            result.setNonceStr(unifiedOrderResult.getNonce_str());//直接用返回的
            /**** prepay_id 2小时内都有效，再次支付方法自己重写 ****/
            result.setPackageStr("prepay_id=" + unifiedOrderResult.getPrepay_id());
            /**** 用对象进行签名 ****/
            addPaySign(result);
            result.setMweb_url(json.get("mweb_url").toString());
            result.setResultCode("SUCCESS");
        } else {
            result.setResultCode("Err");
        }
        return result;
    }


    //加签
    private static void addPaySign(WeChatPayResult result){
        result.setPaySign(SignatureUtil.createSign(result, WeChatPayConfig.API_KEY, SystemConfig.CHARACTER_ENCODING));
    }

    //生成XML
    private static String abstractPayToXml(AbstractPayParams params){
        String sign = SignatureUtil.createSign(params, WeChatPayConfig.API_KEY, SystemConfig.CHARACTER_ENCODING);
        params.setSign(sign);
        return XmlUtil.toSplitXml(params);
    }


}
