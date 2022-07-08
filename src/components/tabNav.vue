<template>
	<view class="nav">
		<text class="nav-text">我是导航栏11111</text>
	</view>
</template>

<script>
	export default{
		name: 'tabNav'
	}
</script>

<style>
	.nav{
		position: fixed;
		top: 40px;
		left: 0;
		width: 750rpx;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fa1;
		z-index: 2;
	}
	.nav .nav-text{
		color: #fff;
	}
</style>