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
	</view>
</template>

<script>
import { getTaskLists } from '../../api/task'
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {
		this.getTaskList({
			page: 1,
			pageSize: 10
		})
	},
	methods: {
		goWeixin1() {
			uni.navigateTo({
				url: "../weixin1/weixin1"
			})
		},
		goWeixin2() {
			uni.navigateTo({
				url: "../weixin2/weixin2"
			})
		},
		getTaskList(params) {
			getTaskLists(params).then(res => console.log('res', res))
		}
	}
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
</style>
