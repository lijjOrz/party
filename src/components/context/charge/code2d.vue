<template>
    <div class="bg-color">
        <div class="code2d">

            <div class="head-2d">
                <div class="head-number head-font">660K逗</div>
                <div class="head-pay head-font">应付金额：10元</div>
            </div>

            <div class="code2d-img">
                <div class="img-left">
                    <div class="left-text">微信扫码支付</div>
                    <div class="left-code2d">
                        <img src="../../../images/qrCode.png" alt="">
                    </div>
                    <div class="left-button">
                        <img src="../../../images/wxsaoma.png" alt="">
                        <div>请用微信扫一扫二维码已完成支付</div>
                    </div>
                </div>
                <div class="img-right">
                    <img src="../../../images/code2dright.png" alt="">
                </div>
            </div>
        </div>
        <FooterFont></FooterFont>
    </div>
</template>

<script>
import FooterFont from '../../footer/FooterFont'

export default {
    name: 'code2d',
    components:{
        FooterFont,
    },
}
</script>

<style>
    .code2d{
        width: 1200px;
        padding-top: 140px;
        padding-bottom: 60px;
        margin: 0 auto;
    }
    .head-2d{
        width: 600px;
        margin: 0 auto;
        padding-bottom: 25px;
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
    .head-font{
        font-size: 24px;
        color: #333;
    }
    .code2d-img{
        width: 600px;
        margin: 0 auto;
        padding-top: 40px;
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
    .img-left{
        width: 320px;
        height: 420px;
        border-radius: 10px;
        background: #fff;
        margin-right: 30px;
    }
    .left-text{
        font-size: 20px;
        color: #353535; 
        text-align: center;
        margin: 30px 0;
    }
    .left-code2d{
        width: 250px;
        margin: 0 auto;
        font-size: 0;
    }
    .left-code2d img{
        width: 250px;
        height: 250px;
    }
    .left-button{
        width: 250px;
        height: 40px;
        border-radius: 5px;
        background: #fe753e;
        margin: 0 auto;
        margin-top: 20px;
        font-size: 0;
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
    .left-button img{
        margin: 0 5px;
    }
    .left-button div{
        font-size: 14px;
        color: #fefefe;
    }
</style>
