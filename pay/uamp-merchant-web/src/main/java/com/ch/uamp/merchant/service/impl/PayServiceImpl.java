package com.ch.uamp.merchant.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ch.uamp.merchant.config.SystemConfig;
import com.ch.uamp.merchant.config.WeChatPayConfig;
import com.ch.uamp.merchant.model.*;
import com.ch.uamp.merchant.service.PayService;
import com.ch.uamp.merchant.util.Http;
import com.ch.uamp.merchant.util.PayUtil;
import com.ch.uamp.merchant.util.SignatureUtil;
import com.ch.uamp.merchant.util.XmlUtil;
import org.dom4j.DocumentException;
import org.jdom2.JDOMException;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

/**
 * Created by sd on 2018/1/20.
 */

@Service
public class PayServiceImpl implements PayService {


    /**
     *  这里我用的是统一下单和公众号 接口
     *  建议使用小程序的接口，参数可能不太一样不过发起请求的流程应该是一样的
     *  by kill
     * */
    @Override
    public WeChatPayResult getWechatData( HttpServletRequest request, String openId) {
        WeChatPayResult result = null;
        // 统一下单
        String out_trade_no = PayUtil.createOutTradeNo();
        int total_fee = 1; // 产品价格1分钱,用于测试
        String spbill_create_ip = Http.getRemortIP(request);
        String nonce_str = PayUtil.createNonceStr(); // 随机数据

        UnifiedOrderParams unifiedOrderParams = new UnifiedOrderParams();
        unifiedOrderParams.setAppid(WeChatPayConfig.APP_ID);// 必须
        unifiedOrderParams.setMch_id(WeChatPayConfig.MCH_ID);// 必须
        unifiedOrderParams.setOut_trade_no(out_trade_no);// 必须
        unifiedOrderParams.setBody("支付测试");// 必须
        unifiedOrderParams.setTotal_fee(total_fee); // 必须
        unifiedOrderParams.setNonce_str(nonce_str); // 必须
     //   unifiedOrderParams.setSpbill_create_ip(Http.getRealIp2(request)); // 必须
        //注意一下这里 这个我填写的统一下单的参数
        unifiedOrderParams.setTrade_type("MWEB"); // 必须 公众号支付类型为 JSAPI
        //unifiedOrderParams.setOpenid(openId); //此参数为公众号支付必须参数
        unifiedOrderParams.setScene_info(SceneInfoEntity.toJsonString());
        unifiedOrderParams.setNotify_url(WeChatPayConfig.NOTIFY_URL);// 异步通知url
        // 统一下单 请求的Xml(正常的xml格式)
        String unifiedXmL = abstractPayToXml(unifiedOrderParams);////签名并入service
        // 返回<![CDATA[SUCCESS]]>格式的XML
        String unifiedOrderResultXmL = Http.HttpsDefaultExecute(Http.POST_METHOD,WeChatPayConfig.UNIFIED_ORDER_URL, null, unifiedXmL);
        // 进行签名校验
        try {
            if (SignatureUtil.checkIsSignValidFromWeiXin(unifiedOrderResultXmL)) {
                String timeStamp = PayUtil.createTimeStamp();
                //Map map =XmlUtil.getObjectFromXML(unifiedOrderResultXmL,Map.class);
                JSONObject json= XmlUtil.xml2JSON(
                        unifiedOrderResultXmL.getBytes()
                ).getJSONObject("xml");

                for(String key : json.keySet()){
                    String str = json.get(key).toString().replace("[","").replace("]","");
                    json.put(key,str);
                }

                UnifiedOrderResult unifiedOrderResult= JSON.toJavaObject(
                        json,
                        UnifiedOrderResult.class) ;
                //统一下单响应
//              UnifiedOrderResult unifiedOrderResult = XmlUtil.getObjectFromXML(unifiedOrderResultXmL, UnifiedOrderResult.class);
                result = new WeChatPayResult();

                result.setAppId(WeChatPayConfig.APP_ID);
                result.setTimeStamp(timeStamp);
                result.setNonceStr(unifiedOrderResult.getNonce_str());//直接用返回的
                /**** prepay_id 2小时内都有效，再次支付方法自己重写 ****/
                result.setPackageStr("prepay_id=" + unifiedOrderResult.getPrepay_id());
                /**** 用对象进行签名 ****/
                String paySign = SignatureUtil.createSign(result, WeChatPayConfig.API_KEY, SystemConfig.CHARACTER_ENCODING);
                result.setPaySign(paySign);
                result.setMweb_url(json.get("mweb_url").toString());
                result.setResultCode("SUCCESS");
            } else {
                result.setResultCode("Err");
            }
        } catch (ParserConfigurationException | DocumentException e) {
            e.printStackTrace();
            result.setResultCode("Err");
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            result.setResultCode("Err");
            e.printStackTrace();
        } catch (JDOMException e) {
            result.setResultCode("Err");
            e.printStackTrace();
        }
        return result;
    }

    private String abstractPayToXml(AbstractPayParams params){
        String sign = SignatureUtil.createSign(params, WeChatPayConfig.API_KEY, SystemConfig.CHARACTER_ENCODING);
        params.setSign(sign);
        return XmlUtil.toSplitXml(params);
    }

}
