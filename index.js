const defaultStorage = require('dat-storage')
const randomAccessKeychain = require('random-access-keychain')

module.exports = function keychainStorage() {
  const storage = defaultStorage(...arguments)
  return {
    metadata: function(file, opts) {
      if (file === 'secret_key')
        return randomAccessKeychain(
          'Dat archive secret key',
          opts.key.toString('hex')
        )
      return storage.metadata(...arguments)
    },
    content: function() {
      return storage.content(...arguments)
    },
  }
}
