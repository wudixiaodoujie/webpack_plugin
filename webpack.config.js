const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WxPlugin = require('./webpack-firstPlugin.js');
module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'./js/index.js'),    // 入口文件
    output: {
        filename: '[name].js',      // 打包后的文件名称
        path: path.resolve(__dirname, './dist')  // 打包后的目录
    }, 
    plugins: [
        new WxPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: path.resolve(__dirname, './dist/index.html')
        })
    ],
}