# which-arraytype
check if `[a]` an `array` or `[b]` is an `typed array` or `[c]` an `buffer array` or `[d]` specific `type` using the package


* check if `[a]` an `array` or `[b]` is an `typed array` or `[c]` an `buffer array` or `[d]` specific `type` using `isTypedArray`
* check if a buffer is `typed array` pattern like using the `isTypedArrayUsingPattern`
* check if a an object provided is `buffer` using `isBufferLike`
* check if a environment supports `supportsArrayBuffer`, `supportsDataView`, `nativeIsArrayBufferView`, 
* check if a object is inbuilt object or is of specific type like `String`, `Number`, `Date`, `RegExp`, `Error`, `Symbol`, `ArrayBuffer`, `Function` , `DataView`, `Object` using `toString` method 
* convert to `BufferView` using `toBufferView`
* get predefined key/ property value of an object using the `getShallowProperty`


### USAGE


```
const { 
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
} = require("which-typedarray");


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

```


### CREDITS:

Parts of the code has been taken from [Underscorejs]() for ease of usability and better usage

