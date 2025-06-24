import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import path from 'path'

const devMode = process.env.NODE_ENV !== 'production'

export default {
    HotModuleReplacementPlugin: new webpack.HotModuleReplacementPlugin(),

    MiniCssExtractPlugin: new MiniCssExtractPlugin({
        filename: devMode ? 'styles.[contenthash].css' : '[contenthash].css',
    }),

    HtmlWebpackPlugin: new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../../index.html'),
        filename: 'index.html',
    }),
}
