var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        bundle: path.resolve(APP_PATH, 'App.jsx'),
    },
    output: {
        path: BUILD_PATH,
        publicPath: 'http://localhost:4000/dist',
        filename: 'app.js',
        sourceMapFilename: '[name].map'
    },
    //babel重要的loader在这里
    module: {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {
                test: /\.(less|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'less-loader']
            },
            {
                test: /\.(css)$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=images/[name].[ext]']}, /*解析图片*/
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader?outputPath=font/&name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                include: APP_PATH,
                query: {
                    presets: ['es2015', 'react']
                }


            }
        ]
    },
    resolve: {
        modules: [ROOT_PATH, APP_PATH + '/common', APP_PATH + '/components', 'node_modules'],
        // alias: {
        //     applicationStyles: 'app/styles/app.scss',
        // },
        extensions: ['*', '.js', '.jsx'],
    },
    devtool: 'eval-source-map', //开发环境
    devServer: {
        contentBase: './dist',
        compress: true, // 启用Gzip压缩
        historyApiFallback: true, // 为404页启用多个路径
        hot: true, // 模块热更新，配置HotModuleReplacementPlugin
        https: false, // 适用于ssl安全证书网站
        noInfo: true, // 只在热加载错误和警告
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        })
    ]

}
