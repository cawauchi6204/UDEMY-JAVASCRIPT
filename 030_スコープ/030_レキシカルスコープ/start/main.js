let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        console.log(a)
        let a = 3;
    }
    fn2()
}
// 変数が連なっている場合は一番内側の変数が参照される
// グローバルスコープとブロックスコープで比べた時にグローバルスコープはブロックスコープよりも外側のスコープと扱われる
fn1();
