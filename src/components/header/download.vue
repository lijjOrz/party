<template>
    <div class="fixed" id="download" v-if="downloadOnoff">
        <div class="warpper">

            <div class="lg">
                <img  src="../../images/download-logo.png">
                <img class="close" src="../../images/close.png" @click="$emit('showDownload')">
            </div>

            <div class="downloadLeft">
                    <a href="https://itunes.apple.com/cn/app/id1112801526?mt=8" class="ios-button">
                        <img src="../../images/ios-icon.png">
                        <div class="downloadText">下载IOS版</div>
                    </a>
                    <span class="revNum">当前版本：V 1.1.1</span>
                    <a href="" class="andrlid-button margin-top">
                        <img src="../../images/android-icon.png">
                        <div class="downloadText">下载安卓版</div> 
                    </a>
                    <span class="revNum">当前版本：V 1.1.1</span>
            </div>

            <div class="right">
                <img src="../../images/qrCode.png">
            </div>
        
        </div>
	</div>
</template>

<script>
export default {
    name: 'download',
    props: ['downloadOnoff'],
}
</script>

<style>
    .fixed {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
    }
    .warpper {
        width: 640px;
        height: 480px;
        border-radius: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -240px;
        margin-left: -320px;
        background: #fff;
    }
    .lg{
        height: 200px;
    }
    .close {
        position: absolute;
        top: 28px;
        right: 28px;
    }
    .downloadLeft{
        float: left;
        height: 280px;
        width: 320px;
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
    .ios-button, .andrlid-button{
        width: 208px;
        height: 48px;
        border: 1.5px solid #808080;
        border-radius: 24px;
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
    .margin-top{
        margin-top: 32px;
    }
    .ios-button img, .andrlid-button img{
        margin-right: 22px;
    }
    .downloadText {
        font-size: 19px;
        color: #333333;
        height: 100%;
        line-height: 48px;
    }
    .revNum {
        font-size: 14px;
        color: #333333;
    }
    /*.andrlid {
        display: flex;
        width: 208px;
        height: 48px;
        border: 1.5px solid #808080;
        border-radius: 24px;
        margin-top: 32px;
        margin-left: 80px;
    } */
    /*57  48*/
    .right {
        height: 280px;
        width: 320px;
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
</style>
