'use strict';

const obj = {};

Object.defineProperty(obj, 'prop', {
    writable: true,
    // 値の変更が可能か
    value:0,
    // 値
    configurable: true
    // 設定が変更できるか
})

Object.defineProperty(obj, 'prop', {
    enumerable: true
    // 列挙可能性
})

console.log(obj.prop)

const descriptor = Object.getOwnPropertyDescriptor(obj)

console.log(descriptor);
