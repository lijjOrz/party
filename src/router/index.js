import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'
import charge from '@/components/common/charge'
import playback from '@/components/common/playback'
import code2d from '@/components/common/charge/code2d'
import succeed from '@/components/common/charge/succeed'
import backhint from '@/components/common/charge/backhint'
import playListLeft from '@/components/common/playback/playListLeft'
import playListRight from '@/components/common/playback/playListRight'


// import HelloWorld from '@/components/HelloWorld'




Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
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
