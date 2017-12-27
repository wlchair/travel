var webpack = require('webpack'),
unitConfig = require('./webpack.unit');
module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'test/unit/**/*.spec.js'
		],
		exclude: [],
		preprocessors: {
			'test/unit/**/*.spec.js': ['webpack']
		},
		reporters: ['progress', 'coverage-istanbul'],
		port: 9877,
		color: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		//'PhantomJS'
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		webpack: unitConfig,
		coverageIstanbulReporter: {
			reports: ['text-summary', 'html'],
			fixWebpackSourcePaths: true
		}
	})
}
