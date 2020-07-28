function fn(...args){
    // bに値が渡ってこなかった場合、default値が使える
    console.log(args)
    const a = arguments[0];
    const b = arguments[1];
    console.log(arguments);
    console.log(a,b);
    return a;
}

// 同じ関数名の場合は後から定義された関数を使)
let c = fn(1,undefined);
console.log(c)
