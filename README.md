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

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
