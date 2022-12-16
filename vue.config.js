const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
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
    },

    pluginOptions: {
      vuetify: {}
    }
}
