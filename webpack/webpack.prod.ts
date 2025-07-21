import { merge } from 'webpack-merge'

import commonConfig from './webpack.common'

import type { Configuration } from 'webpack'

const prodConfig: Configuration = merge(commonConfig as Configuration, {
    output: {
        publicPath: '/wordle/',
    },
    mode: 'production',
    devtool: false,
    target: 'browserslist',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },
})

export default prodConfig
