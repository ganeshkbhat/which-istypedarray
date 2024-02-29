/**
 * 
 * Package: istypedarray
 * Author: Ganesh B
 * Description: 
 * Install: npm i istypedarray --save
 * Github: https://github.com/ganeshkbhat/which-istypedarray/
 * npmjs Link: https://www.npmjs.com/package/istypedarray/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function (obj) {
    return toString.call(obj) === tag;
  };
}

var supportsArrayBuffer = () => typeof ArrayBuffer !== 'undefined',
  ObjProto = Object.prototype,
  toString = ObjProto.toString,
  supportsDataView = () => typeof DataView !== 'undefined',
  nativeIsArrayBufferView = supportsArrayBuffer() && ArrayBuffer.isView;
  
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}

// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}

// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}

// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

// Sample Usage for 

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

function alternateIsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
}

var hasDataViewBug = (
  supportsDataView() && (!/\[native code\]/.test(String(DataView)) || hasObjectTag(new DataView(new ArrayBuffer(8))))
)

var isDataView$1 = (hasDataViewBug ? alternateIsDataView : isDataView);
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
var isTypedArrayUsingPattern = (arg) => typedArrayPattern.test(toString.call(arg));

function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength(bufferSource)
  );
}

function getShallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}

// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function (collection) {
    var sizeProperty = getSizeProperty(collection);
    return (
      typeof sizeProperty == 'number' &&
      sizeProperty >= 0 &&
      sizeProperty <= MAX_ARRAY_INDEX
    );
  };
}

var getByteLength = getShallowProperty('byteLength');
var isBufferLike = createSizePropertyCheck(getByteLength);

function isTypedArray(obj) {
  // Credit : Underscore.js
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return nativeIsArrayBufferView
    ? nativeIsArrayBufferView(obj) && !isDataView$1(obj)
    : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}

if (!isBrowser()) {
  module.exports = {
    isTypedArray,
    isBufferLike,
    supportsArrayBuffer,
    toString,
    supportsDataView,
    nativeIsArrayBufferView,
    isTypedArrayUsingPattern,
    toBufferView,
    getShallowProperty,
    tagTester
  }

  module.exports.default = {
    isTypedArray,
    isBufferLike,
    supportsArrayBuffer,
    toString,
    supportsDataView,
    nativeIsArrayBufferView,
    isTypedArrayUsingPattern,
    toBufferView,
    getShallowProperty,
    tagTester
  }
}
