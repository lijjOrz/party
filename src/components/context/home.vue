<template>
    <div id="home">
        <div class="home-box">

            <swiper id="banner-swiper" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item , index) in items" :key="index"><img :src="item.src" alt="" ></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"><img src="../../images/left.png" alt=""></div>
                <div class="swiper-button-next" slot="button-next"><img src="../../images/right.png" alt=""></div>
            </swiper>

            <div class="theme">
            
                <div class="theme-headline">主题音乐趴</div>

                <div class="theme-text">好友越唱、精彩现场、随时随地在线KTV聚会！</div>

                <div class="theme-show">
                    <div class="theme-show-hot">
                        <img src="../../images/hot-logo.png">
                        <div class="show-hot-title">热门推荐</div>
                        <div class="hot-text">每日推荐更多好玩的房间、各种主题约唱、随时随地在线聚会</div>
                    </div>
                    <div class="theme-show-li">
                        <img src="../../images/gg.png">
                        <div class="show-li-text">张国荣追听大会</div>
                    </div>
                    <div class="theme-show-li">
                        <img src="../../images/jj.png">
                        <div class="show-li-text">林俊杰翻唱大会</div>
                    </div>
                    <div class="theme-show-li">
                        <img src="../../images/home-song.png">
                        <div class="show-li-text">复古经典翻唱</div>
                    </div>
                    <div style="clear:both"></div>
                </div>

            </div>

            <div class="gift">
                <div class="gift-box">
                    <div class="gift-img"><img src="../../images/gifts.png"></div>
                    <div class="gift-text">
                        <div class="gift-title">收礼收到手软</div>
                        <div class="gift-explain">聚集人气、彰显自我，不做寂寞的歌者！</div>
                    </div> 
                </div>
            </div>
        
            <div class="voice-hq">
                <div class="voice-title">发烧级音质</div>
                <div class="voice-text">延续【好唱】的Hi-Fi音效、唱到爽！</div>
                <ul class="voice-ul">
                    <li><img src="../../images/profession.png"></li>
                    <li><img src="../../images/master.png"></li>
                    <li><img src="../../images/magic.png"></li>
                    <li><img src="../../images/singer.png"></li>
                </ul>

            </div>	

            <div class="footer-music">
                <div class="footer-box">
                    <div class="footer-text">
                        <div class="footer-text-title">高品质伴奏</div>
                        <div class="footer-text-explain">海量高品质热门伴奏、实时更新！</div>
                    </div> 
                    <div class="footer-img">
                        <img src="../../images/music.png">
                    </div>
                </div>
            </div>
        </div>

        <FooterFont></FooterFont>
    </div>  
</template>

<script>
import FooterFont from '../footer/FooterFont'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'home',
    components:{
        FooterFont,
        swiper,
        swiperSlide,
    },
    data(){
        return{
            items:[
                {src: '/static/banner1.png'},
                {src: '/static/banner1.png'},
                {src: '/static/banner1.png'},
            ],
            swiperOption: {
                // watchOverflow: true, //一个分页是不显示banner
                autoHeight: true,
                autoplay: {        //自动切换           
                    delay: 5000,//5秒切换一次
                    disableOnInteraction: false, //是否被阻止后停止自动切换
                    waitForTransition: false,
                },
                direction : 'horizontal',  //横向
                loop : true,   //循环
                pagination: {   //分页器
                    el: '.swiper-pagination',
                    clickable : true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '" style=""></span>';
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next', //下一个       
                    prevEl: '.swiper-button-prev', //上一个
                },
            },
            
           
        }
    },
    computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    },
    methods:{
        
    },
    mounted() {
    //   if(this.res.pagenumber == 1){
    //       this.res.loop = !this.res.loop
    //   }
    }
}
</script>

<style>
    #banner-swiper{
        height: 639px;
    }
    .swiper-slide{
        height:639px !important;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom: 30px !important;
    }
    .swiper-pagination-bullet{
        opacity: 1 !important;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #6d6d7c;
        margin: 0 9px !important;
    }
    .swiper-pagination-bullet-active{
        width: 28px !important;
    }
    .swiper-button-prev{
        background: none;
        width: 42px;
        height: 42px;
        left: 50%;
        margin-left: -600px;
    }
    .swiper-button-next{
        background: none;
        width: 42px;
        height: 42px;
        left: 50%;
        margin-left: 558px;
    }
    .banner{
        width: 100%;
        height: 639px;
        position: relative;
    }
    .banner-bg img{
        width: 1920px;
        height: 639px;
    }
    .banner-modelu{
        width: 1200px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -600px;
        /* Internet Explorer 10 */
        display: -ms-flexbox;
        -ms-flex-pack: justify;

        /* Firefox */
        display: -moz-box;
        -moz-box-pack: justify;

        /* Safari, Chrome, and Opera */
        display: -webkit-box;
        -webkit-box-pack: justify;

        /* W3C */
        display: box;
        box-pack: justify;   
    }
    .modelu-box{
        width: 100px;
        height: 100px;
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;

        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;

        /* W3C */
        display:box;
        box-pack:center;
        box-align:center;
    }
    .modelu-page{
        width: 300px;
        height: 12px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -150px;
        margin-top: -6px;
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;

        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;

        /* W3C */
        display:box;
        box-pack:center;
        box-align:center;
    }
    .page-li{
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #6d6d7c;
        margin: 0 9px;
    }
    .theme{
        width: 100%; 
        background: #f4f7ff; 
        padding-top: 90px;
    }
    .theme-headline{
        width: 1200px; 
        font-size: 36px; 
        color: #1c1c8e; 
        margin: 0 auto; 
        text-align: center;
    }
    .theme-text{
        width: 1200px; 
        font-size: 24px; 
        color: #72729b; 
        margin: 0 auto; 
        text-align: center; 
        padding: 40px 0px 80px 0px;
    }
    .theme-show{
        width: 1200px; 
        padding-bottom: 100px; 
        margin: 0 auto;
        /* Internet Explorer 10 */
        display: -ms-flexbox;
        -ms-flex-pack: justify;

        /* Firefox */
        display: -moz-box;
        -moz-box-pack: justify;

        /* Safari, Chrome, and Opera */
        display: -webkit-box;
        -webkit-box-pack: justify;

        /* W3C */
        display: box;
        box-pack: justify;
    }
    .theme-show-hot{
        width: 270px; 
        height: 310px; 
        background: #ffffff;   
        text-align: center;
    }
    .theme-show-hot img{
        padding-top: 60px;
    }
    .show-hot-title{
        font-size: 22px; 
        color: #333333; 
        margin: 30px 30px 20px 30px;
    }
    .hot-text{
        font-size: 14px; 
        color: #969695; 
        margin: 0px 30px 0 30px;
    }
    .theme-show-li{
        width: 270px; 
        height: 310px; 
        background: #ffffff;    
        text-align: center;
        font-size: 0;
    }
    .show-li-text{
        font-size: 22px; 
        color: #333333; 
        line-height: 60px; 
        margin: 0px 30px 0px 30px;
    }
    .gift{
        width: 100%; 
        height: 630px; 
        background: #ffffff;
    }
    .gift-box{
        width: 1200px; 
        height: 630px; 
        margin: 0 auto;
    }
    .gift-img{
        width: 600px; 
        height: 630px; 
        display: inline-block; 
        text-align: center; 
        padding-top: 90px; 
        float: left;
    }
    .gift-text{
      width: 600px; 
      height: 630px; 
      display: inline-block; 
      text-align: center; 
    }
    .gift-title{
        font-size: 36px; 
        color: #11115a; 
        margin-top: 255px;
    }
    .gift-explain{
        font-size: 24px; 
        color: #72729b; 
        padding-top: 40px;
    }
    .voice-hq{
        width: 100%; 
        background: #f4f7ff; 
        padding-top: 80px;
    }
    .voice-title{
        width: 1200px; 
        font-size: 36px; 
        color: #11115a; 
        margin: 0 auto; 
        text-align: center;
    }
    .voice-text{
        width: 1200px; 
        font-size: 24px; 
        color: #72729b; 
        margin: 0 auto; 
        text-align: center; 
        padding: 40px 0px 126px 0px;
    }
    .voice-ul{
        width: 1200px; 
        margin: 0 auto; 
        padding-bottom: 144px; 
        overflow: hidden;
        /* Internet Explorer 10 */
        display: -ms-flexbox;
        -ms-flex-pack: justify;

        /* Firefox */
        display: -moz-box;
        -moz-box-pack: justify;

        /* Safari, Chrome, and Opera */
        display: -webkit-box;
        -webkit-box-pack: justify;

        /* W3C */
        display: box;
        box-pack: justify;   
    }
    .footer-music{
        width: 100%; 
        height: 650px; 
        background: #ffffff;
    }
    .footer-box{
        width: 1200px; 
        height: 650px; 
        margin: 0 auto;
    }
    .footer-text{
        width: 600px; 
        height: 650px; 
        display: inline-block; 
        text-align: center;
    }
    .footer-text-title{
        font-size: 36px; 
        color: #11115a; 
        margin-top: 265px;
    }
    .footer-text-explain{
        font-size: 24px; 
        color: #72729b; 
        padding-top: 40px;
    }
    .footer-img{
        width: 600px; 
        height: 650px; 
        display: inline-block; 
        text-align: center; 
        padding-top: 85px; 
        float: right;
    }
</style>
