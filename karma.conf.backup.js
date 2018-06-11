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
        autoWatch: true,
        browsers: ['chrome_headless'],
        customLaunchers: {
            chrome_headless: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu',
                    '--remote-debugging-port=9222'
                ]
            }
        },
        singleRun: false,
        concurrency: Infinity,
        webpack: unitConfig,
        coverageIstanbulReporter: {
            reports: ['text-summary', 'html'],
            fixWebpackSourcePaths: true
        },
        // browserDisconnectTimeout: 20000,
        // browserNoActivityTimeout: 20000,
        browserConsoleLogOptions: {
            level: 'log',
            terminal: true
        },
    })
}