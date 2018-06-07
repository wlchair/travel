const path = require('path')
const webpack = require('webpack')
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.vue(\?[^?]+)?$/
        }, {
            test: /\.vue(\?[^?]+)?$|\.js$/,
            exclude: /(node_modules|bower_components|lib)/,
            loader: 'eslint-loader'
        }]
    }
}