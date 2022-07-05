<template>
  <view>
    <view class="header-container" :style="{ 'margin-top': topNav }">
      <view class="tab">tab1</view>
      <view class="tab">tab2</view>
    </view>
    <view>
      <text>这是微信小程序1的定制页面</text><text>这是微信小程序1的定制页面</text
      ><text>这是微信小程序1的定制页面</text><text>这是微信小程序1的定制页面</text
      ><text>这是微信小程序1的定制页面</text><text>这是微信小程序1的定制页面</text
      ><text>这是微信小程序1的定制页面</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        menuButtonInfo: {},
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
      }
    },
    created() {
      this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    },
    computed: {
      topNav: function () {
        return (
          this.statusBarHeight +
          (this.menuButtonInfo.top - this.statusBarHeight) * 2 +
          this.menuButtonInfo.height +
          'px'
        )
      },
    },
    methods: {},
  }
</script>

<style>
  .header-container {
    display: flex;
    width: 100%;
    height: 40px;
    background-color: aqua;
    align-items: center;
    justify-content: center;
  }

  .header-container .tab {
    text-align: center;
    flex: 1;
  }
</style>
