<template>
    <div>
        <div  class="play-router-box">
            <div class="table-head">
                <div class="table-head-song color-808080 border-right">歌曲</div>
                <div class="table-head-name color-808080">演唱者信息</div>
                <div class="table-head-time color-808080 border-left">时长</div>
            </div>
            <div v-if="show">
                <ul>
                    <li v-for="(item, index) in pageArr" :key="index" class="table-head" :class="{playbackground: index%2==0?true:false}">
                        <div class="table-head-song color-000">{{item.name}}</div>
                        <div class="table-head-name color-000">{{item.id}}</div>
                        <div class="table-head-time color-000">{{item.time}}</div>
                    </li>
                </ul>
                <!-- 分页插件框 -->
                <div class="play-page">
                    <div class="play-page-all">共{{pagePhoto.totalRow}}首</div>
                    <div class="play-v-page">
                        <v-page id="vpage" :setting="pagePhoto" @page-change="pagePhotoChange"></v-page>
                        <div class="play-pageall">共{{allpage}}页</div>
                        <input v-model="pageNumber" type="type" placeholder="跳转页码" @click="clear" v-on:keydown.enter="pageJumpFun">
                        <div class="page-button" @click="pageJumpFun"><span>跳转</span></div>
                    </div>
                </div>
            </div>

            <div class="nothing-text" v-if="!show">
                <div class="nothing-text-p">
                    <p>暂无内容，可能是以下原因导致：</p>
                    <p>1、您未在1.3.0及之前版本访问过自己的回放；</p>
                    <p>2、您已删除全部自己的回放。</p>
                </div>
            </div>

        </div>
        
        <playbarAudio></playbarAudio>
    </div>
</template>


<script>
import playbarAudio from './playbarAudio'

export default {
    name: 'playListLeft',
    components:{
        playbarAudio,
    },
    data (){
        let arr = [];
        for (let i = 0; i < 66; i++) {

            // 通过给每个数组元素增加index，来区分各个数组的不同
            arr.splice(0,0, {
                    name: '两只老虎第' + i + '首',
                    id: '任振东' + i,
                    time: '03：2' + i,
                });
        }
        return {
            show: false,
            pagePhoto: {
                totalRow: arr.length,
                info: false,
                language: "cn",
                pageSizeMenu: [16],
                currentPage: 1
            },
            
            arr: arr,
            pageArr: [],
            allpage: 1,
            pageNumber: 1,
            pageSize: 16,
            
            
        }
    },
    computed:{
        },

    watch:{
        pageNumber(){
            // console.log('45632')
            if(this.pageNumber > this.allpage){
                this.pageNumber = this.allpage
            }
        }
    },
    methods: {
        pagePhotoChange(pInfo) {
            console.log(pInfo)
            this.pageArr.splice(0, this.pageArr.length);
            let start = 0,
                end = 0;
            start = pInfo.pageSize * (pInfo.pageNumber - 1);
            end = start + pInfo.pageSize;
            if (end > this.arr.length) end = this.arr.length;
            for (let i = start; i < end; i++) {
                this.pageArr.push(this.arr[i]);
            }
        },
        pageJumpFun(){
            // console.log(this.pageJumpInfo)
            if(this.pageNumber !== ''){
                this.pageArr.splice(0, this.pageArr.length);
                let start = 0,
                    end = 0;
                start = this.pageSize * (this.pageNumber - 1);
                // console.log(start)
                end = start + this.pageSize;
                // console.log(end)
                // console.log(this.arr.length)
                if (end > this.arr.length) end = this.arr.length;
                for (let i = start; i < end; i++) {
                    this.pageArr.push(this.arr[i]);
                }

                // 更改pagePhoto.currentPage，从而使得子组件的setting属性变化
                // 这里是通过改变父组件的数据，来推动子组件的数据改变。更好的方式，是子组件有自己的输入框，可以跳转到自己内部的某一页。
                this.pagePhoto.currentPage = Number(this.pageNumber); // 从input中拿出的数据是字符串，这里进行转换
            }
        },
        clear(){
            this.pageNumber = ''
        }
    },

    mounted: function(){
        this.allpage = Math.ceil(this.pagePhoto.totalRow/16)
    }


}
</script>

<style>
    @import './playLeftRight.css';
</style>

