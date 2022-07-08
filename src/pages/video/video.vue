<template>
	<view class="content">
		<!-- #ifndef APP-PLUS -->
		<tab-nav></tab-nav>
		<!-- #endif -->
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
		<my-video class="video-content"></my-video>
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
			title: 'Hello'
		}
	},
	components: {
		tabNav,
		myVideo
	},
	created() {
		const subNVue = uni.getSubNVueById('nav')
		subNVue.show()
	},
	methods: {

	}
}
</script>

<style>
.content {
	/* #ifndef APP-PLUS */
	margin-top: 40px;
	/* #endif */
}
</style>
