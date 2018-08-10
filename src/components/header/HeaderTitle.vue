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

            <div class="title-login" v-if="loginButton" @click="showLogin">登录</div>
            <!-- 用户信息 -->
            <div class="idmessage" v-if="!loginButton">
                <div class="headimg"><img class="headimg" :src="userData.portrait" alt=""></div>
                <div class="userid">
                    <div class="user-name">{{userData.nickname}}</div>
                    <div class="user-66">{{userData.userId}}</div>
                </div>
                <div class="id-esc" @click="clearUserData">退出</div>
            </div>

        </div>
        <download></download>
        <login></login>    
    </div>
</template>

<script>
import download from './download'
import login from './login'
import Data from '../../model/Data'
import Bus from '../../utils/bus';

export default {
    name: "HeaderTitle",
    components:{
        download,
        login,
    },
    data() {
        return {
            loginButton: true,
            userData: '',
        }
    },
    watch:{
        userData(){
        }
    },
    methods:{
        showDownload(){
            Bus.$emit('showDownloadPage')
        },
        showLogin(){
            Bus.$emit('showLoginPage')
        },
        clearUserData(){
            this.loginButton = true
            Data.userData = {}
            this.logoutGet()
        },
        logoutGet(){
            axios.get('http://dev-party-officia-site.haochang.tv/api/logout',{
                headers: Data.header
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>  {
                console.log('退出登陆'+error.response);
                Data.header['authorize-token'] = ''
            });
        }
    },
    mounted(){
        Bus.$on('updateUserInfo', (msg) => {
            this.userData = msg
            this.loginButton = false
        })
    }
}
</script>

<style>
    @import "./headertitle.css";
</style>
