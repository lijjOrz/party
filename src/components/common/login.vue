<template>
    <div class="fixed_1" v-if="loginPage">
		<div class="SignIn">
			
            <div class="logo">
                <img src="../../images/party-logo.png">
            </div>
            <div  class="close" @click="loginPage=false"><img src="../../images/close.png"></div>

            <div style="overflow: hidden; padding-bottom: 20px;" @click="changeLoginWay"><p class="dl">{{changeLoginWayText}}</p></div>
            <div style="clear:both"></div>
            
            <div class="loginEmail" v-if="!loginWayPage">
                <div class="number">
                    <!--输入email  -->
                    <input type="text" placeholder="输入邮箱" v-model="userEmail">
                    <div class="cl"><img src="../../images/clear-text.png"></div>
                </div>
                
                <div class="number marginTop">
                    <!--输入密码  -->
                    <input type="password" placeholder="密码" v-model="password">
                    <div class="cl"><img src="../../images/clear-text.png"></div>
                </div>

                <div class="number marginTop">
                    <!--输入验证码  -->
                    <input type="text" placeholder="输入验证码" v-model="captchaEmail">
                    <div class="cl"><img src="../../images/clear-text.png"></div>
                </div>

                <div class="loginButton">
                    <!-- <router-link @click="loginButtonFunEmail" to="/charge" class="log_in">登录</router-link> -->
                    <div class="log_in" @click="loginButtonFunEmail">登录</div>
                </div>
            </div>


            <div class="loginPhone" v-if="loginWayPage">
                <div class="number">
                    <input type="text" placeholder="输入手机号" v-model="userId">
                    <div class="cl"><img src="../../images/clear-text.png"></div>
                </div>

                <div class="th">	
                    <div class="code_1">
                        <input type="text" placeholder="验证码" v-model="captcha"> 
                        <div class="cl"><img src="../../images/clear-text.png"></div>	
                    </div>
                    <div class="sec">
                        <div class="nu" @click="getcaptcha" v-show="VcodeShow">获取验证码</div>
                        <div class="nu" v-show="!VcodeShow">{{times}}</div>
                    </div>
                </div>

                <div class="loginButton">
                    <div class="log_in" @click="loginButtonFun">登录</div>
                </div>
            </div>

            <div class="fi"><span style="color:#333;" v-html="hintText"></span></div>

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
import Data from '../../model/Data'
import Bus from '../../utils/bus'

export default{
    name: 'login',
    // propsPage'],
    data() {
        // let config = Object.assign({}, defaults, tPage);
        // let config =  tPage;
        return {
            times: 3, //倒计时
            VcodeShow: true, //显示倒计时
            hintText: '若未注册账号，请先<a href=""><u style="color: #f12644;">下载客户端</u></a>并注册', //提示文本
            userId: '13008300888',  //手机号
            captcha: '1234', //手机验证码
            loginPage: false,
            changeLoginWayText: '切换手机登陆',
            loginWayPage: false, 
            userEmail: 'test@test.com',// 邮箱号
            password: 'kanKan123',//邮箱密码
            captchaEmail: '',// 邮箱验证码
            routerEachPath: '',
        }
    },
    mounted(){
        Bus.$on('showLoginPage', (routerEachPath) => {
            this.loginPage = true;
            this.routerEachPath = routerEachPath
            console.log('this.routerEachPath'+ this.routerEachPath)
        })
    },
    computed:{
    },
    methods: {
        changeLoginWay(){
            if(this.changeLoginWayText == '切换手机登陆'){
                this.changeLoginWayText = '切换邮箱登陆'
                this.loginWayPage = true
            }else{
                this.changeLoginWayText = '切换手机登陆'
                this.loginWayPage = false
            }
        },
        timedCount(){//倒计时
            if(this.times == 0){
                this.VcodeShow = true
                // this.hintText = ''
                this.times = 3
                return
            }
            this.times -= 1
            setTimeout(this.timedCount,1000)
        },
        // stopCount: function(){
        //     clearTimeout(t)
        // },
        getcaptcha(){//倒计时函数
            if(this.userId){
                if(/^1\d{10}$/.test(this.userId)){
                    this.VcodeShow = false
                    this.getData()
                    this.timedCount()
                }else{
                    return this.hintText = '手机号应为1开头的11数字'
                }
            }else{
                return this.hintText = '请输入手机号'
            }
        },
        loginButtonFunEmail(){
            if(this.userEmail){
                if(this.password){
                    this.hintText = ''
                    this.postDataEmail()
                }else{
                    this.hintText = '请输入密码'
                }
            }else{
                this.hintText = '请输入邮箱'
            }
        },
        loginButtonFun(){
            if(this.userId){
                this.hintText = ''
                if(this.captcha){
                    this.hintText = ''
                    this.postData()
                }else{
                    this.hintText = '请输入验证'
                    return
                }
            }else{
                this.hintText = '请输入手机号'
                return
            }
        },
        getData() { //获取手机验证码
            axios.get('http://dev-party-officia-site.haochang.tv/api/captcha/telphone',{
                headers: Data.header,
                params: {
                    telphone: this.userId
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>  {
                console.log(error.response);
                let n = error.response.data.errno
                switch(n){
                    case '130017':
                    this.hintText = '用户已在其他地方登陆（刷新下）'
                }
            });
        },
        postData() {   //登录手机号
            var postData = this.$qs.stringify({
                telphone: this.userId,      
                captcha: this.captcha
            });
            axios.post('http://dev-party-officia-site.haochang.tv/api/login/telphone',
                postData,
                Data.header
            )
            .then((response) => {
                console.log(response);
                Data.header['authorize-token'] = response.data.data.token
                Data.userData = response.data.data
                Bus.$emit('updateUserInfo', Data.userData)
                this.loginPage = false;
            })
            .catch((error) => {
                // console.log(error.response);
                console.log('错误状态码'+error.response.data.errno)
                let n = error.response.data.errno
                switch(n){
                    case '120001' :
                        this.hintText = '验证码错误'
                        break;
                    case '120002' :
                        this.hintText = '验证码过期'
                        break;
                    case '130015' :
                        this.hintText = '用户未注册'
                        break;
                    default:
                        this.hintText = '服务器异常'
                        break;
                }
            });
        },

        postDataEmail(){//邮箱登录
            var postData = this.$qs.stringify({
                email: this.userEmail,
                password: this.password,
                // captcha: this.captchaEmail,
            });
            axios.post('http://dev-party-officia-site.haochang.tv/api/login/email',
                postData,
                Data.header
            )
            .then((response) => {
                console.log(response);
                Data.header['authorize-token'] = response.data.data.token
                Data.userData = response.data.data
                Bus.$emit('updateUserInfo', Data.userData)
                this.loginPage = false;
                if(this.routerEachPath){
                    console.log('routerEach被执行了')
                    this.$router.push({path: this.routerEachPath})
                }
            })
            .catch((error) => {
                // console.log(error.response);
                console.log('错误状态码'+error.response.data.errno)
                let n = error.response.data.errno
                switch(n){
                    case '120003' :
                        this.hintText = '邮箱已经绑定'
                        break;
                    case '120004' :
                        this.hintText = '邮箱已经注册'
                        break;
                    case '120005' :
                        this.hintText = '邮箱未验证，请验证后登陆'
                        break;
                    case '120006' :
                        this.hintText = '邮箱地址不存在'
                        break;
                    case '120007' :
                        this.hintText = '邮箱或密码错误'
                        break;
                    case '120008' :
                        this.hintText = '验证码错误'
                        break;
                    default:
                        this.hintText = '服务器异常'
                        break;
                }
            });
        }
    },
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
.marginTop{
    margin-top: 20px !important;
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
    cursor: pointer;
}

.number{
	height: 48px;
	margin: 0px 60px 0px 60px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
    overflow: hidden;
}
.number input{
    width: 254px;
    border: 0 ;
    margin-left: 20px;
    height: 48px;
    line-height: 48px;
    font-size: 19px;
    outline:none;
    font-size: 16px;
    color:#333;
}
input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #bbb;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #bbb;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #bbb;
}
input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #bbb;
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
    overflow: hidden;
}
.code_1 input{
    border: 0 ;
    height: 48px;
    line-height: 48px;
    font-size: 19px;
    outline:none;
    font-size: 16px;
    color:#333;
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
.loginButton{
	height: 48px;
	margin: 20px 60px 0px 60px;
	border: 1px solid #d7d7d7;
	border-radius: 24px;
	background: #f12644;
	line-height: 48px;
	text-align: center;
    cursor: pointer;
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


