const path = require('path')
const {
    scriptsRules,
    imagesRules,
    stylesRules,
    fontsRules,
    htmlRules,
    cssRules,
} = require('./rules')
const { HtmlWebpackPlugin, MiniCssExtractPlugin } = require('./plugins')

module.exports = {
    entry: path.resolve(__dirname, '../src/app/appEntry.tsx'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'assets/[contenthash][ext]',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.*', '.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [scriptsRules, imagesRules, stylesRules, fontsRules, htmlRules, cssRules],
    },
    plugins: [HtmlWebpackPlugin, MiniCssExtractPlugin],
}
