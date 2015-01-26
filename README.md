# Magic Globals
Similar to Magic Constants in PHP.  Useful for debugging.

[![npm version](https://badge.fury.io/js/magic-globals.svg)](http://badge.fury.io/js/magic-globals)

## Usage
```js
// require this module without assigning export
require('magic-globals');

// you may now use additional global objects,
// in addition to built-ins: __filename and __dirname
console.log('__line: ' + __line); // ex: 6
console.log('__file: ' + __file); // ex: server
console.log('__ext: ' + __ext); // ex: js
console.log('__base: ' + __base); // ex: /home/node/apps/5pt-app-model-example/api-example
console.log('__filename: ' + __filename); // ex: /home/node/apps/5pt-app-model-example/api-example/server/server.js
console.log('__func: ' + __func); // ex: someFunction or (anonymous) 
console.log('__dirname: ' + __dirname); // ex: /home/node/apps/5pt-app-model-example/api-example/server
```

## Credits
These sources have helped to create this module by sharing their code:
* http://stackoverflow.com/questions/13591785/does-node-js-have-anything-like-file-and-line-like-the-c-preprocessor 
* http://stackoverflow.com/questions/11386492/accessing-line-number-in-v8-javascript-chrome-node-js 
* https://gist.github.com/lordvlad/ec81834ddff73aaa1ab0

## License
(The MIT License)
Copyright (c) 2015 Gavin Engel <<gavin@engel.com>>
See: http://opensource.org/licenses/MIT
