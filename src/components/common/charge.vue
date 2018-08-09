<template>
    <div class="bgcolor">
        <div class="charge-box">
            <div class="playhead">
                <div class="balance">账户余额：222k逗</div>
                <div class="waiter">
                    <img src="../../images/waiter.png" alt="">
                    <div class="waiter-text">客服</div>
                </div>
            </div>

            <div class="goods-tilte">
                <ul class="goods">
                    <li class="list-unit">
                        <div class="unit-dou">
                            <img src="../../images/dou.png" alt="">
                            <div class="unit-number">6666K逗</div>
                            <div class="unit-mark">折扣</div>
                        </div>
                        <div class="unit-dou-price">
                            <div class="price-line">原价 ¥ 88.88</div>
                            <div class="price-this">¥ 88.89</div>
                        </div>
                    </li>
                    <li class="list-unit">
                        <div class="unit-dou">
                            <img src="../../images/dou.png" alt="">
                            <div class="unit-number">6666K逗</div>
                            <div class="unit-mark">折扣</div>
                        </div>
                        <div class="unit-dou-price">
                            <div class="price-line">原价 ¥ 88.88</div>
                            <div class="price-this">¥ 88.89</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="price-number">
                <p>充值6666666K逗，需支付<span>6666.66</span>元</p>
            </div>

            <div class="payway">
                <router-link to="/code2d" class="way-box alipay">
                    <img src="../../images/alipay.png" alt="">
                    <div class="way-text">支付宝</div>
                    <img class="pitch-on" src="../../images/pitch.png" alt="">
                </router-link>
                <router-link to="/succeed" class="way-box wx">
                    <img src="../../images/wxpay.png" alt="">
                    <div class="way-text">微信</div>
                    <img class="pitch-on" src="../../images/pitch.png" alt="">
                </router-link>                
            </div>

            <div class="comfirm" @click="kaiguan">
                <p>立即充值</p>
            </div>
            <backhint :onoff="onoff" v-on:kaiguan="kaiguan"></backhint>
        </div>

        <FooterFont></FooterFont>
    </div>
</template>

<script>
import FooterFont from '../footer/FooterFont'
import backhint from './charge/backhint'
import Data from '../../model/Data'

export default {
    naem: 'playback',
    data(){
        return {
            onoff: false,
        }
    },
    components:{
        FooterFont,
        backhint
    },
    methods:{
        kaiguan(){
            this.onoff = !this.onoff
        },
    },
    mounted(){
        axios.get('http://dev-party-officia-site.haochang.tv/api/product/kds',{
            headers: Data.header,
            // params: {
            //     telphone: this.userId
            // }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>  {
            console.log(error.response);
            // let n = error.response.data.errno
            // switch(n){
            //     case '130017':
            //     this.hintText = '用户已在其他地方登陆（刷新下）'
            // }
        });   
    },
}
</script>

<style>
    .charge-box{ 
        width: 1160px;
        border-radius: 10px;
        background: #fff;
        margin: 20px auto;
        padding-bottom: 30px;
    }
    .playhead{
        width: 100%;
        height: 70px;
        padding: 0 30px;
        border-bottom: 1px solid #d7d7d7;
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
    .balance{
        height: 70px;
        font-size: 22px;
        color: #333;
        line-height: 70px;
    }
    .waiter{
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-align:center;
        -ms-flex-pack: end;

        /* Firefox */
        display:-moz-box;
        -moz-box-align:center;
        -moz-box-pack: end;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack: end;

        /* W3C */
        display:box;
        box-align:center;
        box-pack: end;
    }
    .waiter img{
        display: inline-block;
        vertical-align:middle;
    }
    .waiter-text{
        margin-left: 6px;
        font-size: 16px;
        color: #333;
        vertical-align:middle;
    }
    .goods{
        padding: 30px 16px 0 16px;
        font-size: 0;
    }
    .list-unit{
        display: inline-block;
        width: 260px;
        height: 130px;
        border: 1px solid #d7d7d7;
        border-radius: 6px;
        margin: 0 11px 20px 11px;
    }
    .unit-dou{
        position: relative;
        height: 90px;
        border-bottom: 1px solid #d7d7d7;
        padding-left: 20px;
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-align:center;
        /* Firefox */
        display:-moz-box;
        -moz-box-align:center;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-align:center;

        /* W3C */
        display:box;
        box-align:center;
        overflow: hidden;
    }
    .unit-dou img{
        display: inline-block;
        vertical-align:middle;
    }
    .unit-number{
        display: inline-block;
        margin-left: 10px;
        font-size: 20px;
        color: #333;
        vertical-align:middle;
    }
    .unit-mark{
        width: 60px;
        height: 26px;
        background: #ff3939;
        color: #f2f3f8;
        font-size: 16px;
        border-radius: 13px;
        text-align: center;
        line-height: 26px;
        position: absolute;
        top: 9px;
        right: -10px;
    }
    .unit-dou-price{
        height: 40px;
        padding: 0 20px;
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
    .price-line{
        height: 40px;
        line-height: 40px;
        text-decoration: line-through;
        font-size: 16px;
        color: #c3c3c3;
    }
    .price-this{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #f12644;
    }
    .price-number{
        margin: 30px 0 0 30px;
    }
    .price-number p{
        font-size: 24px;
        color: #333;
    }
    .price-number p span{
        color: #f12644;
    }
    .payway{
        margin: 30px 0 0 29px;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: box;
    }
    .way-box{
        position: relative;
        width: 160px;
        height: 50px;
        border: 1px solid #d7d7d7;
        border-radius: 6px;
        margin-right: 20px;
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
    .way-box:hover{
        border: 2px solid #56c051;
    }
    .way-text{
        font-size: 18px;
        color: #4b4b4b;
        margin-left: 5px;
    }
    .pitch-on{
        position: absolute;
        right: -1px;
        top: -1px;
    }
    .comfirm{
        width: 160px;
        height: 52px;
        margin: 40px 0 0 30px;
        background: url('../../images/comfirm.png');
        text-align: center;
        line-height: 52px;
    }
    .comfirm p{
        font-size: 20px;
        color: #f2f3f8;
    }
</style>
