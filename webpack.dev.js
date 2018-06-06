const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const baseConfig = merge(base, {
  devtool: 'inline-source-map',
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, '/js/app.js')
    if (fs.statSync(fullDir).isDirectory() &&
      fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),
  output: {
    publicPath: '/dist/',
    filename: 'bundle.web.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      filename: 'runtime.js'
    }),
  ]
})
baseConfig.module.rules[0].loader = 'vue-loader'
module.exports = baseConfig