var fs = require('fs')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
})

// 把examples下所有index.html转换成测试例子.html
fs.readdirSync('./examples').forEach( (file) => {
  baseConfig.plugins.push(
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: file + '.html',
      template: `examples/${file}/index.html`,
      inject: false
    })
  )
})

// 把examples下子目录里的main.js打包成对应组件名的App.js
fs.readdirSync('./examples').forEach( (file) => {
  baseConfig.entry[file + 'App'] = `./examples/${file}/main.js`
})

module.exports = merge(baseConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  output: {
    // necessary for the html plugin to work properly
    // when serving the html from in-memory
    publicPath: '/'
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
})
