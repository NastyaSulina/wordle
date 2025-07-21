import webpack from 'webpack'

import path from 'path'

import plugins from './plugins'
import rules from './rules'

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, '../src/app/appEntry.tsx'),
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'assets/[contenthash][ext]',
    },
    resolve: {
        extensions: ['.*', '.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            rules.scriptsRules,
            rules.imagesRules,
            rules.stylesRules,
            rules.fontsRules,
            rules.htmlRules,
            rules.cssRules,
        ],
    },
    plugins: [plugins.HtmlWebpackPlugin, plugins.MiniCssExtractPlugin],
}

export default config
