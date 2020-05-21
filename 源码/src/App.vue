<template>
  <div id="app">
    <router-view />
    <!-- 标签栏 -->
    <van-tabbar  @change="onChange" route v-show="$store.state.vanTabbar">
      <van-tabbar-item replace to="/home/recommend" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="comment-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Notify } from 'vant';
export default {
  data() {
    return {
    }
  },
  methods: {
    onChange() {
      // Notify({ type: 'primary', message: index });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
