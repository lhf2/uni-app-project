<template>
  <view>
    <view class="header-container" :style="{ 'margin-top': topNav }">
      <view class="tab">tab1</view>
      <view class="tab">tab2</view>
    </view>
    <view class="content">
      <view
        >这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容这是一大段的内容</view
      >
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
