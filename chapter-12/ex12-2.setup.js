// 코드 12-2 source map과 node externals 설정하기: chapter-12/setup.js

if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'inline-cheap-module-source-map'
}