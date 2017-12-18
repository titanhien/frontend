// Webpack Production Config
var path = require('path')
var webpack = require('webpack')
var HappyPack = require('happypack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var webpackConfig = {
  entry: {
    app: [
      'babel-polyfill',
      './public/js/src/start.js'
    ],
    // file language for file .html static
    lang: [
      './public/js/src/locale.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../public/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        // Run JS Files through babel-loader. Only check the paths in 'include'
        test: /\.js?$/,
        loader: 'happypack/loader?id=es2015ID',
        include: [
          path.resolve(__dirname, '../public/js/src'),
          path.resolve(__dirname, '../public/core'),
          path.resolve(__dirname, '../plugins/utilities'),
          path.resolve(__dirname, '../sockets')
        ]
      },
      {
        test: /\.css$/,
        // Run CSS through the style loader, or backup to css loader
        loader: 'style-loader!css-loader',
        include: [
          path.resolve(__dirname, '../public/core'),
          path.resolve(__dirname, '../public/css')
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        // Run images and fonts through url-loader
        loader: 'url-loader?limit=100000',
        include: [
          path.resolve(__dirname, '../public/images')
        ]
      },
      {
        // Run json through the json-loader
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  },
  performance: {hints: false},
  plugins: [
    new HappyPack({
      id: 'es2015ID',
      cache: true,
      threads: 2, // Tuned to cloud instances
      loaders: [
        {
          path: 'babel-loader',
          query: {
            plugins: [
              'transform-runtime',
              'transform-object-rest-spread'
            ],
            presets: ['es2015', 'react']
          }
        }
      ]
    }),
    new UglifyJSPlugin({
      parallel: true
    })
  ]
}

module.exports = webpackConfig
