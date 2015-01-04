/**
 * @example node ./tests/index.js
 */ 
require('../magic-globals');

console.log('*** NOT INSIDE A FUNCTION ***');
console.log('__line: ' + __line);
console.log('__file: ' + __file); 
console.log('__ext: ' + __ext); 
console.log('__base: ' + __base);
console.log('__filename: ' + __filename);
console.log('__dirname: ' + __dirname);
console.log('__function: ' + __function);
console.log('__stack: ' + __stack);

function someFunction() {
    console.log("\n*** INSIDE A FUNCTION ***");
    console.log('__line: ' + __line);
    console.log('__file: ' + __file); 
    console.log('__ext: ' + __ext); 
    console.log('__base: ' + __base);
    console.log('__filename: ' + __filename);
    console.log('__dirname: ' + __dirname);
    console.log('__function: ' + __function);
    console.log('__stack: ' + __stack);
}
someFunction();

console.log("\n*** EXPLORING __stack ***");
for (var i = 0; i < __stack.length; i++) {
    console.log('__stack[' + i + ']: ' + __stack[i]);
}
