const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

// Hot Reloading для разработки
exports.HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

// Создает CSS-файл для каждого JS-файла, который содержит CSS
exports.MiniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: devMode ? 'styles.[contenthash].css' : '[contenthash].css',
})

// Генерирует HTML-файл в директории /dist
exports.HtmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../index.html'),
    filename: 'index.html',
})
