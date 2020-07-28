function a() {
    console.log('hello');
}

a.prop = 0;
a.method = function() {
    console.log('method');
}

a();
// ()は実行可能なオブジェクトを実行する
// 関数は実行可能なオブジェクトである
a.method();
console.log(a.prop)
