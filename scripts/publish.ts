import { exec } from 'child_process'
import pkg from '../package.json'

exec(
  /* bash */ `
  cd gh-pages
  git init
  git add -A
  git cm -nm "${pkg.version}"
  git push ${pkg.repository} HEAD:gh-pages -f
`,
  (err, stdout, stderr) => {
    if (err) {
      throw new Error(err.stack)
    }

    console.log(stdout)
    console.log(`Visit: https://erin2013.github.io/cv/`)
    if (stderr) {
      console.log(stderr)
    }
  },
)
