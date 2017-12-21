// Webpack Local Config
var path = require('path')
var webpack = require('webpack')
var appConfig = require('../config/config')
var HappyPack = require('happypack')

const webpackMiddleware = `webpack-hot-middleware/client?path=${appConfig.server.protocol}://${appConfig.server.domain}:${appConfig.server.port}/__webpack_hmr&reload=true&timeout=20000`

var webpackConfig = {
  entry: {
    app: [
      webpackMiddleware,
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../public/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // Run JS Files through babel-loader. Only check the paths in 'include'
        test: /\.js?$/,
        loader: 'happypack/loader?id=es2015ID',
        include: [
          path.resolve(__dirname, '../src/')
        ]
      },
      {
        test: /\.css$/,
        // Run CSS through the style loader, or backup to css loader
        loader: 'style-loader!css-loader',
        include: [
          path.resolve(__dirname, '../public/css')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }
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
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-loader',
        }
      }
    ]
  },
  performance: {hints: false},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HappyPack({
      id: 'es2015ID',
      cache: true,
      threads: 8, // Tuned to MacBooks + Lenovo Laptops
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
    })
  ]
}

module.exports = webpackConfig
