<template>
    <div class="bgcolor">
        <div class="charge-box">
            <div class="playhead">
                <div class="balance">账户余额：{{kdNum}}K豆</div>
                <div class="waiter">
                    <img src="../../images/waiter.png" alt="">
                    <div class="waiter-text">客服</div>
                </div>
            </div>

            <div class="goods-tilte">
                <ul class="goods">
                    <li class="list-unit" v-for="(list, index) in lists" :key="index" @click="pitchOnList(list)" :class="{focusList: productKdId == list.productKdId}">
                        <div class="unit-dou">
                            <img src="../../images/dou.png" alt="">
                            <div class="unit-number">{{list.name}}</div>
                            <div class="unit-mark" v-if="list.label">折扣</div>
                        </div>
                        <div class="unit-dou-price">
                            <div class="price-line" v-if="list.originalPrice">原价 ¥ {{list.originalPrice}}</div>
                            <div class="price-this">¥ {{list.price}}</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="price-number">
                <p>充值{{chargeKdNumber}}K豆，需支付<span>{{payMoney}}</span>元</p>
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
            
            <a class="comfirm" @click="kaiguan" href="" target="_blank">
                <p>立即充值</p>
            </a>

            <!-- <div class="comfirm" @click="kaiguan">
                <p>立即充值</p>
                <a href="./chrage/code2d">立即充值</a>
            </div> -->

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
            onoff: false, //充值后提示弹窗
            kdNum: '', //用户k豆数量
            lists:[], //商品信息
            chargeKdNumber:'' , //需要充值的kd数量 
            payMoney: '',  //应该支付多少钱
            productKdId: '', //选中的商品 
        }
    },
    components:{
        FooterFont,
        backhint
    },
    methods:{
        kaiguan(){ //充值提示页面开关
            this.onoff = !this.onoff
        },
        pitchOnList(msg){
            this.chargeKdNumber = msg.name
            this.payMoney = msg.price
            this.productKdId = msg.productKdId
        }
    },
    mounted(){
        console.log('1234547'+this.lists)
        axios.get('http://dev-party-officia-site.haochang.tv/api/product/kds',{
            headers: Data.header,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>  {
            console.log(error.response);
            this.kdNum = Data.kdNum
            this.lists = Data.lists
            this.chargeKdNumber = Data.lists[0].name
            this.payMoney = Data.lists[0].price
            this.productKdId = Data.lists[0].productKdId
        });   
    },
}
</script>

<style>
    .focusList{
        border: 2px solid #f45169 !important;
    }
    .focusPayWay{
        border: 2px solid #56c051 !important;
    }
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
        cursor: pointer;
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
        display: block;
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
    /* .comfirm a{
        font-size: 20px;
        color: #f2f3f8;
    } */
</style>
