const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// html
exports.htmlRules = {
    test: /\.html$/i,
    loader: 'html-loader',
}

// ts-scripts
exports.scriptsRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

// styles scss
exports.stylesRules = {
    test: /\.s[ac]ss$/i,
    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: true,
                    exportGlobals: false,
                    localIdentName: devMode ? '[path][name]__[local]' : '[contenthash]',
                    namedExport: false,
                },
                importLoaders: 2,
            },
        },
        'postcss-loader',
        'sass-loader',
    ],
}

// styles css
exports.cssRules = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

// images
exports.imagesRules = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
}

// fonts
exports.fontsRules = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'fonts/[contenthash][ext]',
    },
}
