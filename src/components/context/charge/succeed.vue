<template>
    <div class="bg-style">
        <div class="succeed-box">
            <img class=".succeed-box-img" src="../../../images/jieguo.png" alt="">
            <div class="succeed-green">支付成功</div>
            <div class="succeed-number">¥ 66.66</div>
            <div class="succeed-box-text">
                <p>实际到账时间可能会有1-2两个工作日延迟</p>
                <p>若逾期未到账，请联系客服</p>
            </div>
            <div class="succeed-again">
                <img src="../../../images/again.png" alt="">
                <div>继续充值</div>
            </div>
        </div>
        <FooterFont></FooterFont>
    </div>
</template>

<script>
import FooterFont from '../../footer/FooterFont'

export default {
    name: 'succeed',
    components:{
        FooterFont,
    },
}
</script>

<style>
    .bg-style{  
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;
        -ms-flex-orient: vertical;

        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;
        -moz-box-orient: vertical;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;
        -webkit-box-orient: vertical;

        /* W3C */
        display:box;
        box-pack:center;
        box-align:center;
        box-orient: vertical;
    }
    .succeed-box{
        width: 620px;
        height: 430px;        
        border-radius: 20px;
        background: #fff;
        font-size: 0;
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;
        -ms-flex-orient: vertical;

        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;
        -moz-box-orient: vertical;

        /* Safari, Chrome, and Opera */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;
        -webkit-box-orient: vertical;

        /* W3C */
        display:box;
        box-pack:center;
        box-align:center;
        box-orient: vertical;
    }
    .succeed-box-img{
        margin-bottom: 10px;
    }   
    .succeed-green{
        font-size: 26px;
        color: #19e5b4;
        margin-bottom: 20px;
    }
    .succeed-number{
        font-size: 42px;
        color: #333;
        margin-bottom: 30px;
    }
    .succeed-box-text p{
        font-size: 18px;
        color: #626364;
    }
    .succeed-again{
        height: 40px;
        margin-top: 40px;
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
    .succeed-again img{
        margin-right: 10px;
    }
    .succeed-again div{
        height: 100%;
        font-size: 26px;
        color: #626364;
    }
</style>
