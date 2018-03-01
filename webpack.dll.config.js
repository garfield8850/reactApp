var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        bundle: ['react', 'react-dom', 'react-router-dom']  //提取公共模块
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].lib.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: BUILD_PATH+'/[name]-manifest.json',
            name: '[name]_library',
            context: ROOT_PATH,
        })
    ]
}