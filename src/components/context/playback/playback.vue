<template>
    <div class="play-bg">
        <div class="play-box">
            <div class="play-table">
                <router-link to="/playback/" class="play-table-left"><span>我的回放</span></router-link>
                <router-link to="/playback/playListRight" class="play-table-right"><span>访问过的回放</span></router-link>
            </div>
            <router-view></router-view>   
        </div>
        <FooterFont></FooterFont>
    </div>
</template>

<script>
import FooterFont from '../../footer/FooterFont'

export default {
    name: 'playback',
    components:{
        FooterFont,
    },
}
</script>

<style>
    .play-box{
        width: 1150px;
        margin: 20px auto;
    }
    .play-table{
        width: 320px;
        height: 50px;
        border-radius: 10px;
        background: #e6e7ee;
        margin-bottom: 20px;
        font-size: 0;
    }
    .play-table-left, .play-table-right{
        display: inline-block;
        height: 100%;
        width: 50%;
        line-height: 50px;
        text-align: center;
    }
    .play-table span{
        font-size: 18px;
        color: #4b4b4b;
    }
</style>
