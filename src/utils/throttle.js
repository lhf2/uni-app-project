function throttle(fn, delay){
	let timer, context, args
	let lastTime = 0
	return function(){
		console.log('throttle')
		context = this
		args = arguments
		let currentTime = Date.now()
		if(currentTime - lastTime > delay){
			if(timer){
				clearTimeout(timer)
				timer = null
			}
			fn.apply(context, args)
			lastTime = currentTime
		}
		if(!timer){
			timer = setTimeout(()=>{
				lastTime = 0
				fn.apply(context, args)
				clearTimeout(timer)
				timer = null
			}, delay)
		}
	}
}

export default throttle