function http(method, url, data) {
    // 根据环境变量处理baseUrl
    let env = process.env.NODE_ENV
    let baseUrl = env === 'development' ? 'https://test.renwudingdong.com' : 'https://edit.renwudingdong.com'
    // 处理 method 大小写
    method = method && method.toLocaleUpperCase()

    // 请求拦截
    uni.addInterceptor('request', {
        // 拦截前触发
        invoke(args) {
            let access_token = uni.getStorageSync('identity') == 1 ? uni.getStorageSync('token') : uni.getStorageSync('recruiterToken')
            args.url = baseUrl + args.url
            args.header.Authorization = access_token
        },
        // 成功回调拦截
        success(res) { },
        // 失败回调拦截
        fail(err) { },
        // 完成回调拦截
        complete(res) {
            uni.hideLoading()
        }
    })

    // 请求
    return new Promise((resolve, reject) => {
        uni.request({
            method: method,
            data: data,
            url,
            header: {
                Accept: 'application/json'
            },
            success(res) {
                if (res.data.errCode === 0) {
                    res.data.data && resolve(res.data.data);
                } else if (res.statusCode === 401) {
                    if (uni.getStorageSync('identity') == 1) {
                        uni.removeStorage({
                            key: 'mine_info',
                            success: function (res) {
                                uni.removeStorage({
                                    key: "token",
                                    success: function (res) {
                                        console.log(res)
                                    }
                                });
                            }
                        });
                    } else {
                        uni.removeStorage({
                            key: "recruiterToken",
                            success: function (res) {
                                console.log(res)
                            }
                        });
                    }
                } else if (res.statusCode === 500) {
                    uni.showToast({
                        title: '网络错误，请稍后再试',
                        icon: 'none',
                        duration: 2000,
                    })
                } else {
                    uni.showToast({
                        title: res.data.errMsg,
                        icon: 'none',
                        duration: 2500,
                    })
                }
            },
            fail(err) {
                uni.showToast({
                    title: '您当前网络环境不好，请稍后再试',
                    icon: 'none',
                    duration: 1500,
                })
                reject(err);
            }

        })
    })

}

export default http