import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/context/home'
import charge from '@/components/context/charge/charge'
import playback from '@/components/context/playback/playback'
import code2d from '@/components/context/charge/code2d'
import succeed from '@/components/context/charge/succeed'
import backhint from '@/components/context/charge/backhint'
import playListLeft from '@/components/context/playback/playListLeft'
import playListRight from '@/components/context/playback/playListRight'
import Data from '@/model/Data'

// import HelloWorld from '@/components/HelloWorld'
import Bus from '../utils/bus'



Vue.use(Router)

var router = new Router({
  routes: [
    {
        path: '/',  //首页
        name: 'home',
        component: home
    },
    {
        path: '/charge', //充值
        name: 'charge',
        component: charge
    },
    {
        path: '/playback', //回放
        name: 'playback',
        component: playback,
        children: [
            {
                path: '/', //我的回放列表
                name: 'playListLeft',
                component: playListLeft,
            },
            {
                path: 'playListRight', //我访问过的回放列表
                name: 'playListRight',
                component: playListRight,
            },
        ]
    },
    {
        path: '/code2d', //微信扫二维码页面
        name: 'code2d',
        component: code2d
    },
    {
        path: '/succeed', //支付成功，继续充值
        name: 'succeed',
        component: succeed
    },
    {
        path: '/backhint', //支付后返回充值页面后的提示 
        name: 'backhint',
        component: backhint
    },
  ]
})

router.beforeEach((to, from, next) => {
    console.log("Data.header['authorize-token']--"+Data.header['authorize-token'])
    if(to.path != '/'){
        console.log('to.path-----'+ to.path)
        if(Data.header['authorize-token']){
            next()
            console.log('跳转测试true')
        }else{
            console.log('跳转测试：被拦截')
            Bus.$emit('showLoginPage', to.path)
        }
    }else{
        console.log('去首页')
        next()
    }
})


export default router
