<template>
	<view class="login-container" @click="handleCb">
		<button v-if="!isLogin" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
			<slot></slot>
		</button>
		<slot v-else></slot>
	</view>

</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			code: '',
			isLogin: uni.getStorageSync('token') || false
		}
	},
	created() {
		this.getCode()
	},
	methods: {
		getCode() {
			const _self = this
			uni.login({
				provider: 'weixin',
				success(res) {
					_self.code = res.code
				}
			})
		},
		getPhoneNumber(e) {
			const _self = this
			// 不允许授权
			if (e.detail.errMsg != 'getPhoneNumber:ok') {
				uni.showToast({
					title: '获取手机号失败',
					icon: 'none'
				})
				return;
			}
			// 允许授权 传给后端解析
			if (!_self.code) {
				_self.getCode()
				return
			}

			let params = {
				login_code: _self.code,
				iv: e.detail.iv,
				encrypted_data: e.detail.encryptedData
			}

			_self.getminiProgramToken(params)
		},
		//服务端解密手机号
		getminiProgramToken(obj) {
			const _self = this
			// todo 调用后端接口，成功了之后做下面的操作
			uni.setStorage({
				key: 'token',
				data: 'this is a token',
				success: function () {
					uni.showToast({
						title: '授权成功',
						icon: "none",
						duration: 1500
					})
					_self.isLogin = true
					_self.handleCb()
				}
			});
		},
		handleCb() {
			if (!this.isLogin) {
				return
			}
			// 触发一个事件
			this.$emit('loginCb')
		}
	}
}
</script>

<style>
.login-container {
	width: 100%;
	height: 100%;
}

.login-container button {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0;
	background: transparent;
	border-radius: 0;
	color: inherit;
}

.login-container button::after {
	border: none;
}
</style>