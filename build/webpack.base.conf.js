var path = require('path')
var fs = require('fs')
var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')

// 把所有组件单独打包成组件名Vue.js
function components() {
  var result = {}

  fs.readdirSync('./src/components').forEach(
    (file) => {
      result[file.replace('.v', 'V')] = `./src/components/${file}`
    }
  )

  return result
}

module.exports = {
  entry: components(),
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: false,
      extract: false
    })
  },
  plugins: [],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
