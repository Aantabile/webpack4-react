/*
* @Author: hj
* @Date:   2018-04-15 22:28:44
* @Last Modified by:   hj
* @Last Modified time: 2018-04-21 14:55:47
*/
const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'source-map',
	plugins: [
	  new UglifyJSPlugin({sourceMap: true}),
	  new webpack.DefinePlugin({
	  	'process/env.NODE_ENV' : JSON.stringify('production')
	  })
	]
})