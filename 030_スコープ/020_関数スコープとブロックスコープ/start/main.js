function a() {
    let b = 0;
    console.log(b);
}
// 関数スコープ
a();

{
    var c = 1;

    const d = function() {
        console.log('d is called');
    }
}

d();
console.log(c);
