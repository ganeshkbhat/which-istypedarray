declare namespace _default {
    export { isTypedArray };
    export { isBufferLike };
    export { supportsArrayBuffer };
    export { toString };
    export { supportsDataView };
    export { nativeIsArrayBufferView };
    export { isTypedArrayUsingPattern };
    export { toBufferView };
    export { getShallowProperty };
    export { tagTester };
}
export default _default;
export function isTypedArray(obj: any): boolean;
export function isBufferLike(collection: any): boolean;
export function supportsArrayBuffer(): boolean;
export var toString: () => string;
export function supportsDataView(): boolean;
export var nativeIsArrayBufferView: (arg: any) => arg is ArrayBufferView;
export function isTypedArrayUsingPattern(arg: any): boolean;
export function toBufferView(bufferSource: any): Uint8Array;
export function getShallowProperty(key: any): (obj: any) => any;
export function tagTester(name: any): (obj: any) => boolean;
//# sourceMappingURL=index.d.ts.map