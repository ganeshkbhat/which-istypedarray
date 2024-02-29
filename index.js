

var typedArrayPattern =
  /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

var isTypedArray = typedArrayPattern.test(
  toString.call(new Buffer.from('stress'))
);
console.log(isTypedArray);
isTypedArray = typedArrayPattern.test(toString.call(new Array('stress')));
console.log(isTypedArray);
isTypedArray = typedArrayPattern.test(toString.call(new String('stress')));
console.log(isTypedArray);
isTypedArray = typedArrayPattern.test(toString.call(new Number('stress')));
console.log(isTypedArray);
// isTypedArray = typedArrayPattern.test(toString.call(BigInt("stress")))
// console.log(isTypedArray)

function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength(bufferSource)
  );
}

function shallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}

var getByteLength = shallowProperty('byteLength');
var isBufferLike = createSizePropertyCheck(getByteLength);

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

console.log('isBufferLike: ', isBufferLike(['test', 'tester']));
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
  supportsDataView = typeof DataView !== 'undefined',
  nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return nativeIsView
    ? nativeIsView(obj) && !isDataView$1(obj)
    : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}

console.log('isTypedArray: ', isTypedArray(['test', 'tester']));
console.log('isTypedArray: ', isTypedArray(new Int16Array([1, 2, 3, 4])));

