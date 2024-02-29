/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-typedarray --save
 * Github: https://github.com/ganeshkbhat/which-typedarray/
 * npmjs Link: https://www.npmjs.com/package/which-typedarray/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const {
  isTypedArray,
  isBufferLike,
  supportsArrayBuffer,
  toString,
  supportsDataView,
  nativeIsArrayBufferView,
  isTypedArrayUsingPattern
} = require("../index.js");


console.log('isBufferLike: ', isBufferLike(['test', 'tester']));
console.log('isBufferLike: ', isBufferLike(Buffer.from(['test', 'tester'])));

console.log('isTypedArray: ', isTypedArray(new Array('stress')));
console.log('isTypedArray: ', isTypedArray(new String('stress')));
console.log('isTypedArray: ', isTypedArray(new Number('stress')));

console.log('isTypedArray: ', isTypedArray(['test', 'tester']));
console.log('isTypedArray: ', isTypedArray(new Int16Array([1, 2, 3, 4])));
