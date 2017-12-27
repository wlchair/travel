const path = require('path')
const webpack = require('webpack')
module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	module: {
		rules: [{
			test: /\.vue(\?[^?]+)?$/
		}]
	}
}