package com.ch.uamp.merchant.util;

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.*;
import java.util.*;
import java.util.Map.Entry;

import javax.imageio.ImageIO;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.servlet.http.HttpServletRequest;

import com.ch.uamp.merchant.config.SystemConfig;
import com.ch.uamp.merchant.model.WechatResult;
import org.apache.commons.io.IOUtils;

import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import org.apache.commons.lang3.StringUtils;

public class Http {

    public String httpclientPost(String url, Map<String, String> map) throws Exception {

        // 创建HttpClient对象
        HttpClient client = HttpClients.createDefault();

        // 创建POST请求
        HttpPost post = new HttpPost(url);

        // 创建一个List容器，用于存放基本键值对（基本键值对即：参数名-参数值）
        List<BasicNameValuePair> parameters = new ArrayList<>();
        for (String key : map.keySet()) {
            parameters.add(new BasicNameValuePair(key, map.get(key)));
        }

        // 向POST请求中添加消息实体
        post.setEntity((HttpEntity) new UrlEncodedFormEntity(parameters, "utf-8"));

        // 得到响应并转化成字符串
        HttpResponse response = client.execute(post);
        HttpEntity httpEntity = response.getEntity();
        String result = EntityUtils.toString(httpEntity, "utf-8");
        System.out.println(result);
        return result;
    }


    public static final String GET_METHOD = "GET";

    public static final String POST_METHOD = "POST";

    private static int DEFAULT_CONNTIME = 5000;

    private static int DEFAULT_READTIME = 5000;

    /**
     * http请求
     *
     * @param method      请求方法GET/POST
     * @param path        请求路径
     * @param timeout     连接超时时间 默认为5000
     * @param readTimeout 读取超时时间 默认为5000
     * @param data        数据
     * @return
     */
    public static String defaultConnection(String method, String path, int timeout, int readTimeout, String data)
            throws Exception {
        String result = "";
        URL url = new URL(path);
        if (url != null) {
            HttpURLConnection conn = getConnection(method, url);
            conn.setConnectTimeout(timeout == 0 ? DEFAULT_CONNTIME : timeout);
            conn.setReadTimeout(readTimeout == 0 ? DEFAULT_READTIME : readTimeout);
            if (data != null && !"".equals(data)) {
                OutputStream output = conn.getOutputStream();
                output.write(data.getBytes(SystemConfig.CHARACTER_ENCODING));
                output.flush();
                output.close();
            }
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                InputStream input = conn.getInputStream();
                result = inputStreamToStrFromByte(input);
                input.close();
                conn.disconnect();
            }
        }
        return result;
    }

    /**
     * 根据url的协议选择对应的请求方式
     *
     * @param method 请求的方法
     * @return
     * @throws IOException
     */
    private static HttpURLConnection getConnection(String method, URL url) throws IOException {
        HttpURLConnection conn = null;
        if ("https".equals(url.getProtocol())) {
            SSLContext context = null;
            try {
                context = SSLContext.getInstance("SSL", "SunJSSE");
                context.init(new KeyManager[0], new TrustManager[]{new MyX509TrustManager()},
                        new java.security.SecureRandom());
            } catch (Exception e) {
                throw new IOException(e);
            }
            HttpsURLConnection connHttps = (HttpsURLConnection) url.openConnection();
            connHttps.setSSLSocketFactory(context.getSocketFactory());
            connHttps.setHostnameVerifier(new HostnameVerifier() {
                @Override
                public boolean verify(String arg0, SSLSession arg1) {
                    return true;
                }
            });
            conn = connHttps;
        } else {
            conn = (HttpURLConnection) url.openConnection();
        }
        conn.setRequestMethod(method);
        conn.setUseCaches(false);
        conn.setDoInput(true);
        conn.setDoOutput(true);
        return conn;
    }

    /**
     * 将输入流转换为字符串 (通过BufferedReader)
     *
     * @param in
     * @param charset
     * @return
     */
    public static String inputStreamToStrFromReader(InputStream in, String charset) {
        String result = "";
        StringBuffer buffer = new StringBuffer();
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(in, charset));
            while ((result = reader.readLine()) != null) {
                buffer.append(result);// append("\n");
            }
            reader.close();
            return buffer.toString();
        } catch (IOException e) {
            buffer = null;
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 将输入流转换为字符串(通过byte数组)
     *
     * @param input   输入流
     * @param charset
     * @return
     */
    public static String inputStreamToStrFromByte(InputStream input, String charset) {
        String result = "";
        int len = 0;
        byte[] array = new byte[1024];
        StringBuffer buffer = new StringBuffer();
        if (input != null) {
            try {
                while ((len = input.read(array)) != -1) {
                    buffer.append(new String(array, 0, len, charset));
                }
                result = buffer.toString();
            } catch (IOException e) {
                buffer = null;
                e.printStackTrace();
            }
        }
        return result;
    }

    /**
     * 将输入流转换为字符串(通过byte数组)
     *
     * @param input 输入流
     * @return
     */
    public static String inputStreamToStrFromByte(InputStream input) {
        String result = "";
        int len = 0;
        byte[] array = new byte[1024];
        StringBuffer buffer = new StringBuffer();
        if (input != null) {
            try {
                while ((len = input.read(array)) != -1) {
                    buffer.append(new String(array, 0, len, SystemConfig.CHARACTER_ENCODING));
                }
                result = buffer.toString();
            } catch (IOException e) {
                buffer = null;
                e.printStackTrace();
            }
        }
        return result;
    }

    /**
     * 设置参数
     *
     * @param map     参数map
     * @param path    需要赋值的path
     * @param charset 编码格式 默认编码为utf-8(取消默认)
     * @return 已经赋值好的url 只需要访问即可
     */
    public static String setParmas(Map<String, String> map, String path, String charset) throws Exception {
        String result = "";
        boolean hasParams = false;
        if (path != null && !"".equals(path)) {
            if (map != null && map.size() > 0) {
                StringBuilder builder = new StringBuilder();
                Set<Entry<String, String>> params = map.entrySet();
                for (Entry<String, String> entry : params) {
                    String key = entry.getKey().trim();
                    String value = entry.getValue().trim();
                    if (hasParams) {
                        builder.append("&");
                    } else {
                        hasParams = true;
                    }
                    if (charset != null && !"".equals(charset)) {
                        // builder.append(key).append("=").append(URLDecoder.(value,charset));
                        builder.append(key).append("=").append(urlEncode(value, charset));
                    } else {
                        builder.append(key).append("=").append(value);
                    }
                }
                result = builder.toString();
            }
        }
        return doUrlPath(path, result).toString();
    }

    /**
     * 设置连接参数
     *
     * @param path 路径
     * @return
     */
    private static URL doUrlPath(String path, String query) throws Exception {
        URL url = new URL(path);
        if (StringUtils.isEmpty(path)) {
            return url;
        }
        if (StringUtils.isEmpty(url.getQuery())) {
            if (path.endsWith("?")) {
                path += query;
            } else {
                path = path + "?" + query;
            }
        } else {
            if (path.endsWith("&")) {
                path += query;
            } else {
                path = path + "&" + query;
            }
        }
        return new URL(path);
    }

    /**
     * 默认的http请求执行方法,返回
     *
     * @param method 请求的方法 POST/GET
     * @param path   请求path 路径
     * @param map    请求参数集合
     * @param data   输入的数据 允许为空
     * @return
     */
    public static String HttpDefaultExecute(String method, String path, Map<String, String> map, String data) {
        String result = "";
        try {
            String url = setParmas((TreeMap<String, String>) map, path, "");
            result = defaultConnection(method, url, DEFAULT_CONNTIME, DEFAULT_READTIME, data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 默认的https执行方法,返回
     *
     * @param method 请求的方法 POST/GET
     * @param path   请求path 路径
     * @param map    请求参数集合
     * @param data   输入的数据 允许为空
     * @return
     */
    public static String HttpsDefaultExecute(String method, String path, Map<String, String> map, String data) {
        String result = "";
        try {
            String url = setParmas((TreeMap<String, String>) map, path, "");
            result = defaultConnection(method, url, DEFAULT_CONNTIME, DEFAULT_READTIME, data);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 默认的下载素材方法
     *
     * @param method   http方法 POST/GET
     * @param apiPath  api路径
     * @param savePath 素材需要保存的路径
     * @return 是否下载成功 Reuslt.success==true 表示下载成功
     */
    public static WechatResult downMeaterMetod(TreeMap<String, String> params, String method, String apiPath, String savePath) {
        WechatResult result = new WechatResult();
        try {
            apiPath = setParmas(params, apiPath, "");
            URL url = new URL(apiPath);
            HttpURLConnection conn = getConnection(method, url);
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                String contentType = conn.getContentType();
                result = contentType(contentType, conn, savePath);
            } else {
                result.setObject(conn.getResponseCode() + "," + conn.getResponseMessage());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 根据返回的头信息返回具体信息
     *
     * @param contentType contentType请求头信息
     * @return Result.type==1 表示文本消息,
     */
    private static WechatResult contentType(String contentType, HttpURLConnection conn, String savePath) {
        WechatResult result = new WechatResult();
        try {
            if (conn != null) {
                InputStream input = conn.getInputStream();
                // 考虑使用switch
                // switch(contentType){
                // case "image/gif": result = inputStreamToMedia(input,
                // savePath, "gif");
                // }
                if (contentType.equals("image/gif")) { // gif图片
                    result = inputStreamToMedia(input, savePath, "gif");
                } else if (contentType.equals("image/jpeg")) { // jpg图片
                    result = inputStreamToMedia(input, savePath, "jpg");
                } else if (contentType.equals("image/jpg")) { // jpg图片
                    result = inputStreamToMedia(input, savePath, "jpg");
                } else if (contentType.equals("image/png")) { // png图片
                    result = inputStreamToMedia(input, savePath, "png");
                } else if (contentType.equals("image/bmp")) { // bmp图片
                    result = inputStreamToMedia(input, savePath, "bmp");
                } else if (contentType.equals("audio/x-wav")) { // wav语音
                    result = inputStreamToMedia(input, savePath, "wav");
                } else if (contentType.equals("audio/x-ms-wma")) { // wma语言
                    result = inputStreamToMedia(input, savePath, "wma");
                } else if (contentType.equals("audio/mpeg")) { // mp3语言
                    result = inputStreamToMedia(input, savePath, "mp3");
                } else if (contentType.equals("text/plain")) { // 文本信息
                    String str = inputStreamToStrFromByte(input);
                    result.setObject(str);
                } else if (contentType.equals("application/json")) { // 返回json格式的数据
                    String str = inputStreamToStrFromByte(input);
                    result.setObject(str);
                }
            } else {
                result.setObject("conn is null!");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return result;
    }

    /**
     * 将字符流转换为图片文件
     *
     * @param savePath 图片需要保存的路径
     * @return
     */
    private static WechatResult inputStreamToMedia(InputStream inputStream, String savePath, String type) {
        WechatResult result = new WechatResult();
        try {
            File file = null;
            file = new File(savePath);
            String paramPath = file.getParent(); // 路径
            String fileName = file.getName(); //
            String newName = fileName.substring(0, fileName.lastIndexOf(".")) + "." + type;// 根据实际返回的文件类型后缀
            savePath = paramPath + "\\" + newName;
            if (!file.exists()) {
                File dirFile = new File(paramPath);
                dirFile.mkdirs();
            }
            file = new File(savePath);
            FileOutputStream output = new FileOutputStream(file);
            int len = 0;
            byte[] array = new byte[1024];
            while ((len = inputStream.read(array)) != -1) {
                output.write(array, 0, len);
            }
            output.flush();
            output.close();
            result.setSuccess(true);
            result.setObject("save success!");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            //result.setSuccess(false);
            result.setObject(e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            //result.setSuccess(false);
            result.setObject(e.getMessage());
            result.setMsg(e.getMessage());
        }
        return result;
    }

    /**
     * 编码
     *
     * @param source
     * @param encode
     * @return
     */
    public static String urlEncode(String source, String encode) {
        String result = source;
        try {
            result = URLEncoder.encode(source, encode);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 将输入流转换字节数组
     *
     * @return
     * @throws IOException
     */
    public static byte[] readInput(InputStream inputStream) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        int len = 0;
        byte[] array = new byte[1024];
        while ((len = inputStream.read(array)) != -1) {
            out.write(array, 0, len);
        }
        IOUtils.closeQuietly(out);
        IOUtils.closeQuietly(inputStream);
        return out.toByteArray();
    }

    /**
     * 将输入流转换为字符串
     *
     * @param is 待转换为字符串的输入流
     * @return 由输入流转换String的字符串
     * @throws IOException
     */
    public static String inputStreamToString(InputStream inputStream) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        int i;
        while ((i = inputStream.read()) != -1) {
            baos.write(i);
        }
        return baos.toString();
    }

    /**
     * 将字符串转换为输入流
     *
     * @param sInputString 待转换为输入流的字符串
     * @return
     */
    public static InputStream getStringStream(String sInputString) {
        ByteArrayInputStream byteArrayInputStream = null;
        if (sInputString != null && !sInputString.trim().equals("")) {
            try {
                byteArrayInputStream = new ByteArrayInputStream(sInputString.getBytes(SystemConfig.CHARACTER_ENCODING));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }
        return byteArrayInputStream;
    }

//    /**
//     * 判断微信API是否返回正确的json数据包({"errcode":0,"errmsg":"ok"})
//     *
//     * @param result
//     * @return
//     */
//    public static boolean checkState(String result) {
//        ResultState state = null;
//        Gson gson = new Gson();
//        state = gson.fromJson(result, ResultState.class);
//        gson = null;
//        if (state.getErrcode() == 0) {
//            return Boolean.TRUE;
//        }
//        return Boolean.FALSE;
//    }

    /**
     * 改变图片大小、格式
     *
     * @param size
     * @param format
     * @return
     * @throws IOException
     */
    public static OutputStream resizeImage(InputStream inputStream, OutputStream outputStream, int size, String format) throws IOException {
        BufferedImage prevImage = ImageIO.read(inputStream);
        double width = prevImage.getWidth();
        double height = prevImage.getHeight();
        double percent = size / width;
        int newWidth = (int) (width * percent);
        int newHeight = (int) (height * percent);
        BufferedImage image = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_BGR);
        Graphics graphics = image.createGraphics();
        graphics.drawImage(prevImage, 0, 0, newWidth, newHeight, null);
        ImageIO.write(image, format, outputStream);
        outputStream.flush();
        inputStream.close();
        outputStream.close();
        return outputStream;
    }

    /**
     * 获取客户端ip
     *
     * @param request
     * @return
     */
    public static String getRemortIP(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }

        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }

        // squid的squid.conf 的配制文件中forwarded_for项改为off时
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }

        // 多级反向代理
        if (ip != null && ip.indexOf(",") > 0 && ip.split(",").length > 1) {
            ip = ip.split(",")[0];
        }
        return ip;
    }



    /**
     * 获取用户真实IP地址，不使用request.getRemoteAddr()的原因是有可能用户使用了代理软件方式避免真实IP地址,
     * 可是，如果通过了多级反向代理的话，X-Forwarded-For的值并不止一个，而是一串IP值
     *
     * @return ip
     */
    public static String getIpAddr(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        System.out.println("x-forwarded-for ip: " + ip);
        if (ip != null && ip.length() != 0 && !"unknown".equalsIgnoreCase(ip)) {
            // 多次反向代理后会有多个ip值，第一个ip才是真实ip
            if( ip.indexOf(",")!=-1 ){
                ip = ip.split(",")[0];
            }
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
            System.out.println("Proxy-Client-IP ip: " + ip);
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
            System.out.println("WL-Proxy-Client-IP ip: " + ip);
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
            System.out.println("HTTP_CLIENT_IP ip: " + ip);
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
            System.out.println("HTTP_X_FORWARDED_FOR ip: " + ip);
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
            System.out.println("X-Real-IP ip: " + ip);
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
            System.out.println("getRemoteAddr ip: " + ip);
        }
        System.out.println("获取客户端ip: " + ip);
        return ip;
    }

    public static String getIp2(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (StringUtils.isNotEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)) {
            //多次反向代理后会有多个ip值，第一个ip才是真实ip
            int index = ip.indexOf(",");
            if (index != -1) {
                return ip.substring(0, index);
            } else {
                return ip;
            }
        }
        ip = request.getHeader("X-Real-IP");
        if (StringUtils.isNotEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)) {
            return ip;
        }
        return request.getRemoteAddr();
    }


    public static String getRealIp2() throws SocketException {
        String localip = null;// 本地IP，如果没有配置外网IP则返回它
        String netip = null;// 外网IP
        Enumeration<NetworkInterface> netInterfaces = NetworkInterface.getNetworkInterfaces();
        InetAddress ip = null;
        boolean finded = false;// 是否找到外网IP
        while (netInterfaces.hasMoreElements() && !finded) {
            NetworkInterface ni = netInterfaces.nextElement();
            Enumeration<InetAddress> address = ni.getInetAddresses();
            while (address.hasMoreElements()) {
                ip = address.nextElement();
                if (!ip.isSiteLocalAddress()
                        && !ip.isLoopbackAddress()
                        && ip.getHostAddress().indexOf(":") == -1) {// 外网IP
                    netip = ip.getHostAddress();
                    finded = true;
                    break;
                } else if (ip.isSiteLocalAddress()
                        && !ip.isLoopbackAddress()
                        && ip.getHostAddress().indexOf(":") == -1) {// 内网IP
                    localip = ip.getHostAddress();
                }
            }
        }

        if (netip != null && !"".equals(netip)) {
            return netip;
        } else {
            return localip;
        }
    }
}