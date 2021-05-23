## sessionstorage-for-node

looking for a way to use sessionStorage in node.js? here's a damn sessionStorage for node.js

## How to?
get from npm
```bash
$ npm i sessionstorage-for-nodejs
```

usage in node
```javascript
const sessionStorage = require('sessionstorage-for-node');

sessionStorage.setItem('id', 'value');

console.log('product: ', sessionStorage.getItem('id'));

sessionStorage.removeItem('id', 'value');

```

resources: https://www.npmjs.com/package/sessionstorage-for-nodejs
