const hyperdrive = require('hyperdrive')
const storage = require('.')

const archive = hyperdrive(storage('example-archive'), { latest: true })
const content = 'hello! check your keychain :)'
archive.writeFile('/readme.txt', content, function(err) {
  if (err) throw err
  archive.readFile('/readme.txt', 'utf-8', function(err, data) {
    if (err) throw err
    console.log(data)
  })
})
