/**
 * 
 * Package: which-istypedarray
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-istypedarray --save
 * Github: https://github.com/ganeshkbhat/which-istypedarray/
 * npmjs Link: https://www.npmjs.com/package/which-istypedarray/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { default as istypedarray } from "./index.js";

export default { ...istypedarray }
export const isTypedArray = istypedarray;

