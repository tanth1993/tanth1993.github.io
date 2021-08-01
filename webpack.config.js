const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/script/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                // exclude: [
                //     path.resolve(__dirname, "./project")
                // ],
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|JPG)$/,
                // exclude: [
                //     path.resolve(__dirname, "./project")
                // ],
                type: 'asset/resource',

                // use: [
                //     'file-loader'
                // ]
                // generator: {
                //     filename: 'static/[hash][ext]'
                // }
            },
            {
                test: /\.s?[ac]ss$/,
                // exclude: [
                //     path.resolve(__dirname, "./assets")
                // ],
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new SourceMapDevToolPlugin({
            filename: '[name].js.map'
        })
    ],
    output: {
        path: path.resolve(__dirname),
        assetModuleFilename: './images/[hash][ext][query]'
    }
}