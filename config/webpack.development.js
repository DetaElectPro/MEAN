// const webpack = require('webpack'),
//     webpackMerge = require('webpack-merge'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     commonConfig = require('./webpack.common.js'),
//     path = require('path'),
//     rootDir = path.resolve(__dirname, '..');

// const env = process.env.NODE_ENV;

// module.exports = webpackMerge(commonConfig, {
//     devtool: 'source-map',
//     output: {
//         path: path.resolve(rootDir, 'src/devDist'),
//         sourceMapFilename: '[name].map',
//         publicPath: '/devDist/',
//         filename: '[name].js',
//         chunkFilename: '[id].chunk.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.ts$/,
//                 exclude: /node_modules/,
//                 loaders: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader']
//             }]
//     }
//     //Example of a dev server. Not needed in this app since it uses Node/Express for the server.
//     // devServer: {
//     //   contentBase: './src',
//     //   historyApiFallback: true,
//     //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
//     //   quiet: true,
//     //   stats: 'minimal'
//     // }
// });