import { merge } from 'webpack-merge'

import commonConfig from './webpack.common'

import type { Configuration } from 'webpack'

const prodConfig: Configuration = merge(commonConfig as Configuration, {
    mode: 'production',
    devtool: false,
    target: 'browserslist',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
        // стабильные хэши модулей для long-term caching
        moduleIds: 'deterministic',
    },
})

export default prodConfig
