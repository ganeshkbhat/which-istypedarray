/**
 * 
 * Package: is-typedarray
 * Author: Ganesh B
 * Description: 
 * Install: npm i is-typedarray --save
 * Github: https://github.com/ganeshkbhat/which-istypedarray/
 * npmjs Link: https://www.npmjs.com/package/is-typedarray/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { default as typefns, isTypedArray,
  isBufferLike,
  supportsArrayBuffer,
  toString,
  supportsDataView,
  nativeIsArrayBufferView,
  isTypedArrayUsingPattern,
  toBufferView,
  getShallowProperty,
  tagTester } from "../index.js";

// isTypedArray
console.log('isTypedArray: ', isTypedArray(new Array('stress'))); // false
console.log('isTypedArray: ', isTypedArray(new String('stress'))); // false
console.log('isTypedArray: ', isTypedArray(new Number('stress'))); // false

// isTypedArray

console.log('isTypedArray: ', isTypedArray(['test', 'tester'])); // false
console.log('isTypedArray: ', isTypedArray(new Int16Array([1, 2, 3, 4]))); // true

// isBufferLike

console.log('isBufferLike: ', isBufferLike(['test', 'tester'])); // false
console.log('isBufferLike: ', isBufferLike(Buffer.from(['test', 'tester']))); // true

// isTypedArrayUsingPattern

console.log('isTypedArrayUsingPattern: ', isTypedArrayUsingPattern(new Int16Array([1, 2, 3, 4]))); // true


// supportsArrayBuffer
// supportsDataView
// nativeIsArrayBufferView

console.log("supportsArrayBuffer", supportsArrayBuffer()) // true
console.log("supportsDataView", supportsDataView()) // true
console.log("nativeIsArrayBufferView", nativeIsArrayBufferView()) // true

// tagTester

var isString = tagTester('String');
var isNumber = tagTester('Number');
var isDate = tagTester('Date');
var isRegExp = tagTester('RegExp');
var isError = tagTester('Error');
var isSymbol = tagTester('Symbol');
var isArrayBuffer = tagTester('ArrayBuffer');
var isFunction = tagTester('Function');
var isDataView = tagTester('DataView');
var hasObjectTag = tagTester('Object');

let obj = "string";
isString(obj) // true

obj = 10;
isNumber(obj) // true

obj = new Date();
isDate(obj) // true

obj = new RegExp(/^a/g);
isRegExp(obj) // true

obj = new Error("Test");
isError(obj) // true

obj = Symbol("a");
isSymbol(obj) // true

obj = new ArrayBuffer();
isArrayBuffer(obj) // true

obj = () => {};
isFunction(obj) // true

obj = [1, 2, 3];
isDataView(obj) // false

obj = {}
hasObjectTag(obj) // false

// getShallowProperty

let getMykeyValue = getShallowProperty("mykey")
obj = { "mykey" : 10 }

console.log("getMykeyValue: ", getMykeyValue(obj)) // 10
