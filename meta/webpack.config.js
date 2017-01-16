var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  bail: true,
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loader: 'babel',
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
    path: path.join(__dirname, '../build'),
    crossOriginLoading: 'anonymous',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
      title: 'Apps',
			template: './src/index.html',
      inject: false,
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true
      // },
		}),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // comments: /license/,
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
	],
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
	}
};

module.exports = config;
