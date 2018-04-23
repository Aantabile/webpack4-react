/*
* @Author: hj
* @Date:   2018-04-15 22:28:28
* @Last Modified by:   Aantabile
* @Last Modified time: 2018-04-19 23:14:17
*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		compress: true,
		hot: true,
	},
	
	plugins: [
	  //此处关掉这个插件，不然css的热加载功能将失效
	  new ExtractTextPlugin({disable: true}),
	  new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin()
	],
})