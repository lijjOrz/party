<template>
    <div class="fixed_1" v-if="loginOnoff">
		<div class="SignIn">
			
            <div class="logo">
                <img src="../../images/party-logo.png">
            </div>
            <div  class="close" @click="$emit('showLogin')"><img src="../../images/close.png"></div>

            <div style="overflow: hidden; padding-bottom: 20px;"><p class="dl">切换邮箱登陆</p></div>
            <div style="clear:both"></div>

            <div class="number">
                <div class="user">用户名</div>
                <div class="cl"><img src="../../images/clear-text.png"></div>
            </div>

            <div class="th">	
                <div class="code_1">
                    <div class="nu">4456</div>
                    <div class="cl"><img src="../../images/clear-text.png"></div>	
                </div>
                
                <div class="sec">
                    <div class="nu">59</div>
                </div>
            </div>

            <div class="fo">
                <div class="log_in">登录</div>
            </div>
            <div class="fi">账号不存在，请先<u style="color: #f12644;">下载客户端</u>并注册</div>

            <div class="lower">
                <div class="border"></div>
                <div class="other">其他登录方式</div>
                <div class="border"></div>
                <div style="clear:both"></div>
            </div>

            <div class="bottom">
                <div class="img"><img src="../../images/qq.png"></div>	
                <div class="img"><img src="../../images/wechat.png"></div>
                <div class="img"><img src="../../images/weibo.png"></div>
                <div class="img"><img src="../../images/facebook.png"></div>
            </div>
		</div>
    </div>
</template>

<script>
    
export default{
    name: 'login',
    props: ['loginOnoff'],
}

</script>

<style>
.fixed_1{
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.3);
}

.SignIn{
	width: 460px;
	border-radius: 26px;
	background: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -316px;
	margin-left: -230px;
}

.logo{
	text-align: center;
	padding-top: 30px;
	padding-bottom: 10px;
}
.close {
	position: absolute;
	top: 28px;
	right: 28px;
}
.dl{
	font-size: 14px; 
	color: #ff4a64; 
	margin-right: 66px;
	float: right;
}

.number{
	height: 48px;
	margin: 0px 60px 0px 60px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
}
.user{
	width: 278px;
	padding-left: 20px;
	line-height: 48px;
	font-size: 16px;
	color: #333333;
	float: left;
}
.cl{
	padding-top: 13px;
	margin-right: 20px;
	float: right;
}
.th{
	margin-top: 20px;
	width: 100%;
	overflow: hidden;
}
.code_1{
	width: 200px;
	height: 48px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
	margin-left: 60px;
	padding-left: 20px;
	float: left;
}
.nu{
	font-size: 16px; 
	color: #333333;
	display: inline-block;
	line-height: 48px;
}
.sec{
	width: 120px;
	height: 48px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
	margin-right: 60px;
	float: right;
	text-align: center;
}
.fo{
	height: 48px;
	margin: 20px 60px 0px 60px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
	background: #f12644;
	line-height: 48px;
	text-align: center;
}
.log_in{
	font-size: 16px;
	color: #ffffff;
}

.fi{
	margin-top: 30px;
	padding-left: 60px;
	font-size: 14px;
	color: #4b4b4b;
}
.lower{
	margin-top: 30px;
	padding-left: 60px;
}

.border{
	width: 112px;
	height: 11px;
	border-bottom: 1px solid #d7d7d7;
	float: left;
}

.other{
	font-size: 16px;
	color: #4b4b4b;
	display: inline;
	margin-right: 10px;
	margin-left: 10px;
	float: left;
}
.bottom{
	width: 100%;
	margin-top: 34px;
	margin-bottom: 82px;
	padding-left: 60px;
	padding-right: 60px;
	display: flex;
}

.img{
	flex: 1;
	text-align: center;
}
</style>


