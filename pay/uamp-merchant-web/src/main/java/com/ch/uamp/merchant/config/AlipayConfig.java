package com.ch.uamp.merchant.config;

public class AlipayConfig {
    // 商户appid
//	public static String APPID = "2018011001751596";
    // 私钥 pkcs8格式的
//	public static String RSA_PRIVATE_KEY = "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDZqbQN4MrT55ofNKyJLVEMSERdbqo5Oz8qr3f4gpA03UpBlhiddKs3g5Fxkdl5FFPrKkpL6cwNXb6zrFsaPqRsFiT3VEk24iJkB6FILqoI1mS0mVx9+Rk26++AZkMnPHmy3w52tSyfgQ+IqpNK8vwypS8l3ud4S7QxIjZV1gJFlN6DE52jGMIKKFZXGvG5epQWbCZUn7NuzxlvfbRP2T4RJao8KZcT0fkBQY45dXEvcxiX4tU9MmrOrkxRf3TgeSbeGkOshQa34weksYPCRRQ2w5o+1QXjenykcaSFl5SGZMzLtJ4gNdvY5KQE1bwaZJaZTOYBzRxxrYf9ChE1X0zPAgMBAAECggEBAKvacW8DrSDiG63HyPIF9Zfc9x1N4tiNDrKFGBP+Ah27GoXuHEE1fHm4R32DylDu29Mw8Lg/P/zNp2P1EXkHPIqacVVWFvheUwjnfU+giF+x5pExBPXxVxcl8VNPanXwKaYwtxrCsRi+raUaCHGEp9rU0QT1mYxBOWQRvxTGg8Sq8I1/ow4p7mHuseYOrpbeMHxmmcI4lrvoLJ//+hv11bqr+eZiI9jZOYfTjOFwvtIMJhf5Fs+WIT14LO1s1eplqj+cAU1VKEvHL3/KsHbT0zF27zkNVr0xAxtDzN30dShnKgOlM2m3pqqyu76QzwGzuswwJtzsTkvm2WSyn+fqtAECgYEA9B1ZuSsT8pz16N0mhPO0xCCpE2KH4wetfvfz1om4maBuY843BopfwOFxOLyUMCdKp2XKKlPrIO2Dvzjml2MSNn5Fjj3itDlhJ9pUKZNJWzNLznaVI5pmNMQ59Sc4UCFsAC9YW6HURCwfIzcBQZcSIccr/wK+mN03B6QTgoZ5KjECgYEA5EKoZUVzfdWK/M9JBdamRUzhhQyZguJO1w/vsZ+Tz2vMtF6cOxHuP+BsBCq5g9QEYnOk3Tahw17nNvGGAkNSQWgw2F/MpPkgiDTIc/tZtsVbdCdB3SrNWlaa6PzXfoM6kYE2d0xMS/zBMlnhE6xQGVBA8lScoL+8xK8HUPdbJv8CgYEAtPTQ3u9s8QqjS4QsGqAhXsWrL8B5ZLT7SkR5j441tkPzsK5bodCPXIaBjIJWA0ANGfvdmfTtNlJ6uBRw8sWw6Y4+90sus1RZjdZNTyhsV1u2FQ1YTrUUkIbpQ65YEyZDTfvKrtpOZF6kklEi8EERYtKm7XlWWjCZq2NYRwhx5vECgYEA4vqJ21JpmtqLAAPb2EtvQYBGzXgO+sCxp1f4gQdvAxZuE3n1HyQgZzJyFt6pZTaiOYhHi5X024L2poMbQArTs6i40aDJrc7xk5/xKKvrtTyhSWp0K0qRs2BlYIN0giBaUDBOCek8AV/QeZI4p8h0Sges3YxXx92CB48I1nFyGd8CgYBzp1MpSfpwMwO3tERRXRppqTOxXfc9BI+ymKxHcc3ToukJR6W1+wR+9XN24Fe13GmJdOd1F/e1jVC59TuDM8y9MW5mmWrRfnYG8foiS8ay1jWCCNKLH8Fyhy+0uBs4xh3ZjpNlB9xM9co3/a+FjNAtgaq3vnyqJVSYghzktAvmng==";

    // 服务器异步通知页面路径 需http://或者https://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://202.98.157.47:8081/alipay/notify_url.jsp";
    // 页面跳转同步通知页面路径 需http://或者https://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问 商户可以自定义同步跳转地址
    public static String return_url = "http://202.98.157.47:8081/alipay/return_url.jsp";
    // 请求网关地址
    //public static String URL = "https://openapi.alipay.com/gateway.do";
    // 编码
    public static String CHARSET = "UTF-8";
    // 返回格式
    public static String FORMAT = "json";
    // 支付宝公钥
//	public static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjrEVFMOSiNJXaRNKicQuQdsREraftDA9Tua3WNZwcpeXeh8Wrt+V9JilLqSa7N7sVqwpvv8zWChgXhX/A96hEg97Oxe6GKUmzaZRNh0cZZ88vpkn5tlgL4mH/dhSr3Ip00kvM4rHq9PwuT4k7z1DpZAf1eghK8Q5BgxL88d0X07m9X96Ijd0yMkXArzD7jg+noqfbztEKoH3kPMRJC2w4ByVdweWUT2PwrlATpZZtYLmtDvUKG/sOkNAIKEMg3Rut1oKWpjyYanzDgS7Cg3awr1KPTl9rHCazk15aNYowmYtVabKwbGVToCAGK+qQ1gT3ELhkGnf3+h53fukNqRH+wIDAQAB";
//	public static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoczVTr2mu3drG2/RDD4sZIN0uatQCetTUymv0mReTtF0Iqi4CjmsJs/4HdTmO5W+yJP/6MDJD3+U72YQlGTTEjCrUdu7O9VcCr6AzmgtD449TE1YtZUutvNCWdiQ5BWzBSLesbrgqfYr7yhXuMMZpPWFK9mcRS9IhOMmHdm8NoV+S44qs4Kc6w9DAKX3QKp7hZ7u9KRJOrFr3JIJ3Tm/NU8IKh+avSId4XQrU3/heHkAggrHDFMl0rQXRseW+cGO7RXP2MXS+CbFI6KkxSmpK1VWBOPrInAy81ChnUfe7puJRTyyPiCcWytT9Q0Lv93LhPztLhvva/Eu4xgL70LiaQIDAQAB";

    // 日志记录目录
    public static String log_path = "/log";
    // RSA2
    public static String SIGNTYPE = "RSA2";

    public static String URL = "https://openapi.alipaydev.com/gateway.do";
    public static String RSA_PRIVATE_KEY = "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDZqbQN4MrT55ofNKyJLVEMSERdbqo5Oz8qr3f4gpA03UpBlhiddKs3g5Fxkdl5FFPrKkpL6cwNXb6zrFsaPqRsFiT3VEk24iJkB6FILqoI1mS0mVx9+Rk26++AZkMnPHmy3w52tSyfgQ+IqpNK8vwypS8l3ud4S7QxIjZV1gJFlN6DE52jGMIKKFZXGvG5epQWbCZUn7NuzxlvfbRP2T4RJao8KZcT0fkBQY45dXEvcxiX4tU9MmrOrkxRf3TgeSbeGkOshQa34weksYPCRRQ2w5o+1QXjenykcaSFl5SGZMzLtJ4gNdvY5KQE1bwaZJaZTOYBzRxxrYf9ChE1X0zPAgMBAAECggEBAKvacW8DrSDiG63HyPIF9Zfc9x1N4tiNDrKFGBP+Ah27GoXuHEE1fHm4R32DylDu29Mw8Lg/P/zNp2P1EXkHPIqacVVWFvheUwjnfU+giF+x5pExBPXxVxcl8VNPanXwKaYwtxrCsRi+raUaCHGEp9rU0QT1mYxBOWQRvxTGg8Sq8I1/ow4p7mHuseYOrpbeMHxmmcI4lrvoLJ//+hv11bqr+eZiI9jZOYfTjOFwvtIMJhf5Fs+WIT14LO1s1eplqj+cAU1VKEvHL3/KsHbT0zF27zkNVr0xAxtDzN30dShnKgOlM2m3pqqyu76QzwGzuswwJtzsTkvm2WSyn+fqtAECgYEA9B1ZuSsT8pz16N0mhPO0xCCpE2KH4wetfvfz1om4maBuY843BopfwOFxOLyUMCdKp2XKKlPrIO2Dvzjml2MSNn5Fjj3itDlhJ9pUKZNJWzNLznaVI5pmNMQ59Sc4UCFsAC9YW6HURCwfIzcBQZcSIccr/wK+mN03B6QTgoZ5KjECgYEA5EKoZUVzfdWK/M9JBdamRUzhhQyZguJO1w/vsZ+Tz2vMtF6cOxHuP+BsBCq5g9QEYnOk3Tahw17nNvGGAkNSQWgw2F/MpPkgiDTIc/tZtsVbdCdB3SrNWlaa6PzXfoM6kYE2d0xMS/zBMlnhE6xQGVBA8lScoL+8xK8HUPdbJv8CgYEAtPTQ3u9s8QqjS4QsGqAhXsWrL8B5ZLT7SkR5j441tkPzsK5bodCPXIaBjIJWA0ANGfvdmfTtNlJ6uBRw8sWw6Y4+90sus1RZjdZNTyhsV1u2FQ1YTrUUkIbpQ65YEyZDTfvKrtpOZF6kklEi8EERYtKm7XlWWjCZq2NYRwhx5vECgYEA4vqJ21JpmtqLAAPb2EtvQYBGzXgO+sCxp1f4gQdvAxZuE3n1HyQgZzJyFt6pZTaiOYhHi5X024L2poMbQArTs6i40aDJrc7xk5/xKKvrtTyhSWp0K0qRs2BlYIN0giBaUDBOCek8AV/QeZI4p8h0Sges3YxXx92CB48I1nFyGd8CgYBzp1MpSfpwMwO3tERRXRppqTOxXfc9BI+ymKxHcc3ToukJR6W1+wR+9XN24Fe13GmJdOd1F/e1jVC59TuDM8y9MW5mmWrRfnYG8foiS8ay1jWCCNKLH8Fyhy+0uBs4xh3ZjpNlB9xM9co3/a+FjNAtgaq3vnyqJVSYghzktAvmng==";
    public static String APPID = "2016091200497691";
    public static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuumBiLzgmLdV3pGWuouG8ZF45FTHo/mZSZtwG+KNO69JMKTkJeia/O1mv+lSaxF8z7tLNJcvfEL5zuyckt2oQP6MsjTs4rQ2TkCAhokDIk+CbHh0s7H4t812tqnv9tpT261YRwuHTAmz8JY1ZnbCSbBvRFel+pikcrAfcawzblIDrfSU4ZPsr81Ffo1Dd+iT1S87nDMrQTVEFMwq8b6FioRW9SLMsFjd8okqsXXJz4pmE/Rf/yLMRlh8cMPwzDgJ5eMhttjToROCwOa5RIVu2IHSn8vQfxKQmNZkna1RZlohVkfhAX6f4+JVryMElF6zHmf/cNOL9kAn3kvTKy2B6wIDAQAB";

    // 销售产品码 必填

    public static String PRODUCT_CODE = "QUICK_WAP_WAY";



}
