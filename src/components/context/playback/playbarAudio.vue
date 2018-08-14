<template>
    <div class="playbar-box">
        <audio 
        ref="audio"
        @pause="onPause"
        @play="onPlay"
        @timeupdate="onTimeupdate" 
        @loadedmetadata="onLoadedmetadata"
        src="http://www.egtch.com/t_works/Vuedata/Apologize (Timbaland Remix).mp3"></audio>
        <div class="button" @click="startPlayOrPause"><img :src="audio.playing | transPlayPause" alt=""></div>
        <div class="currentTime timetext">{{ audio.currentTime | formatSecond}}</div>
        <el-slider v-model="sliderTime" :format-tooltip="formatProcessToolTip" @change="changeCurrentTime" class="slider"></el-slider>
        {{'Value: ' + sliderTime}}
        <div class="maxTime timetext">{{ audio.maxTime | formatSecond}}</div>
    </div>
</template>

<script>

// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
    var secondType = typeof second

    if (secondType === 'number' || secondType === 'string'){
        second = parseInt(second)

        var hours = Math.floor(second / 3600)
        second = second - hours * 3600
        var mimute = Math.floor(second / 60)
        second = second - mimute * 60

        return  ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    }else {
        return '00:00'
    }
}
var t

export default {
    name: 'playbarAudio',
    data () {
        return {
            audio: {
                // 该字段是音频是否处于播放状态的属性
                playing: false,
                // 音频当前播放时长
                currentTime: 0,
                // 音频最大播放时长
                maxTime: 0,
            },
            sliderTime: 0,
            sliderSwitch: true,
        }
    },
    // computed: {
    //     sliderTime() {
    //         console.log(this.audio)
    //         return parseInt(this.audio.currentTime / this.audio.maxTime * 100)
    //     }
    // },
    methods: {
        // 控制音频的播放与暂停
        startPlayOrPause () {
            return this.audio.playing ? this.pause() : this.play()
        },
        // 播放音频
        play () {
            this.$refs.audio.play()
            this.sliderupdata()
            
        },
        // 暂停音频
        pause () {
            this.$refs.audio.pause()
            clearTimeout(t)
        },
        // 当音频播放
        onPlay () {
            this.audio.playing = true
        },
        // 当音频暂停
        onPause () {
            this.audio.playing = false
            clearTimeout(t)
        },
        // 进度条toolTip
        formatProcessToolTip(index = 0) {
            index = parseInt(this.audio.maxTime / 100 * index)
            return '进度条: ' + realFormatSecond(index)
        },
        //更新进度条
        sliderupdata(){
            this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
            console.log(this.sliderTime)
            t = setTimeout(this.sliderupdata, 1000)
        },
        // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间

        onTimeupdate(res) {
            // console.log('timeupdate')
            // console.log(res)
            this.audio.currentTime = res.target.currentTime //更新播放时间
            // console.log('自动更新时间' +this.audio.currentTime)
            // this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
        },
        // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
        changeCurrentTime(index) {
            // console.log(this.$refs)
            // console.log( this.audio.maxTime)
            // console.log(this.$refs.audio.buffered)
            this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
            // console.log('sliderTime: ' + this.sliderTime)
            // console.log('进度条改变时间'+this.$refs.audio.currentTime ,this.sliderTime,index)
        },
        // 当加载语音流元数据完成后，会触发该事件的回调函数
        // 语音元数据主要是语音的长度之类的数据
        onLoadedmetadata(res) {
            // console.log('loadedmetadata')
            // console.log(res)
            this.audio.maxTime = parseInt(res.target.duration)
        }
    },
    filters: {
        // 使用组件过滤器来动态改变按钮的显示
        transPlayPause(value) {
            if(value){
                return '/static/pause.png'
            }else{
                return '/static/play.png'
            }
        },
        // 将整数转化成时分秒
        formatSecond(second = 0) {
            return realFormatSecond(second)
        },
    }
}
</script>

<style>
    .playbar-box{
        width: 100%;
        height: 100px;
        background: #fff;
        border-radius: 10px;
        padding-left: 60px;
        font-size: 0;
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
    }
    .button{
        margin-right: 20px;
    }
    .timetext{
        font-size: 16px;
        color: #4b4b4b;
        margin: 0 10px;
    }
    .slider{
        width: 854px;   
    }
    .el-slider__runway{
        background: #f5f5f6;
    }
    .el-slider__bar{
        background: #f02744;
    }
    .el-slider__button{
        background: url('/static/sliderButton.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: 0;
    }
</style>
