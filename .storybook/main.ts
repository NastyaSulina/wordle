import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        {
            name: '@storybook/addon-styling-webpack',
            options: {
                rules: [
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        auto: true,
                                        exportGlobals: false,
                                        localIdentName: '[path][name]__[local]',
                                        namedExport: false,
                                    },
                                    importLoaders: 2,
                                },
                            },
                            'postcss-loader',
                            'sass-loader',
                        ],
                    },
                ],
            },
        },
        '@storybook/addon-themes',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
}
export default config
