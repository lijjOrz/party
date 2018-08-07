<template>
    <div id="header">
        <div class="header-div">
            
            <div class="header-logo">
                <img src="../../images/logo2x.png">
            </div>
            <div class="header-logo-font">
                <span>好唱party</span>
            </div>
            <ul class="header-title">
                <li class="header-title-unit">
                    <router-link to="/" class="unit-a">首页</router-link>
                </li>
                <li class="header-title-unit">
                    <router-link to="/charge" class="unit-a">充值</router-link>
                </li>
                <li class="header-title-unit">
                    <router-link to="/playback" class="unit-a">回放</router-link>
                </li>
                <li class="header-title-unit" @click="showDownload">下载</li>
            </ul>

            <div class="title-login" v-if="!loginSucceedShow" @click="showLogin">登录</div>
            <!-- 用户信息 -->
            <div class="idmessage" v-if="loginSucceedShow">
                <img class="headimg" src="../../images/logo2x.png" alt="">
                <div class="userid">
                    <div class="user-name">炫酷id屌炸天</div>
                    <div class="user-66">ID:6666666666</div>
                </div>
                <div class="id-esc">退出</div>
            </div>

        </div>
        <download :downloadOnoff='downloadOnoff' @showDownload="showDownload"></download>
        <login :loginOnoff='loginOnoff' @showLogin='showLogin'></login>    
    </div>
</template>

<script>
import download from './download'
import login from './login'

export default {
    name: "HeaderTitle",
    components:{
        download,
        login,
    },
    data() {
        return {
            loginSucceedShow: false,
            downloadOnoff: false,
            loginOnoff: false,
        }
    },
    methods:{
        showDownload(){
            this.downloadOnoff = !this.downloadOnoff
        },
        showLogin(){
            this.loginOnoff = !this.loginOnoff
        }
    }
}
</script>

<style>
    @import "./headertitle.css";
</style>
