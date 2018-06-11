## Strand Project 

[![Build Status](https://travis-ci.org/wlchair/travel.svg?branch=master)](https://travis-ci.org/wlchair/travel)

[![Coverage Status](https://coveralls.io/repos/github/wlchair/travel/badge.svg?branch=master)](https://coveralls.io/github/wlchair/travel?branch=master)

### 命令

- `"dev": "node dev-server.js"` 开发模式
- `"lint": "webpack --config webpack.prod.js"` 检查代码规范，生成dist文件
- `"prod": "webpack --config webpack.prod.js && node prod-server.js"` 检查代码，生成dist文件，生产代码发布
- `"test:e2e": "node test/e2e/runner.js"` E2E自动化测试
- `"test:unit": "karma start"` 单元测试
- `"upcover": "cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"` 上传单元测试结果