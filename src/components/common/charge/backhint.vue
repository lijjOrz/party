<template>
    <div class="backhint-bg" v-if="onoff">
        <div class="backhint-center">
            <div class="backhint-close" @click="$emit('kaiguan')"><img src="../../../images/close.png" alt=""></div>
            <div class="backhint-head">
                <p>支付提示</p>
            </div>
            <div class="backhint-text">
                <p class="backhint-text-p1">请在打开的页面完成支付</p>
                <p class="backhint-text-p2">完成支付前请不要关闭此窗口</p>
                <p class="backhint-text-p3">支付完成后，请根据结果选择</p>
            </div>
            <div class="backhint-footer">
                <div class="backhint-footer-style  border-right"><span class="left-text">取消</span></div>
                <div class="backhint-footer-style"><span class="right-text">已完成支付</span></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'backhint',
    props: ['onoff'],
}
</script>

<style>
    .backhint-bg{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
    }
    .backhint-center{
        width: 360px;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -130px; 
        margin-left: -180px;
        background: #fff;
        overflow: hidden;
    }
    .backhint-close{
        position: absolute;
        right: 20px;
        top: 15px;
    }
    .backhint-close img{
        width: 18px;
        height: 18px;
    }
    .backhint-head{
        width: 100%;
        height: 48px;
        background: #f4f4f4;
        border-bottom: 1px solid #d7d7d7;
        line-height: 48px;
        text-align: center;
    }
    .backhint-head p{
        font-size: 18px;
        color: #353535;
        font-weight: bold;
    }
    .backhint-text{
        padding: 30px;
        text-align: center;
    }
    .backhint-text-p1{
        font-size: 18px;
        color: #000;
        margin-bottom: 10px;
    }
    .backhint-text-p2, .backhint-text-p3{
        font-size: 16px;
        color: #626364;
        padding-top: 10px;
    }
    .backhint-footer{
        height: 50px;
        width: 100%;
        border: 1px solid #d7d7d7;
        font-size: 0;     
    }
    .backhint-footer-style{
        display: inline-block;
        height: 100%;
        width: 50%;
        line-height: 50px;
        text-align: center;
    }
    .border-right{
        border-right: 1px solid #d7d7d7;
    }
    .backhint-footer-style .left-text{
        font-size: 16px;
        color: #808080;
    }
    .backhint-footer-style .right-text{
        font-size: 16px;
        color: #ff4a64;
    }
</style>
