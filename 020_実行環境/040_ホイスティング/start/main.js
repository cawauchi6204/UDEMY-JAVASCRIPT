a();
function a() {
    console.log(c);
    let c = 1;
    d();
    function d() {
        console.log('d is called');
    }
    console.log('a is called');
}

console.log(b);
// varでの初期値はまずundifinedをメモリで設定する
// let,constではエラーが起きる

const b = 0;
