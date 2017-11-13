import { exec } from 'child_process'
import pkg, { version, repository } from '../package.json'

exec(`cd gh-pages &&
git init &&
git remote add origin ${repository} &&
git add . &&
git commit -anm v${version} &&
git push origin HEAD:gh-pages -f`, (er, stdout) => {
  if (er) {
    throw er
  }
  console.log(stdout)
})
