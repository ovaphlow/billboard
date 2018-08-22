package com.ch.uamp.merchant.model;

import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSON;

/**
 * Created by sd on 2018/1/20.
 */
public class SceneInfoEntity {

    private  String type="Android";

    private  String app_name="企业云办公";

    private  String package_name="cn.iemsoft.mm";


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPackage_name() {
        return package_name;
    }

    public void setPackage_name(String package_name) {
        this.package_name = package_name;
    }

    public String getApp_name() {
        return app_name;
    }

    public void setApp_name(String app_name) {
        this.app_name = app_name;
    }

    public static String toJsonString(){

        Map<String,SceneInfoEntity> map =new HashMap<>();

        map.put("h5_info",new SceneInfoEntity());

        return JSON.toJSONString(map);
    }

    public static void main(String[] args){
        System.out.println(toJsonString());
    }


}
