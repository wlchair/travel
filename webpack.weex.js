const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const baseConfig = merge(base, {
  entry: './src/js/app.js',
  output: {
    publicPath: '/dist/',
    filename: 'bundle.weex.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue" }\n',
      raw: true
    })
  ]
})
baseConfig.module.rules[0].loader = 'weex-loader'
module.exports = baseConfig