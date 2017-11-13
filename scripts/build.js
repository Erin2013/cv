import webpack from 'webpack'
import webpackConf from '../webpack.config'
import del from 'del'

import gu from 'gulp'
import size from 'gulp-size'

del.sync('gh-pages')

webpack(webpackConf, (er, stats) => {
  console.log(stats.toString({
    colors: true,
    progress: true,
  }))

  gu.src('gh-pages/**')
    .pipe(size({
      pretty: true,
      gzip: true,
      showFiles: true,
    }))
})
