import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

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

    CopyWebpackPlugin: new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, '../../public/meta'),
                to: '',
            },
            {
                from: path.resolve(__dirname, '../../public/favicon'),
                to: '',
            },
        ],
    }),
}
