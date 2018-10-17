import { createWriteStream, existsSync, mkdirSync } from 'fs'
import HardSourcePlugin from 'hard-source-webpack-plugin'
import HTMLPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import styledComponentsTransformer from 'typescript-plugin-styled-components'
import { Configuration } from 'webpack'
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import renderHTML from './dev/renderHTML'
import App from './src/App'

const { NODE_ENV } = process.env
const env = NODE_ENV || 'development'
const isDev = env === 'development'
const isProd = env === 'production'

const filename = isProd ? 'static/[name].[chunkhash].js' : 'static/[name].js'

interface Conf extends Configuration {
  devServer: DevConfiguration
}

const conf: Conf = {
  mode: isDev ? 'development' : isProd ? 'production' : 'none',

  devServer: {
    contentBase: resolve('src'),
    stats: {
      chunks: false,
      modules: false,
    },
    overlay: {
      errors: true,
    },
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
    libraryTarget: 'umd',
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
            ...(isDev
              ? {
                  getCustomTransformers: () => ({
                    before: [
                      styledComponentsTransformer({
                        getDisplayName(filename, bindingName) {
                          return `${bindingName}__${filename
                            .replace(__dirname, '')
                            .replace('.tsx', '')
                            .replace(/\//g, '_')} `
                        },
                      }),
                    ],
                  }),
                }
              : {}),
          },
        },
      },
    ],
  },

  plugins: [
    new HardSourcePlugin(),
    new HTMLPlugin({
      template: (() => {
        if (!existsSync('out')) {
          mkdirSync('out')
        }

        const tmpl = 'out/index.html'
        const ws = createWriteStream(tmpl)

        ws.write(renderHTML(App))
        ws.end()

        return tmpl
      })(),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
}

export default conf
