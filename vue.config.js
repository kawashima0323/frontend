const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/hotpepper': {
                    target: 'http://webservice.recruit.co.jp',
                }
            }
        }
    }
}