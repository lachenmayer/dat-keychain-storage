# dat-keychain-storage

Store your Dat archive's secret key in the macOS keychain.

This is an extremely simple module wrapping [dat-storage](https://github.com/datproject/dat-storage), which does all the heavy lifting of storing files in the right places.

## Install

```
npm install dat-keychain-storage
```

## Usage

You can use this anywhere that [Dat](https://github.com/datproject/dat) or [Hyperdrive](https://github.com/mafintosh/hyperdrive) expects a "storage".

```js
const hyperdrive = require('hyperdrive')
const storage = require('dat-keychain-storage')
const archive = hyperdrive(storage('example-archive'), {latest: true})
```

Check out [`example.js`](example.js) for a very basic example.
