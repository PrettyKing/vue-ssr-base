const { resolve } = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base.config');

const devConfig = {
    mode: "development",
    entry: resolve(__dirname, './src/entry-client.js'),
    output: {
        filename: "client-bundle.js"
    },
    devServer: {
        contentBase: resolve(__dirname, './dist'),
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "./index.template.html")
        })
    ]
}

module.exports = merge(baseConfig, devConfig);