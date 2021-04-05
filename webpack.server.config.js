const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = {
    mode: "development",
    entry: resolve(__dirname, './src/entry-server.js'),
    output: {
        filename: "server-bundle.js",
        libraryTarget: "commonjs2"
    },
    target: "node",
    externals: nodeExternals(),
    module: {
        rules: [{
            test: /\.css$/,
            // null-loader ignore-loader
            use: ['ignore-loader']
        }]
    },
    plugins: [

    ]
}

module.exports = merge(baseConfig, serverConfig);