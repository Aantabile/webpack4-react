/*
* @Author: hj
* @Date:   2018-04-15 22:28:18
* @Last Modified by:   Aantabile
* @Last Modified time: 2018-05-05 21:52:15
*/
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	entry: {
		index: './src/app.jsx'
	},
	output: {
		filename: 'js/[name].[hash:7].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.jsx','.json'],
		alias: {
		  src: path.resolve(__dirname, 'src'),
		  pages: path.resolve(__dirname, 'src/pages'),
		  components: path.resolve(__dirname, 'src/components'),
		  util: path.resolve(__dirname, 'src/util'),
		  service: path.resolve(__dirname, 'src/service'),
		}
	},
	//4.0配置
	optimization: {
	   runtimeChunk: {
	       name: "manifest"
	   },
	   splitChunks: {
	      cacheGroups: {
	        vendor: {
	          test: /[\\/]node_modules[\\/]/,
	          name: "vendors",
	          priority: -20,
	          chunks: "all"
	        }
	      }
       }
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'), // 以template.html作为模板文件生成html
			favicon: './favicon.ico'
				// title: 'Production'
		}),
		new MiniCssExtractPlugin({
		    filename: "css/[name].[hash:7].css",
		 }),
		new OptimizeCssAssetsPlugin({
	      assetNameRegExp: /\.optimize\.css$/g,
	      cssProcessor: require('cssnano'),
	      cssProcessorOptions: { discardComments: { removeAll: true } },
	      canPrint: true
		})

	],
	module: {
	    rules: [
	     {
		      test:/\.(js|jsx)$/,
		      loader: "babel-loader",
		      exclude:/node_modules/
	      },
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',
	          MiniCssExtractPlugin.loader,
	          "css-loader",
	          "postcss-loader"
	        ]

	      },
	      {
	      	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        use: {
		        loader: 'url-loader',
		        options: {
		        	limit: 10000,
		        	name: 'images/[name].[hash:7].[ext]',
		        	publicPath: '/'
		        }
	        }
	      },
	      {
	        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: {
  	        loader: 'url-loader',
  	        options: {
  	        	limit: 10000,
  	        	name: 'media/[name].[hash:7].[ext]',
  	        	publicPath: '/'
  	        }
          }
	      },
	      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	        use: {
		        loader: 'url-loader',
		        options: {
		        	limit: 10000,
		        	name: 'fonts/[name].[hash:7].[ext]',
		        	publicPath: '/'
		        }
	        }
	      },
	      {
	        test: /\.html$/,
	        loader: 'html-loader'
	      },
	      {
	        test: /\.(csv|tsv)$/,
	        use: [
	          'csv-loader'
	        ]
	      },
	      {
	        test: /\.xml$/,
	        use: [
	          'xml-loader'
	        ]
	      }
	    ]
  }
}