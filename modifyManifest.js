// 获取自定义条件编译中微信小程序的appid
function getCustomAppId() {
    const appidObj = require('./appIdObj')
    // 获取命令行的参数 npm run dev:custom mp-weixin1
    let [type, projectName] = process.argv.slice(2)
    let platform = process.env.UNI_PLATFORM

    // 判断是否是自定义、微信小程序、并且appIdObj里面有配置
    let appItemObj = appidObj[projectName]
    if (type === 'custom' && platform === 'mp-weixin' && appItemObj) {
        let env = process.env.NODE_ENV
        switch (env) {
            case 'development':
                return appItemObj['dev']
            case 'production':
                return appItemObj['pro']
        }
    }
}

// 修改 manifest.json 中的 appid
function modifyManifest() {
    const fs = require('fs')
    const appId = getCustomAppId()
    // manifest.json 路径
    const manifestPath = `${__dirname}/src/manifest.json`
    // 读取文件数据
    let manifestData = fs.readFileSync(manifestPath, { encoding: 'utf8' });
    // 修改文件下的appid
    let newManifestData = replaceManifest(manifestData, 'mp-weixin.appid', appId)
    fs.writeFileSync(manifestPath, newManifestData, {
        "flag": "w"
    })

}

// 替换 manifest.json 中的值
function replaceManifest(manifestData, path, value) {
    const arr = path.split('.')
    const len = arr.length
    const lastItem = arr[len - 1]

    let i = 0
    let manifestArr = manifestData.split(/\n/)

    for (let index = 0; index < manifestArr.length; index++) {
        const item = manifestArr[index]
        if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
        if (i === len) {
            const hasComma = /,/.test(item)
            manifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": "${value}"${hasComma ? ',' : ''}`)
            break;
        }
    }
    manifestData = manifestArr.join('\n')
    return manifestData
}

module.exports = modifyManifest