// sets globals: 
// __stack,
// __line, 
// __file, 
// __function,
// __ext, 
// __base

// we already have these: 
// __filename which gives as an example: /Users/mjr/example.js 
// __dirname which gives as an example: /Users/mjr
// copied and tweaked from: 
//   http://goo.gl/wwjGVV 
//   http://goo.gl/umq4s1 
//   https://gist.github.com/branneman/8048520
//   https://gist.github.com/lordvlad/ec81834ddff73aaa1ab0

// for __get and __set check out: https://www.npmjs.com/package/magic

// TODO: __method and __class ?

// begin setting magic properties into global (required for other functions)
Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

/**
 * returns line number when placing this in your code: __line
 */
Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});

/**
 * return filename (without directory path or file extension) when placing this in your code: __file
 */
Object.defineProperty(global, '__file', {
  get: function(){
    return __stack[1].getFileName().split('/').slice(-1)[0].split('.').slice(0)[0];
  }
});

/**
 * return file extension (without preceding period) when placing this in your code: __ext
 */
Object.defineProperty(global, '__ext', {
  get: function(){
    return __stack[1].getFileName().split('.').slice(-1)[0];
  }
});

/**
 * return current function
 * @source https://gist.github.com/lordvlad/ec81834ddff73aaa1ab0
 */
Object.defineProperty(global, '__function', {
    get: function(){
        return arguments.callee.caller && arguments.callee.caller.name || '(anonymous)';
    }
});

/**
 * return base path of project
 */ 
Object.defineProperty(global, '__base', {
  get: function(){
    return process.cwd(); 
  }
});

/*
console.log('__line: ' + __line);
console.log('__file: ' + __file); 
console.log('__ext: ' + __ext); 
console.log('__base: ' + __base);
console.log('__filename: ' + __filename);
console.log('__dirname: ' + __dirname);
console.log('__function: ' + __function);
*/