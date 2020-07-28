const a = {
    prop: 0
}

const b = {
    prop: 0
}

console.log(a === b);
// 参照しているオブジェクトが違うためfalseが帰ってくる
console.log(a.prop === b.prop)
// 上記だとオブジェクトではなく、値を比べているため、trueになる
