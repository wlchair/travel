var webpack = require('webpack'),
    unitConfig = require('./webpack.unit');
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/unit/**/*.spec.js'
        ],
        exclude: ['src/js/lib/*.js'],
        preprocessors: {
            'test/unit/**/*.spec.js': ['webpack']
        },
        reporters: ['progress', 'coverage-istanbul'],
        port: 9877,
        color: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        // ChromeHeadless
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,
        webpack: unitConfig,
        coverageIstanbulReporter: {
            reports: ['text-summary', 'html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        // coverageReporter:{
        //     type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
        //     dir: 'coverage/'
        // }
        browserDisconnectTimeout: 20000,
        browserNoActivityTimeout: 20000,
        browserConsoleLogOptions: {
            level: 'log',
            terminal: true
        },
    })
}