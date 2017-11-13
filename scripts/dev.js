import webpack from 'webpack'
import webpackConf from '../webpack.config'
import del from 'del'

del.sync('gh-pages')

webpack(webpackConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true,
//    chunkModules: false,
  }))
})