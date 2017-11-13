const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { NODE_ENV } = process.env
const isDev = !NODE_ENV || NODE_ENV ==='development'
const isProd = NODE_ENV === 'production'
const pkg = require('./package.json')

module.exports = {
  watch: isDev,
  devtool: isDev && 'source-map',

  devServer: {
    stats: {
      chunks: true,
    }
  },

  entry: {
    app: ['./src']
  },

  output: {
    path: path.resolve('gh-pages'),
    filename: 'static/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
        test: /\.(png|jpg|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'url-loader'
      },

      {
        test: /\.scss$/,
        exclude: path.resolve('node_modules/aos/dist/aos.css'),
        use: isProd ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[hash:base64:7]',
            'sass-loader'
          ]
        }) : [
          'style-loader',
          'css-loader?&sourceMap&modules&localIdentName=[local]--[hash:base64:5]',
          'sass-loader?sourceMap'
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.description,
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
      v: Object.keys(pkg.dependencies).reduce((o, mod) => {
        const vers = pkg.dependencies[mod]

        o[mod] = vers.slice(1)

        return o
      }, {})
    }),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),

    ...isProd ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin('static/app.css')
    ] : []
  ],

  externals: {
    vue: 'Vue',
    aos: 'AOS',
    'cash-dom': '$',
    'animated-scrollto': 'animatedScrollTo',
  }
}
