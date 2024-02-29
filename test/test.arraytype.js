/**
 * 
 * Package: which-typedarray
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-typedarray --save
 * Github: https://github.com/ganeshkbhat/which-istypedarray/
 * npmjs Link: https://www.npmjs.com/package/which-typedarray/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const { isBufferLike, isTypedArray, getShallowProperty, supportsDataView, nativeIsArrayBufferView, supportsArrayBuffer, tagTester } = require('../index');


describe('[is typed array tests] index.js Tests to check if an array is an typed array of buffer', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should be true for typed array using isTypedArray', () => {
    let actual = true;
    let expected = true;

    // isTypedArray
    expect(isTypedArray(new Array('stress'))).to.be.deep.equal(!expected); // false
    expect(isTypedArray(new String('stress'))).to.be.deep.equal(!expected); // false
    expect(isTypedArray(new Number('stress'))).to.be.deep.equal(!expected); // false

  });

  it('should be true for typed array using isTypedArray', () => {
    let actual = true;
    let expected = true;

    expect(isTypedArray(['test', 'tester'])).to.be.deep.equal(!expected); // false
    expect(isTypedArray(new Int8Array([1, 2, 3, 4]))).to.be.deep.equal(expected); // true
    expect(isTypedArray(new Int16Array([1, 2, 3, 4]))).to.be.deep.equal(expected); // true
    expect(isTypedArray(new Int32Array([1, 2, 3, 4]))).to.be.deep.equal(expected); // true

  });

  it('should be true for typed array using isTypedArray', () => {
    let actual = true;
    let expected = true;

    expect(isTypedArray(new Int8Array(Array.from([1, 2, 3, 4])))).to.be.deep.equal(expected); // true
    expect(isTypedArray(new Int16Array(Array.from([1, 2, 3, 4])))).to.be.deep.equal(expected); // true
    expect(isTypedArray(new Int32Array(Array.from([1, 2, 3, 4])))).to.be.deep.equal(expected); // true
  });

  it('should be false for typed array using isTypedArray', () => {
    let actual = true;
    let expected = false;

    // isTypedArray
    expect(isTypedArray(new Array('stress'))).to.be.deep.equal(expected); // false
    expect(isTypedArray(new String('stress'))).to.be.deep.equal(expected); // false
    expect(isTypedArray(new Number('stress'))).to.be.deep.equal(expected); // false
  });

  it('should be false for typed array using isTypedArray', () => {
    let actual = true;
    let expected = false;
    expect(isTypedArray(['test', 'tester'])).to.be.deep.equal(expected); // false
  });

  it('should be true for typed array using isTypedArray', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be false for simple array using isTypedArray', () => {
    let actual = true;
    let expected = false;
    expect(isTypedArray(['test', 'tester'])).to.be.deep.equal(expected); // false
  });

  it('should be false for simple array using isTypedArray', () => {
    let actual = true;
    let expected = false;
    expect(isTypedArray([1, 2, 3, "test"])).to.be.deep.equal(expected); // false
  });

  it('should be false for simple array using isTypedArray', () => {
    let actual = true;
    let expected = false;
    expect(isTypedArray([1, 2, 3, "test", {}])).to.be.deep.equal(expected); // false
  });

  it('should be true for simple buffer using isTypedArray', () => {
    let actual = true;
    let expected = true;
    expect(isTypedArray(Buffer.from([1, 2, 3, "test", {}]))).to.be.deep.equal(expected); // true
    expect(isTypedArray(Buffer.from([1, 2, 3]))).to.be.deep.equal(expected); // true
  });

});


describe('[is typed array tests] index.js Tests to check if an object is an buffer', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should be true when using created buffer from array using isBufferLike', () => {
    let actual = true;
    let expected = true;
    expect(isBufferLike(Buffer.from([1, 2, 3, "test", {}]))).to.be.deep.equal(expected); // true
    expect(isBufferLike(Buffer.from([1, 2, 3]))).to.be.deep.equal(expected); // true
  });

  it('should be true for simple buffer using isBufferLike', () => {
    let actual = true;
    let expected = true;
    expect(isBufferLike(Buffer.from("testing"))).to.be.deep.equal(expected); // true
    expect(isBufferLike(Buffer.from(toString(BigInt("1235454556566564665544543343223342342454545454545434"))))).to.be.deep.equal(expected); // true
  });

  it('should be true for simple buffer using isBufferLike', () => {
    let actual = true;
    let expected = true;
    const fs = require("fs");
    let f = fs.readFileSync("./test/test.arraytype.js");
    expect(!!f).to.equal(expected);
    expect(isBufferLike(f)).to.equal(expected);
  });

  it('should be true for simple buffer using isBufferLike', () => {
    let actual = true;
    let expected = true;
    const fs = require("fs");
    let f = fs.readFileSync("./demos/img-black.png");
    expect(!!f).to.equal(expected);
    expect(isBufferLike(f)).to.equal(expected);
  });

  it('should be false for simple buffer using isBufferLike', () => {
    let actual = true;
    let expected = true;
    const fs = require("fs");
    let f = fs.readFileSync("./test/test.arraytype.js");
    expect(!!f).to.equal(expected);
    expect(isBufferLike(f.toString())).to.equal(!expected);
  });

});


describe('[is typed array tests] index.js Tests to check if an environment supports DataView ArrayBufferView ArrayBuffer', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should be true that enviroment supports DataView using supportsDataView', () => {
    let actual = true;
    let expected = true;
    var s = supportsDataView();
    expect(s).to.equal(expected);
  });

  it('should be true that enviroment supports ArrayBufferView using nativeIsArrayBufferView', () => {
    let actual = true;
    let expected = false;
    var s = nativeIsArrayBufferView;
    var sc = nativeIsArrayBufferView();
    expect(!!s).to.equal(!expected);
    expect(sc).to.equal(expected);
  });

  it('should be true that enviroment supports ArrayBuffer using supportsArrayBuffer', () => {
    let actual = true;
    let expected = true;
    var s = supportsArrayBuffer();
    expect(s).to.equal(expected);
  });

});


describe('[is typed array tests] index.js Tests to get the value of a predefined key in an object from getShallowProperty', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should return correct value examples for key value present on objects using getShallowProperty', () => {
    let actual = true;
    let expected = 10;
    let s = getShallowProperty("tester");
    let obj = {
      "tester": 10
    }
    let v = s(obj);
    expect(!!v).to.equal(!!expected);
    expect(v).to.equal(expected);
  });

  it('should return wrong value examples for key value present on objects using getShallowProperty', () => {
    let actual = true;
    let expected = 20;
    let s = getShallowProperty("tester");
    let obj = {
      "tester": 10
    }
    let obj2 = {
      "teser": 10
    }
    let v = s(obj);
    let v2 = s(obj2);
    expect(!!v).to.equal(!!expected);
    expect(!!v2).to.not.equal(expected);
  });

});


describe('[is typed array tests] index.js Tests to check the type of an object using tagTester', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should get String type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isString = tagTester('String');
    expect(isString("tester")).to.equal(expected);
  });

  it('should get Number type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isNumber = tagTester('Number');
    expect(isNumber(1)).to.equal(expected);
  });

  it('should get Boolean type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isBoolean = tagTester('Boolean');
    expect(isBoolean(true)).to.equal(expected);
  });

  it('should get Date type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isDate = tagTester('Date');
    expect(isDate(Date.now())).to.equal(!expected);
    expect(isDate(new Date(Date.now()))).to.equal(expected);
  });

  it('should get Array type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isArray = tagTester('Array');
    expect(isArray([1,2,3])).to.equal(expected);
  });
  it('should get Array type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isRegExp = tagTester('RegExp');
    expect(isRegExp(new RegExp(/^d/g))).to.equal(expected);
    expect(isRegExp(/^d/)).to.equal(expected);
  });

  it('should get Error type checker using tagTester', () => {
    let actual = true;
    let expected = true;
    var isError = tagTester('Error');
    expect(isError(Error)).to.equal(!expected); // false not instantiated class
    expect(isError(new Error("Tester"))).to.equal(expected);
  });

  it('should get Symbol type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isSymbol = tagTester('Symbol');
    expect(isSymbol(Symbol("Tester"))).to.equal(expected);
  });

  it('should get ArrayBuffer type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isArrayBuffer = tagTester('ArrayBuffer');
    expect(isArrayBuffer([])).to.not.equal(expected); // false // is an array not ArrayBuffer
    expect(isArrayBuffer(Buffer.from([]))).to.not.equal(expected);
    expect(isArrayBuffer(new ArrayBuffer([]))).to.equal(expected);
  });

  it('should get Function type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isFunction = tagTester('Function');
    expect(isFunction(()=>{})).to.equal(expected);
  });

  it('should get DataView type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isDataView = tagTester('DataView');
    expect(isDataView([])).to.equal(!expected);
  });

  it('should get Object type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var hasObjectTag = tagTester('Object');
    expect(hasObjectTag({"sc": 10 })).to.equal(expected);
  });

});

