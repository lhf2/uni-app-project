<template>
  <view>
    这是任务页面 这是任务页面 这是任务页面 这是任务页面 这是任务页面 这是任务页面 这是任务页面
    这是任务页面 这是任务页面 这是任务页面
    <!-- #ifdef MP-WEIXIN1 -->
    <text>微信小程序1</text>
    <!-- #endif -->
    <!-- #ifdef MP-WEIXIN2 -->
    <text>微信小程序2</text>
    <!-- #endif -->
    <button @click="goSub">点击跳转到分包页面</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goSub() {
      uni.navigateTo({
        url: "/pages/sub/sub",
        success(res) {
          console.log('res', res)
        },
        fail(err) {
          console.log('err', err)
        }
      })
    }
  },
}
</script>

<style>
</style>
