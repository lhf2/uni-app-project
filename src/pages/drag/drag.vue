<!-- https://blog.csdn.net/LueLueLue77/article/details/124489734 -->
<template>
	<view class="drag-container">
		<view class="drag-item" :style="{'background': controlsList[index], 'transition': (currentIndex === index ? 'initial' : '.3s')}" v-for="(item,index) in list" :key="item" @touchstart="handleTouchstart($event, index)" @touchmove="handleTouchmove" @touchend="handleTouchend">{{item}}</view>
	</view>
</template>

<script>
	import throttle from '../../utils/throttle.js'
	export default {
		data() {
			return {
				list: [1,2,3,4,5,6,7,8,9],
				controlsList: ['#fc5531', '#1481f9', '#1ab519', '#32c0eb', '#e73e60', '#a663c2', '#b26801', '#1c2e6c', '#cdccc8'],
				// 当前操作的控件的下标
				currentIndex: -1,
				// 记录当前手指的位置
				recordPosition: {}
			}
		},
		mounted() {
			
		},
		methods: {
			handleTouchstart(e, index){
				const { pageX, pageY } = e.touches[0]
				this.currentIndex = index
				this.recordPosition = {
					x: pageX,
					y: pageY
				}
			},
			handleTouchmove(e){
				const { pageX, pageY } = e.touches[0]
				const diffY = pageY - this.recordPosition.y
				const diffIndex = Math.floor(diffY / 40)
				console.log(diffIndex)
				// 向下移动
				if(this.currentIndex!=this.list.length -1 && diffY > 0){
					this.handleChangePos(this.currentIndex, diffIndex)
				}else if(this.currentIndex!=0 && diffY < 0){
					// 向上移动
					this.handleChangePos(this.currentIndex, this.list.length+diffIndex)
				}
			},
			// 切换位置
			handleChangePos(index, index1){
				const temp = this.list[index]
				this.$set(this.list, index, this.list[index1])
				this.$set(this.list, index1, temp)
			
				// 改变选中的位置
				this.currentIndex = index1
			},
			handleTouchend(e){
				this.currentIndex = -1
				// console.log('end', e)
			}
		}
	}
</script>

<style>

.drag-container{
	overflow: hidden;
	padding-top: 100px;
	background: #fff;
}
.drag-container .drag-item{
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 40px;
	margin-bottom: 10px;
}
</style>
