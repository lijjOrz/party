<template>
  <div id="app">
    <HeaderTitle></HeaderTitle>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import HeaderTitle from './components/header/HeaderTitle'

export default {
  name: 'App',
  components:{
    HeaderTitle,
  }
}
</script>

<style>
    #view{
        padding-top: 59px;
        padding-bottom: 236px;
        min-height: 100%;
        position: relative;
        background: #f2f3f8;
    }
</style>
