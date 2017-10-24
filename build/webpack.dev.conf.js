'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['vendor', 'manifest', 'app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'wang.html',
      template: 'wang.html',
      inject: true,
      chunks: ['vendor', 'manifest', 'wang'],
    }),
    new HtmlWebpackPlugin({
      filename: 'ding.html',
      template: 'ding.html',
      inject: true,
      chunks: ['vendor', 'manifest', 'ding'],
    }),
    new HtmlWebpackPlugin({
      filename: 'xie.html',
      template: 'xie.html',
      inject: true,
      chunks: ['vendor', 'manifest', 'xie'],
    }),
    new HtmlWebpackPlugin({
      filename: 'check.html',
      template: 'check.html',
      inject: true,
      chunks: ['vendor', 'manifest', 'check'],
    }),
    new FriendlyErrorsPlugin()
  ]
})
