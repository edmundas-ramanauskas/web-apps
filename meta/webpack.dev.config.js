var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  bail: true,
  devServer: {
    color: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    noInfo: true,
    port: 3000,
    publicPath: '/'
  },
  devtool: 'source-map',
  entry: [
		'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  logErrorsToConsole: true,
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(png|svg|gif)$/,
        loaders: [
          'url-loader',
          'image-webpack?bypassOnDebug'
        ]
      }
    ]
  },
  output: {
    crossOriginLoading: 'anonymous',
    filename: 'bundle.js'
  },
  plugins: [
    // new webpack.DefinePlugin({}),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({React: 'react'}),
		new HtmlWebpackPlugin({
      title: 'Apps',
			template: './src/index.html',
      inject: false
		}),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
	],
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
		extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
	},
  target: 'web'
};

module.exports = config;
