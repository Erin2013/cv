import HTMLPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'

import pkg from './package.json'

const { NODE_ENV } = process.env
const env = NODE_ENV || 'development'
const isDev = env === 'development'
const isProd = env === 'production'

const filename = isProd ? 'static/[name].[chunkhash].js' : 'static/[name].js'

const conf: Configuration = {
  mode: isDev ? 'development' : isProd ? 'production' : 'none',

  devServer: {
    stats: {
      chunks: true,
    },
    contentBase: resolve('src'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  entry: {
    app: ['./src'],
  },

  output: {
    filename,
    path: resolve('gh-pages'),
    chunkFilename: filename,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            cacheDirectory: 'node_modules/.cache/awe',
          },
        },
      },
    ],
  },

  plugins: [
    new HTMLPlugin({
      title: pkg.description,
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
}

export default conf
