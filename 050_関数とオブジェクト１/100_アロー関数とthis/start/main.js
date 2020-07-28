window.name = 'John';

const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        a();
    }
}
person.hello();
// アロー関数はthisを使えないからグローバルオブジェクトを参照してしまう


