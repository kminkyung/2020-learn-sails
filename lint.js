const { exec } = require('shelljs')
const path = require('path')

const exit = () => {
  console.log('JavaScript Standard Style errors were detected. Aborting commit.')
  process.exit(1)
}

const gitdiff = exec('git diff --name-only --cached --relative')
if (gitdiff.stderr) {
  exit()
}

const filtered = gitdiff.stdout.split(/\r?\n/).filter(item => {
  if (item.length === 0) return false
  return !!item.match(/^src.*\.jsx?$/)
})

filtered.forEach(item => {
  const standard = path.resolve(process.cwd(), './node_modules/.bin/standard')
  const filepath = path.resolve(process.cwd(), item)
  const result = exec(`${standard} ${filepath}`)
  if (result.stderr) {
    exit()
  }
})
