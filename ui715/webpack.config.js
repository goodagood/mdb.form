
var webpack = require('webpack');
var path = require('path');

//var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, './pub');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
    devtool: "source-map",

    //entry: APP_DIR + '/index.jsx',
    entry: APP_DIR + '/index.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                //include: APP_DIR,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ["es2015", "react"],
                        plugins: ['transform-class-properties'] // such => in component
                    }
                }
            },

			{
				test: /\.css$/,
				exclude: /node_modules/,

                use: [
                    'style-loader', 'css-loader',
                    //{ loader: 'css-loader', options: { importLoaders: 1 } },
                    //'postcss-loader'
                ]

            },


			{
            
				//test: /\.scss$|\.sass$/,
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
            	{
					loader: "style-loader" // creates style nodes from JS strings
				},
            	{
					loader: "css-loader" // translates CSS into CommonJS
				},
            	{
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?[a-z0-9]+)?$/,
                //loader: 'file?name=public/fonts/[name].[ext]'
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: '../'
                }
            }



        ]
    }


};

module.exports = config;
