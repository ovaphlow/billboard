package com.ch.uamp.merchant.model;

/**
 * Created by sd on 2018/1/20.
 */
public class WeChatPayResult extends WeChatPayParams  {

    private static final long serialVersionUID = 392188712101246402L;

    private String errMsg;

    private String resultCode;

    public String getErrMsg() {
        return errMsg;
    }

    public void setErrMsg(String errMsg) {
        this.errMsg = errMsg;
    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

}
