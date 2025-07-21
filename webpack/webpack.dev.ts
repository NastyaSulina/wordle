import { merge } from 'webpack-merge'

import path from 'path'

import plugins from './plugins'
import commonConfig from './webpack.common'

import type { Configuration as WebpackConfiguration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

interface DevConfig extends WebpackConfiguration {
    devServer?: DevServerConfiguration
}

const devConfig: DevConfig = merge(commonConfig as WebpackConfiguration, {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    plugins: [plugins.HotModuleReplacementPlugin],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        open: true,
        compress: true,
        port: 9000,
        historyApiFallback: true, // позволяет React Router самому управлять маршрутами
    },
    output: {
        publicPath: '/',
    },
})

export default devConfig
