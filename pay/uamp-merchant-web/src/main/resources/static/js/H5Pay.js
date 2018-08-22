/**
 * Created by kill on 18-1-12.
 */
var flg = '0'
var queryOrder;

var url='http://192.168.31.187:18084/';

var merchantUrl='http://192.168.31.154:18081/';

var payUserAccount = '';
var payUserPassword = '';

const payData = {
    userAccuntNo: "",
    password: "",
    orderAmount: "",
    orderNo: "",
    orderDesc: "",
    cardNo: "",
    terminalNo : "4",
    orderId: "",
    smsCode: ""
}



const weChatConfig ={
    prepay_id : "",
    paySign : "",
    appId : "",
    timeStamp : "",
    nonceStr : "",
    packageStr : "",
    signType : ""
}
	
function pay(){
    
    $.ajax({
        type:"post",
        url:this.url+'weChatData',
        dataType:"JSON",
        async: false,
        data:{ openId :'${openId}'},
        success:function(data) {
            if(data.resultCode == 'SUCCESS'){
                this.weChatConfig = data
                // var base = new Base64(); 
                
                $('#hong').append('<a id="wxherf"  href="'+data.mweb_url+'"></a>')
                document.getElementById("wxherf").click()
                callpay(data);
            }else{
                alert("统一下单失败");
            }
        },
        complete:function(data) {
            this.weChatConfig =data
            //alert(this.weChatConfig)
            callpay(data);
        }
        
    }); 
}
    
function onBridgeReady(data){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', data,
        function(res){
            alert("weChatConfig")
            for(key2 in res ){
                alert(key+"+"+data[key] )
            }
            for(key in data){
                alert(key+':'+data[key])
            }
            alert("res")
            alert(res.err_msg)
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                //window.location.replace("index.html");
                alert('支付成功');
            }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                alert('支付取消');
            }else if(res.err_msg == "get_brand_wcpay_request:fail" ){
                alert('支付失败');
            } //使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
    );
}

function callpay(data){
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else{
        onBridgeReady(data);
    }
}



function show()  //显示隐藏层和弹出层
{
    var hideobj = document.getElementById("hidebg");
    hidebg.style.display = "block";  //显示隐藏层
    hidebg.style.height = document.body.clientHeight + "px";  //设置隐藏层的高度为当前页面高度
    document.getElementById("hidebox").style.display = "block";  //显示弹出层
}

function hide()  //去除隐藏层和弹出层
{
    document.getElementById("hidebg").style.display = "none";
    document.getElementById("hidebox").style.display = "none";
    
}

function submitByAliPay(){
    alert('a')
    $('#userDiv').remove();
    $('#passDiv').remove();
    $('#payfrom').attr('action','/alipay');
    $('#payfrom').submit();
}

function submitByWx(){
    alert('v')
   this.pay();
}

function submitFrom() {
    if ($("input[type='radio']:checked").val() == '3') {
        if (flg == '0') {
            flg = '1';
            $('#hong').append(
                ' <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1" id="userDiv">'
                + '<div class="align-self-center g-px-10" >'
                + '<h5 class="h6 g-font-weight-600 g-color-black g-mb-3">'
                + '<span class="g-mr-5">支付账号:</span>'
                + '</h5>'
                + '</div>'
                + '<div class="align-self-center ml-auto">'
                + '<input type="text" name="user" id="user" required="required"></input>'
                + '</div>'
                + '</li>'
                + ' <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1" id="passDiv">'
                + '<div class="align-self-center g-px-10" >'
                + '<h5 class="h6 g-font-weight-600 g-color-black g-mb-3">'
                + '<span class="g-mr-5">支付密码:</span>'
                + '</h5>'
                + '</div>'
                + '<div class="align-self-center ml-auto">'
                + '<input type="password" name="pass" id="pass" required="required"></input>'
                + '</div>'
                + '</li>'
                + ' <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1" id="passDiv">'
                + '<div class="align-self-center ml-auto">'
                + '<input type="button" class="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" onclick="selectBankCard()" value="选择银行卡" / >'
                + '</div>'
                + '</li>'
            )
        }
    } else {
        flg = '0'
        $('#userDiv').remove();
        $('#passDiv').remove();
    }
}

//$('#payfrom"').submit();


function selectBankCard() {
    var card;
    payData.userAccuntNo = $('#user').val()
    payData.password = $('#pass').val()
    payData.orderAmount = $('#orderAmount').val()
    payData.orderNo = $('#orderNo').val()
    payData.orderDesc = $('#orderDesc').val()
    show();
    $.ajax({
            type: 'POST',
            url: this.merchantUrl+"merchant/H5Pay/queryBankCard",
            data: {
                "payUserAccount": $('#user').val(),
                "payUserPassword": $("#pass").val(),
            },
            dataType: 'json',
            success: (res) => {
            console.log(res)
    if(res.returnData.length == 0) {
        hide()
        window.alert("该用户未绑定银行卡");
        return;
    }
    $('#hong').empty();
    card = res.returnData
    for (i in card) {
        $('#hong').append(
            ' <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1" id="cardDiv' + i + '">'
            + '<div class="align-self-center g-px-10" >'
            + '<h5 class="h6 g-font-weight-600 g-color-black g-mb-3">'
            + '<span class="g-mr-5">' + card[i].cardBank + '(' + card[i].cardTypeName + '):' + card[i].cardNo.slice(card[i].cardNo.length - 5) + '</span>'
            + '</h5>'
            + '</div>'
            + '<div class="align-self-center ml-auto">'
            + '<input class="align-self-center ml-auto " type="radio" name="cardNo" value="' + card[i].cardNo + '">'
            + '</div>'
            + '</li>'
        );
    }
    $('#hong').append(
        ' <li class="d-flex justify-content-start g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-minus-1" id="cardDiv' + i + '">'
        + '<div class="align-self-center g-px-10" >'
        + '<h5 class="h6 g-font-weight-600 g-color-black g-mb-3">'
        + '<span class="g-mr-5">验证码:</span> <input type="text" name="smsCode" id="smsCode" required="required"></input>'
        + '</h5>'
        + '</div>'
        + '<div class="align-self-center ml-auto">'
        + '<input type="button" class="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25" onclick="quickPayOne()" value="发送验证码" / >'
        + '</div>'
        + '</li>'
    );
    hide()}
})
}

function quickPayOne() {
    payData.cardNo = $("input[type='radio']:checked").val();
    $.ajax({
            type: 'POST',
            url:  this.merchantUrl+"/merchant/H5Pay/H5QuickPayOne",
            data: JSON.stringify({
                "userAccuntNo": payData.userAccuntNo,
                "password": payData.password,
                "orderAmount": payData.orderAmount,
                "orderNo": payData.orderNo,
                "orderDesc": payData.orderDesc,
                "cardNo": payData.cardNo
            }),
            async: false,
            contentType: "application/json",
            success: (res) => {
            if(res.returnCode == '200'){
                window.alert("手机验证码已发送")
                console.log(res)
                payData.orderId = res.returnData
            }else{
                window.alert("手机验证码发送失败")
            }
        },
        complete:(res) =>{
            console.log(res)
        }
    })
}

function quickPayTwo() {
    payData.smsCode = $("#smsCode").val();
    $.ajax({
            type: 'POST',
            url: this.merchantUrl+"merchant/H5Pay/H5QuickPayTwo",
            data: JSON.stringify(payData),
            dataType: 'application/json',
            contentType: "application/json",
            success: (res) => {
            queryOrder=setInterval("queryQueryOrder()", "2000");
            show()
        },
        complete:(res) => {
            if (res.status == '200') {
                var resData = JSON.parse(res.responseText)
                if (resData.returnCode == '200') {
                    queryOrder = setInterval("queryQueryOrder()", "3000");
                    show()
                } else {
                    window.alert("支付失败")
                }
            } else {
                window.alert("支付失败")
            }
        }
    })
}


function queryQueryOrder() {
    $.ajax({
        type: 'POST',
        url: this.merchantUrl+"merchant/record/message/start",
        data: JSON.stringify({
            "orderNo": payData.orderId
        }),
        dataType: 'application/json',
        contentType: "application/json",
        complete: (res) => {
            if(res.returnData == '2') {
                window.clearInterval(queryOrder);
            }
            hide()
            window.location.href = this.merchantUrl+ 'success'
        }
    })
}



function fBrowserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad) {
        var sUrl = location.href;
        if (!bForcepc) {
            window.location.href = "http://m.jb51.net/?ipad";
        }
    }

    if (bIsAndroid) {
        var sUrl = location.href;
        if (!bForcepc) {
            var h = document.getElementById("apptype");
            h.innerHTML = "Android";
        }
    }
    if (bIsIphoneOs) {
        var sUrl = location.href;
        if (!bForcepc) {
            var h = document.getElementById("apptype");
            h.innerHTML = "iOS";
        }
    }
    if (bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM) {
        var sUrl = location.href;
        if (!bForcepc) {
            var apptype = 5;
            //window.location.href = "http://m.jb51.net/";
        }
    }
}

function fGetQuery(name) {//获取参数值
    var sUrl = window.location.search.substr(1);
    var r = sUrl.match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
    return (r == null ? null : unescape(r[2]));
}


function fShowVerBlock() {
    if (bForcepc) {
        document.getElementById("dv_block").style.display = "block";
    }
    else {
        document.getElementById("ad_block").style.display = "block";
    }
}

fBrowserRedirect();
