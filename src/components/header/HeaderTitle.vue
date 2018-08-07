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
            <div class="title-login" v-if="logShow" >登录</div>
            <div class="idmessage" v-if="!logShow">
                <img class="headimg" src="../../images/logo2x.png" alt="">
                <div class="userid">
                    <div class="user-name">炫酷id屌炸天</div>
                    <div class="user-66">ID:6666666666</div>
                </div>
                <div class="id-esc">退出</div>
            </div>
        </div>
        <download :downloadOnoff='downloadOnoff' v-on:showDownload="showDownload"></download>    
    </div>
</template>

<script>
import download from './download'

export default {
    name: "HeaderTitle",
    components:{
        download
    },
    data() {
        return {
            logShow: true,
            downloadOnoff: false,
        }
    },
    methods:{
        showDownload(){
            this.downloadOnoff = !this.downloadOnoff
        },
    }
}
</script>

<style>
    @import "./headertitle.css";
</style>
