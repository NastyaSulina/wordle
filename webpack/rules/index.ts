import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const devMode = process.env.NODE_ENV !== 'production'

export default {
    // html
    htmlRules: {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
            sources: false,
        },
    },

    // ts-scripts
    scriptsRules: {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    ['@babel/preset-typescript'],
                ],
                plugins: [['@babel/plugin-transform-runtime', { corejs: false }]],
            },
        },
    },

    // styles scss
    stylesRules: {
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
    },

    // styles css
    cssRules: {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },

    // images
    imagesRules: {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
    },

    // fonts
    fontsRules: {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]',
        },
    },
}
