<template>
  <view class="content">
    <!-- #ifndef APP-PLUS -->
    <tab-nav></tab-nav>
    <!-- #endif -->
    <cover-view>
      <my-video class="video-content"></my-video>
    </cover-view>

    <view class="content">
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
      <view>我是一段内容</view>
    </view>
  </view>
</template>

<script>
  import tabNav from '../../components/tabNav.vue'
  import myVideo from '../../components/myVideo.vue'
  export default {
    data() {
      return {
        title: 'Hello',
        tabList: [
          { label: '帖子', value: 0 },
          { label: '热帖', value: 1 },
          { label: 'PK赛', value: 2 },
          { label: '明星设计师', value: 3 },
        ],
        current: 0,
        videoContext: '',
      }
    },
    onShow() {
      this.videoContext = uni.createVideoContext('myVideo')
    },
    onHide() {
      this.videoContext.pause()
    },
    components: {
      tabNav,
      myVideo,
    },
    created() {
      let vm = this
      // #ifdef APP-PLUS
      const subNVue = uni.getSubNVueById('nav')
      subNVue.show('slide-in-left', 0, function () {
        // 发送数据
        uni.$emit('initData', {
          tabList: vm.tabList,
          current: vm.current,
        })
      })
      // #endif
    },
    methods: {},
  }
</script>

<style>
  .content {
    /* #ifndef APP-PLUS */
    margin-top: 40px;
    /* #endif */
  }
</style>
