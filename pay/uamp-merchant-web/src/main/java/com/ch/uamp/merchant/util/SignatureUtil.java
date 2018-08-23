package com.ch.uamp.merchant.util;

import com.ch.uamp.merchant.config.SystemConfig;
import com.ch.uamp.merchant.config.WeChatPayConfig;
//import jdk.internal.org.xml.sax.SAXException;
import org.dom4j.DocumentException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.lang.reflect.Field;
//import java.security.MessageDigest;
//import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.SortedMap;
import java.util.logging.Logger;

/**
 * Created by sd on 2018/1/20.
 */

public class SignatureUtil {

    private static Logger logger = Logger.getLogger(String.valueOf(SignatureUtil.class));

    /**
     * 将字节数组转换为十六进制字符串
     *
     * @param byteArray
     * @return
     */
//    private static String byteToStr(byte[] byteArray) {
//        String strDigest = "";
//        for (int i = 0; i < byteArray.length; i++) {
//            strDigest += byteToHexStr(byteArray[i]);
//        }
//        return strDigest;
//    }

    /**
     * 将字节转换为十六进制字符串
     *
     * @param mByte
     * @return
     */
//    private static String byteToHexStr(byte mByte) {
//        char[] Digit = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
//        char[] tempArr = new char[2];
//        tempArr[0] = Digit[(mByte >>> 4) & 0X0F];
//        tempArr[1] = Digit[mByte & 0X0F];
//
//        String s = new String(tempArr);
//        return s;
//    }

    /**
     * 获取签名
     *
     * @param o
     *            待加密的对象 该处仅限于Class
     * @param apiKey
     *            公众号key
     * @param characterEncoding
     *            编码
     * @return
     */
    public static String createSign(Object o, String apiKey, String characterEncoding) {
        String result = notSignParams(o, apiKey);
        // logger.info("params sign before:" + result);
        result = MD5Util.MD5Encode(result, characterEncoding).toUpperCase();
        // logger.info("params sign result:" + result);
        return result;
    }

    /**
     * 签名算法
     *
     * @param o 要参与签名的数据对象
     * @param apiKey  API密匙
     * @return 签名
     * @throws IllegalAccessException
     */
    public static String notSignParams(Object o, String apiKey) {
        ArrayList<String> list = new ArrayList<String>();
        String result = "";
        try {
            Class<?> cls = o.getClass();
            Field[] fields = cls.getDeclaredFields();
            list = getFieldList(fields, o);
            Field[] superFields = cls.getSuperclass().getDeclaredFields(); // 获取父类的私有属性
            list.addAll(getFieldList(superFields, o));
            int size = list.size();
            String[] arrayToSort = list.toArray(new String[size]);
            Arrays.sort(arrayToSort, String.CASE_INSENSITIVE_ORDER); // 严格按字母表顺序排序
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < size; i++) {
                sb.append(arrayToSort[i]);
            }
            result = sb.toString();
            if (apiKey != null && !"".equals(apiKey)) {
                result += "key=" + apiKey;
            } else {
                result = result.substring(0, result.lastIndexOf("&"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 将字段集合方法转换
     *
     * @param array
     * @param object
     * @return
     * @throws IllegalArgumentException
     * @throws IllegalAccessException
     */
    private static ArrayList<String> getFieldList(Field[] array, Object object) throws IllegalArgumentException, IllegalAccessException {
        ArrayList<String> list = new ArrayList<String>();
        for (Field f : array) {
            f.setAccessible(true);
            if (f.get(object) != null && f.get(object) != "" && !f.getName().equals("serialVersionUID") && !f.getName().equals("sign")) {
                if (f.getName().equals("packageStr")) {
                    list.add("package" + "=" + f.get(object) + "&");
                } else {
                    list.add(f.getName() + "=" + f.get(object) + "&");
                }
            }
        }
        return list;
    }

    /**
     * 通过Map<String,Object>中的所有元素参与签名
     *
     * @param map
     *            待参与签名的map集合
     * @params apikey apikey中 如果为空则不参与签名，如果不为空则参与签名
     * @return
     */
    public static String createSign(Map<Object, Object> map, String apiKey, String characterEncoding) {
        String result = notSignParams(map, apiKey);
        // logger.info("Sign Before MD5:" + result);
        result = MD5Util.MD5Encode(result, characterEncoding).toUpperCase();
        logger.info("Sign Result:" + result);
        return result;
    }

    /**
     * 通过Map<SortedMap,Object>中的所有元素参与签名
     *
     * @param map
     *            待参与签名的map集合
     * @params apikey apikey中 如果为空则不参与签名，如果不为空则参与签名
     * @return
     */
    public static String createSign(SortedMap<Object, Object> map, String apiKey, String characterEncoding) {
        String result = notSignParams(map, apiKey);
        // logger.info("Sign Before MD5:" + result);
        result = MD5Util.MD5Encode(result, characterEncoding).toUpperCase();
        logger.info("Sign Result:" + result);
        return result;
    }

    /**
     * 返回未加密的字符串
     *
     * @param params
     * @param apiKey
     * @return 待加密的字符串
     */
    public static String notSignParams(SortedMap<Object, Object> params, String apiKey) {
        StringBuffer buffer = new StringBuffer();
        for (Map.Entry<Object, Object> entry : params.entrySet()) {
            if (entry.getValue() != "" && entry.getValue() != null) {
                buffer.append(entry.getKey() + "=" + entry.getValue() + "&");
            }
        }
        buffer.append("key=" + apiKey);
        return buffer.toString();
    }

    /**
     * 返回未加密的字符串
     *
     * @param params
     * @param apiKey
     * @return 待加密的字符串
     */
    public static String notSignParams(Map<Object, Object> params, String apiKey) {
        ArrayList<String> list = new ArrayList<String>();
        for (Map.Entry<Object, Object> entry : params.entrySet()) {
            if (entry.getValue() != "" && entry.getValue() != null) {
                list.add(entry.getKey() + "=" + entry.getValue() + "&");
            }
        }
        int size = list.size();
        String[] arrayToSort = list.toArray(new String[size]);
        Arrays.sort(arrayToSort, String.CASE_INSENSITIVE_ORDER);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < size; i++) {
            sb.append(arrayToSort[i]);
        }
        String result = sb.toString();
        if (apiKey != null && !"".equals(apiKey)) {
            result += "key=" + apiKey;
        } else {
            result = result.substring(0, result.lastIndexOf("&"));
        }
        return result;
    }

    /**
     * 从API返回的XML数据里面重新计算一次签名
     *
     * @param responseString
     *            API返回的XML数据
     * @param apiKey
     *            Key
     * @return 新的签名
     * @throws ParserConfigurationException
     * @throws IOException
     * @throws SAXException
     */
    public static String reCreateSign(String responseString, String apiKey, String characterEncoding) throws IOException, ParserConfigurationException, org.xml.sax.SAXException {
        Map<Object, Object> map = XmlUtil.parseXmlToMap(responseString);
        // 清掉返回数据对象里面的Sign数据（不能把这个数据也加进去进行签名），然后用签名算法进行签名
        map.put("sign", "");
        // 将API返回的数据根据用签名算法进行计算新的签名，用来跟API返回的签名进行比较
        return createSign(map, apiKey, characterEncoding);
    }

    /**
     * (默认设置参数)
     * 检验API返回的数据里面的签名是否合法,规则是:按参数名称a-z排序,遇到空值的参数不参加签名
     *
     * @return API签名是否合法
     * @throws ParserConfigurationException
     * @throws IOException
     * @throws SAXException
     * @throws DocumentException
     */
    public static boolean checkIsSignValidFromWeiXin(String checktXml) throws ParserConfigurationException, IOException, DocumentException, org.xml.sax.SAXException {
        SortedMap<Object, Object> map = XmlUtil.parseXmlToSortedMap(checktXml);
        String signFromresultXml = (String) map.get("sign");
        if (signFromresultXml == "" || signFromresultXml == null) {
            logger.info("API返回的数据签名数据不存在");
            return false;
        }
        //logger.debug("服务器回包里面的签名是:" + signFromresultXml);
        // 清掉返回数据对象里面的Sign数据（不能把这个数据也加进去进行签名），然后用签名算法进行签名
        map.put("sign", "");
        // 将API返回的数据根据用签名算法进行计算新的签名，用来跟API返回的签名进行比较
        String signForAPIResponse = createSign(map, WeChatPayConfig.API_KEY, SystemConfig.CHARACTER_ENCODING);
        if (!signForAPIResponse.equals(signFromresultXml)) {
            // 签名验不过，表示这个API返回的数据有可能已经被篡改了
            logger.info("API返回的数据签名验证不通过");
            return false;
        }
        logger.info("API返回的数据签名验证通过");
        return true;
    }

    /**
     * 检验API返回的数据里面的签名是否合法,规则是:按参数名称a-z排序,遇到空值的参数不参加签名
     *
     * @param apiKey
     *            Key
     * @return API签名是否合法
     * @throws ParserConfigurationException
     * @throws IOException
     * @throws SAXException
     * @throws DocumentException
     */
    public static boolean checkIsSignValidFromWeiXin(String checktXml, String apiKey, String characterEncoding) throws ParserConfigurationException, IOException,  DocumentException, org.xml.sax.SAXException {
        SortedMap<Object, Object> map = XmlUtil.parseXmlToSortedMap(checktXml);
        String signFromresultXml = (String) map.get("sign");
        if (signFromresultXml == "" || signFromresultXml == null) {
            logger.info("API返回的数据签名数据不存在");
            return false;
        }
        //logger.debug("服务器回包里面的签名是:" + signFromresultXml);
        // 清掉返回数据对象里面的Sign数据（不能把这个数据也加进去进行签名），然后用签名算法进行签名
        map.put("sign", "");
        // 将API返回的数据根据用签名算法进行计算新的签名，用来跟API返回的签名进行比较
        String signForAPIResponse = createSign(map, apiKey, characterEncoding);
        if (!signForAPIResponse.equals(signFromresultXml)) {
            // 签名验不过，表示这个API返回的数据有可能已经被篡改了
            logger.info("API返回的数据签名验证不通过");
            return false;
        }
        logger.info("API返回的数据签名验证通过");
        return true;
    }
}