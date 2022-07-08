<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <!-- #ifdef MP-WEIXIN1 -->
    <text>这是微信小程序1的特定代码 ---- 11111</text>
    <button type="default" @click="goWeixin1">微信小程序1</button>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN2 -->
    <text>这是微信小程序2的特定代码 ---- 22222</text>
    <button type="default" @click="goWeixin2">微信小程序2</button>
    <!-- #endif -->

    <!-- 登录 -->
    <view class="news-lists">
      <view class="news-item" v-for="(item, index) in newlists" :key="item.id">
        <text>{{ item.title }}</text>
        <login class="zan-btn" @loginCb="handleZan(item, index)">
          <text class="zan">👍🏻</text>
          <text class="num">0</text>
        </login>
      </view>
    </view>
    <login class="score-btn" @loginCb="handleScore">去打分</login>
  </view>
</template>

<script>
import { getTaskLists } from '../../api/task'
import login from '../../components/login.vue'

export default {
  data() {
    return {
      title: 'Hello',
      newlists: [
        { id: 1, title: '这是新闻1' },
        { id: 2, title: '这是新闻2' },
        { id: 3, title: '这是新闻3' },
      ],
    }
  },
  components: {
    login,
  },
  onLoad() {
    // this.getTaskList({
    // 	page: 1,
    // 	pageSize: 10
    // })
  },
  methods: {
    goWeixin1() {
      uni.navigateTo({
        url: '../weixin1/weixin1',
      })
    },
    goWeixin2() {
      uni.navigateTo({
        url: '../weixin2/weixin2',
      })
    },
    getTaskList(params) {
      getTaskLists(params).then((res) => console.log('res', res))
    },
    handleScore() {
      console.log('handleScore 打分')
    },
    handleZan(item, index) {
      console.log('点赞', item, index)
    },
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.score-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff8008;
  width: 240rpx;
  height: 88rpx;
  position: fixed;
  bottom: 60rpx;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.204592);
  border-radius: 44rpx;
  font-weight: 600;
  font-size: 32rpx;
  color: #ffffff;
  z-index: 21;
  text-align: center;
  line-height: 88rpx;
}

.news-lists {
  margin-top: 100rpx;
  width: 100%;
  height: 40px;
}

.news-item {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ff8008;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.zan-btn .num {
  margin-left: 10px;
  color: #ff8008;
}
</style>
