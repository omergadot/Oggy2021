module.exports = {
    chainWebpack: config => {
        config.module
          .rule("i18n")
          .resourceQuery(/blockType=i18n/)
          .type('javascript/auto')
          .use("i18n")
            .loader("@kazupon/vue-i18n-loader")
            .end();
    },
    productionSourceMap: false,
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: process.env.API_HOST || 'http://localhost:8080',
                changeOrigin: true
            }
        }
    },
}