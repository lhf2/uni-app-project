# uni-app-vue-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

代码规范：https://www.h5w3.com/145121.html

优化建议：https://uniapp.dcloud.io/tutorial/performance.html
1. app-vue和小程序的数据更新，分页面级和组件级（比如微博的点赞功能）；
2. 避免使用大图；
3. 优化数据更新：定义在 data 里面的数据每次变化时都会通知视图层重新渲染页面。所以如果不是视图所需要的变量，可以不定义在 data 中，可在外部定义变量或直接挂载在vue实例上，以避免造成资源浪费；
4. 长列表优化；
5. 减少一次性渲染的节点数量，分批加载；
6. 减少组件数量、减少节点嵌套层级；
7. 避免视图层和逻辑层频繁进行通讯；注意这两个scroll-view（scroll）、onPageScroll；多使用css动画；
8. 优化页面切换动画；
9. 优化背景色闪白；
10. 使用nvue代替vue；
11. 优化启动速度；
12. 优化包体积：开启摇树优化、配置app的模块权限、纯nvue项目；




