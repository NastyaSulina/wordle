const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    target: 'browserslist',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
    },
})
