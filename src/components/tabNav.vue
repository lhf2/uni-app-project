<template>
  <view class="tab-wrapper">
    <!-- <view class="item" v-for="item in tabList">
		  <view class="text-box" :class="item.value === current? 'active': ''">
			  <text class="nav-text">{{item.label}}</text>
		  </view> 
	  </view> -->
    <view class="item">
      <view class="text-box active">
        <text class="nav-text">我是自定义1</text>
      </view>
    </view>
    <view class="item">
      <view class="text-box">
        <text class="nav-text">我是自定义2</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'tabNav',
    data() {
      return {
        tabList: [
          { label: '帖子', value: 0 },
          { label: '热帖', value: 1 },
          { label: 'PK赛', value: 2 },
          { label: '明星设计师', value: 3 },
        ],
        current: 0,
      }
    },
    onLoad() {
      let vm = this
      uni.$on('initData', ({ tabList, current }) => {
        console.log(tabList)
        vm.tabList = tabList
        vm.current = current
      })
    },
  }
</script>

<style>
  .tab-wrapper {
    width: 100%;
    height: 45px;
    display: flex;
    position: fixed;
    top: 0;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .tab-wrapper .item {
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .tab-wrapper .item .text-box .nav-text {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #333333;
  }

  .tab-wrapper .item .text-box.active .nav-text {
    color: #ff8008;
    display: inline-block;
    height: 100%;
    position: relative;
  }

  .tab-wrapper .item .text-box.active .nav-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #ff8008;
    border-top-left-radius: 31px;
    border-top-right-radius: 31px;
  }
</style>
