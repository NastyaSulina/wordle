const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const { HotModuleReplacementPlugin } = require('./plugins')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    plugins: [...common.plugins, HotModuleReplacementPlugin],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        hot: true,
        open: true,
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
})
